import { Outlet } from "react-router-dom";
const OutletComponent = () => {
  return (
    <div className="max-w-[93.75rem] mx-auto">
      <Outlet />
    </div>
  );
};

export default OutletComponent;
