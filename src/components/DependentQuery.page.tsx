import {useQuery} from 'react-query';
import axios from 'axios';

const fetchUserByEmail = async (email: string) => {
    return await axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = async (channelId: string) => {
    return await axios.get(`http://localhost:4000/channels/${channelId}`);
}

type Email = {
    email : string
}

export default function({email}: Email){

    const {data: user} = useQuery(['user',email],() => fetchUserByEmail(email));
    const channelId = user?.data?.channelId;
    
    const {data: courses} = useQuery(['courses',channelId], () => fetchCoursesByChannelId(channelId),{
        enabled: !!channelId
    });

    return (
        <div>
            {
                courses?.data?.courses.map((course: any) => {
                    return (
                        <div>
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