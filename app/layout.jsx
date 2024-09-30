import NavBar from "@/components/nav";

import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Raouf Store",
  description: "E-commerce Webpage",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
