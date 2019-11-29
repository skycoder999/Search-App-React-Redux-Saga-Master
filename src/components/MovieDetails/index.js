import React from "react";
import { API_POSTER_PATH_BIG } from "../../utils/constants";

const MovieDetails = ({ item }) => {
  const dateArr = new Date(item.release_date).toGMTString().split(" ");
  return (
    <div className="movie-details">
      <img src={`${API_POSTER_PATH_BIG}${item.poster_path}`} alt="" />
      <ul className="movie-details__info">
        <li>
          <h3>{item.original_title}</h3>
        </li>
        <li className="movie-details__overview">
          <p>{item.overview}</p>
        </li>
        <li>
          <label>Release Date</label>
          <p>{`${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`}</p>
        </li>
        <li>
          <label>Language</label>
          <p>{item.original_language}</p>
        </li>
        <li>
          <label>Vote Count</label>
          <p>{item.vote_count}</p>
        </li>
        <li className="movie-details__rating">
          <label>Vote Average</label>
          <p>★ {item.vote_average}</p>
        </li>
        <li>
          <label>Popularity</label>
          <p>{item.popularity}</p>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
