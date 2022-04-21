import {useQuery} from 'react-query';
import axios from 'axios';

const getSuperHeroData = async ({queryKey}: any) => {
    const [keyName, id] = queryKey;
    console.log(id);
    
    const {data} = await axios.get(`http://localhost:4000/superheroes/${id}`);
    return data;
}

export const useSuperHeroData = (id: string) => {
    return useQuery(['super-hero',id],getSuperHeroData);
}