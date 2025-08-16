import Project1 from "../assets/pic/store.png";
import Project2 from "../assets/pic/adminPanel.png";
import Project3 from "../assets/pic/portf.png";

const Portfolio = () => {
  const projects = [
    {
      title: "سایت فروشگاهی با React",
      description:
        "یک سایت کامل با امکان خرید، جستجو، و سبد خرید با React و Tailwind.",
      image: Project1,
      link: "#",
    },
    {
      title: "پنل ادمین حرفه‌ای",
      description: "پنل مدیریت کاربران و محصولات با React و Chart.js.",
      image: Project2,
      link: "#",
    },
    {
      title: "سایت شخصی من",
      description: "سایت پرسونال با معرفی مهارت‌ها، نمونه‌کارها و فرم تماس.",
      image: Project3,
      link: "#",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        نمونه‌کارها
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition-all overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                مشاهده پروژه
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
