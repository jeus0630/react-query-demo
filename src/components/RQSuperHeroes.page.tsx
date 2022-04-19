import { useQuery } from "react-query"
import { getSuperHeroes } from "../api/superheroes";

type HeroesType = {
    id: number,
    name: string,
    alterEgo: string
}[]
 
export default function RQSuperHeroesPage(){
    const {isLoading, data, isError, error, refetch} =  useQuery<HeroesType, any>('super-heroes', getSuperHeroes,{
        enabled: false,
    }); 

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <button onClick={() => refetch()}>Fetch Heroes</button>
            {
                data?.map((hero) => (<div key={hero.name}>{hero.name}</div>))
            }
        </>
    )
}