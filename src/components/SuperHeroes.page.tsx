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
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes1')
        .then(res => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err.message);
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

    if(error){
        return (
            <div>
                {error}
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