"use client";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import BlogCard from "./BlogCard";
import { Heading } from "../../components";
import TesthomeRowOne from "../home/TesthomeRowOne";
import { STRAPI_URL } from "@/utils/url";

export default function BlogPage() {
  const [fetchedSection, setFetchedSection] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch homepage section (optional)
        const homeRes = await fetch(`${STRAPI_URL}/api/akashx-home-pages`);
        const homeJson = await homeRes.json();
        setFetchedSection(homeJson?.data?.[0] ?? null);

        // Fetch blog articles
        const blogRes = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const blogJson = await blogRes.json();
        setArticles(blogJson?.data ?? []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Helper to get full image URL
  const getImageUrl = (article: any) =>
    `${STRAPI_URL}${article?.cover?.formats?.medium?.url || article?.cover?.url || ""}`;

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-1 m-[220px_0_100px] md:m-[120px_0_42px]">
        <Heading
          size="text4xl"
          as="h2"
          className="bg-gradient1 bg-clip-text font-montserrat text-[60px] text-transparent md:text-[24px] font-bold md:text-center"
        >
          AkashX Blogs
        </Heading>
      </div>

      <div className="px-4 md:px-5 md:pb-[110px] pb-[80px]">
        <div className="max-w-[1240px] mx-auto space-y-[80px] md:space-y-[40px]">
          {articles.map((article, idx) => {
            const { title, createdAt, description, author, category,blocks,documentId } = article;
            const authorName = author?.name || "Unknown";
            const tempDescription = blocks[0].body ?? description;
            const date = new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <BlogCard
                key={article.id}
                category={category?.name || "Uncategorized"}
                title={title}
                author={authorName}
                date={date}
                excerpt={tempDescription}
                image={getImageUrl(article)}
                documentId={documentId}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-gray-900 py-[120px] lg:py-8 md:py-5 sm:py-4 mb-[56px] md:mb-0">
        {fetchedSection && <TesthomeRowOne fetchedSection={fetchedSection} />}
      </div>

      <Footer />
    </div>
  );
}
