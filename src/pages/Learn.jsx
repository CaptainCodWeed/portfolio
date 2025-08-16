import React from "react";
import learnData from "../data/learnData";

const Learn = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-right">
        <h1 className="text-4xl font-bold my-auto py-10 text-center">
          آموزش برنامه‌نویسی با من
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {learnData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <a
                  href={item.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  دیدن ویدیو
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Learn;
