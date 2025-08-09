export const metadata = {
  title: "Dentalverse - Plan, Track, and Manage Your Sprints",
  description: "Manage your sprints with our robust Sprint Management tool.",
  openGraph: {
    images: ["https://scale.ac/share.png"],
    type: "website",
    url: "https://scale.ac/features/sprint",
    description: "Manage your sprints with our robust Sprint Management tool.",
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