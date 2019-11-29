import DropdownList from "./index";
import { TEXT_LOADING } from "../../utils/constants";

let wrapper, consoleError;
let items = [
  {
    id: 1,
    original_title: "Sample Title",
    overview: "Sample Overview",
    poster_path: "some_poster.jpg",
    vote_average: 4,
    release_date: "2019-02-01"
  }
];

beforeEach(() => {
  wrapper = shallow(<DropdownList items={items} query="star" />);
  consoleError = console.error;
  console.error = jest.spyOn(console, "error");
});

afterEach(() => {
  console.error = consoleError;
});

describe("DropdownList Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
