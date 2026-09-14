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
        <PageIntro eyebrow="News / 소식" title="Recent work &" accent="appearances.">
          <p>New preprints, conference presentations, and other research updates, listed from the most recent.</p>
        </PageIntro>
        <section className="content-section page-shell news-list">
          {newsItems.map((item, index) => (
            <article className="news-row" key={`${item.date}-${item.title}`}>
              <div className="news-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="news-date"><time>{item.date}</time><span>{item.label}</span></div>
              <div><h2><ExternalLink href={item.href}>{item.title}</ExternalLink></h2><p>{item.text}</p></div>
              <ExternalLink className="news-arrow" href={item.href} aria-label={`Open ${item.title}`}>↗</ExternalLink>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
