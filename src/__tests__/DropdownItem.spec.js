import DropdownItem from "../components/DropdownItem";
import { API_POSTER_PATH } from "../utils/constants";

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

describe("SuggestionItem Component unit test", () => {
  it("renders a title with release date", () => {
    const element = wrapper.find(".suggest-item__title");
    const title = `${item.original_title}(${item.release_date.split("-")[0]})`;
    expect(element).toHaveLength(1);
    expect(element.text()).toBe(title);
  });

  it("renders a poster", () => {
    const element = wrapper.find(".suggest-item__poster");
    const src = `${API_POSTER_PATH}${item.poster_path}`;
    expect(element).toHaveLength(1);
    expect(element.prop("src")).toBe(src);
  });

  it("renders a voting when non-zero", () => {
    const element = wrapper.find(".suggest-item__info b");
    const rating = `★ ${Number(item.vote_average).toFixed(1)}`;
    expect(element).toHaveLength(1);
    expect(element.text()).toBe(rating);
  });

  it("does not renders voting when zero", () => {
    item.vote_average = 0;
    const wrapper = shallow(<DropdownItem item={item} />);
    const element = wrapper.find(".suggest-item__info b");
    expect(element).toHaveLength(0);
  });
});
