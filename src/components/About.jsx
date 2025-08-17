import React from "react";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "توسعه وب",
      description: "تخصص در React، JavaScript و Tailwind CSS"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "خلاقیت",
      description: "طراحی رابط‌های کاربری زیبا و کاربردی"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "کار تیمی",
      description: "تجربه همکاری در پروژه‌های مختلف"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "یادگیری مداوم",
      description: "همیشه در حال یادگیری تکنولوژی‌های جدید"
    }
  ];

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            درباره من
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              سلام! من کاپیتان کد هستم 👋
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              من یک برنامه‌نویس عاشق دنیای وب و هوش مصنوعی‌ام. عاشق یادگیری و انتقال دانش هستم.
              در حال حاضر روی پروژه‌های فرانت‌اند با React، Tailwind CSS و جاوااسکریپت تمرکز دارم.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              هدفم ساخت ابزارهایی هست که به مردم کمک کنن، و از طریق آموزش، به دیگران هم مسیر یادگیری رو نشون بدم.
              معتقدم که برنامه‌نویسی یک هنر است و هر خط کد باید با دقت و عشق نوشته شود.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              با من همراه شو تا دنیاهای جدید برنامه‌نویسی رو کشف کنیم! 🚀
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2+</div>
                <div className="text-gray-600">سال تجربه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-gray-600">پروژه تکمیل شده</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-6 text-center group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
