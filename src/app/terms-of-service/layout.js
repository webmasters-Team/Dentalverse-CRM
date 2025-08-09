export const metadata = {
  title: "Dentalverse - Terms of Service Agreement",
  description:
    "Understand the terms and conditions for using Dentalverse's project management platform.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/terms-of-service",
    description:
      "Review the terms and conditions that govern your use of Dentalverse's services.",
      siteName: "Dentalverse - Work, Project and Task management App.",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}