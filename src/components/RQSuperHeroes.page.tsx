import { useQuery } from "react-query"
import { getSuperHeroes } from "../api/superheroes";

type HeroesType = {
    id: number,
    name: string,
    alterEgo: string
}[]
 
export default function RQSuperHeroesPage(){
    const {isLoading, data } =  useQuery<HeroesType>('super-heroes', getSuperHeroes); 

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <>
            {
                data?.map((hero) => (<div key={hero.name}>{hero.name}</div>))
            }
        </>
    )
}