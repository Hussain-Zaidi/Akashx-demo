// app/blog/[documentId]/layout.tsx

import { generateMetadata } from './metadata'; // ✅ Import metadata function
export { generateMetadata }; // ✅ Re-export so Next.js can find it


export default function BlogLayout({
  children,
  // params,
}: {
  children: React.ReactNode;
  // params: { documentId: string };
}) {
  return <>{children}</>;
}