// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client'; // Importez le client
import { urlForImage } from '../../../sanity/lib/image';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import styles from './Blog.module.css';
import BlogHeading from './BlogHeading';

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

// La page est maintenant "async" pour permettre le "await"
export default async function BlogIndexPage() {
  const posts = await getPosts();
  
  return (
    <div className={styles.container}>
    <div className={styles.hero}>
      <BlogHeading />
    </div>
    <div >
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id} className={styles.postCard}>

            {/* 4. Ajouter le conteneur et l'image */}
            {post.mainImage?.url && ( // On vérifie si l'image existe
              <div className={styles.imageContainer}>
                <Image
                  src={post.mainImage.url} // On utilise notre fonction pour créer l'URL
                  alt={`Image de couverture pour ${post.title}`}
                  fill={true}
                  className={styles.postImage}
                />
              </div>
            )}

            {/* On enveloppe le texte dans une div pour mieux le styler */}
            <div className={styles.cardContent}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className={styles.readMore}>Lire la suite →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}