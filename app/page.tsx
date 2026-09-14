const focusAreas = [
  {
    mark: '01',
    title: 'Extremal & Structural Graph Theory',
    text: 'Cycle restrictions, Turán-type problems, and the structure hidden inside highly connected graphs.',
    tags: ['Cycles', 'Connectivity', 'Extremal problems'],
  },
  {
    mark: '02',
    title: 'Digraphs & Common Neighbors',
    text: 'Characterizing directed graphs through exact common-neighbor conditions and related friendship phenomena.',
    tags: ['Digraphs', 'Common neighbors', 'Friendship theorem'],
  },
  {
    mark: '03',
    title: 'Combinatorial Matrix Theory',
    text: 'Translating structural graph results into matrix decompositions and efficient discrete algorithms.',
    tags: ['Toeplitz matrices', 'Algorithms', 'Decomposition'],
  },
];

const preprints = [
  ['Connectivity keeping paths in digraphs', 'with Boram Park, Homoon Ryu', 'https://arxiv.org/abs/2608.25240', '2608.25240'],
  ["A sharp extension of Halin's removable-edge theorem to matchings", '', 'https://arxiv.org/abs/2608.09394', '2608.09394'],
  ['Minimum degree conditions for removable matchings in k-connected graphs', 'with Ringi Kim, Boram Park', 'https://arxiv.org/abs/2607.17533', '2607.17533'],
  ['On 2-connected graphs without cycles of length 1 modulo 3', 'with Yandong Bai, Binlong Li, Boram Park, Homoon Ryu', 'https://arxiv.org/abs/2606.02356', '2606.02356'],
  ['Existence of cycles of length divisible by 3 or 4', 'with Ilkyoo Choi, Ringi Kim, Boram Park', 'https://arxiv.org/abs/2605.02731', '2605.02731'],
  ['Connectivity keeping trees in triangle-free graphs', 'with Shinya Fujita, Boram Park, Homoon Ryu', 'https://arxiv.org/abs/2511.06622', '2511.06622'],
  ['On 2-connected graphs avoiding cycles of length 0 modulo 4', 'with Boram Park, Homoon Ryu', 'https://arxiv.org/abs/2507.12798', '2507.12798'],
  ['Linear-time computation of the Frobenius normal form for symmetric Toeplitz matrices via graph-theoretic decomposition', 'with Homoon Ryu', 'https://arxiv.org/abs/2505.20811', '2505.20811'],
  ['Competition-common enemy graphs of degree-bounded digraphs', 'with Myungho Choi, Suh-Ryung Kim', 'https://arxiv.org/abs/2405.13363', '2405.13363'],
  ['Digraphs in which every t vertices share exactly λ out-neighbors and exactly λ in-neighbors', 'with Suh-Ryung Kim', 'https://arxiv.org/abs/2405.13293', '2405.13293'],
  ['Planarity of generalized ladder graphs', 'with Suh-Ryung Kim, Homoon Ryu', 'https://arxiv.org/abs/2208.13637', '2208.13637'],
];

const published = [
  ['Digraphs in which every t vertices have exactly λ common out-neighbors', 'with Myungho Choi, Suh-Ryung Kim', 'Discrete Mathematics, 348(10):114580 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0012365X25001888?dgcid=author#bl0010', 'https://arxiv.org/abs/2405.02662'],
  ['Structural properties of symmetric Toeplitz and Hankel matrices', 'with Homoon Ryu', 'Linear Algebra and its Applications, 708:204–216 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0024379524004518?via%3Dihub', 'https://arxiv.org/abs/2410.13129'],
  ['A digraph version of the Friendship Theorem', 'with Myungho Choi, Suh-Ryung Kim', 'Discrete Mathematics, 348(1):114238 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0012365X24003698?via%3Dihub', 'https://arxiv.org/abs/2305.04058'],
  ['Competition graphs of degree bounded digraphs', 'with Suh-Ryung Kim', 'Discrete Applied Mathematics, 343:106–114 (2024)', 'https://www.sciencedirect.com/science/article/pii/S0166218X23003840?via%3Dihub', 'https://arxiv.org/abs/2307.11625'],
];

