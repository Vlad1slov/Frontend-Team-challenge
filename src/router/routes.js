import Accessories from "pages/Accessories";
import AllGoods from "pages/AllGoods";
import Bedroom from "pages/Bedroom";
import Dining from "pages/Dining";
import Home from "pages/Home";
import Living from "pages/Living";
import Sale from "pages/Sale";

export const routes = [
    { path: "/accessories", element: <Accessories />, exact: true },
    { path: "/allgoods", element: <AllGoods />, exact: true },
    { path: "/bedroom", element: <Bedroom />, exact: true },
    { path: "/dining", element: <Dining />, exact: true },
    { path: "/living", element: <Living />, exact: true },
    { path: "/sale", element: <Sale />, exact: true },
    { path: "*", element: <Home />, exact: true },
];
