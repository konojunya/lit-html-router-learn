import { html } from "lit-html";
import { Link } from "../elements/Link";

const AboutPage = () => html`
  <h1>About Page</h1>
  ${Link("to index", "/")} ${Link("to counter", "/counter")}
`;
export default AboutPage;
