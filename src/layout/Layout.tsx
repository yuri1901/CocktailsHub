import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
