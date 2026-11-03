import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { collaborators, preprints, published } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Research | Hojin Chu', 'Publications and submitted manuscripts in structural graph theory, digraphs, combinatorics, and combinatorial matrix theory.', '/research/');

export default function ResearchPage() {
  return (
    <>
      <SiteHeader active="research" />
      <main>
        <PageIntro title="Research" graph>
          <p>I study structural graph theory and discrete mathematics, focusing on cycles, connectivity-preserving deletion, common-neighbor problems in digraphs, and graph-based algorithms.</p>
        </PageIntro>

        <section className="content-section page-shell publications">
          <div className="section-heading compact">
            <div><p className="kicker">Research output</p><h2 className="publications-title">Publications & <em>submissions.</em></h2></div>
          </div>
          <div className="pub-columns">
            <div>
              <div className="list-title"><h3>Published</h3><span>{String(published.length).padStart(2, '0')}</span></div>
              <ol className="paper-list">
                {published.map(([title, authors, journal, paperUrl, arxiv], index) => (
                  <li key={title}>
                    <span className="paper-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4><ExternalLink href={paperUrl}>{title}</ExternalLink></h4>
                      <p className="paper-authors">{authors}</p>
                      <cite className="paper-journal">{journal}</cite>
                      <ExternalLink className="paper-link" href={arxiv}>arXiv ↗</ExternalLink>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="list-title"><h3>Submitted</h3><span>{preprints.length}</span></div>
              <ol className="paper-list">
                {preprints.map(([title, authors, href, id], index) => (
                  <li key={title}>
                    <span className="paper-number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h4><ExternalLink href={href}>{title}</ExternalLink></h4>{authors && <p className="paper-authors">{authors}</p>}<ExternalLink className="paper-link" href={href}>arXiv:{id} ↗</ExternalLink></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <section className="research-funding" aria-labelledby="research-funding-title">
            <div className="funding-heading"><h3 id="research-funding-title">Research funding</h3></div>
            <div className="funding-grid">
              <article className="funding-card">
                <p className="funding-provider">Korea Institute for Advanced Study</p>
                <h4>KIAS Individual Grant</h4>
                <p className="funding-detail">March 2025–February 2027</p>
                <p className="funding-reference">Grant CG101801</p>
                <div className="funding-amount"><strong>KRW 20,000,000</strong><span>Total · approximately USD 15,000</span></div>
              </article>
              <article className="funding-card">
                <p className="funding-provider">National Research Foundation of Korea</p>
                <h4>Basic Science Research Program</h4>
                <p className="funding-detail">Competition graphs of degree bounded digraphs</p>
                <div className="funding-amount"><strong>KRW 20,000,000</strong><span>Approximately USD 15,000</span></div>
              </article>
            </div>
          </section>
          <div className="publication-note">
            <ExternalLink className="dissertation-link" href="https://drive.google.com/file/d/1jADoKiArPaAjDPCu2aVpSZJRHVgfXWFv/view?usp=drive_link">
              <span>Ph.D. dissertation</span>
              <strong>A study of digraph structure in terms of common neighbors</strong>
              <em>Read dissertation ↗</em>
            </ExternalLink>
          </div>
        </section>

        <section className="content-section muted-section">
          <div className="page-shell resource-grid">
            <div>
              <p className="kicker">Collaborators</p>
              <h2>People I work with.</h2>
              <div className="collaborator-list">
                {collaborators.map(([name, href]) => {
                  const jointWorkCount = [...published, ...preprints].filter(([, authors]) =>
                    authors.replace(/^with /, '').split(', ').includes(name),
                  ).length;

                  return (
                    <ExternalLink href={href} key={name}>
                      <span className="collaborator-name">{name}</span>
                      <span className="collaborator-count">{jointWorkCount} joint {jointWorkCount === 1 ? 'work' : 'works'} ↗</span>
                    </ExternalLink>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="kicker">Problem gardens</p>
              <h2>Open questions.</h2>
              <div className="resource-links">
                <ExternalLink href="https://www.openproblemgarden.org/category/graph_theory"><strong>Open Problem Garden</strong><span>Graph theory problems ↗</span></ExternalLink>
                <ExternalLink href="https://mathweb.ucsd.edu/~erdosproblems/"><strong>Erdős Problems on Graphs</strong><span>UC San Diego collection ↗</span></ExternalLink>
                <ExternalLink href="https://www.erdosproblems.com/"><strong>Erdős Problems</strong><span>Searchable problem database ↗</span></ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
