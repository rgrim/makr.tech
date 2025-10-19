'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/i18n/LanguageProvider';
import styles from './Blog.module.css';

// Interface pour les données de post
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

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const { t } = useI18n();

  return (
    <div>
      <div className={styles.postsGrid}>
        {posts.length === 0 ? (
          <div className={styles.noPosts}>{t.blog.noPosts}</div>
        ) : (
          posts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post._id} className={styles.postCard}>

              {/* Ajouter le conteneur et l'image */}
              {post.mainImage?.url && ( // On vérifie si l'image existe
                <div className={styles.imageContainer}>
                  <Image
                    src={post.mainImage.url} // On utilise notre fonction pour créer l'URL
                    alt={`${t.blog.coverImageAlt} ${post.title}`}
                    fill={true}
                    className={styles.postImage}
                  />
                </div>
              )}

              {/* On enveloppe le texte dans une div pour mieux le styler */}
              <div className={styles.cardContent}>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className={styles.readMore}>{t.blog.readMore}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
