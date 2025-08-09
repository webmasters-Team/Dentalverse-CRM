import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentalverse - Feedback Form",
  description:
    "Your suggestions, complaints, and feedback help us improve Dentalverse.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/feedback",
    description:
      "Effortlessly organize, prioritize, and track all your project tasks in one place.",
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