const talks = [
  {type:'Contributed', event:'SIAM Conference on Discrete Mathematics (DM26)', eventUrl:'https://www.siam.org/conferences-events/siam-conferences/dm26/', date:'June 22–25, 2026', place:'San Diego, California, U.S.', title:'Connectivity keeping trees in triangle-free graphs', deck:'https://drive.google.com/file/d/13PMlAw3kh6Eb_vCJ7uAhFVih5w_2Uu0q/view?usp=sharing'},
  {type:'Contributed', event:'International Workshop on Discrete Mathematics and Algorithms 2026', eventUrl:'https://onolab.github.io/dma2026/', date:'Mar 16–18, 2026', place:'Matsue, Japan', title:'On 2-connected graphs avoiding cycles of length 0 modulo 4', deck:'https://drive.google.com/file/d/1Gzee8hJr78tdNkw47CFwXfG79QDnQtyl/view?usp=sharing'},
  {type:'Minisymposium', event:'The 26th Conference of the International Linear Algebra Society', eventUrl:'https://ilas2025.tw', date:'June 23–27, 2025', place:'Kaohsiung, Taiwan', title:'Structural properties of symmetric Toeplitz and Hankel matrices', deck:'https://drive.google.com/file/d/1hXYyYIAJ-0qjjctAogekznAt9_TYKbZO/view?usp=drive_link'},
  {type:'Contributed', event:'CanaDAM 2025', eventUrl:'https://canadam.ca/2025', date:'May 20–23, 2025', place:'Ottawa, Canada', title:'Directed analogues of Friendship graphs', deck:'https://drive.google.com/file/d/1j-_QClz_5RBgyF3euA7lTQGN5yT8AWrm/view?usp=drive_link'},
];

const domesticTalks = [
  {type:'Invited', event:'One-Day Workshop on Graph Theory', eventUrl:'', date:'Aug 21, 2026', place:'Seoul National University', title:'Cycles modulo 3 and 4: Extremal and Structural results', deck:'https://drive.google.com/file/d/1AoXRmWYkuGq2Po5zOUFlAnzs3IrS_qRY/view?usp=sharing'},
  {type:'Invited', event:'35th KIAS Combinatorics Workshop', eventUrl:'http://events.kias.re.kr/h/combinatorics/?pageNo=6104', date:'Dec 18–20, 2025', place:'Busan, Korea', title:'Connectivity keeping subgraph deletion problem', deck:'https://drive.google.com/file/d/1cNTBKQgZ7_JPj34H5ZQPSoQYpHX8mF9e/view?usp=drive_link'},
  {type:'Invited', event:'KPPY 100 (Young Seminar)', eventUrl:'https://kppy.siggers.work/kppy-100/', date:'Sep 19–21, 2025', place:'Gyeongju, Korea', title:'On 2-connected graphs avoiding cycles of length 0 modulo 4', deck:'https://drive.google.com/file/d/1cSAUaZkc0uDMoJsBLSUG8HkseWFWjeU9/view?usp=drive_link'},
  {type:'Invited', event:'2025 Korean Student Combinatorics Workshop', eventUrl:'https://indico.ibs.re.kr/event/932/', date:'Aug 20–24, 2025', place:'Gyeongju, Korea', title:'Things I worry about as a Postdoc', deck:''},
  {type:'Invited', event:'SUNY Korea Combinatorics Seminar', eventUrl:'https://sites.google.com/view/cwheo/home/seminars', date:'July 15, 2025', place:'Incheon, Korea', title:'Directed analogues of Friendship graphs', deck:''},
  {type:'Contributed', event:'2024 Fall Korean Mathematical Society Conference', eventUrl:'https://www.kms.or.kr/conference/2024_fall/', date:'Oct 24–26, 2024', place:'Suwon, Korea', title:'Digraphs in which every t vertices share exactly λ out-neighbors and exactly λ in-neighbors', deck:'https://drive.google.com/file/d/1TdywDgkUzad1J15WlWMiLJEaPBgqvEL_/view?usp=sharing'},
  {type:'Contributed', event:'2023 Fall Korean Mathematical Society Conference', eventUrl:'https://www.kms.or.kr/conference/2023_fall/', date:'Oct 26–28, 2023', place:'Seoul, Korea', title:'Competition graphs of degree bounded digraphs', deck:'https://drive.google.com/file/d/1Armxld5HP8B9EAf-C7BDOWhQOJKU4F1r/view?usp=sharing'},
  {type:'Invited', event:'AORC Monthly Seminar', eventUrl:'https://swb.skku.edu/aorc/index.do', date:'May 26, 2023', place:'Suwon, Korea', title:'A digraph version of the Friendship Theorem', deck:''},
];

