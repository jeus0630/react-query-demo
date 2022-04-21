import {useQuery} from 'react-query';
import axios from 'axios';

const fetchUserByEmail = async (email: string) => {
    
     const {data} = await axios.get(`http://localhost:4000/users/${email}`);
     return data;
}

const fetchCoursesByChannelId = async (channelId: string) => {
    const {data} = await axios.get(`http://localhost:4000/channels/${channelId}`);
    return data;
}

type Email = {
    email : string
}

export default function({email}: Email){

    const {data: user} = useQuery(['user',email],() => fetchUserByEmail(email));
    const channelId = user?.channelId;
    
    const {data: channels} = useQuery(['courses',channelId], () => fetchCoursesByChannelId(channelId),{
        enabled: !!channelId
    });

    return (
        <div>
            {
                channels?.courses.map((course: any) => {
                    return (
                        <div key={course}>
                            {
                                course
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}