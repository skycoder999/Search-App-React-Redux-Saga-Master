import SearchInput from "../components/SearchInput";

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

describe("SearchInput Component unit test", () => {
  it("renders a input field", () => {
    const element = wrapper.find("input");
    expect(element).toHaveLength(1);
  });
});
