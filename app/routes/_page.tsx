import {Outlet} from "@remix-run/react";
import Footer from "@/app/components/footer";

const PageLayout = () => (
  <main className="flex flex-col w-full items-center text-content">
    <Outlet />
    <Footer />
  </main>
);

export default PageLayout;