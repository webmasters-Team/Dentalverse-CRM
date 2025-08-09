export const metadata = {
  title: "Dentalverse - Celebrate Work-Life Balance",
  description:
    "Our Holiday feature helps you keep track of public holidays and personal days off",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/features/holiday",
    description:
      "Our Holiday feature helps you keep track of public holidays and personal days off",
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