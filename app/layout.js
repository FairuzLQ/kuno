import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";

export const metadata = {
  title: "Kuno - Your Tech Tutorial Solution",
  description: "We deliver easy tutorial on beginner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}