import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Channel Scheduler – Schedule Content Like TV Channels",
  description: "Create scheduled programming blocks on YouTube channels with automatic playlist management. Built for content creators, educational channels, and streaming services."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a026c674-6722-467f-81ef-61d248ac0346"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
