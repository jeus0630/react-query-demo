import { useQuery } from "react-query";
import axios from 'axios';

type HeroesType = {
    id: number,
    name: string,
    alterEgo: string
}[]

const getSuperHeroes = async () => {
    const {data} = await axios.get('http://localhost:4000/superheroes');
    
    return data;
}

export default function useSuperHeroesData(){
    return useQuery<HeroesType,any>('super-hero',getSuperHeroes,{
        enabled: false
    });
}