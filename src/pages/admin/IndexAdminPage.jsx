import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const IndexAdminPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-8">
        <AdminSidebar className="lg:col-span-2 max-lg:w-full " />
        <div className="lg:col-span-6 p-4 bg-white rounded-md shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexAdminPage;
