export const metadata = {
  title: "Dentalverse - Privacy Policy Page",
  description:
    "Learn about how Dentalverse handles your data with our Privacy Policy.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/privacy-policy",
    description:
      "Learn about how Dentalverse handles your data with our Privacy Policy.",
    siteName: "Dentalverse - Work, Project, and Task Management App",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

