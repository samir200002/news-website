import Loading from "@/app/loading";
import { render, screen } from "@testing-library/react";

test("renders 6 skeleton placeholders", () => {
  render(<Loading />);
  screen.debug(); 
  const skeletons = screen.getAllByTestId("skeleton");
  expect(skeletons.length).toBe(6);
});