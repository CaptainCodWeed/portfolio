import "./Footer.css";
import { FaTelegram, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <a href="#" class="text-2xl font-bold gradient-text">
              کاپیتان کد
            </a>
            <p class="mt-2 text-gray-400">
              توسعه دهنده فرانت اند و خالق تجربیات دیجیتالی
            </p>
          </div>

          <div class="flex flex-col items-center md:items-start">
            <h4 class="font-bold text-lg mb-4">ارتباط با من</h4>
            <div class="flex space-x-6 space-x-reverse">
              <a
                href="#"
                class="text-gray-400 hover:text-white text-xl transition"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white text-xl transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white pl-4 text-xl transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white text-xl transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray+800 text-center text-gray-400">
          <p>© 2023 کاپیتان کد. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
