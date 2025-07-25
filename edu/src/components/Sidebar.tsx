import { HomeOutlined, BookOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 bg-gray-100 p-6 shadow-md hidden md:block">
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
  );
};

export default Sidebar;
