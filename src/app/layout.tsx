import type { Metadata } from "next";
import { StoreProvider } from "./providers";
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
        <StoreProvider>
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-8">
                  <div className="logo-container">
                    <img src="/aceit-logo.png" className="h-12 w-12" alt="AceIt! Logo" />
                  </div>

                  <nav className="md:flex space-x-6">
                    <a href="#" className="nav-link text-gray-600 hover:text-gray-900 px-2 py-1">Home</a>
                    <a href="/assignments/" className="nav-link active text-gray-800 hover:text-gray-900 px-2 py-1">Assignments</a>
                    <a href="#" className="nav-link text-gray-600 hover:text-gray-900 px-2 py-1">Tasks</a>
                    <a href="#" className="nav-link text-gray-600 hover:text-gray-900 px-2 py-1">Calendar</a>
                    <a href="#" className="nav-link text-gray-600 hover:text-gray-900 px-2 py-1">Ace.AI</a>
                    <a href="#" className="nav-link text-gray-600 hover:text-gray-900 px-2 py-1">Resources</a>
                  </nav>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <button id="notificationBtn" className="text-gray-600 hover:text-gray-900 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                      </svg>
                      <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right mr-2">
                      <div className="font-semibold">Chloe Tan</div>
                      <div className="text-xs text-gray-500">Business Studies</div>
                    </div>
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile"
                      className="w-10 h-10 rounded-full border-2" style={{
                        borderColor: "var(--aceit-acing-green)"
                      }} />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="main-container mx-auto py-6 px-4">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
