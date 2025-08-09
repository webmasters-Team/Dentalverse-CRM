import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./context/authProvider";
import Providers from "../components/providers";

export const metadata: Metadata = {
  title: "Dentalverse - Work, Project and Task management App.",
  description:
    "Dentalverse is a user-friendly work management software offering over 20 powerful features for seamless planning, tracking, and collaboration.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac",
    description:
      "Dentalverse is a user-friendly work management software offering over 20 powerful features for seamless planning, tracking, and collaboration.",
    siteName: "Dentalverse - Work, Project and Task management App.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
