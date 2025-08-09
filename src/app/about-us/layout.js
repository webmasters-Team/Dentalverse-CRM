export const metadata = {
  title: "Dentalverse - Learn More About Dentalverse",
  description:
    "Discover what makes Dentalverse the ideal solution for managing your projects.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/product/about-pages",
    description:
      "Discover what makes Dentalverse the ideal solution for managing your projects.",
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
