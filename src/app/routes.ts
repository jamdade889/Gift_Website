import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Collections from "./pages/Collections";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

import Dashboard from "./admin/Dashboard";
import AddOffer from "./admin/AddOffer";
import AddProduct from "./admin/AddProduct";
import AddPopup from "./admin/AddPopup";
import ContactSubmission from "./admin/ContactSubmission";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "collections", Component: Collections },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin",
    Component: Dashboard,
    children: [
      { path: "addproduct", Component: AddProduct },
      { path: "addoffer", Component: AddOffer },
      { path: "addpopup", Component: AddPopup },
      { path: "contactsubmission", Component: ContactSubmission}
    ],
  },
]);