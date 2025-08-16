import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaBolt,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skillss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6 gradient-text">
          مهارت های من
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          فن آوری هایی که در پروژه های خود استفاده می کنم
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Skill 1 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-blue-500 mb-3">
              <FaHtml5 />
            </div>
            <h3 className="text-lg font-bold mb-1">HTML5</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full w-50"></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-blue-400 mb-3">
              <FaCss3Alt />
            </div>
            <h3 className="text-lg font-bold mb-1">CSS3</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-400 h-2.5 rounded-full w-48"></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-yellow-500 mb-3">
              <FaJs />
            </div>
            <h3 className="text-lg font-bold mb-1">JavaScript</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full w-40"></div>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-blue-300 mb-3">
              <FaReact />
            </div>
            <h3 className="text-lg font-bold mb-1">React</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-300 h-2.5 rounded-full w-38"></div>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-purple-600 mb-3">
              <FaBolt />
            </div>
            <h3 className="text-lg font-bold mb-1">Tailwind</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full w-35"></div>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-purple-500 mb-3">
              <FaBootstrap />
            </div>
            <h3 className="text-lg font-bold mb-1">Bootstrap</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full w-47"></div>
            </div>
          </div>

          {/* Skill 7 */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-black mb-3">
              <FaGithub />
            </div>
            <h3 className="text-lg font-bold mb-1">Git/GitHub</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-black h-2.5 rounded-full w-45"></div>
            </div>
          </div>

          {/* Skill 8  */}
          <div className="bg-gray-50 p-6 rounded-xl text-center skill-item">
            <div className="text-5xl text-green-500 mb-3">
              <FaNetworkWired />
            </div>
            <h3 className="text-lg font-bold mb-1">API Integration</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full w-39"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
