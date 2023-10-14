import React, { useState } from 'react';
import CanvasDraw from "react-canvas-draw";

const DrawingBoard = () => {
    const [color, setColor] = useState("#F56161"); 
    const [width, setWidth] = useState(1700); 
    const [height, setHeight] = useState(700); 
    const [brushRadius, setBrushRadius] = useState(10); 
    const [canvasRef, setCanvasRef] = useState(null); 

    const clear = () => {
        canvasRef.clear();
    };

    const undo = () => {
        canvasRef.undo();
    };

    return (
        <div className="drawing-board-container">
        <CanvasDraw
            className="canvas-draw"
            ref={(canvasDraw) => setCanvasRef(canvasDraw)}
            brushColor={color}
            brushRadius={brushRadius}
            lazyRadius={0}
            canvasWidth={width}
            canvasHeight={height}
        />
        <div className="bottom-section">
            <div className="controls">
                <div className="left-controls">
                    <div className="color-picker-container" style={{color: color}}>
                        <div className="color-picker-button"></div>
                        <input
                            className='color-picker'
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>
                    <input
                        className='radius-brush'
                        type="number"
                        value={brushRadius}
                        onChange={(e) => setBrushRadius(parseInt(e.target.value, 10))}
                    />
                    
                    </div>
                <div className="right-controls">
                    <button onClick={clear}>Clear</button>
                    <button onClick={undo}>Undo</button>
                    <button className='main-btn'>Save</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DrawingBoard;
