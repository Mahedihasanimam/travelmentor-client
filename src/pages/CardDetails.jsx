import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const tourist=useLoaderData()
    console.log('this is rourist',tourist)
    return (
        <div>
            <h1>this is details page{tourist.name}</h1>
        </div>
    );
};

export default CardDetails;