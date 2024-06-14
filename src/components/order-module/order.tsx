import { Outlet } from "react-router-dom";
import { ModuleContext } from "../../contextAPI/contextApi";

function Order() {
    return <div className=" relative h-full">
            <Outlet></Outlet>
    </div>
}

export default Order;