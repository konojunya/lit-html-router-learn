import { html } from "lit-html";
import { renderApp } from "../../";
import { Link } from "../elements/Link";

let count: number = 0;

const CounterPage = () => html`
  <p>count: ${count}</p>
  <button
    @click=${(e: any) => {
      count++;
      renderApp();
    }}
  >
    +
  </button>
  <button
    @click=${(e: any) => {
      count--;
      renderApp();
    }}
  >
    -
  </button>
  ${Link("to top", "/")}
`;

export default CounterPage;
