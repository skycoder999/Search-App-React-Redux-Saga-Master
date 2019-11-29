import DropdownItem from "./index";
import { API_POSTER_PATH } from "../../utils/constants";

let wrapper, consoleError;
let item = {
  id: 1,
  overview: "Sample Overview",
  original_title: "Sample Title",
  poster_path: "some_poster.jpg",
  vote_average: 4,
  release_date: "2019-02-01"
};

beforeEach(() => {
  wrapper = shallow(<DropdownItem item={item} />);
  consoleError = console.error;
  console.error = jest.spyOn(console, "error");
});

afterEach(() => {
  console.error = consoleError;
});

describe("SuggestionItem Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
