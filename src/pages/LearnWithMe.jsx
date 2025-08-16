import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const LearnWithMe = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">آموزش برنامه‌نویسی با من</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-100 rounded-xl p-6">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-700 my-2">{article.description}</p>
            {article.youtube_link && (
              <a
                href={article.youtube_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                تماشای ویدیو
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnWithMe;
