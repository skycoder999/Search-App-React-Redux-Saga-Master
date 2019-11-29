import SearchInput from "./index";

let wrapper, consoleError;
let handleChangeSpy = jest.fn();

beforeEach(() => {
  wrapper = shallow(<SearchInput selected="" />);
  consoleError = console.error;
  console.error = jest.spyOn(console, "error");
});

afterEach(() => {
  console.error = consoleError;
});

describe("SearchInput Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
