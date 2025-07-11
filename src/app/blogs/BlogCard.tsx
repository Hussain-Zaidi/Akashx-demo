import React from "react";
import { useRouter } from 'next/navigation';
interface BlogCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  documentId:string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  title,
  author,
  date,
  excerpt,
  image,
  documentId,
}) => {
  const router = useRouter();
    const handleClick = () => {
    router.push(`/blog/${documentId}`);
  };
  return (
    <div onClick={handleClick} className="text-white overflow-hidden flex md:flex-col flex-row shadow-[0_0_10px_rgba(117,186,255,0.2)] hover:shadow-[0_0_40px_rgba(117,186,255,0.2)] rounded-[20px] border-[#75BAFF]  border-opacity-100 border-[0.4px] cursor-pointer">
      <div className="flex-shrink-0 md:w-[320px] md:h-[244px] h-[340px] aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-[30px] md:p-[20px_16px]">
        <div>
          <span className="text-[16px] md:text-[12px] bg-[#a3b8d91a] text-[#A3B8D9] p-[12px_16px] md:p-[8px_12px] rounded-[16px] md:rounded-[10px] inline-block mb-[30px] md:mb-[16px]">
            {category}
          </span>
          <h3 className="text-[#CDDAED] text-[26px] md:text-[18px] font-semibold mb-[22px] md:mb-[12px] leading-[32px] md:leading-[23px]">{title}</h3>
          <p className="text-[20px] leading-[26px] md:text-[13px] md:leading-[18px] text-[#B8D0F2] mb-[16px]">
            {author} • {"Jul 11, 2025"}
          </p>
        </div>
          <p className="text-[22px] leading-[28px] md:text-[14px] md:leading-[18px] text-[#B8D0F2] line-clamp-3 justify-self-end">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
