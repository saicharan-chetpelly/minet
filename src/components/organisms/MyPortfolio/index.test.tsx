import React from "react";
import "@testing-library/jest-dom";
import {
  screen,
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import MyPortfolio from ".";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import Chart from "../../../../public/assets/images/chart.svg";
import List1 from "../../../../public/assets/images/list-1.svg";
import { BrowserRouter as Router } from "react-router-dom";
describe("MyPortfolio tests", () => {
  test("loading", async () => {
    render(
      <Router>
        <MyPortfolio
          mainHead={"My portfolio"}
          imageOne={Chart}
          imageTwo={List1}
        />
      </Router>
    );
    const users = screen.getByText("Loading...");
    expect(users).toBeInTheDocument();
  });
  test("Rendering the images of the my portfolio data", async () => {
    render(
      <Router>
        <MyPortfolio
          mainHead={"My portfolio"}
          imageOne={Chart}
          imageTwo={List1}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    const users = screen.getAllByAltText("crypto");
    expect(users).toHaveLength(10);
  });

  test("renders errors", async () => {
    server.use(
      rest.get("http://localhost:3001/myportfolio", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Router>
        <MyPortfolio
          mainHead={"My portfolio"}
          imageOne={Chart}
          imageTwo={List1}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    const error = await screen.getByText("Error fetching Data");
    expect(error).toBeInTheDocument();
  });
  test("navigation to bitcoin page on onClick event", async () => {
    render(
      <Router>
        <MyPortfolio
          mainHead={"My portfolio"}
          imageOne={Chart}
          imageTwo={List1}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    const portfolioItems = screen.getAllByTestId("itemId");
    fireEvent.click(portfolioItems[0]);
  });
});
