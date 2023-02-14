import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const Details = () => {

    const details = useSelector(store => store.displayDetails);
    const history = useHistory();

    return(
        <>
            <section className="details">
                        <div key={details.id} >
                            <h2>{details.title}</h2>
                            <img src={details.poster} alt={details.title} />
                            <h4>{details.description}</h4>
                        </div>
            </section>
            <button onClick={() => {history.push('/')}}>Return to movies!</button>
        </>
    )
}

export default Details;