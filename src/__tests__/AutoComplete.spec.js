import { Provider } from "react-redux";
import { AutoComplete } from "../components/AutoComplete";
import SearchInput from "../components/SearchInput";
import DropdownList from "../components/DropdownList";
import configureStore from "../utils/store";

let wrapper;
const store = configureStore();

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <AutoComplete />
    </Provider>
  );
});

describe("AutoComplete unit test", () => {
  it("renders a SearchInput component", () => {
    expect(wrapper.find(SearchInput)).toHaveLength(1);
  });

  it("renders a DropdownList component", () => {
    expect(wrapper.find(DropdownList)).toHaveLength(1);
  });
});
