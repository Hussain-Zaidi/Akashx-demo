// app/blog/[documentId]/metadata.ts
import { STRAPI_URL } from '@/utils/url';
import type { Metadata, ResolvingMetadata } from 'next';


async function getPostData(documentId: string) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/articles/${documentId}?populate[cover][populate]=*&populate[author][populate]=*&populate[category][populate]=*&populate[blocks][populate]=*`
    );
    const json = await res.json();
    const article = json.data;

    if (!article) {
      return {
        title: 'Blog Not Found | AkashX',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${article.title} | AkashX`,
      description: article.description || `This is the description for the blog post titled "${documentId.replace(/-/g, ' ')}".`,
      image: `${STRAPI_URL}${article.cover?.url || '/default-image.jpg'}`,
      author: article.author?.name || 'AkashX Team',
    };
  } catch (error) {
    console.error('Metadata fetch failed:', error);
    return {
      title: 'Error | AkashX',
      description: 'An error occurred while fetching blog metadata.',
    };
  }
}

export async function generateMetadata(
  {  params }: { params: Promise<{ documentId: string }>;}
) {


  const {documentId} = await params;
  
  
  const id = documentId;
  const post = await getPostData(id);
  

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${STRAPI_URL}/blog/${id}`,
      images: [
        {
          url: post.image ?? '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image ?? ''],
    },
  };
}
