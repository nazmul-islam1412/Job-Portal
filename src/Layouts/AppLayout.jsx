import Header from "@/components/ui/Header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="mx-auto container min-h-screen">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by RoadsideCoder
      </div>
    </div>
  );
};

export default AppLayout;