import MovieDetails from "./index";

let wrapper, consoleError;
let item = {
  id: 1,
  original_title: "Sample Title",
  overview: "Sample Overview",
  poster_path: "some_poster.jpg",
  vote_average: 4,
  release_date: "2019-02-01"
};
beforeEach(() => {
  wrapper = shallow(<MovieDetails item={item} />);
  consoleError = console.error;
  console.error = jest.spyOn(console, "error");
});

afterEach(() => {
  console.error = consoleError;
});

describe("Movie Details Component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
