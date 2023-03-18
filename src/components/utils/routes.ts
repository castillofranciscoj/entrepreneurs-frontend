import { NextRouter } from "next/router";

export const routes: Route[] = [
  { path: "/", breadcrumb: "Product Group" },
  { path: "/productGroups/[details]", breadcrumb: "Details" },
  { path: "/dashboards/performance", breadcrumb: "Performance" },
];

export const excludedRoutes: Route[] = [
  { path: "/productGroups", breadcrumb: "PG" },
  { path: "/dashboards", breadcrumb: "Dashboard" },
];

export interface BreadCrumb {
  href: string;
  text: string;
}

export interface Route {
  path: string;
  breadcrumb: string;
}

export function getBreadCrumbs(location: NextRouter): BreadCrumb[] {
  const crumblist: BreadCrumb[] = [];
  // Remove any query parameters, as those aren't included in breadcrumbs
  const asPathWithoutQuery = location.asPath.split("?")[0];

  // Break down the path between "/"s, removing empty entities
  // Ex:"/my/nested/path" --> ["my", "nested", "path"]
  const asPathNestedRoutes = asPathWithoutQuery
    .split("/")
    .filter((path: string) => path.length > 0);

  asPathNestedRoutes.map((value: string, idx: number) => {
    const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
    // if the href is in the excluded files, discard it
    if (excludedRoutes.some((route: Route) => route.path == href)) {
      return;
    }

    const route: Route | undefined = routes.find(
      (route: Route) => route.path == location.route
    );

    if (route) {
      crumblist.push({ href, text: route.breadcrumb });
    }
  });

  return [{ href: "/", text: "Product Groups" }, ...crumblist];
}
