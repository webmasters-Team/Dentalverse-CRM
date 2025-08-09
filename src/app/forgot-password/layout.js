export const metadata = {
  title: "Dentalverse - Forgot Password Page",
  description:
    "Easily reset your password and regain access to your Dentalverse account.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/forgot-password",
    description:
      "Easily reset your password and regain access to your Dentalverse account.",
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