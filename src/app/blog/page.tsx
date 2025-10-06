// app/blog/page.tsx
import Link from 'next/link';
import { client } from '../../../sanity/lib/client'; // Importez le client
import styles from './Blog.module.css';

// Définissons le type de données que nous attendons de Sanity
interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
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
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
  }`;
  const posts = await client.fetch<Post[]>(query);
  return posts;
}

// La page est maintenant "async" pour permettre le "await"
export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Le Blog Makr.tech</h1>
      <p className={styles.subtitle}>
        Réflexions sur la technologie, la stratégie d'entreprise et la résolution de problèmes complexes.
      </p>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className={styles.readMore}>Lire la suite →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}