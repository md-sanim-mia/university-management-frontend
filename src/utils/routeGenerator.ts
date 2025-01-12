import { TPathRoute, TRoute } from "../types/sideber.type";

export const routeGenerator = (items: TPathRoute[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    console.log(acc);
    return acc;
  }, []);

  return routes;
};