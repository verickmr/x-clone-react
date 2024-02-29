import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import logoTwitter from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <img className="logo" src={logoTwitter} alt="logo" />
      <nav className="menu-nav">
        <NavLink  to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explorer</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText /><span>List</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button><Pencil/><span>tweet</span></button>
    </aside>
  );
};

export default Sidebar;