const publicTalks = [
  ['Outreach Program · Paiwha Girls’ High School', 'Sep 3, 2026', 'Choosing a Path in Mathematics: Research, Careers, and Opportunities', []],
  ['AI·Math Academy · KIAS & Dongdaemun-gu Office', 'Feb 5, 2026', 'Discovering hidden connections in the World through Graphs', [['Program','https://www.ddm.go.kr/www/selectUserOnlineReceptionView.do?key=96&programKey=767'],['Video','https://youtu.be/Pb1UxkjHAkw?si=p1sGhG1GiPq9TctG']]],
  ['Outreach Program · UNIST Mathematics & Physics Club', 'Sep 26, 2025', 'Careers in Mathematics: What it means to do Mathematical Research', [['Instagram','https://www.instagram.com/p/DPSc3TZElij/?igsh=eWNkbjFhM3ZxaTht'],['Video','https://youtu.be/kXvi9lwfkNE?si=M-xP99FkNwBhFmFb']]],
  ['Outreach Program · Mokpo Deogin High School', 'Sep 5, 2025', "A Mathematician's Career Path and Research", [['Instagram','https://instagram.com/p/DOnUJx3EsKx/?utm_source=qr'],['Video','https://youtu.be/kqqqeAQzmps?feature=shared']]],
] as const;

type Talk = typeof talks[number];

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function TalkList({ items }: { items: Talk[] }) {
  return (
    <div className="talk-list">
      {items.map((talk) => (
        <article className="talk-row" key={`${talk.date}-${talk.title}`}>
          <div className="talk-meta"><span>{talk.type}</span><time>{talk.date}</time><small>{talk.place}</small></div>
          <div>
            <h4>{talk.eventUrl ? <ExternalLink href={talk.eventUrl}>{talk.event}</ExternalLink> : talk.event}</h4>
            <p>{talk.title}</p>
          </div>
          <div className="talk-link">{talk.deck && <ExternalLink href={talk.deck}>Deck ↗</ExternalLink>}</div>
        </article>
      ))}
    </div>
  );
}

