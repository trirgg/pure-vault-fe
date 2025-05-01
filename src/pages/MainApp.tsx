// src/pages/MainApp.tsx
import MainNavbar from "../components/MainNavbar";

const MainApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNavbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to VaultFi App</h1>
        <p className="text-lg text-gray-600">
          Ini adalah halaman utama aplikasi VaultFi.<br />
          Fitur staking, vault, dan lainnya akan muncul di sini.
        </p>
      </main>
    </div>
  );
};

export default MainApp;
