import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import "./Details.css"

const Details = () => {

    const details = useSelector(store => store.displayDetails);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    console.log('genres', genres)
    return(
        <>
            <section className="details">
                        <div key={details.id} >
                            <h2>{details.title}</h2>
                            <img src={details.poster} alt={details.title} className="detailPoster" />
                            <h4>{details.description}</h4>
                            {genres.map(genre => {
                                return (
                                    <div key={genre.id} >
                                        <h4>{genre.name}</h4>
                                    </div>
                                );
                            })}
                        </div>
            </section>
            <button onClick={() => {history.push('/')}}>Return to movies!</button>
        </>
    )
}

export default Details;