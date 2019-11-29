import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/images/search-icon.png";
import { TEXT_SEARCH_PLACEHOLDER } from "../../utils/constants";

const SearchInput = ({ selected = "", onChange }, inputRef) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = () => {
    setValue(inputRef.current.value);
    onChange(inputRef.current.value);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    handleChange();
  };

  useEffect(() => {
    if (selected) {
      inputRef.current.value = selected;
    }
  }, [selected, inputRef]);

  return (
    <div className={"suggest-input" + (isFocus ? " focused" : "")}>
      <input ref={inputRef} placeholder={TEXT_SEARCH_PLACEHOLDER} type="text" onBlur={onBlur} onFocus={onFocus} onChange={handleChange} />
      {value ? (
        <span className="suggest-input__clear" onClick={clearInput}>
          X
        </span>
      ) : null}
      {!value ? <img className="suggest-input__icon" src={searchIcon} alt="" /> : null}
    </div>
  );
};

export default React.forwardRef(SearchInput);
