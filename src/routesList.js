import Home from "~/pages/Home";
import SampleTeams from "~/pages/SampleTeams";
import TableTest from "~/pages/TableTest";

const routerList = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sample-teams",
    component: SampleTeams,
  },
  {
    path: "/table-test",
    component: TableTest,
  },
];

export default routerList;
