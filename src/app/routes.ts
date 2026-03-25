// import { createBrowserRouter } from "react-router";
// import { Layout } from "./pages/Layout";
// import { Home } from "./pages/Home";
// import Collections from "./pages/Collections";   // ✅ FIXED
// import { ProductDetails } from "./pages/ProductDetails";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { NotFound } from "./pages/NotFound";
// import Simple from "./pages/Simple";
// import Standard from "./pages/Standard";
// import Premium from "./pages/Premium";
// import Dashboard from "./adminpanel/Dashboard";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Layout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//       {
//         path: "collections",
//         Component: Collections,
//       },
//       {
//         path: "product/:id",
//         Component: ProductDetails,
//       },
//       {
//         path: "about",
//         Component: About,
//       },
//       {
//         path: "contact",
//         Component: Contact,
//       },
//       {
//         path: "simple",
//         Component: Simple,
//       },
//       {
//         path: "standard",
//         Component: Standard,
//       },
//       {
//         path: "premium",
//         Component: Premium,
//       },
//       {
//         path: "*",
//         Component: NotFound,
//       },
//       {
//     path: "/admin",
//     Component: Dashboard,
//   }
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Collections from "./pages/Collections";
import { ProductDetails } from "./pages/ProductDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import Simple from "./pages/Simple";
import Standard from "./pages/Standard";
import Premium from "./pages/Premium";
import Dashboard from "./admin/Dashboard";
import AddOffer from "./admin/AddOffer";
// import Hero from "./pages/Hero"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "collections",
        Component: Collections,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "simple",
        Component: Simple,
      },
      {
        path: "standard",
        Component: Standard,
      },
      {
        path: "premium",
        Component: Premium,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },

 // ✅ ADMIN ROUTE (separate)
  // {
  //   path: "/admin",
  //   Component: Dashboard,
  // },
  {
  path: "/admin",
  Component: Dashboard,
  children: [
    {
      path: "addoffer",
      Component: AddOffer,
    }
  ]
}
]);