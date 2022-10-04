import Home from "./pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import props from "./fakeData";

describe("To-Do App", () => {
  it("renders", async () => {
    console.log(props);
    render(<Home props={props} />);
    expect(
      screen.getByPlaceholderText("Task to be done...")
    ).toBeInTheDocument();
  });
});
