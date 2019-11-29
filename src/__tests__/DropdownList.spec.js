import DropdownList from "../components/DropdownList";
import DropdownItem from "../components/DropdownItem";
import { TEXT_LOADING } from "../utils/constants";

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

describe("DropdownList Component unit test", () => {
  it("renders DropdownItem when search performed", () => {
    wrapper = shallow(<DropdownList items={items} loading={false} query="star" />);
    const element = wrapper.find(DropdownItem);
    expect(element).toHaveLength(1);
  });

  it("does not render DropdownItem when zero results", () => {
    wrapper = shallow(<DropdownList items={[]} loading={false} query="star" />);
    const element = wrapper.find(DropdownItem);
    expect(element).toHaveLength(0);
  });

  it("renders a loader when fetching items", () => {
    wrapper = shallow(<DropdownList loading={true} query="star" />);
    const text = wrapper
      .find(".suggest-list__msg")
      .text()
      .trim();
    expect(text).toBe(TEXT_LOADING);
  });

  it("renders not found message when zero results", () => {
    wrapper = shallow(<DropdownList items={[]} loading={false} query="star" />);
    const text = wrapper
      .find(".suggest-list__msg")
      .text()
      .trim();
    expect(text).toBe("Oops! No results found.");
  });

  it("does not renders when selected or no query", () => {
    wrapper = shallow(<DropdownList items={[]} selected={{ foo: "bar" }} query="star" />);
    expect(wrapper.find(".suggest-list")).toHaveLength(0);
  });
});
