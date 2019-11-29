import React, { useState, useEffect, useRef } from "react";
import SearchInput from "../SearchInput";
import { useSelector, useDispatch } from "react-redux";
import DropdownList from "../DropdownList";
import debounce from "../../utils/debounce";
import { search, reset, selectItem } from "../../actions/search.action";
import { API_THROTTLE_DELAY } from "../../utils/constants";
import MovieDetails from "../MovieDetails";

export const AutoComplete = ({ path }) => {
  const [query, setQuery] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);

  // Redux states mapped to local variables
  const items = useSelector(state => state.search.items);
  const loading = useSelector(state => state.search.loading);
  const selected = useSelector(state => state.search.selected);
  const dispatch = useDispatch();

  // Ref to the search input
  const inputRef = useRef();

  // Throttle the network request so that we dont call the API on each keystroke
  const updateQuery = debounce(text => setQuery(text), API_THROTTLE_DELAY);

  // Hide suggestion list if clicked outside
  useEffect(() => {
    const onDocumentClick = e => {
      if (inputRef.current && inputRef.current.contains(e.target)) {
        // Clicked inside
        setIsListVisible(true);
      } else {
        // Clicked outside
        setIsListVisible(false);
      }
    };
    // Attach the click listener to document
    document.addEventListener("click", onDocumentClick);
    inputRef.current.focus();
    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  // Search for movies when query has changed
  useEffect(() => {
    if (!query.trim()) {
      // Reset the list to empty if no query in search box
      dispatch(reset());
    } else {
      // trigger the search and display list
      dispatch(search({ path, query }));
      setIsListVisible(true);
    }
  }, [query, path, dispatch]);

  // Event handlers passed to props

  /**
   * Called when user types in the search box
   * @param {string} text
   */
  const onChange = text => updateQuery(text);

  /**
   * Called when user clicks an item from dropdown list
   * @param {object} item
   */
  const onSelect = item => {
    console.log(item.original_title);
    dispatch(selectItem({ item }));
    setIsListVisible(false);
  };

  return (
    <>
      <div className="autocomplete">
        <h2>Search movies</h2>
        <SearchInput ref={inputRef} onChange={onChange} selected={selected ? selected.original_title : ""} />
        <DropdownList items={items} loading={loading} query={query} visible={isListVisible} onSelect={onSelect} selected={selected ? selected.original_title : ""} />
      </div>
      {selected ? <MovieDetails item={selected} /> : null}
    </>
  );
};

export default AutoComplete;
