// src/pages/Landing.tsx
import LandingLayout from "../layouts/LandingLayout";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <LandingLayout>
      {/* Header */}
      <header className="w-full py-6 px-4 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-2">
          {/* <img src="/logo.svg" alt="Logo" className="h-8 w-8" /> */}
          <span className="text-2xl font-bold text-blue-800 tracking-tight">VaultFi</span>
        </div>
        <nav>
          <Link
            to="/app"
            className="px-6 py-2 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
          >
            Launch App
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
          Grow your <span className="text-blue-600">ETH</span> with<br />
          Secure, Transparent, and Rewarding Vaults
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl">
          Staking, yield, dan fitur engaging dalam satu platform.  
          Aman, transparan, dan mudah digunakan untuk semua pengguna Web3 Indonesia.
        </p>
        <Link
          to="/app"
          className="inline-block px-8 py-3 rounded-full bg-blue-700 text-white font-bold text-lg shadow-lg hover:bg-blue-800 transition"
        >
          Launch App
        </Link>
      </section>

      {/* Fitur/Infografis Section */}
      <section className="py-16 bg-white/80">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              {/* Icon bisa pakai SVG atau emoji */}
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Keamanan Terjamin</h3>
            <p className="text-gray-600 text-center">
              Smart contract open-source, audit, dan transparan. Dana Anda aman.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Yield Kompetitif</h3>
            <p className="text-gray-600 text-center">
              Dapatkan return optimal dari strategi DeFi terbaik.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-3xl">🎁</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">Reward & Gamifikasi</h3>
            <p className="text-gray-600 text-center">
              Dapatkan tiket, point, dan kesempatan menang hadiah setiap staking.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VaultFi. All rights reserved. | 
        <a
          href="https://github.com/yourrepo"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <span className="mx-2">|</span>
        <a
          href="https://yourdocs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Documentation
        </a>
      </footer>
    </LandingLayout>
  );
};

export default Landing;
