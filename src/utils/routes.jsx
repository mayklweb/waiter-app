import Home from "../pages/home";
import Menu from "../pages/menu";
import Rooms from "../pages/rooms";
import Table from "../pages/table";

export const routes = [
  {
    id: 1,
    name: "HomePage",
    path: "/",
    component:<Rooms />,
  },
  {
    id: 2,
    name: "VIP Кабина",
    path: "/room",
    component: <Rooms />,
  },
  {
    id: 3,
    name: "Общий зал",
    path: "/room/:roomId/table",
    component: <Table />,
  },
  {
    id: 3,
    name: "Общий зал",
    path: "/room/:roomId/table/:tableId/menu",
    component: <Menu />,
  },
];
