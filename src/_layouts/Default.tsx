import { Outlet } from "react-router-dom";
import Sidebar from "../_components/Sidebar";

const Default = () => {
    return (  <div className="layout">
    <Sidebar/>
    <div className="content">
        <Outlet/>
    </div>
  </div>);
}
 
export default Default;