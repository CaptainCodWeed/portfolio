-- Supabase Database Setup Script
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    content TEXT,
    image_url TEXT,
    youtube_link TEXT,
    author VARCHAR(255) DEFAULT 'کاپیتان کد',
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    subscribed BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table (for dynamic portfolio)
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    live_link TEXT,
    github_link TEXT,
    technologies TEXT[],
    category VARCHAR(100),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for contacts table (allow insert for everyone, read for authenticated users)
CREATE POLICY "Allow public insert on contacts" ON contacts
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contacts" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for articles table (allow public read, insert/update for authenticated users)
CREATE POLICY "Allow public read on articles" ON articles
    FOR SELECT USING (published = true);

CREATE POLICY "Allow authenticated insert on articles" ON articles
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on articles" ON articles
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policies for newsletter_subscribers table
CREATE POLICY "Allow public insert on newsletter_subscribers" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscribers" ON newsletter_subscribers
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policies for projects table
CREATE POLICY "Allow public read on projects" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Allow authenticated insert on projects" ON projects
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on projects" ON projects
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Insert sample data for articles
INSERT INTO articles (title, description, content, image_url, youtube_link, author) VALUES
(
    'مقدمات HTML و CSS',
    'آشنایی با ساختار صفحات وب و استایل‌دهی مقدماتی. در این مقاله یاد می‌گیریم که چطور صفحات وب زیبا بسازیم.',
    'محتوای کامل مقاله در اینجا قرار می‌گیرد...',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=250&fit=crop',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'کاپیتان کد'
),
(
    'شروع برنامه‌نویسی با JavaScript',
    'آموزش مفاهیم اولیه جاوااسکریپت برای طراحی وب پویا. از متغیرها تا توابع، همه چیز رو یاد می‌گیریم.',
    'محتوای کامل مقاله در اینجا قرار می‌گیرد...',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'کاپیتان کد'
),
(
    'React Hooks در عمل',
    'آموزش کامل React Hooks با مثال‌های عملی. useState، useEffect، useContext و سایر hooks مهم.',
    'محتوای کامل مقاله در اینجا قرار می‌گیرد...',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'کاپیتان کد'
);

-- Insert sample data for projects
INSERT INTO projects (title, description, image_url, live_link, github_link, technologies, category, featured) VALUES
(
    'سایت فروشگاهی با React',
    'یک سایت کامل با امکان خرید، جستجو، و سبد خرید با React و Tailwind. شامل مدیریت محصولات، سیستم پرداخت و پنل ادمین.',
    '/src/assets/pic/store.png',
    'https://example-store.com',
    'https://github.com/captaincode/store',
    ARRAY['React', 'Tailwind CSS', 'JavaScript', 'Supabase'],
    'E-commerce',
    true
),
(
    'پنل ادمین حرفه‌ای',
    'پنل مدیریت کاربران و محصولات با React و Chart.js. شامل داشبورد تحلیلی، مدیریت کاربران و گزارش‌گیری.',
    '/src/assets/pic/adminPanel.png',
    'https://example-admin.com',
    'https://github.com/captaincode/admin',
    ARRAY['React', 'Chart.js', 'Node.js', 'MongoDB'],
    'Dashboard',
    true
),
(
    'سایت شخصی من',
    'سایت پرسونال با معرفی مهارت‌ها، نمونه‌کارها و فرم تماس. طراحی مدرن و ریسپانسیو با انیمیشن‌های زیبا.',
    '/src/assets/pic/portf.png',
    'https://captaincode.ir',
    'https://github.com/captaincode/portfolio',
    ARRAY['React', 'Tailwind CSS', 'Vite', 'Supabase'],
    'Portfolio',
    true
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
