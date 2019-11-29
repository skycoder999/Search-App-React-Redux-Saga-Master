import { Provider } from "react-redux";
import { AutoComplete } from "./index";
import configureStore from "../../utils/store";

let wrapper;
const store = configureStore();

beforeEach(() => {
  wrapper = shallow(
    <Provider store={store}>
      <AutoComplete />
    </Provider>
  );
});

describe("AutoComplete Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
