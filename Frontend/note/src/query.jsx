import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () =>
  axios
    .get("http://localhost:8000")
    .then((e) => e.data);

export const useGetProduct = () => {
  return useQuery(["get-products"], fetchData);
};