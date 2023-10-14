import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import imgSrc from '../assets/imgs/avatar.png';

const MyComponent = () => {
    const [inputContent, setInputContent] = useState("");
    const [markdownContent, setMarkdownContent] = useState("");

    const handleInputChange = (event) => {
        setInputContent(event.target.value);
    };

    const handleButtonClick = () => {
        setMarkdownContent(inputContent);
    };

    
return (
    <div className="app-container">
        <div className="sidebar">
            <div className="profile-info">
                <img className='prof-photo' src={imgSrc} alt="Profile" />
                <div className="text-info">
                    <h1>Alimdar Musayev</h1>
                    <p>alimdarmusayev@gmail.com</p>
                </div>                
            </div>
            <button className='sidebar-btn'>New Project</button>
            <div className="links">
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                        <g clip-path="url(#clip0_55_419)">
                            <path d="M10.74 1.36875C11.2392 0.968263 11.86 0.75 12.5 0.75C13.14 0.75 13.7608 0.968263 14.26 1.36875L23.9475 9.14125C24.276 9.40478 24.5411 9.73872 24.7233 10.1184C24.9054 10.4981 25 10.9139 25 11.335V25.435C25 26.1809 24.7037 26.8963 24.1762 27.4237C23.6488 27.9512 22.9334 28.2475 22.1875 28.2475H18.4375C17.6916 28.2475 16.9762 27.9512 16.4488 27.4237C15.9213 26.8963 15.625 26.1809 15.625 25.435V17.935C15.625 17.6864 15.5262 17.4479 15.3504 17.2721C15.1746 17.0963 14.9361 16.9975 14.6875 16.9975H10.3125C10.0639 16.9975 9.8254 17.0963 9.64959 17.2721C9.47377 17.4479 9.375 17.6864 9.375 17.935V25.435C9.375 26.1809 9.07868 26.8963 8.55124 27.4237C8.02379 27.9512 7.30842 28.2475 6.5625 28.2475H2.8125C2.0668 28.2475 1.35161 27.9514 0.824204 27.4242C0.296794 26.897 0.000331424 26.182 0 25.4362V11.3362C0 10.4837 0.3875 9.67625 1.0525 9.1425L10.74 1.37V1.36875ZM13.0863 2.83125C12.9199 2.69796 12.7131 2.62533 12.5 2.62533C12.2869 2.62533 12.0801 2.69796 11.9138 2.83125L2.22625 10.6037C2.11668 10.6916 2.02823 10.8028 1.96744 10.9294C1.90664 11.056 1.87505 11.1946 1.875 11.335V25.435C1.875 25.9537 2.295 26.3725 2.8125 26.3725H6.5625C6.81114 26.3725 7.0496 26.2737 7.22541 26.0979C7.40123 25.9221 7.5 25.6836 7.5 25.435V17.935C7.5 17.1891 7.79632 16.4737 8.32376 15.9463C8.85121 15.4188 9.56658 15.1225 10.3125 15.1225H14.6875C15.4334 15.1225 16.1488 15.4188 16.6762 15.9463C17.2037 16.4737 17.5 17.1891 17.5 17.935V25.435C17.5 25.9537 17.92 26.3725 18.4375 26.3725H22.1875C22.4361 26.3725 22.6746 26.2737 22.8504 26.0979C23.0262 25.9221 23.125 25.6836 23.125 25.435V11.335C23.1251 11.1947 23.0937 11.0561 23.0331 10.9296C22.9726 10.803 22.8843 10.6917 22.775 10.6037L13.0875 2.83125H13.0863Z" fill="#959595"/>
                        </g>
                    <defs>
                        <clipPath id="clip0_55_419">
                            <rect width="25" height="29" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                Home
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clip-path="url(#clip0_55_413)">
                            <path d="M20.2004 0.400024C21.5778 0.399948 22.9031 0.92621 23.9053 1.87113C24.9074 2.81606 25.5106 4.10822 25.5914 5.48322L25.6004 5.80002V13.6822C25.6002 14.5274 25.3026 15.3456 24.7598 15.9934L24.5456 16.2274L16.2278 24.5452C15.6301 25.1429 14.8413 25.5112 13.9994 25.5856L13.6826 25.6H5.80039C4.42301 25.6001 3.09766 25.0738 2.09552 24.1289C1.09338 23.184 0.490197 21.8918 0.409391 20.5168L0.400391 20.2V5.80002C0.400314 4.42265 0.926576 3.0973 1.8715 2.09515C2.81643 1.09301 4.10858 0.489831 5.48359 0.409025L5.80039 0.400024H20.2004ZM20.2004 2.20002H5.80039C4.89215 2.19974 4.01737 2.54276 3.3514 3.16032C2.68544 3.77788 2.27751 4.62434 2.20939 5.53002L2.20039 5.80002V20.2C2.2001 21.1083 2.54312 21.983 3.16068 22.649C3.77825 23.315 4.62471 23.7229 5.53039 23.791L5.80039 23.8H13.0004V18.4C13.0003 17.0226 13.5266 15.6973 14.4715 14.6952C15.4164 13.693 16.7086 13.0898 18.0836 13.009L18.4004 13H23.8004V5.80002C23.8007 4.89179 23.4577 4.017 22.8401 3.35104C22.2225 2.68507 21.3761 2.27714 20.4704 2.20902L20.2004 2.20002ZM23.4098 14.8018L18.4004 14.8C17.4922 14.7997 16.6174 15.1428 15.9514 15.7603C15.2854 16.3779 14.8775 17.2243 14.8094 18.13L14.8004 18.4V23.4058L14.9552 23.2726L23.273 14.9548C23.3213 14.9068 23.3664 14.8557 23.408 14.8018H23.4098Z" fill="#959595"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_55_413">
                                <rect width="26" height="26" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Notes
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                        <g clip-path="url(#clip0_55_417)">
                            <path d="M5.75 0.291626H18.25V2.87496H23.25V28.7083H0.75V2.87496H5.75V0.291626ZM5.75 5.45829H3.25V26.125H20.75V5.45829H18.25V8.04163H5.75V5.45829ZM15.75 2.87496H8.25V5.45829H15.75V2.87496ZM8.25 13.2083H15.75V15.7916H8.25V13.2083ZM8.25 18.375H15.75V20.9583H8.25V18.375Z" fill="#959595"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_55_417">
                                <rect width="24" height="29" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Tasks
                </a>
            </div>
            <hr className='hr-1'/>
            <div className="project-container">
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none" className='svg-1'>
                        <path d="M2.2 18C1.595 18 1.0769 17.7795 0.645702 17.3385C0.214502 16.8975 -0.000731466 16.368 1.86757e-06 15.75V2.25C1.86757e-06 1.63125 0.215602 1.10138 0.646802 0.660377C1.078 0.219377 1.59573 -0.00074809 2.2 1.91002e-06H8.8L11 2.25H19.8C20.405 2.25 20.9231 2.4705 21.3543 2.9115C21.7855 3.3525 22.0007 3.882 22 4.5V15.75C22 16.3687 21.7844 16.8986 21.3532 17.3396C20.922 17.7806 20.4043 18.0007 19.8 18H2.2ZM2.2 15.75H19.8V4.5H10.0925L7.8925 2.25H2.2V15.75Z" fill="#959595"/>
                    </svg>
                    Projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='svg-2'>
                        <g clip-path="url(#clip0_55_425)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2932 15.707C11.4807 15.8944 11.735 15.9998 12.0002 15.9998C12.2653 15.9998 12.5197 15.8944 12.7072 15.707L18.3642 10.05C18.5463 9.86137 18.6471 9.60876 18.6449 9.34657C18.6426 9.08437 18.5374 8.83356 18.352 8.64815C18.1666 8.46274 17.9158 8.35757 17.6536 8.3553C17.3914 8.35302 17.1388 8.45381 16.9502 8.63597L12.0002 13.586L7.05018 8.63597C6.86158 8.45381 6.60898 8.35302 6.34678 8.3553C6.08458 8.35757 5.83377 8.46274 5.64836 8.64815C5.46295 8.83356 5.35778 9.08437 5.35551 9.34657C5.35323 9.60876 5.45402 9.86137 5.63618 10.05L11.2932 15.707Z" fill="#C1C1C1"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_55_425">
                                <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </h1>
                <div className="projects">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#F75656"/>
                        </svg>
                        Ecoharmony Initiative
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#F7D356"/>
                        </svg>
                        Infrasecure Network
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#56F770"/>
                        </svg>
                        Biosynergy Research
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#56AAF7"/>
                        </svg>    
                        Eclipsetech Solutions
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#9D56F7"/>
                        </svg>
                        Intellecthorizon Project
                    </p>
                </div>
            </div>
            <hr className='hr-2'/>
            <div className="footer">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M15 19.8788L10.3 22.8109L11.5375 17.2825L7.3875 13.5625L12.8625 13.0846L15 7.86629L17.1375 13.0846L22.6125 13.5625L18.4625 17.2825L19.7 22.8109M27.5 11.935L18.5125 11.1471L15 2.58337L11.4875 11.1471L2.5 11.935L9.3125 18.0446L7.275 27.125L15 22.3071L22.725 27.125L20.675 18.0446L27.5 11.935Z" fill="#959595"/>
                    </svg>
                    What’s new
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <path d="M12.5 0C5.6075 0 0 5.8318 0 13V18.3859C0 19.7171 1.12125 20.8 2.5 20.8H3.75C4.08152 20.8 4.39946 20.663 4.63388 20.4192C4.8683 20.1754 5 19.8448 5 19.5V12.8141C5 12.4693 4.8683 12.1387 4.63388 11.8949C4.39946 11.6511 4.08152 11.5141 3.75 11.5141H2.615C3.31 6.4831 7.4725 2.6 12.5 2.6C17.5275 2.6 21.69 6.4831 22.385 11.5141H21.25C20.9185 11.5141 20.6005 11.6511 20.3661 11.8949C20.1317 12.1387 20 12.4693 20 12.8141V20.8C20 22.2339 18.8787 23.4 17.5 23.4H15V22.1H10V26H17.5C20.2575 26 22.5 23.6678 22.5 20.8C23.8787 20.8 25 19.7171 25 18.3859V13C25 5.8318 19.3925 0 12.5 0Z" fill="#959595"/>
                    </svg>
                    Support
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <path d="M13.75 9.04171H16.25V11.625H13.75V9.04171ZM13.75 14.2084H16.25V21.9584H13.75V14.2084ZM15 2.58337C8.1 2.58337 2.5 8.37004 2.5 15.5C2.5 22.63 8.1 28.4167 15 28.4167C21.9 28.4167 27.5 22.63 27.5 15.5C27.5 8.37004 21.9 2.58337 15 2.58337ZM15 25.8334C9.4875 25.8334 5 21.1963 5 15.5C5 9.80379 9.4875 5.16671 15 5.16671C20.5125 5.16671 25 9.80379 25 15.5C25 21.1963 20.5125 25.8334 15 25.8334Z" fill="#959595"/>
                    </svg>
                    Contact us
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                        <path d="M22.0601 13.381V5.64162C22.0602 5.54389 22.0398 5.44711 22 5.35681C21.9603 5.26652 21.902 5.18449 21.8285 5.11543L17.6849 1.2179C17.5369 1.07855 17.3362 1.00017 17.1268 1H1.78975C1.5803 1 1.37942 1.07827 1.23131 1.21758C1.08321 1.35689 1 1.54584 1 1.74286V25.019C1 25.2161 1.08321 25.405 1.23131 25.5443C1.37942 25.6836 1.5803 25.7619 1.78975 25.7619H12.8463M6.26503 10.9048H16.7951M6.26503 5.95238H11.5301M6.26503 15.8571H10.2138" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.7949 1V5.20952C16.7949 5.40654 16.8781 5.59549 17.0262 5.7348C17.1743 5.87412 17.3752 5.95238 17.5847 5.95238H22.06M22.0494 17.25L25.4138 18.0535C25.7639 18.1377 26.01 18.4373 25.9995 18.7766C25.7731 25.9055 21.4018 27 21.4018 27C21.4018 27 17.0305 25.9055 16.8041 18.7766C16.8001 18.6114 16.8558 18.4499 16.9623 18.3185C17.0687 18.1871 17.2195 18.0937 17.3899 18.0535L20.7542 17.25C21.1794 17.1485 21.6243 17.1485 22.0494 17.25Z" stroke="#959595" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Privacy & Terms
                </a>
            </div>
        </div>
        <div className="note-container">
            <div className="input-name-cotaniner">
                <h1 className='name-h1'>Note Name</h1>
                <input 
                    className='name-bar'
                    type="text" 
                    placeholder="Type name here..."
                />
            </div>
            <div className='input-container'>
                <h1 className='note-h1'>Your Note</h1>
                <input 
                    className='note-bar'
                    type="text" 
                    value={inputContent} 
                    onChange={handleInputChange}
                    placeholder="Type note here..."
                />
                <button onClick={handleButtonClick} className='note-btn'>
                    Add New Note
                </button>
            </div>
            <div>
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    </div>
);
};

export default MyComponent;
