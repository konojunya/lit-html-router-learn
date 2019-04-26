import { render, html } from "lit-html";
import { getComponent, RouteProps } from "./router";
import { createBrowserHistory } from "history";

import Index from "./components/Index";
import About from "./components/About";
import Counter from "./components/Counter";

export const history = createBrowserHistory();
const routes: RouteProps[] = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/counter",
    component: Counter
  }
];

const App = () => html`
  ${getComponent(history, routes)}
`;

export const renderApp = () => render(App(), document.body);
renderApp();
