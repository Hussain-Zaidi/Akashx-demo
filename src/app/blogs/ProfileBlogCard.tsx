'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { STRAPI_URL } from "@/utils/url";

interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  author?: {
    name: string;
  } | null;
  category?: {
    name: string;
  } | null;
  cover?: {
    url: string;
  } | null;
  blocks?: { body: string }[] | null;
}

interface ProfileBlogCardProps {
  excludeId?: string;
}

const ProfileBlogCard: React.FC<ProfileBlogCardProps> = ({ excludeId }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogRes = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const blogJson = await blogRes.json();
        let data = blogJson?.data ?? [];

        if (excludeId) {
          data = data.filter((article: Article) => article.documentId !== excludeId);
        }

        setArticles(data);
      } catch (error) {
        console.error("Error fetching blog articles:", error);
      }
    };

    fetchData();
  }, [excludeId]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-[40px]">
      {articles.map((article) => {
        const {
          documentId,
          title,
          description,
          createdAt,
          author,
          category,
          cover,
          blocks,
        } = article;

        const categoryName = category?.name || "Uncategorized";
        const authorName = author?.name || "Anonymous";
        const image = cover?.url
          ? `${STRAPI_URL}${cover.url}`
          : "/default-image.jpg";

        const date = new Date(createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        return (
          <div
            key={documentId}
            onClick={() => router.push(`/blog/${documentId}`)}
            className="text-white overflow-hidden flex md:flex-col flex-row shadow-[0_0_10px_rgba(117,186,255,0.2)] hover:shadow-[0_0_40px_rgba(117,186,255,0.2)] rounded-[20px] border-[#75BAFF] border-opacity-100 border-[0.4px] cursor-pointer"
          >
            <div className="flex-shrink-0 md:w-[320px] md:h-[244px] h-[260px] aspect-square">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-[35px] md:p-[20px_16px]">
              <div>
                <span className="hidden md:block md:w-fit text-[16px] md:text-[12px] bg-[#a3b8d91a] text-[#A3B8D9] p-[12px_16px] md:p-[8px_12px] rounded-[16px] md:rounded-[10px] inline-block mb-[30px] md:mb-[16px]">
                  {categoryName}
                </span>
                <h3 className="text-[#CDDAED] text-[26px] md:text-[18px] font-semibold mb-[16px] md:mb-[12px] leading-[32px] md:leading-[23px]">
                  {title}
                </h3>
                <p className="text-[20px] leading-[26px] md:text-[13px] md:leading-[18px] text-[#B8D0F2] mb-[24px]">
                  {authorName} • {date}
                </p>
              </div>
              <p className="text-[22px] leading-[28px] md:text-[14px] md:leading-[18px] text-[#B8D0F2] line-clamp-2 md:line-clamp-3 justify-self-end">
                {blocks?.[0]?.body ?? description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileBlogCard;
