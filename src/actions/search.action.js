export const ACTION_SEARCH = "ACTION_SEARCH";
export const ACTION_SEARCH_BEGIN = "ACTION_SEARCH_BEGIN";
export const ACTION_SEARCH_SUCCESS = "ACTION_SEARCH_SUCCESS";
export const ACTION_SEARCH_ERROR = "ACTION_SEARCH_ERROR";
export const ACTION_SELECTED = "ACTION_SELECTED";
export const ACTION_RESET = "ACTION_RESET";

export const search = payload => ({
  type: ACTION_SEARCH,
  payload
});

export const searchBegin = payload => ({
  type: ACTION_SEARCH_BEGIN
});

export const setError = payload => ({
  type: ACTION_SEARCH_ERROR,
  payload
});

export const setItems = payload => ({
  type: ACTION_SEARCH_SUCCESS,
  payload
});

export const selectItem = payload => ({
  type: ACTION_SELECTED,
  payload
});

export const reset = payload => ({
  type: ACTION_RESET
});
