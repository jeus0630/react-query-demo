import useSuperHeroesData from "../hooks/useSuperHeroesData";
 
export default function RQSuperHeroesPage(){

    const {data, isLoading, isError, error, refetch} = useSuperHeroesData();

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    const clickHandler = () => {
        refetch();
    }

    return (
        <>
            <button onClick={clickHandler}>Click</button>
            {
                data?.map((hero) => (<div key={hero.name}>{hero.name}</div>))
            }
        </>
    )
}