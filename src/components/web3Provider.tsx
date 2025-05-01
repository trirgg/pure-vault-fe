import React from "react";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, defaultConfig, darkTheme } from "@xellar/kit";
 
const walletConnectEnv = import.meta.env.VITE_WALLETCONNECT_ID;
const xellarAppId = import.meta.env.VITE_XELLAR_APP_ID;
 
const config = defaultConfig({
  appName: "Xellar",
  // Required for WalletConnect
  walletConnectProjectId: walletConnectEnv,
 
  // Required for Xellar Passport
  xellarAppId: xellarAppId,
  xellarEnv: "sandbox",
  ssr: true, // Use this if you're using Next.js App Router
}) as Config;
 
const queryClient = new QueryClient();
 
export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider
          theme={darkTheme}
        >
          {children}
        </XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};