import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaBolt,
  FaReact,
  FaNetworkWired,
  FaDatabase,
  FaMobile,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      level: 90,
      color: "text-orange-500",
      bgColor: "bg-orange-500"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      level: 85,
      color: "text-blue-500",
      bgColor: "bg-blue-500"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      level: 80,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500"
    },
    {
      icon: <FaReact />,
      name: "React",
      level: 75,
      color: "text-blue-400",
      bgColor: "bg-blue-400"
    },
    {
      icon: <FaBolt />,
      name: "Tailwind CSS",
      level: 85,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      level: 80,
      color: "text-purple-500",
      bgColor: "bg-purple-500"
    },
    {
      icon: <FaGithub />,
      name: "Git/GitHub",
      level: 75,
      color: "text-gray-800",
      bgColor: "bg-gray-800"
    },
    {
      icon: <FaNetworkWired />,
      name: "API Integration",
      level: 70,
      color: "text-green-500",
      bgColor: "bg-green-500"
    },
    {
      icon: <FaDatabase />,
      name: "Supabase",
      level: 65,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500"
    },
    {
      icon: <FaMobile />,
      name: "Responsive Design",
      level: 90,
      color: "text-pink-500",
      bgColor: "bg-pink-500"
    }
  ];

  return (
    <section className="section-padding bg-white" id="skills">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            مهارت های من
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            فن آوری هایی که در پروژه های خود استفاده می کنم و به طور مداوم در حال یادگیری و بهبود آنها هستم
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="card p-6 text-center group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.bgColor}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-gray-600">تکنولوژی مسلط</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
            <div className="text-gray-600">سال تجربه</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">تعهد به کیفیت</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
