import "./globals.css";

export const metadata = {
  title: "Chhaaya CBIT",
  description: "Film Fest Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
