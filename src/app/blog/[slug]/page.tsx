// app/blog/[slug]/page.tsx
import { client } from '../../../../sanity/lib/client';
import { PortableText, PortableTextComponents } from '@portabletext/react'; // Importez le composant
import styles from './Post.module.css';

interface Post {
  title: string;
  body: any[]; // Le type du body est complexe, "any[]" suffit pour l'instant
}

// Fonction pour récupérer UN seul article basé sur son slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body
  }`;
  const post = await client.fetch<Post>(query, { slug }); // On passe le slug en paramètre
  return post;
}

const ptComponents: PortableTextComponents = {
    block: {
      // Applique les styles aux différents types de titres
      h1: ({children}) => <h1 className={styles.h1}>{children}</h1>,
      h2: ({children}) => <h2 className={styles.h2}>{children}</h2>,
      h3: ({children}) => <h3 className={styles.h3}>{children}</h3>,
  
      // Style pour les citations si vous en utilisez
      blockquote: ({children}) => <blockquote className={styles.blockquote}>{children}</blockquote>,
    },
    list: {
      // Applique les styles aux listes à puces
      bullet: ({children}) => <ul className={styles.ul}>{children}</ul>,
    },
    listItem: {
        bullet: ({children}) => <li className={styles.li}>{children}</li>,
      },
    marks: {
      // Applique les styles aux textes en gras, italique, etc.
      strong: ({children}) => <strong className={styles.strong}>{children}</strong>,
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel} className={styles.link}>
            {children}
          </a>
        )
      },
    }
  }

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.portableText}>
        {/* Le composant PortableText sait comment afficher le contenu de Sanity */}
        <PortableText value={post.body} components={ptComponents}/>
      </div>
    </article>
  );
}