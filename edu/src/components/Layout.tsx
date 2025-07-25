import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, BookOutlined, BellOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useUser } from "../context/UserContex"; // <--- foydalanuvchi context

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { user } = useUser(); // <--- foydalanuvchini olish

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`${open ? "block" : "hidden"} md:block bg-gray-100 w-64 p-6 shadow-md fixed md:static h-full`}>
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

          {!user && (
            <Link to={'/login'}>
              <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                <BookOutlined /> <span>Login</span>
              </li>
            </Link>
          )}

        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
          {/* Toggle button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            <MenuOutlined />
          </button>

          <Link to={'/'}>
            <h1 className="text-xl font-bold text-gray-800">EduLearn</h1>
          </Link>

          {user&&(
            <div className="flex items-center gap-4">
                <Link to={'/'}>
            <UserOutlined className="text-xl text-gray-600 cursor-pointer" />
                </Link>
          </div>
          )}
        </nav>

        {/* Page children */}
        <main className="p-6 bg-gray-50 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
