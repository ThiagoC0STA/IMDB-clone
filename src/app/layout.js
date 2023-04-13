import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDB Clone",
  description: "A IMDB clone for learn cases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
