import { ACTION_SEARCH_BEGIN, ACTION_SEARCH_ERROR, ACTION_SEARCH_SUCCESS, ACTION_SELECTED, ACTION_RESET } from "../actions/search.action";

const initialState = {
  items: [],
  selected: null,
  loading: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SEARCH_BEGIN:
      return {
        ...state,
        items: [],
        selected: null,
        loading: true
      };
    case ACTION_SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        selected: null,
        loading: false
      };
    case ACTION_SEARCH_ERROR:
      return {
        ...state,
        items: [],
        loading: false
      };
    case ACTION_SELECTED:
      return {
        ...state,
        items: [],
        selected: action.payload.item
      };
    case ACTION_RESET:
      return {
        ...state,
        items: [],
        selected: null,
        loading: false
      };
    default:
      return state;
  }
};

export default searchReducer;
