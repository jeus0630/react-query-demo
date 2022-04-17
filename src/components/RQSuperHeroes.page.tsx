import { useQuery } from "react-query"
import axios from 'axios';

export default function RQSuperHeroesPage(){
    const results =  useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/superheroes');
    });

    return (
        <div>
            {JSON.stringify(results)}
        </div>
    )
}