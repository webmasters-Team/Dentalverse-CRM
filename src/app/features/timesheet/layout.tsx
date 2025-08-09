import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dentalverse - Efficient Timesheet Management",
  description:
    "Streamline your time tracking process with our comprehensive Timesheet Management tool.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/features/backlog",
    description:
      "Streamline your time tracking process with our comprehensive Timesheet Management tool.",
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
      <body>{children}</body>
    </html>
  );
}
