import { useSuperHeroData } from "../hooks/useSuperHeroData"
import {useParams} from "react-router-dom";

export const RQSuperHero = () => {
    const {id} = useParams();
    const {data} = useSuperHeroData(id || '');
    return (
        <div>
            {
                JSON.stringify(data)
            }
        </div>
    )
}