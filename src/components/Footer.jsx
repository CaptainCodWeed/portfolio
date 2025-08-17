import React from "react";
import { FaTelegram, FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "خانه", href: "/" },
      { name: "درباره من", href: "#about" },
      { name: "پروژه‌ها", href: "#portfolio" },
      { name: "مهارت‌ها", href: "#skills" },
      { name: "تماس", href: "#contact" },
    ],
    services: [
      { name: "طراحی وب", href: "#" },
      { name: "توسعه فرانت‌اند", href: "#" },
      { name: "بهینه‌سازی", href: "#" },
      { name: "مشاوره", href: "#" },
    ],
    social: [
      { icon: <FaTelegram />, href: "#", label: "Telegram" },
      { icon: <FaInstagram />, href: "#", label: "Instagram" },
      { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
      { icon: <FaGithub />, href: "#", label: "GitHub" },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              کاپیتان کد
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              توسعه دهنده فرانت اند و خالق تجربیات دیجیتالی. من با عشق و دقت، 
              وب‌سایت‌های زیبا و کاربردی می‌سازم که تجربه کاربری فوق‌العاده‌ای ارائه می‌دهند.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدمات</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} کاپیتان کد. تمامی حقوق محفوظ است.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2 space-x-reverse mt-4 md:mt-0">
              <span>ساخته شده با</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>در ایران</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
