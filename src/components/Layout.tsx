import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-black">
      <main className="flex-1 relative">{children}</main>
    </div>
  );
}