function GraphField() {
  const nodes = [[50,130],[190,55],[320,145],[185,245],[1120,80],[1265,38],[1375,150],[1308,286],[1145,255],[1060,155],[830,470],[970,385],[1105,480],[1040,625],[875,620],[770,540],[85,555],[210,455],[338,545],[275,675],[115,670],[365,60],[455,185],[570,75],[660,205],[755,80]];
  return (
    <svg className="graph-field" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="graph-lines">
        <path d="M50 130 190 55 320 145 185 245 50 130M190 55 185 245M50 130 320 145" />
        <path d="M1120 80 1265 38 1375 150 1308 286 1145 255 1060 155 1120 80M1265 38 1308 286M1375 150 1145 255M1060 155 1265 38" />
        <path d="M830 470 970 385 1105 480 1040 625 875 620 770 540 830 470M970 385 1040 625M1105 480 875 620M770 540 970 385" />
        <path d="M85 555 210 455 338 545 275 675 115 670 85 555M210 455 275 675M338 545 115 670" />
        <path d="M365 60 455 185 570 75 660 205 755 80" />
      </g>
      <g className="graph-nodes">
        {nodes.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index % 5 === 0 ? 7 : 5} />)}
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hojin Chu home"><span className="brand-node" /><span>Hojin Chu</span><small>추호진</small></a>
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#talks">Talks</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <GraphField />
        <div className="hero-card page-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Research Fellow · KIAS</p>
            <h1>Hojin Chu <em>추호진</em></h1>
            <p className="hero-lede">I study the hidden structure of <strong>graphs</strong>—how local connections shape global behavior.</p>
            <p className="hero-body">I am a Research Fellow in the School of Computational Sciences at the <a href="https://www.kias.re.kr/kias/main/main.do" target="_blank" rel="noreferrer">Korea Institute for Advanced Study</a>, mentored by Prof. Jeong Han Kim. My interests span combinatorics, graph theory, and combinatorial matrix theory.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore my research <span>↘</span></a>
              <a className="button" href="https://drive.google.com/file/d/1B_hkg5rX56hav1dFVP-390paRex50XrZ/view?usp=sharing" target="_blank" rel="noreferrer">Download CV <span>↗</span></a>
            </div>
          </div>
          <figure className="portrait-wrap">
            <div className="portrait-graph" aria-hidden="true"><span/><span/><span/><span/><i/><i/><i/></div>
            <img src="/hojin-chu.jpg" alt="Portrait of Hojin Chu" width="1280" height="1689" decoding="async" fetchPriority="high" />
            <figcaption><span>Seoul, Korea</span><span>Combinatorics · Graph Theory</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section page-shell" id="research">
        <div className="section-heading">
          <div><p className="kicker">Research / 연구</p><h2>Structure through<br/><em>connection.</em></h2></div>
          <p>I work on structural questions in graph theory and discrete mathematics, often looking for the precise conditions that force a graph to contain—or avoid—a particular configuration.</p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.mark}>
              <div className="card-top"><span>{area.mark}</span><span className="tiny-graph">●──●<br/>╲╱</span></div>
              <h3>{area.title}</h3><p>{area.text}</p>
              <ul>{area.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="research-notes">
          <div><span>Topics I return to</span><p>Turán-type problems · Dean’s conjecture · connectivity-preserving deletion · planarity · competition graphs · discrete algorithms</p></div>
          <div><span>Problem gardens</span><p><ExternalLink href="http://www.openproblemgarden.org/category/graph_theory">Open Problem Garden</ExternalLink> · <ExternalLink href="https://mathweb.ucsd.edu/~erdosproblems/">Erdős Problems on Graphs</ExternalLink> · <ExternalLink href="https://www.erdosproblems.com/">Erdős Problems</ExternalLink></p></div>
        </div>
      </section>

      <section className="profile-band">
        <div className="page-shell profile-grid">
          <div>
            <p className="kicker light">Current position</p>
            <h2>Research Fellow</h2>
            <p>School of Computational Sciences<br/><ExternalLink href="https://www.kias.re.kr/kias/main/main.do">Korea Institute for Advanced Study (KIAS)</ExternalLink></p>
            <p className="address">85 Hoegi-ro, Dongdaemun-gu, Seoul<br/>Bldg. 1 · Room 1534</p>
          </div>
          <div className="education">
            <p className="kicker light">Education</p>
            <div><time>2020—2025</time><p><strong>Ph.D. in Mathematics</strong><br/><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></div>
            <div><time>2016—2020</time><p><strong>B.S. in Mathematics Education</strong><br/><ExternalLink href="https://en.snu.ac.kr/">Seoul National University</ExternalLink></p></div>
            <ExternalLink className="thesis-link" href="https://drive.google.com/file/d/1rNr3ncsCLmvUYHgxKWcjnkn02bgvcQre/view?usp=sharing">Ph.D. thesis · A study of digraph structure in terms of common neighbors ↗</ExternalLink>
          </div>
          <div className="profile-links">
            <p className="kicker light">Research profiles</p>
            <ExternalLink href="https://arxiv.org/a/0000-0002-0484-9496.html">arXiv <span>↗</span></ExternalLink>
            <ExternalLink href="https://scholar.google.com/citations?user=14-ziHgAAAAJ">Google Scholar <span>↗</span></ExternalLink>
            <ExternalLink href="https://www.researchgate.net/profile/Hojin-Chu">ResearchGate <span>↗</span></ExternalLink>
          </div>
        </div>
      </section>

      <section className="section page-shell publications" id="publications">
        <div className="section-heading compact">
          <div><p className="kicker">Selected work / 논문</p><h2>Publications &<br/><em>preprints.</em></h2></div>
          <p>Research articles on connectivity-preserving subgraphs, cycle restrictions, common-neighbor conditions, and graph-theoretic matrix decompositions.</p>
        </div>
        <div className="pub-columns">
          <div>
            <div className="list-title"><h3>Accepted & published</h3><span>{String(published.length).padStart(2,'0')}</span></div>
            <ol className="paper-list published-list">
              {published.map(([title, authors, journal, paperUrl, arxiv], index) => (
                <li key={title}>
                  <span className="paper-number">{String(index + 1).padStart(2,'0')}</span>
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
                  <span className="paper-number">{String(index + 1).padStart(2,'0')}</span>
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

      <section className="section talks-section" id="talks">
        <div className="page-shell">
          <div className="section-heading compact">
            <div><p className="kicker">Talks / 발표</p><h2>Sharing ideas,<br/><em>building links.</em></h2></div>
            <p>I present my work at international conferences, combinatorics workshops, seminars, and public programs that bring graph theory to wider audiences.</p>
          </div>
          <div className="talk-group">
            <div className="list-title"><h3>International presentations</h3><span>{String(talks.length).padStart(2,'0')}</span></div>
            <TalkList items={talks} />
          </div>
          <details className="archive">
            <summary><span>Domestic presentations</span><span>{String(domesticTalks.length).padStart(2,'0')} talks ＋</span></summary>
            <TalkList items={domesticTalks} />
          </details>
          <details className="archive outreach">
            <summary><span>Public & outreach talks</span><span>{String(publicTalks.length).padStart(2,'0')} talks ＋</span></summary>
            <div className="talk-list">
              {publicTalks.map(([event,date,title,links]) => (
                <article className="talk-row" key={title}>
                  <div className="talk-meta"><span>Outreach</span><time>{date}</time></div>
                  <div><h4>{event}</h4><p>{title}</p></div>
                  <div className="talk-link">{links.map(([label,href]) => <ExternalLink key={href} href={href}>{label} ↗</ExternalLink>)}</div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="section page-shell beyond" id="beyond">
        <div className="beyond-copy">
          <p className="kicker">Beyond papers / 그 밖의 이야기</p>
          <h2>Graphs connect<br/>more than <em>vertices.</em></h2>
          <p>I enjoy connecting with people and sharing mathematics outside the usual seminar room. I am also an avid climber, always looking for another route—and another way to think about structure.</p>
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/UaN_ketewPs" title="Hojin Chu — self-introduction and research overview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div><strong>Self-introduction & research overview</strong><span>Watch on YouTube</span></div>
          </div>
        </div>
        <div className="climbing-card">
          <div className="climb-visual" aria-label="Climbing motif"><span>●</span><span>●</span><span>●</span><span>●</span><i>route β</i></div>
          <blockquote>“A difficult route is a graph waiting to be understood.”</blockquote>
          <p>Review activities</p>
          <small>SIDMA · Discrete Mathematics · Discrete Applied Mathematics · Discussiones Mathematicae Graph Theory · FOCS 2026</small>
        </div>
      </section>

      <section className="contact" id="contact">
        <GraphField />
        <div className="page-shell contact-inner">
          <p className="kicker">Contact / 연락</p>
          <h2>Let’s find the next<br/><em>connection.</em></h2>
          <p>Feel free to email me if you would like to discuss a research topic, a problem, or a possible collaboration.</p>
          <a className="email-link" href="mailto:hojinchu@kias.re.kr">hojinchu@kias.re.kr <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="page-shell"><p>© 2026 Hojin Chu · Korea Institute for Advanced Study</p><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
