import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = ({movies}) => (
    <div style = {{display : "flex", flexDirection: "column"}}>
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
            />
        ))}
    </div>
);

export default MovieCardList