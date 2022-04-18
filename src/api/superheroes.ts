import axios from 'axios';

export const getSuperHeroes = async () => {
    const {data} = await axios.get('http://localhost:4000/superheroes1');
    
    return data;
}