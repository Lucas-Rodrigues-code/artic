import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const articles = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    description:
      "Learn how to use React Hooks to manage state and side effects in your functional components.",
    slug: "intro-to-react-hooks",
    imageUrl: "/artic.jpg",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    description:
      "Discover how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
    slug: "responsive-layouts-tailwind",
    imageUrl: "/artic.jpg",
  },
  {
    id: 3,
    title: "Next.js 13: What's New and Exciting",
    description:
      "Explore the latest features and improvements in Next.js 13, including the new App Router.",
    slug: "nextjs-13-whats-new",
    imageUrl: "/artic.jpg",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for React Development",
    description:
      "Learn how to leverage TypeScript to write more robust and maintainable React applications.",
    slug: "typescript-react-best-practices",
    imageUrl: "/artic.jpg",
  },
  {
    id: 5,
    title: "Optimizing Performance in React Applications",
    description:
      "Discover techniques and tools for improving the performance of your React applications.",
    slug: "optimizing-react-performance",
    imageUrl: "/artic.jpg",
  },
  {
    id: 6,
    title: "Introduction to GraphQL with React and Apollo",
    description:
      "Get started with GraphQL in your React applications using Apollo Client for efficient data fetching.",
    slug: "graphql-react-apollo-intro",
    imageUrl: "/artic.jpg",
  },
];

export function CardArticle() {
  return articles.map((article) => (
    <Card key={article.id} className="flex flex-col">
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <h1></h1>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button asChild>
          <Link href={`/articles/${article.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
      <h2>
        <div></div>
      </h2>
    </Card>
  ));
}
