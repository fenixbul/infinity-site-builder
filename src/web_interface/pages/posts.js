import React from "react"; 
import Layout from "../ui/components/Layout";
import { format } from "date-fns";
import HeroSection from "../ui/components/Sections/HeroSection";
import Link from "next/link";

const heroSection = {
  backgroundImage: "/img/posts-cover.jpg",
  title: "Публикации",
  text: "center"
};

const publications = [
  {
    id: 1,
    title: "Излезе от печат петият календар за 2025г. със снимки на Жеравна",
    link: "/posts/2025/calendar",
  },
  {
    id: 2,
    title: "Какво направихме през 2023 г.",
    link: "/posts/2023/year-overview"
  },
  {
    id: 3,
    title: "Фонд Жеравна преиздаде книгата ЖЕРАВНА от Д. Константинов",
    link: "/posts/book"
  },
];

export default function PostsPage() {
  return (
    <Layout>
    <div className="bg-primary-bg">
      <HeroSection {...heroSection} />
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-6">
          {publications.map((post) => (
            <Link href={post.link} className="block">
              <div
                key={post.id}
                className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className={`text-2xl font-semibold text-gray-800 ${post.description ? 'mb-2' : ''}`}>{post.title}</h2>
                {post.description && 
                  <>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                  </>
                }
                {post.date && 
                  <>
                    <div className="text-sm text-gray-500">
                      <p>{format(new Date(post.date), "MMMM d, yyyy")}</p>
                    </div>
                  </>
                }
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
