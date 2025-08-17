import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
      </div>

      <div className="container-max text-center relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">به دنیای برنامه‌نویسی</span>
            <br />
            <span className="text-gray-800">خوش آمدید!</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            اینجا قراره با عشق یاد بگیریم، بسازیم و بدرخشیم ✨
            <br />
            من کاپیتان کد هستم و آماده‌ام تا در مسیر یادگیری برنامه‌نویسی همراه شما باشم
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="btn-primary flex items-center space-x-2 space-x-reverse"
            >
              <span>شروع کنید</span>
              <FaArrowDown className="animate-bounce" />
            </button>
            <a 
              href="#portfolio" 
              className="btn-secondary flex items-center space-x-2 space-x-reverse"
            >
              <span>مشاهده پروژه‌ها</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 space-x-reverse">
            <a 
              href="#" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <FaArrowDown className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
