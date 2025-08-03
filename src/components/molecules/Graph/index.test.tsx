import { render } from "@testing-library/react";
import { Graph } from ".";
import React from "react";
import "@testing-library/jest-dom";
describe("Graph", () => {
  it("should render without errors", () => {
    render(<Graph />);
  });

  it("should render a graph with profit data if isProfit prop is true", () => {
    const { getByTestId } = render(<Graph isProfit={true} />);
    const graph = getByTestId("graph");
    expect(graph).toBeInTheDocument();
    expect(graph).toContainHTML('data-testid="graph"');
  });
});
