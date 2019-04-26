import { html } from "lit-html";
import { Link } from "../elements/Link";

const IndexPage = () => html`
  <h1>Index page</h1>
  ${Link("to about", "/about")} ${Link("to counter", "/counter")}
`;

export default IndexPage;
