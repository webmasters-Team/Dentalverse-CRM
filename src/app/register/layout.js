export const metadata = {
  title: "Dentalverse - Sign Up and Get Started",
  description:
    "Join Dentalverse today and take the first step towards seamless project management.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/register",
    description:
      "Create your Dentalverse account and start organizing, prioritizing, and tracking your projects effortlessly.",
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