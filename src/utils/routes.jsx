import Home from "../pages/home";
import Menu from "../pages/menu";
import Rooms from "../pages/rooms";
import Table from "../pages/table";

export const routes = [
  {
    id: 1,
    name: "HomePage",
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    name: "VIP Кабина ",
    path: "/rooms",
    component: <Rooms />,
  },
  {
    id: 3,
    name: "Общий зал",
    path: "/rooms/:id/table",
    component: <Table />,
  },
  {
    id: 3,
    name: "Общий зал",
    path: "/rooms/:id/table/:id",
    component: <Menu />,
  },
];
