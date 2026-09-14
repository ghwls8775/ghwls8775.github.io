import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TalkList } from '@/components/talk-list';
import { domesticTalks, internationalTalks, publicTalks } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Talks | Hojin Chu', 'International, domestic, and public presentations by graph theorist Hojin Chu.', '/talks/');

const talkMoments = [
  { src: '/talks/ilas-2025-talk.jpg', width: 1280, height: 759, caption: 'Photo from my talk at ILAS 2025' },
  { src: '/talks/ilas-2025-group.jpg', width: 1280, height: 756, caption: 'Group photo from ILAS 2025' },
  { src: '/talks/canadam-2025-group.jpg', width: 1280, height: 751, caption: 'Group photo from CanaDAM 2025' },
  { src: '/talks/dma-2026-group.jpg', width: 1280, height: 754, caption: 'Group photo from DMA 2026' },
] as const;

export default function TalksPage() {
  return (
    <>
      <SiteHeader active="talks" />
      <main>
        <PageIntro eyebrow="Talks" title="Sharing ideas," accent="building links.">
          <p>I present my work at international conferences, combinatorics workshops, seminars, and public programs that bring graph theory to wider audiences.</p>
        </PageIntro>

        <section className="content-section page-shell talks-page">
          <div className="talk-group">
            <div className="list-title"><h2>International presentations</h2><span>{String(internationalTalks.length).padStart(2, '0')}</span></div>
            <TalkList items={internationalTalks} />
          </div>
          <section className="talk-moments" aria-labelledby="talk-moments-title">
            <div className="talk-moments-heading">
              <div><p className="kicker">Conference moments</p><h2 id="talk-moments-title">Mathematics in community.</h2></div>
              <p>Talks are where ideas meet people—from a seminar room to an international conference.</p>
            </div>
            <div className="talk-photo-grid">
              {talkMoments.map((photo) => (
                <figure className="talk-photo-card" key={photo.src}>
                  <img src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          <div className="talk-group">
            <div className="list-title"><h2>Domestic presentations</h2><span>{String(domesticTalks.length).padStart(2, '0')}</span></div>
            <TalkList items={domesticTalks} />
          </div>
          <div className="talk-group">
            <div className="list-title"><h2>Public & outreach talks</h2><span>{String(publicTalks.length).padStart(2, '0')}</span></div>
            <div className="talk-list">
              {publicTalks.map(([event, date, place, title, links]) => (
                <article className="talk-row" key={title}>
                  <div className="talk-meta"><span>Outreach</span><time>{date}</time><small>{place}</small></div>
                  <div className="talk-main"><h3>{event}</h3><p>{title}</p></div>
                  <div className="talk-link">{links.map(([label, href]) => <ExternalLink key={href} href={href}>{label} ↗</ExternalLink>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
