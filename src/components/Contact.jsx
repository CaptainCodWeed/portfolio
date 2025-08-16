const Contact = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          تماس با من
        </h2>
        <p className="text-gray-900 text-2xl bg-white mb-8">
          برای ارتباط با من می‌تونی فرم زیر رو پر کنی یا از طریق شبکه‌های
          اجتماعی پیام بدی.
        </p>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="نام"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <textarea
            placeholder="پیام"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            rows="5"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
