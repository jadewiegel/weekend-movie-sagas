import { useHistory } from "react-router-dom";


const Details = () => {

    const history = useHistory();

    return(
        <>
            <p>Details page</p>
            <button onClick={() => {history.push('/')}}>Return to movies!</button>
        </>
    )
}

export default Details;