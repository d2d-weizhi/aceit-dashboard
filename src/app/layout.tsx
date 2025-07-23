import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AceIt! Student Assignment Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased bg-gray-50 min-h-screen`}
      >
        <div className="dashboard-container">
          {/* Header / NavBar */}
          <nav id="navbar" className="flex items-center justify-between px-4 py-4 bg-clean-slate shadow">
            <div className="flex items-center gap-4">
              <div className="logo-container">
                <img src="/aceit-logo.png" className="h-12 w-12" alt="AceIt! Logo" />
              </div>
              <ul className="flex gap-6 ml-4 text-midnight font-medium">
                <li>
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li>
                  <a href="#" className="nav-link">Assignments</a>
                </li>
                <li>
                  <a href="#" className="nav-link">Tasks</a>
                </li>
                <li>
                  <a href="#" className="nav-link">Calendar</a>
                </li>
                <li>
                  <a href="#" className="nav-link">Ace.AI</a>
                </li>
                <li>
                  <a href="#" className="nav-link">Resources</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right mr-2">
                <div className="font-semibold">Chloe Tan</div>
                <div className="text-xs text-gray-500">Business Studies</div>
              </div>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile"
                className="w-10 h-10 rounded-full border-2"
                style={{
                  borderColor: "var(--aceit-acing-green)"
                }} />
            </div>
          </nav>
          <div className="main-container mx-auto py-6 px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
