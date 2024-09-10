import { Header } from "@/components/header";

const articles = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    description:
      "Learn how to use React Hooks to manage state and side effects in your functional components.",
    slug: "intro-to-react-hooks",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    description:
      "Discover how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
    slug: "responsive-layouts-tailwind",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Next.js 13: What's New and Exciting",
    description:
      "Explore the latest features and improvements in Next.js 13, including the new App Router.",
    slug: "nextjs-13-whats-new",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for React Development",
    description:
      "Learn how to leverage TypeScript to write more robust and maintainable React applications.",
    slug: "typescript-react-best-practices",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Optimizing Performance in React Applications",
    description:
      "Discover techniques and tools for improving the performance of your React applications.",
    slug: "optimizing-react-performance",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Introduction to GraphQL with React and Apollo",
    description:
      "Get started with GraphQL in your React applications using Apollo Client for efficient data fetching.",
    slug: "graphql-react-apollo-intro",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    </div>
  );
}
