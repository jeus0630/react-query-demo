import axios from 'axios';
import { useEffect, useState } from 'react';

type DataType = {
    id: number;
    name: string;
    alterEgo: string;
}

export default function SuperHeroesPage(){

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(res => {
            setData(res.data);
            setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return (
            <div>
                ...isLoading
            </div>
        )
    }

    return(
        <div>
            <h2>SuperHeroes</h2>
            {
                data.map(hero => {
                    return (
                        <div key={hero.name}>{hero.name}</div>
                    )
                })
            }
        </div>
    )
}