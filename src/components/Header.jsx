import React from "react";
import {
  FaTools,
  FaFolderOpen,
  FaUser,
  FaEnvelope,
  FaLaptopCode,
  FaHome,
  FaBars,
} from "react-icons/fa";   
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex  items-center">
              <a href="/" className="text-xl font-bold gradient-text">
                کاپیتان کد
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-12 space-x-reverse">
              <a
                href="/"
                className="nav-link text-sm active-link text-gray-700 hover:text-purple-600"
              >
                خانه
              </a>

              <a
                href="#portfolio"
                className="nav-link text-sm text-gray-700 hover:text-purple-600"
              >
                پروژه ها
              </a>
              <a
                href="#skills"
                className="nav-link text-sm text-gray-700 hover:text-purple-600"
              >
                مهارت‌ها
              </a>
              <a
                href="#about"
                className="nav-link text-sm text-gray-700 hover:text-purple-600"
              >
                درباره من
              </a>
              <a
                href="#contact"
                className="nav-link text-sm ml-5 text-gray-700 hover:text-purple-600"
              >
                تماس با من
              </a>
              <a
                href="/learn"
                className="nav-link text-sm text-gray-700 hover:text-purple-600"
              >
                آموزش برنامه نویسی
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button id="mobile-menu-button" className="text-gray-700">
                <i class=" text-2xl">
                  <FaBars />
                </i>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 space-x-reverse">
            <a
              href="/"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              خانه
            </a>
            <a
              href="#about"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              درباره من
            </a>
            <a
              href="#portfolio"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              پروژه ها
            </a>
            <a
              href="#skills"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              مهارت ها
            </a>
            <a
              href="#contact"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              تماس با من
            </a>
            <a
              href="/learn"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            >
              آمورش برنامه نویسی
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
