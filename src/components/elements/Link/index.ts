import { history, renderApp } from "../../../";
import { html } from "lit-html";

export const Link = (text: string, href: string) => html`
  <a
    href=${href}
    @click=${(e: any) => {
      e.preventDefault();
      history.push(href);
      renderApp();
    }}
    >${text}</a
  >
`;
