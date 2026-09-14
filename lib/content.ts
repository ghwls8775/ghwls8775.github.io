export const focusAreas = [
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

export const preprints = [
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
] as const;

export const published = [
  ['Digraphs in which every t vertices have exactly λ common out-neighbors', 'with Myungho Choi, Suh-Ryung Kim', 'Discrete Mathematics, 348(10):114580 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0012365X25001888?dgcid=author#bl0010', 'https://arxiv.org/abs/2405.02662'],
  ['Structural properties of symmetric Toeplitz and Hankel matrices', 'with Homoon Ryu', 'Linear Algebra and its Applications, 708:204–216 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0024379524004518?via%3Dihub', 'https://arxiv.org/abs/2410.13129'],
  ['A digraph version of the Friendship Theorem', 'with Myungho Choi, Suh-Ryung Kim', 'Discrete Mathematics, 348(1):114238 (2025)', 'https://www.sciencedirect.com/science/article/pii/S0012365X24003698?via%3Dihub', 'https://arxiv.org/abs/2305.04058'],
  ['Competition graphs of degree bounded digraphs', 'with Suh-Ryung Kim', 'Discrete Applied Mathematics, 343:106–114 (2024)', 'https://www.sciencedirect.com/science/article/pii/S0166218X23003840?via%3Dihub', 'https://arxiv.org/abs/2307.11625'],
] as const;

export const internationalTalks = [
  { type: 'Contributed', event: 'SIAM Conference on Discrete Mathematics (DM26)', eventUrl: 'https://www.siam.org/conferences-events/siam-conferences/dm26/', date: 'June 22–25, 2026', place: 'San Diego, California, U.S.', title: 'Connectivity keeping trees in triangle-free graphs', deck: 'https://drive.google.com/file/d/13PMlAw3kh6Eb_vCJ7uAhFVih5w_2Uu0q/view?usp=sharing' },
  { type: 'Contributed', event: 'International Workshop on Discrete Mathematics and Algorithms 2026', eventUrl: 'https://onolab.github.io/dma2026/', date: 'Mar 16–18, 2026', place: 'Matsue, Japan', title: 'On 2-connected graphs avoiding cycles of length 0 modulo 4', deck: 'https://drive.google.com/file/d/1Gzee8hJr78tdNkw47CFwXfG79QDnQtyl/view?usp=sharing' },
  { type: 'Minisymposium', event: 'The 26th Conference of the International Linear Algebra Society', eventUrl: 'https://ilas2025.tw', date: 'June 23–27, 2025', place: 'Kaohsiung, Taiwan', title: 'Structural properties of symmetric Toeplitz and Hankel matrices', deck: 'https://drive.google.com/file/d/1hXYyYIAJ-0qjjctAogekznAt9_TYKbZO/view?usp=drive_link' },
  { type: 'Contributed', event: 'CanaDAM 2025', eventUrl: 'https://canadam.ca/2025', date: 'May 20–23, 2025', place: 'Ottawa, Canada', title: 'Directed analogues of Friendship graphs', deck: 'https://drive.google.com/file/d/1j-_QClz_5RBgyF3euA7lTQGN5yT8AWrm/view?usp=drive_link' },
] as const;

export const domesticTalks = [
  { type: 'Invited', event: 'One-Day Workshop on Graph Theory', eventUrl: '', date: 'Aug 21, 2026', place: 'Seoul National University', title: 'Cycles modulo 3 and 4: Extremal and Structural results', deck: 'https://drive.google.com/file/d/1AoXRmWYkuGq2Po5zOUFlAnzs3IrS_qRY/view?usp=sharing' },
  { type: 'Invited', event: '35th KIAS Combinatorics Workshop', eventUrl: 'https://events.kias.re.kr/h/combinatorics/?pageNo=6104', date: 'Dec 18–20, 2025', place: 'Busan, Korea', title: 'Connectivity keeping subgraph deletion problem', deck: 'https://drive.google.com/file/d/1cNTBKQgZ7_JPj34H5ZQPSoQYpHX8mF9e/view?usp=drive_link' },
  { type: 'Invited', event: 'KPPY 100 (Young Seminar)', eventUrl: 'https://kppy.siggers.work/kppy-100/', date: 'Sep 19–21, 2025', place: 'Gyeongju, Korea', title: 'On 2-connected graphs avoiding cycles of length 0 modulo 4', deck: 'https://drive.google.com/file/d/1cSAUaZkc0uDMoJsBLSUG8HkseWFWjeU9/view?usp=drive_link' },
  { type: 'Invited', event: '2025 Korean Student Combinatorics Workshop', eventUrl: 'https://indico.ibs.re.kr/event/932/', date: 'Aug 20–24, 2025', place: 'Gyeongju, Korea', title: 'Things I worry about as a Postdoc', deck: '' },
  { type: 'Invited', event: 'SUNY Korea Combinatorics Seminar', eventUrl: 'https://sites.google.com/view/cwheo/home/seminars', date: 'July 15, 2025', place: 'Incheon, Korea', title: 'Directed analogues of Friendship graphs', deck: '' },
  { type: 'Contributed', event: '2024 Fall Korean Mathematical Society Conference', eventUrl: 'https://www.kms.or.kr/conference/2024_fall/', date: 'Oct 24–26, 2024', place: 'Suwon, Korea', title: 'Digraphs in which every t vertices share exactly λ out-neighbors and exactly λ in-neighbors', deck: 'https://drive.google.com/file/d/1TdywDgkUzad1J15WlWMiLJEaPBgqvEL_/view?usp=sharing' },
  { type: 'Contributed', event: '2023 Fall Korean Mathematical Society Conference', eventUrl: 'https://www.kms.or.kr/conference/2023_fall/', date: 'Oct 26–28, 2023', place: 'Seoul, Korea', title: 'Competition graphs of degree bounded digraphs', deck: 'https://drive.google.com/file/d/1Armxld5HP8B9EAf-C7BDOWhQOJKU4F1r/view?usp=sharing' },
  { type: 'Invited', event: 'AORC Monthly Seminar', eventUrl: 'https://swb.skku.edu/aorc/index.do', date: 'May 26, 2023', place: 'Suwon, Korea', title: 'A digraph version of the Friendship Theorem', deck: '' },
] as const;

export const publicTalks = [
  ['Outreach Program · Paiwha Girls’ High School', 'Sep 3, 2026', 'KIAS, Seoul, Korea', 'Choosing a Path in Mathematics: Research, Careers, and Opportunities', []],
  ['AI·Math Academy · KIAS & Dongdaemun-gu Office', 'Feb 5, 2026', 'KIAS, Seoul, Korea', 'Discovering hidden connections in the World through Graphs', [['Program', 'https://www.ddm.go.kr/www/selectUserOnlineReceptionView.do?key=96&programKey=767'], ['Video', 'https://youtu.be/Pb1UxkjHAkw?si=p1sGhG1GiPq9TctG']]],
  ['Outreach Program · UNIST Mathematics & Physics Club', 'Sep 26, 2025', 'KIAS, Seoul, Korea', 'Careers in Mathematics: What it means to do Mathematical Research', [['Instagram', 'https://www.instagram.com/p/DPSc3TZElij/?igsh=eWNkbjFhM3ZxaTht'], ['Video', 'https://youtu.be/kXvi9lwfkNE?si=M-xP99FkNwBhFmFb']]],
  ['Outreach Program · Mokpo Deogin High School', 'Sep 5, 2025', 'KIAS, Seoul, Korea', "A Mathematician's Career Path and Research", [['Instagram', 'https://instagram.com/p/DOnUJx3EsKx/?utm_source=qr'], ['Video', 'https://youtu.be/kqqqeAQzmps?feature=shared']]],
] as const;

export const collaborators = [
  ['Yandong Bai', 'https://math.nwpu.edu.cn/info/1402/7997.htm'],
  ['Ilkyoo Choi', 'https://sites.google.com/view/ilkyoochoi'],
  ['Myungho Choi', 'https://www.researchgate.net/profile/Choi-Myungho'],
  ['Shinya Fujita', 'https://www2u.biglobe.ne.jp/~sfujita/newmath.htm'],
  ['Ringi Kim', 'https://sites.google.com/view/ringikim/home'],
  ['Suh-Ryung Kim', 'https://www.researchgate.net/profile/Suh-Ryung-Kim'],
  ['Binlong Li', 'https://www.researchgate.net/scientific-contributions/Binlong-Li-59329296'],
  ['Boram Park', 'https://sites.google.com/view/borampark/'],
  ['Homoon Ryu', 'https://hmryu.com/'],
] as const;

export const newsItems = [
  { date: 'August 2026', label: 'Preprint', title: 'Connectivity keeping paths in digraphs', href: 'https://arxiv.org/abs/2608.25240', text: 'A new preprint on connectivity-keeping paths in digraphs is now available on arXiv, in joint work with Boram Park and Homoon Ryu.' },
  { date: 'August 2026', label: 'Talk', title: 'Cycles modulo 3 and 4: Extremal and Structural results', href: 'https://drive.google.com/file/d/1AoXRmWYkuGq2Po5zOUFlAnzs3IrS_qRY/view?usp=sharing', text: 'I gave an invited talk on cycles modulo 3 and 4 at the One-Day Workshop on Graph Theory at Seoul National University.' },
  { date: 'August 2026', label: 'Preprint', title: "A sharp extension of Halin's removable-edge theorem to matchings", href: 'https://arxiv.org/abs/2608.09394', text: 'A new manuscript presenting a sharp extension of Halin’s removable-edge theorem to matchings is now available on arXiv.' },
  { date: 'July 2026', label: 'Preprint', title: 'Minimum degree conditions for removable matchings in k-connected graphs', href: 'https://arxiv.org/abs/2607.17533', text: 'A new preprint on minimum-degree conditions for removable matchings in k-connected graphs is available, jointly with Ringi Kim and Boram Park.' },
  { date: 'June 2026', label: 'Talk', title: 'Connectivity keeping trees in triangle-free graphs', href: 'https://www.siam.org/conferences-events/siam-conferences/dm26/', text: 'I presented work on connectivity-keeping trees in triangle-free graphs at the SIAM Conference on Discrete Mathematics (DM26) in San Diego.' },
  { date: 'June 2026', label: 'Preprint', title: 'On 2-connected graphs without cycles of length 1 modulo 3', href: 'https://arxiv.org/abs/2606.02356', text: 'A new preprint on 2-connected graphs without cycles of length 1 modulo 3 is available, jointly with Yandong Bai, Binlong Li, Boram Park, and Homoon Ryu.' },
  { date: 'May 2026', label: 'Preprint', title: 'Existence of cycles of length divisible by 3 or 4', href: 'https://arxiv.org/abs/2605.02731', text: 'A new preprint on the existence of cycles of length divisible by 3 or 4 is available, jointly with Ilkyoo Choi, Ringi Kim, and Boram Park.' },
] as const;
