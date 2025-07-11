// app/blog/[documentId]/page.tsx
'use client';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";
import { Button } from "@/components/Button";
import { Img } from "@/components/Img";
import ProfileBlogCard from "@/app/blogs/ProfileBlogCard";
import { Heading } from "../../../components";

const STRAPI_URL = 'https://akashx.ai';

// Block types
interface QuoteBlock {
  __component: 'shared.quote';
  id: number;
  title: string;
  body: string;
}

interface MediaBlock {
  __component: 'shared.media';
  id: number;
  file: {
    url: string;
    alternativeText?: string;
  };
}

interface RichTextBlock {
  __component: 'shared.rich-text';
  id: number;
  body: string;
}

type Block = QuoteBlock | MediaBlock | RichTextBlock;

export default function BlogPage() {
  const params = useParams();
  const documentId = Array.isArray(params?.documentId) ? params.documentId[0] : params?.documentId;

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
const [activeId, setActiveId] = useState<string | null>(null);



  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/articles/${documentId}?populate[cover][populate]=*&populate[author][populate]=*&populate[category][populate]=*&populate[blocks][populate]=*`
        );
        const json = await res.json();
        setArticle(json.data);
      } catch (err) {
        console.error('Failed to fetch article:', err);
      } finally {
        setLoading(false);
      }
    }

    if (documentId) fetchArticle();
  }, [documentId]);

  useEffect(() => {
  const defaultTitle = 'AkashX Blog';

  if (article?.title) {
    document.title = `${article.title} | ${defaultTitle}`;
  }

  return () => {
    document.title = defaultTitle;
  };
}, [article?.title]);


useEffect(() => {
  if (!article) return;

  const headings = document.querySelectorAll('[id^="scroll-"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveId(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }
  );

  headings.forEach((heading) => observer.observe(heading));

  return () => observer.disconnect();
}, [article]);


// useEffect(() => {
    
//     function handleScroll() {
//         const sidebar = document.getElementById("sidebar");
//         const container = document.getElementById("needToInView");
        
//         const scrollTop = (document.body.scrollTop);
//         const offsetTop = (container?.offsetTop || 0);
//         const sidebarHeight = (sidebar?.scrollHeight || 0);
//         const acc = (window.innerWidth/1920)
        
//         if (scrollTop > offsetTop) {
//             let top = scrollTop - offsetTop ;
//             // console.log('topbefore', top);
//             top = top * acc
//             // console.log('topafter', top);
//             sidebar!.style.position = "fixed";
//             sidebar!.style.top = top+"px";
//         } else {
//             sidebar!.style.position = "static";
//             sidebar!.style.top = "auto";
//         }
//     }
    
//     document.body.addEventListener("scroll", handleScroll);
    
//     return () => {
//         document.body.removeEventListener("scroll", handleScroll);
//     };
// }, []);



  if (loading) return <div className="text-center mt-10 text-gray-400">Loading...</div>;
  if (!article) return <div className="text-center mt-10 text-red-400">Article not found.</div>;

  const date = new Date(article.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
  const quoteBlocksWithTitles = article.blocks?.filter(
    (block: { __component: string; title: string; }) =>
      block.__component === 'shared.quote' &&
      block.title &&
      block.title.trim() !== ''
  ) ?? [];

  return (
        <div className="w-full">
         
            {/* <Header /> */}
    <div className="max-w-[1240px] mx-auto  m-[220px_0_148px] md:m-[120px_20px_42px] pb-[120px] border-b-2 border-[#555e9480] md:border-0">
        <div>
            <h1 className="text-[#B8D0F2] text-[42px] md:text-[24px] font-bold mb-[30px] md:mb-[14px] ">{article.title}</h1>
            <p className="text-[#B8D0F2] text-[26px] md:text-[16px] mb-[46px] md:mb-[28px]">{article.description}</p>
            <div className="relative mb-[71px] md:mb-[40px]" >
                <div className="text-[22px] leading-[26px] font-bold md:text-[14px] md:leading-normal md:font-semibold text-[#CDDAED] absolute bottom-0 w-full bg-[linear-gradient(180deg,_rgb(204_230_255_/_90%),_rgb(8_12_38_/_90%))] h-[124px] md:h-[60px] flex items-center p-5">
                    {article.author?.name && <span>By {article.author.name}&nbsp;</span>}
                    {date && <span>•&nbsp;{'Jul 11, 2025'}</span>}
                </div>
                
                {article.cover?.url && (
                    <img
                    src={`${STRAPI_URL}${article.cover.url}`}
                    alt={article.cover.alternativeText || article.title}
                    className="w-full rounded-lg h-[704px] md:h-[344px] object-cover"
                    />
                )}
            </div>
        </div>

        <div className='flex gap-[60px] flex-row md:flex-col' >

            <div className='w-full  //h-[calc(100vh)] //overflow-auto' >
                <div className="space-y-[80px] md:space-y-[48px] blog-block ">
                    {article.blocks?.map((block: Block, index: number) => {
                    switch (block.__component) {
                        case 'shared.quote':
                        return (
                            <div
                            id={`scroll-${block.id}-1`}
                            key={`${block.__component}-${block.id}-${index}`} 
                            className="">
                                <h2 className="text-[#B8D0F2] font-bold text-[24px] md:text-[18px] leading-[28px] md:leading-[18px] mb-4">{block.title}</h2>
                                {/* <p className="text-[#B8D0F2] text-[22px] md:text-[14px] leading-[28px] md:leading-[18px] whitespace-pre-line">{block.body}</p> */}
                                <div
                                className="prose max-w-none text-[#B8D0F2] text-[22px] md:text-[14px] leading-[28px] md:leading-[18px]"
                                dangerouslySetInnerHTML={{ __html: block.body.replace(/\n/g, '<br/>') }}
                                ></div>
                            </div>
                        );

                        case 'shared.media':
                        return (
                            block.file?.url && (
                            <img
                                key={`${block.__component}-${block.id}-${index}`}
                                src={`${STRAPI_URL}${block.file.url}`}
                                alt={block.file.alternativeText || 'Media'}
                                className="w-full max-h-[474px] md:max-h-[240px] rounded-lg shadow-md mt-[-38px] object-cover"
                                style={{marginTop:'42px'}}
                            />
                            )
                        );

                        case 'shared.rich-text':
                        return (
                            <div
                            key={`${block.__component}-${block.id}-${index}`}
                            className="prose max-w-none text-[#B8D0F2] text-[22px] md:text-[14px] leading-[28px] md:leading-[18px]"
                            dangerouslySetInnerHTML={{ __html: block.body.replace(/\n/g, '<br/>') }}
                            ></div>
                        );

                        default:
                        return null;
                    }
                    })}
                </div>
            </div>
            



            
            <div id='needToInView' className='w-[280px] md:w-full min-w-[280px] relative'>
                {/* <div className="//sticky top-[120px] self-start" > */}
                <div id="sidebar" className="self-start">
                    {quoteBlocksWithTitles.length > 0 && (
                      <>
                        <div className='text-[22px] text-[#B8D0F2] mb-[16px] md:hidden'>In this article</div>
                        <div className='border-t-2 border-[#555e9480] space-y-[20px] pt-[30px] mb-[80px] md:hidden'>
                          {quoteBlocksWithTitles.map((block: { __component: any; id: any; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: any) => (
                            <div key={`${block.__component}-${block.id}-${index}`}>
                              <div
                                onClick={() => {document.querySelector(`#scroll-${block.id}-1`)?.scrollIntoView({ behavior: 'smooth',block: 'center' });}}
                                className={`text-[22px] md:text-[14px] leading-[28px] md:leading-[18px] mb-2 line-clamp-1 cursor-pointer ${
                                  activeId === `scroll-${block.id}-1`
                                    ? 'text-[#3499FF] font-semibold'
                                    : 'text-[#B8D0F2]'
                                }`}
                              >
                                {block.title}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    <div className='md:pt-[40px] md:border-t-2 md:border-[#555e9480] text-[22px] text-[#B8D0F2] mb-[16px] md:mb-0 md:text-center' >Share this article</div>
                    <div className='border-t-2 md:border-0 border-[#555e9480] space-y-[20px] pt-[30px] md:pt-[24px]' >

                            <div className="flex gap-[26px] md:gap-[18px] md:justify-center">
                                <Button className="flex h-[44px] w-[44px] md:h-[42px] md:w-[42px] items-center justify-center rounded-[22px] border border-solid border-[#3499FF] px-2.5  hover:bg-[#a3b8d91a]">
                                    <Img src="link.svg" width={24} height={24} className="w-[70%]" />
                                </Button>
                                <Link href="https://www.linkedin.com/company/akashx-inc/" rel="noreferrer">
                                    <Button className="flex h-[44px] w-[44px] md:h-[42px] md:w-[42px] items-center justify-center rounded-[22px] border border-solid border-[#3499FF] px-2.5  hover:bg-[#a3b8d91a]">
                                        <Img src="formkit_linkedin.svg" width={22} height={22} />
                                    </Button>
                                </Link>
                                <Button className="flex h-[44px] w-[44px] md:h-[42px] md:w-[42px] items-center justify-center rounded-[22px] border border-solid border-[#3499FF] px-2.5  hover:bg-[#a3b8d91a]">
                                    <Img src="proicons_x-twitter.svg" width={24} height={24} className="w-[70%]" />
                                </Button>
                            </div>

                    </div>
                </div>
            </div>




            
        </div>
    </div>


        <div className="px-[100px] md:px-[20px] pb-[240px] md:pb-[110px]">
            <Heading
            size="text4xl"
            as="h2"
            className="bg-gradient1 bg-clip-text font-montserrat text-[36px] text-transparent md:text-[24px] font-bold md:text-center mb-[62px] md:mb-[42px]">
                More Updates
            </Heading>
            <ProfileBlogCard excludeId={article.documentId} />
        </div>


          <div>
            <Footer />
          </div>
        </div>
  );
}