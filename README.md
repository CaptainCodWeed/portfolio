# کاپیتان کد - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Supabase. This project showcases my skills, projects, and provides a platform for sharing programming tutorials.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Contact Form**: Integrated with Supabase for message storage
- **Blog Section**: Educational articles with YouTube integration
- **Portfolio Showcase**: Dynamic project display with technology tags
- **Skills Visualization**: Interactive skill bars with progress indicators
- **Mobile Responsive**: Optimized for all device sizes
- **RTL Support**: Full right-to-left language support for Persian
- **Performance Optimized**: Fast loading with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Deployment**: Netlify/Vercel ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the `supabase-setup.sql` script to create necessary tables

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

The project uses Supabase with the following tables:

- **contacts**: Store contact form submissions
- **articles**: Blog posts and tutorials
- **newsletter_subscribers**: Email newsletter subscribers
- **projects**: Portfolio projects (optional, can use static data)

Run the SQL script in `supabase-setup.sql` to set up the database schema.

## 🎨 Customization

### Colors and Theme
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... customize your primary colors
  },
  secondary: {
    50: '#fdf4ff',
    // ... customize your secondary colors
  }
}
```

### Content
- Update personal information in component files
- Replace project images in `src/assets/pic/`
- Modify contact information in `Contact.jsx`
- Update social media links throughout components

### Styling
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles can be added to individual component files
- Use Tailwind utility classes for consistent styling

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `netlify.toml` file is already configured

### Vercel
1. Connect your GitHub repository to Vercel
2. The `vercel.json` file is already configured
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload the dist folder to your hosting provider
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and preview

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   ├── lib/              # Utility libraries
│   ├── pages/            # Page components
│   ├── data/             # Static data
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
├── supabase-setup.sql    # Database setup script
├── netlify.toml          # Netlify configuration
└── vercel.json           # Vercel configuration
```

## 🎯 Key Components

- **Header**: Navigation with mobile menu
- **Hero**: Landing section with call-to-action
- **About**: Personal information and features
- **Portfolio**: Project showcase with filtering
- **Skills**: Interactive skill visualization
- **Contact**: Contact form with Supabase integration
- **Footer**: Links and social media
- **LearnWithMe**: Blog/tutorial section

## 🔒 Security

- Row Level Security (RLS) enabled on all Supabase tables
- Environment variables for sensitive data
- Input validation on contact form
- XSS protection headers

## 📈 Performance

- Code splitting with Vite
- Optimized images and assets
- Lazy loading for components
- Efficient CSS with Tailwind
- Caching headers for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: captaincode@example.com
- **Website**: https://captaincode.ir
- **GitHub**: https://github.com/captaincode

---

Made with ❤️ by کاپیتان کد
