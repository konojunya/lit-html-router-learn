import { render, html } from "lit-html";
import { getComponent, RouteProps } from "./router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// route components
import { IndexPage } from "./components/Index";
import { AboutPage } from "./components/About";
import { CounterPage } from "./components/Counter";

const routes: RouteProps[] = [
  {
    path: "/",
    component: IndexPage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/counter",
    component: CounterPage
  }
];

const App = () => html`
  ${getComponent(history, routes)}
`;

export const renderApp = () => render(App(), document.body);
renderApp();
