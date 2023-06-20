import { Poppins } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next JS 13 Starter',
  description: 'The Next.js 13 Starter is a powerful boilerplate for building Next.js applications with JSX, routing, nested routes, Google Fonts, metadata generation, custom loading indicators, dynamic routes, caching & revalidating, and search functionality. It provides a solid foundation for quickly setting up and developing Next.js projects.',
  keywords:
    'web development, web design, javascript, react, Next JS, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}