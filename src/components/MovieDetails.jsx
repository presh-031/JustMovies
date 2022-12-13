import React from "react";

const MovieDetails = ({ data }) => {
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />
        <div>
          <h2>
            {data.title} ({data.release_date.slice(0, 4)})
          </h2>
          <p>
            {data.vote_average} | {`${`$(runtime / 60)Hrs`}`}
          </p>
          <p>
            {data.spoken_languages?.map((language) => (
              <span>{language.english_name}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
