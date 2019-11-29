import React from "react";
import PropTypes from "prop-types";
import { API_POSTER_PATH } from "../../utils/constants";

const DropdownItem = ({ item, onSelect }) => {
  return (
    <div className="suggest-item" title={item.overview} onClick={() => onSelect(item)}>
      {item.poster_path ? <img className="suggest-item__poster" src={`${API_POSTER_PATH}${item.poster_path}`} alt="" /> : <span className="suggest-item__poster" />}
      <div className="suggest-item__info">
        {!!item.vote_average ? <b>★ {Number(item.vote_average).toFixed(1)}</b> : null}
        <h3 className="suggest-item__title">
          {item.original_title}
          <span>({item.release_date.split("-")[0]})</span>
        </h3>
        <p>{item.overview}</p>
      </div>
    </div>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired
  }),
  onSelect: PropTypes.func
};

export default DropdownItem;
