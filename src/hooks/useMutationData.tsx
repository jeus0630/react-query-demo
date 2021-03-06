import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const sendData = async (data: any) => {
    return await axios.post('http://localhost:4000/superheroes',
        data
    );
}

export const useMutationData = () => {
    const queryClient = useQueryClient();
    return useMutation(sendData,{
        onSuccess: ({data}) => {
            
            
            // queryClient.invalidateQueries('fetch-heroes')
            queryClient.setQueriesData('fetch-heroes',(oldQueryData: any) => {
                return [
                    ...oldQueryData,
                    data
                ]
                
            })
        },
    });
}