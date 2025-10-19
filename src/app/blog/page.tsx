// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client'; // Importez le client
import { urlForImage } from '../../../sanity/lib/image';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import styles from './Blog.module.css';
import BlogHeading from './BlogHeading';
import BlogContent from './BlogContent';

// Définissons le type de données que nous attendons de Sanity
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    url: string;
  };
  excerpt: string;
  
}

// Fonction pour récupérer les données
async function getPosts() {
  // La requête GROQ pour récupérer tous les articles de type "post"
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    "mainImage": image.asset->{url}, // <-- MODIFICATION IMPORTANTE
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
  }`;
  const posts = await client.fetch<Post[]>(query);
 // console.log("Données reçues de Sanity :", JSON.stringify(posts, null, 2));
  return posts;
}

// La page utilise maintenant un serveur component pour récupérer les données
export default async function BlogIndexPage() {
  const posts = await getPosts();
  
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <BlogHeading />
      </div>
      <BlogContent posts={posts} />
    </div>
  );
}