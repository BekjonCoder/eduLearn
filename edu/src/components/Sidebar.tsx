import { HomeOutlined, BookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        className="md:hidden p-4"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`${open ? "block" : "hidden"} md:block h-screen w-64 bg-gray-100 p-6 shadow-md fixed md:static`}>
        <ul className="flex flex-col gap-6">
          <Link to={'/'}>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <HomeOutlined /> <span>Dashboard</span>
            </li>
          </Link>
          <Link to={'/courses'}>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <BookOutlined /> <span>Courses</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
