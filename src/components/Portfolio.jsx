import React from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import Project1 from "../assets/pic/store.png";
import Project2 from "../assets/pic/adminPanel.png";
import Project3 from "../assets/pic/portf.png";

const Portfolio = () => {
  const projects = [
    {
      title: "سایت فروشگاهی با React",
      description:
        "یک سایت کامل با امکان خرید، جستجو، و سبد خرید با React و Tailwind. شامل مدیریت محصولات، سیستم پرداخت و پنل ادمین.",
      image: Project1,
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Supabase"],
      category: "E-commerce"
    },
    {
      title: "پنل ادمین حرفه‌ای",
      description: "پنل مدیریت کاربران و محصولات با React و Chart.js. شامل داشبورد تحلیلی، مدیریت کاربران و گزارش‌گیری.",
      image: Project2,
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
      category: "Dashboard"
    },
    {
      title: "سایت شخصی من",
      description: "سایت پرسونال با معرفی مهارت‌ها، نمونه‌کارها و فرم تماس. طراحی مدرن و ریسپانسیو با انیمیشن‌های زیبا.",
      image: Project3,
      liveLink: "#",
      githubLink: "#",
      technologies: ["React", "Tailwind CSS", "Vite", "Supabase"],
      category: "Portfolio"
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="portfolio">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            نمونه‌کارها
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            پروژه‌هایی که با عشق و دقت ساخته‌ام. هر کدام چالش‌های خاص خودشون رو داشتن و از هر کدوم چیزهای زیادی یاد گرفتم.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveLink}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors duration-300"
                      title="مشاهده پروژه"
                    >
                      <FaEye />
                    </a>
                    <a
                      href={project.githubLink}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors duration-300"
                      title="مشاهده کد"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 space-x-reverse">
                  <a
                    href={project.liveLink}
                    className="flex-1 btn-primary text-center flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <FaExternalLinkAlt />
                    <span>مشاهده</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <FaGithub />
                    <span>کد</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            علاقه‌مند به همکاری در پروژه‌های جدید هستید؟
          </p>
          <a href="#contact" className="btn-primary">
            تماس با من
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
