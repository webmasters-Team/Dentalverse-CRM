export const metadata = {
  title: "Dentalverse - Changelog",
  description: "Changelog",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/contact",
    description: "Changelog",
    siteName: "Dentalverse - Changelog.",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
