import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link to={'/'}><h1 className="text-xl font-bold text-gray-800">EduLearn</h1></Link>
      <div className="flex items-center gap-4">
        <BellOutlined className="text-xl text-gray-600 cursor-pointer" />
        <UserOutlined className="text-xl text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
