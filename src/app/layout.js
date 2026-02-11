import "./globals.css";

export const metadata = {
  title: "Chhaaya CBIT",
  description: "Film Fest Website",
  verification: {
    google: "google1cd30bda67faeb37.html",
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
