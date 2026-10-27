import { ExternalLink } from '@/components/external-link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { newsItems } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('News | Hojin Chu', 'Recent preprints, conference presentations, and research updates from Hojin Chu.', '/news/');

function NewsPost({ item, featured = false }: { item: (typeof newsItems)[number]; featured?: boolean }) {
  return (
    <article className={`post${featured ? ' post--lead' : ''}${item.image ? ' post--with-image' : ''}`}>
      <div className="post-meta"><time dateTime={item.dateTime}>{item.date}</time><span>{item.label}</span></div>
      <div className="post-copy">
        <h2 className="post-title"><ExternalLink href={item.href}>{item.title}</ExternalLink></h2>
        <p className="post-summary">{item.text}</p>
      </div>
      {item.image && (
        <figure className={`post-media post-media--${item.image.kind ?? 'poster'}`}>
          <ExternalLink href={item.image.href ?? item.href} aria-label={`View ${item.image.alt}`}>
            <img src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading={featured ? 'eager' : 'lazy'} decoding="async" />
          </ExternalLink>
          {(item.image.caption || item.image.sourceUrl) && (
            <figcaption>
              {item.image.caption && <span>{item.image.caption}</span>}
              {item.image.sourceUrl && <ExternalLink href={item.image.sourceUrl}>Source: {item.image.credit} ↗</ExternalLink>}
            </figcaption>
          )}
        </figure>
      )}
    </article>
  );
}

export default function NewsPage() {
  const [latest, ...earlierPosts] = newsItems;

  return (
    <>
      <SiteHeader active="news" />
      <main>
        <header className="posts-header page-shell" id="top">
          <h1>News<span aria-hidden="true">.</span></h1>
          <p>New preprints, conference presentations, and other research updates, listed from the most recent.</p>
        </header>
        <div className="posts page-shell">
          {latest && <NewsPost item={latest} featured />}
          <section className="posts-archive" aria-label="Earlier posts">
            <p className="posts-section-label">Earlier posts</p>
            {earlierPosts.map((item) => <NewsPost item={item} key={`${item.date}-${item.title}`} />)}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
