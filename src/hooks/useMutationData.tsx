import axios from 'axios';
import { useMutation } from 'react-query';

export const sendData = async (data: any) => {
    return await axios.post('http://localhost:4000/superheroes',
        data
    );
}

export const useMutationData = () => {
    return useMutation(sendData);
}