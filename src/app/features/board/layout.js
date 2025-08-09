export const metadata = {
  title: "Dentalverse - With Board Visualize and Manage Workflows Seamlessly",
  description:
    "Use intuitive boards to visualize and manage project workflows, keeping your team aligned and tasks moving forward.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/features/board",
    description:
      "Use intuitive boards to visualize and manage project workflows, keeping your team aligned and tasks moving forward.",
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
