import { useState } from "react";
import { useQuery } from "react-query"
import { getSuperHeroes } from "../api/superheroes";

type HeroesType = {
    id: number,
    name: string,
    alterEgo: string
}[]
 
export default function RQSuperHeroesPage(){

    const [polling, setPolling] = useState(1000);

    const onSuccess = (data: HeroesType) => {
        if(data.length === 4){
            setPolling(0);
        }
    }

    const onError = () => {
        setPolling(0);
    }

    const {isLoading, data, isError, error, refetch} =  useQuery<HeroesType, any>('super-heroes', getSuperHeroes,{
        refetchInterval: polling,
        onSuccess,
        onError
    }); 

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            {
                data?.map((hero) => (<div key={hero.name}>{hero.name}</div>))
            }
        </>
    )
}