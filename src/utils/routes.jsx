import CheckOut from "../components/checkout";
import Home from "../pages/home";
import Menu from "../pages/menu";
import Rooms from "../pages/rooms";
import Table from "../pages/table";

export const routes = [
  {
    id: 1,
    path: "/",
    component:<Rooms />,
  },
  {
    id: 2,
    path: "/room",
    component: <Rooms />,
  },
  {
    id: 3,
    path: "/room/:roomId/table",
    component: <Table />,
  },
  {
    id: 4,
    path: "/room/:roomId/table/:tableId/menu",
    component: <Menu />,
  },
  {
    id: 5,
    path: "/room/:roomId/table/:tableId/checkout",
    component: <CheckOut />,
  },
];
