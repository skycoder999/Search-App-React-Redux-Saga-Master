import SearchReducer from "../reducers/search.reducer";
import { searchBegin, setItems, selectItem, setError } from "../actions/search.action";

describe("SearchReducer unit test", () => {
  let state;
  beforeEach(() => {
    state = {
      items: [{}, {}, {}],
      selected: {},
      loading: false
    };
  });

  describe("When search begins", () => {
    const action = searchBegin();
    const newState = SearchReducer(state, action);

    it("should empty the list", () => {
      expect(newState.items).toEqual([]);
    });

    it("should set loading as true", () => {
      expect(newState.loading).toEqual(true);
    });

    it("should remove selected item", () => {
      expect(newState.selected).toEqual(null);
    });
  });

  describe("When search success", () => {
    const action = setItems({ items: [{}, {}] });
    const newState = SearchReducer(state, action);

    it("should populate the list with loaded items", () => {
      expect(newState.items).toEqual([{}, {}]);
    });

    it("should set loading as false", () => {
      expect(newState.loading).toEqual(false);
    });

    it("should remove selected item", () => {
      expect(newState.selected).toEqual(null);
    });
  });

  describe("When search fails", () => {
    const action = setError({ error: true });
    const newState = SearchReducer(state, action);

    it("should empty the list", () => {
      expect(newState.items).toEqual([]);
    });

    it("should set loading as false", () => {
      expect(newState.loading).toEqual(false);
    });
  });

  describe("When select item from list", () => {
    const action = selectItem({ item: {} });
    const newState = SearchReducer(state, action);

    it("should empty the list", () => {
      expect(newState.items).toEqual([]);
    });

    it("should set the selected item", () => {
      expect(newState.selected).toEqual({});
    });
  });
});
