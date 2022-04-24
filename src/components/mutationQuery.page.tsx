import { useState } from "react";
import { useQuery } from "react-query";
import { useMutationData } from "../hooks/useMutationData"
import { useQueryClient } from "react-query";
import axios from "axios";

const fetchHeroes = async () => {
    const {data} = await axios.get("http://localhost:4000/superheroes");
    return data;
}

export default function MutationQueryPage(){
    const {mutate} = useMutationData();
    const {data, refetch} = useQuery<{id:number,name:string,alterEgo:string}[],any>('fetch-heroes',fetchHeroes,{
        
    });

    const [info,setInfo] = useState({
        name: '',
        alterEgo: ''
    });

    const changeHandler = (eventTarget: HTMLInputElement) => {
        const {name, value} = eventTarget;
        setInfo({
            ...info,
            [name] : value
        });
    }
    


    return (
        <div>
            {
                data?.map(hero => {
                    return (
                        <div key={hero.id}>
                            {
                                hero.name
                            }
                        </div>
                    )
                })
            }
            <input type="text" name="name" onChange={(e) => changeHandler(e.target)}/>
            <input type="text" name="alterEgo" onChange={(e) => changeHandler(e.target)}/>
            <button onClick={()=>mutate(info)}>add</button>
            <button onClick={() => refetch()}>Fetch Data</button>
        </div>
    )
}