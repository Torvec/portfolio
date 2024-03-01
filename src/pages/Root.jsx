import "../styles.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main className="bg-white font-sans text-stone-800">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
