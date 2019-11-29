import React from "react";
import PropTypes from "prop-types";
import DropdownItem from "../DropdownItem";
import loader from "../../assets/images/loader.gif";

const DropdownList = ({ items, query, selected, loading, visible, onSelect }) => {
  return (
    <>
      {!selected && query ? (
        <div className={"suggest-list" + (visible ? " visible" : "")}>
          {!loading && (!items || !items.length) ? <p className="suggest-list__msg">Oops! No results found.</p> : null}
          {!loading && items && items.length ? items.map(item => <DropdownItem item={item} onSelect={onSelect} key={item.id} />) : null}
          {loading ? (
            <p className="suggest-list__msg">
              <img src={loader} alt="" /> Loading results...
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

DropdownList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  onSelect: PropTypes.func,
  query: PropTypes.string,
  selected: PropTypes.string,
  visible: PropTypes.bool
};

export default React.memo(DropdownList);
