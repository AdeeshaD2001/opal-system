// app/layout.tsx

import Header from "./NavBar"; // Adjust the path as necessary
import Footer from "./Footer"; // Adjust the path as necessary
// import "@/styles/globals.css"; // Import your global CSS if you have any

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>{" "}
        {/* This will render the specific page content */}
        <Footer />
      </body>
    </html>
  );
}
