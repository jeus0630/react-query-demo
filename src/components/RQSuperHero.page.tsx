import { useSuperHeroData } from "../hooks/useSuperHeroData"
import {useParams} from "react-router-dom";

export default function RQSuperHeroPage(){
    const {heroId} = useParams(); 
    const {data} = useSuperHeroData(heroId || '');
    return (
        <div>
            {
                JSON.stringify(data)
            }
        </div>
    )
}