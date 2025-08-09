export const metadata = {
  title: "Dentalverse - Comprehensive List of Features",
  description:
    "Explore the comprehensive list of all features offered by Dentalverse, your ultimate tool for project, task, and team management.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/features/all",
    description:
      "Dentalverse offers intuitive boards and tools to visualize, manage, and optimize project workflows, keeping your team aligned and tasks on track.",
    siteName: "Dentalverse - Work, Project, and Task Management App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentalverse - Comprehensive List of Features",
    description:
      "Discover the powerful features of SCALE to streamline your projects and tasks.",
    images: ["https://scale.ac/share.png"],
    site: "@scaleapp",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
