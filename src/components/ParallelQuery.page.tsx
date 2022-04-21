import {useQuery} from 'react-query';
import axios from 'axios'; 

const fetchSuperHeroes = async () => {
    const {data} =  await axios.get('http://localhost:4000/superheroes');
    return data;
}
const fetchFriends = async () => {
    const {data} =  await axios.get('http://localhost:4000/friends');
    return data;
}

export const ParallelQueryPage = () => {

    useQuery('super-heroes',fetchSuperHeroes);
    useQuery('friends',fetchFriends);
    
    return (
        <div>
            ParallelQueryPage
        </div>
    )
}