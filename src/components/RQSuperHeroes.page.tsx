import { useQuery } from "react-query"
import { getSuperHeroes } from "../api/superheroes";

type HeroesType = {
    id: number,
    name: string,
    alterEgo: string
}[]
 
export default function RQSuperHeroesPage(){
    const {isLoading, data, isError, error} =  useQuery<HeroesType, any>('super-heroes', getSuperHeroes,{
        cacheTime: 50000, // default : 5mins
        staleTime: 10000, // default:0
        refetchOnMount: false // default:true
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