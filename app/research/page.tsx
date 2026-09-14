import { ExternalLink } from '@/components/external-link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { collaborators, preprints, published } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Research | Hojin Chu', 'Publications and preprints in structural graph theory, digraphs, combinatorics, and combinatorial matrix theory.', '/research/');

export default function ResearchPage() {
  return (
    <>
      <SiteHeader active="research" />
      <main>
        <PageIntro eyebrow="Research / 연구" title="Questions about" accent="structure.">
          <p>I work on structural questions in graph theory and discrete mathematics, often looking for the precise conditions that force a graph to contain—or avoid—a particular configuration.</p>
          <p>Topics I return to include Turán-type problems, Dean&apos;s conjecture, connectivity-preserving deletion, planarity, competition graphs, and discrete algorithms.</p>
        </PageIntro>

        <section className="content-section page-shell publications">
          <div className="section-heading compact">
            <div><p className="kicker">Research output / 논문</p><h2>Publications &<br/><em>preprints.</em></h2></div>
            <p>Research articles on connectivity-preserving subgraphs, cycle restrictions, common-neighbor conditions, and graph-theoretic matrix decompositions.</p>
          </div>
          <div className="pub-columns">
            <div>
              <div className="list-title"><h3>Accepted & published</h3><span>{String(published.length).padStart(2, '0')}</span></div>
              <ol className="paper-list">
                {published.map(([title, authors, journal, paperUrl, arxiv], index) => (
                  <li key={title}>
                    <span className="paper-number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h4><ExternalLink href={paperUrl}>{title}</ExternalLink></h4><p>{authors}</p><cite>{journal}</cite><ExternalLink className="paper-link" href={arxiv}>arXiv ↗</ExternalLink></div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="list-title"><h3>Submitted & preprints</h3><span>{preprints.length}</span></div>
              <ol className="paper-list">
                {preprints.map(([title, authors, href, id], index) => (
                  <li key={title}>
                    <span className="paper-number">{String(index + 1).padStart(2, '0')}</span>
                    <div><h4><ExternalLink href={href}>{title}</ExternalLink></h4>{authors && <p>{authors}</p>}<ExternalLink className="paper-link" href={href}>arXiv:{id} ↗</ExternalLink></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="publication-note">
            <ExternalLink href="https://drive.google.com/file/d/1jADoKiArPaAjDPCu2aVpSZJRHVgfXWFv/view?usp=drive_link">Read my Ph.D. dissertation ↗</ExternalLink>
            <p>The research “Competition graphs of degree bounded digraphs” was supported by a Basic Science Research Program grant from the National Research Foundation of Korea.</p>
          </div>
        </section>

        <section className="content-section muted-section">
          <div className="page-shell resource-grid">
            <div>
              <p className="kicker">Collaborators</p>
              <h2>People I work with.</h2>
              <div className="collaborator-list">
                {collaborators.map(([name, href]) => <ExternalLink href={href} key={name}>{name}<span>↗</span></ExternalLink>)}
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
