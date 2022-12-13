import React from "react";

const MovieDetails = ({ data }) => {
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
        <div>
          <h2>
            {data.title || data.original_title || data.original_name || "Title"} ({data.release_date.slice(0, 4)})
          </h2>
          <p>
            {data.vote_average} | {`${data.runtime / 60} Hrs ${data.runtime % 60} Minutes`}
          </p>
          <p>
            {data.spoken_languages?.map((language) => (
              // add keys
              <span>{language.english_name}</span>
            ))}
          </p>
          <div>
            {data.genres?.map((genre) => (
              <div key={genre.id}>
                <p>{genre.name}</p>
              </div>
            ))}
          </div>
          <p>{data.overview}</p>

          <h3>Cast</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
