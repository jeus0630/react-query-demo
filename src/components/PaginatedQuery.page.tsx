import { usePaginatedData } from "../hooks/usePaginatedData"
import { useState } from "react";

export default function PaginatedQueryPage(){

    const [pageNumber, setPageNumber] = useState(1);
    const {data, isLoading, isError} = usePaginatedData(pageNumber);
    
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(isError){
        return (
            <div>Error</div>
        )
    }

    return (
        <>
            <div>
                {
                    data?.map((color)=>{
                        return (
                            <div key={color.id}>
                                {color.label}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={()=>setPageNumber(prev => prev -1)} disabled={pageNumber === 1}>Prev</button>
                <button onClick={()=>setPageNumber(prev => prev +1)} disabled={pageNumber === 4}>Next</button>
            </div>
        </>
    )
}