import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Radial from "../Radial";

describe("Radial", () => {
  it("does not render a radial image when there is no timer", () => {
    const { container } = render(<Radial totalRemainingSeconds={0} totalTimerSeconds={0} />);
    expect(container.firstChild).toHaveClass("bg-none");
  });
  it("renders a full white radial when the total timer seconds and remaining seconds are equal", () => {
    const { container } = render(<Radial totalRemainingSeconds={60} totalTimerSeconds={60} />);
    expect(container.firstChild).toHaveClass("bg-[conic-gradient(white 100%, rgb(89 109 120) 0%)]");
  });
  it("renders a half white radial when the timer is half finished", () => {
    const { container } = render(<Radial totalRemainingSeconds={30} totalTimerSeconds={60} />);
    expect(container.firstChild).toHaveClass("bg-[conic-gradient(white 50%, rgb(89 109 120) 50%)]");
  });
});
