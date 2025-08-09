import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentalverse - Login Page",
  description:
    "Securely log in to your Dentalverse account and manage your projects efficiently.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/login",
    description:
      "Securely log in to your Dentalverse account and manage your projects efficiently",
    siteName: "Dentalverse - Work, Project, and Task Management App",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
