import React, { useEffect, useState } from "react";
import { FaYoutube, FaClock, FaUser, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const LearnWithMe = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setArticles(data || []);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('خطا در بارگذاری مقالات');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">در حال بارگذاری مقالات...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container-max py-8">
          <div className="flex items-center space-x-4 space-x-reverse mb-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <FaArrowLeft />
              <span>بازگشت به خانه</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              آموزش برنامه‌نویسی با من
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              در این بخش، تجربیات و دانش خودم رو با شما به اشتراک می‌گذارم. 
              از مفاهیم پایه تا تکنیک‌های پیشرفته، همه چیز رو قدم به قدم یاد می‌گیریم.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max py-16">
        {articles.length === 0 ? (
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              هنوز مقاله‌ای منتشر نشده
            </h3>
            <p className="text-gray-600">
              به زودی مقالات آموزشی جذابی اینجا قرار می‌گیره. منتظر باشید!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="card group overflow-hidden animate-slide-up"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image_url || 'https://via.placeholder.com/400x250?text=مقاله+آموزشی'}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <FaUser />
                      <span>کاپیتان کد</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <FaClock />
                      <span>
                        {new Date(article.created_at).toLocaleDateString('fa-IR')}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 space-x-reverse">
                    {article.youtube_link && (
                      <a
                        href={article.youtube_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center flex items-center justify-center space-x-2 space-x-reverse"
                      >
                        <FaYoutube />
                        <span>تماشای ویدیو</span>
                      </a>
                    )}
                    <button className="flex-1 btn-secondary text-center">
                      مطالعه بیشتر
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              آماده یادگیری هستید؟
            </h3>
            <p className="text-gray-600 mb-6">
              برای دریافت آخرین مقالات و ویدیوهای آموزشی، در خبرنامه ما عضو شوید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 min-w-64"
              />
              <button className="btn-primary">
                عضویت در خبرنامه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnWithMe;
