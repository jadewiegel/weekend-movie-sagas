import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const clickHandler = (movie) => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie,
        })
        history.push('/details')
    }

    return (
        <main>
            <h1 className="movieList">MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="poster">
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => {clickHandler(movie)}} className="posterImg" />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;