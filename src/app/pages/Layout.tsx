import { Outlet } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import Whatsapp from "../components/Whatsapp";
import { Header } from '../components/Header';
import Footer from "../components/Footer";

export function Layout() {
  return (
    <>
      <ScrollToTop />   {/* ✅ Now inside Router context */}
      <Header />
      <Outlet />
      <Footer />
      <Whatsapp />      {/* ✅ Shows on all pages */}
    </>
  );
}