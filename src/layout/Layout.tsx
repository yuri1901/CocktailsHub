// components

import PageContainer from "../components/pageContainer/PageContainer";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <PageContainer>
      <Header />
      <main className="flex-1 flex items-center justify-center  w-full">
        <Outlet />
      </main>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
