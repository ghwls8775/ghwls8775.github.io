import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { newsItems } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('News | Hojin Chu', 'Recent preprints, conference presentations, and research updates from Hojin Chu.', '/news/');

export default function NewsPage() {
  return (
    <>
      <SiteHeader active="news" />
      <main>
        <PageIntro eyebrow="News" title="Recent work &" accent="appearances.">
          <p>New preprints, conference presentations, and other research updates, listed from the most recent.</p>
        </PageIntro>
        <section className="content-section page-shell news-list">
          {newsItems.map((item) => (
            <article className={`news-article${item.image ? ' news-article--illustrated' : ''}${item.image?.kind ? ' news-article--wide-image' : ''}`} key={`${item.date}-${item.title}`}>
              <div className="news-content">
                <div className="news-meta"><span>{item.label}</span><time dateTime={item.dateTime}>{item.date}</time></div>
                <h2 className="news-title"><ExternalLink href={item.href}>{item.title}</ExternalLink></h2>
                <p className="news-summary">{item.text}</p>
                <ExternalLink className="news-source" href={item.href} aria-label={`Open source for ${item.title}`}>View {item.label === 'Preprint' ? 'preprint' : item.label === 'Talk' ? 'talk' : 'event'} <span aria-hidden="true">↗</span></ExternalLink>
              </div>
              {item.image && (
                <figure className="news-figure">
                  <ExternalLink href={item.image.href ?? item.href} aria-label={`View ${item.image.alt}`}>
                    <img src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
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
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
