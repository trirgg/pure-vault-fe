// src/layouts/LandingLayout.tsx
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LandingLayout = ({ children }: Props) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]">
    {children}
  </div>
);

export default LandingLayout;
