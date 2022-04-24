import { useQuery } from "react-query";
import axios from 'axios';

const getPaginatedData = async (pageNumber: number) => {
    const {data} = await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
    return data;
}

export const usePaginatedData = (pageNumber: number) => {
    return useQuery<{id:number,label:string}[],any>(['pagination',pageNumber],() => getPaginatedData(pageNumber),{
        keepPreviousData: true,
    }); 
}