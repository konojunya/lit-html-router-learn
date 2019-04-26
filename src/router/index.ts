/**
 * routing
 */
import { History } from "history";

export interface RouteProps {
  path: string;
  component: any;
}

export const getComponent = (history: History, routes: RouteProps[]) => {
  let renderComponent: any;
  routes.forEach(async route => {
    // FIXME @konojunya path matchはとりあえず適当
    if (route.path === history.location.pathname) {
      renderComponent = route.component();
    }
  });
  return renderComponent;
};
