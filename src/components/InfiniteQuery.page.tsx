import { useInfiniteQuery } from "react-query";
import axios from 'axios';

const fetchColors = async ({pageParam = 1}) => {
    const {data} = await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
    return data;
}

export default function InfiniteQueryPage(){

    const {data,isLoading, isError, hasNextPage, fetchNextPage} = useInfiniteQuery<{id:number,label:string}[],any>(
        ['colors'],
        fetchColors,
        {
            getNextPageParam: (lastPage, pages) => {
                if(pages.length < 4){
                    return pages.length + 1;
                }else {
                    return undefined;
                }
            }
        }
        );

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
                    data?.pages?.map((color)=>{
                        return (
                            <div key={color.id}>
                                {color.label}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>Load more</button>
            </div>
        </>
    )
}