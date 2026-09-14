import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TalkList } from '@/components/talk-list';
import { domesticTalks, internationalTalks, publicTalks } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Talks | Hojin Chu', 'International, domestic, and public presentations by graph theorist Hojin Chu.', '/talks/');

export default function TalksPage() {
  return (
    <>
      <SiteHeader active="talks" />
      <main>
        <PageIntro eyebrow="Talks / 발표" title="Sharing ideas," accent="building links.">
          <p>I present my work at international conferences, combinatorics workshops, seminars, and public programs that bring graph theory to wider audiences.</p>
        </PageIntro>

        <section className="content-section page-shell talks-page">
          <div className="talk-group">
            <div className="list-title"><h2>International presentations</h2><span>{String(internationalTalks.length).padStart(2, '0')}</span></div>
            <TalkList items={internationalTalks} />
          </div>
          <div className="talk-group">
            <div className="list-title"><h2>Domestic presentations</h2><span>{String(domesticTalks.length).padStart(2, '0')}</span></div>
            <TalkList items={domesticTalks} />
          </div>
          <div className="talk-group">
            <div className="list-title"><h2>Public & outreach talks</h2><span>{String(publicTalks.length).padStart(2, '0')}</span></div>
            <div className="talk-list">
              {publicTalks.map(([event, date, title, links]) => (
                <article className="talk-row" key={title}>
                  <div className="talk-meta"><span>Outreach</span><time>{date}</time></div>
                  <div><h3>{event}</h3><p>{title}</p></div>
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
