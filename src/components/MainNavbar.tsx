// src/components/MainNavbar.tsx
import { ConnectButton } from "@xellar/kit";

const MainNavbar = () => {
  // const { connect, isConnected, address, disconnect } = useConnect();

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-blue-800 tracking-tight">VaultFi</span>
      </div>
      <div>
       <ConnectButton/>
      </div>
    </nav>
  );
};

export default MainNavbar;
