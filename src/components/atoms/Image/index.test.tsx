/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { Image } from ".";

describe("Image component", () => {
  test("renders with a source prop", () => {
    const { getByRole } = render(<Image source="assets/images/eye.svg" />);
    expect(getByRole("img")).toHaveAttribute("src", "assets/images/eye.svg");
  });

  test("renders with a width prop", () => {
    const { getByRole } = render(<Image source="assets/images/eye.svg" width="100" />);
    expect(getByRole("img")).toHaveAttribute("width", "100");
  });
  test("renders with a height prop", () => {
    const { getByRole } = render(<Image source="assets/images/eye.svg" height="100" />);
    expect(getByRole("img")).toHaveAttribute("height", "100");
  });
});
