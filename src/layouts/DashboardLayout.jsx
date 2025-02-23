import { Outlet } from "react-router";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <>
      <div className="bg-gray-300 min-h-screen">
            <Header />
        <div className="py-10 lg:py-20 mx-auto w-auto md:max-w-6xl md:h-auto ">
          <div className="mt-10 mx-5 md:mx-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
