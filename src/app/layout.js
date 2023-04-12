import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "A IMDB clone for learn cases",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
