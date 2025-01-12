import { NavLink } from "react-router-dom";
import { TPathRoute, TSideber } from "../types/sideber.type";

export const sideberGenerator = (sideberItem: TPathRoute[], role: string) => {
  const Sideber = sideberItem.reduce((acc: TSideber[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((chil) => ({
          key: chil.name,
          label: <NavLink to={`/${role}/${chil.path}`}>{chil.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return Sideber;
};
