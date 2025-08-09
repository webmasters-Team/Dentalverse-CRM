export const metadata = {
  title: "Dentalverse - Contact Us",
  description: "Get in touch with the Dentalverse team for support, inquiries, or feedback.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/contact",
    description: "Reach out to the Dentalverse team for any support, inquiries, or feedback.",
    siteName: "Dentalverse - Work, Project and Task Management App.",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
