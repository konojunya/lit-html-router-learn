import { html } from "lit-html";
import { renderApp } from "../../";

let count: number = 0;

export const CounterPage = () => html`
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
`;
