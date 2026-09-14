type Point = readonly [number, number];
type Edge = readonly [number, number];

type Motif = {
  id: string;
  row: 'primary' | 'secondary';
  origin: Point;
  vertices: readonly Point[];
  edges: readonly Edge[];
  accent: number;
};

const cycleEdges = (count: number, offset = 0): Edge[] =>
  Array.from(
    { length: count },
    (_, index) => [offset + index, offset + ((index + 1) % count)] as Edge,
  );

const completeBipartiteEdges = (left: number, right: number): Edge[] =>
  Array.from({ length: left }, (_, leftIndex) =>
    Array.from(
      { length: right },
      (_, rightIndex) => [leftIndex, left + rightIndex] as Edge,
    ),
  ).flat();

const motifs = [
  {
    id: 'cycle',
    row: 'primary',
    origin: [115, 195],
    vertices: [
      [0, -72], [51, -51], [72, 0], [51, 51],
      [0, 72], [-51, 51], [-72, 0], [-51, -51],
    ],
    edges: cycleEdges(8),
    accent: 0,
  },
  {
    id: 'complete-bipartite',
    row: 'primary',
    origin: [390, 195],
    vertices: [
      [-70, -70], [-70, 0], [-70, 70],
      [70, -84], [70, -28], [70, 28], [70, 84],
    ],
    edges: completeBipartiteEdges(3, 4),
    accent: 5,
  },
  {
    id: 'petersen',
    row: 'primary',
    origin: [720, 195],
    vertices: [
      [0, -90], [86, -28], [53, 73], [-53, 73], [-86, -28],
      [0, -36], [34, -11], [21, 29], [-21, 29], [-34, -11],
    ],
    edges: [
      ...cycleEdges(5),
      [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
      [5, 7], [7, 9], [9, 6], [6, 8], [8, 5],
    ],
    accent: 5,
  },
  {
    id: 'binary-tree',
    row: 'primary',
    origin: [1030, 195],
    vertices: [
      [0, -76], [-62, -18], [62, -18],
      [-98, 58], [-32, 58], [32, 58], [98, 58],
    ],
    edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]],
    accent: 0,
  },
  {
    id: 'cube',
    row: 'primary',
    origin: [1310, 195],
    vertices: [
      [-70, -70], [30, -70], [30, 30], [-70, 30],
      [-30, -30], [70, -30], [70, 70], [-30, 70],
    ],
    edges: [
      ...cycleEdges(4),
      ...cycleEdges(4, 4),
      [0, 4], [1, 5], [2, 6], [3, 7],
    ],
    accent: 6,
  },
  {
    id: 'wheel',
    row: 'secondary',
    origin: [185, 530],
    vertices: [
      [0, 0], [0, -78], [68, -39], [68, 39],
      [0, 78], [-68, 39], [-68, -39],
    ],
    edges: [
      ...cycleEdges(6, 1),
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    ],
    accent: 0,
  },
  {
    id: 'ladder',
    row: 'secondary',
    origin: [565, 530],
    vertices: [
      [-100, -45], [-50, -45], [0, -45], [50, -45], [100, -45],
      [-100, 45], [-50, 45], [0, 45], [50, 45], [100, 45],
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [5, 6], [6, 7], [7, 8], [8, 9],
      [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
    ],
    accent: 7,
  },
  {
    id: 'star',
    row: 'secondary',
    origin: [1025, 530],
    vertices: [
      [0, 0], [0, -78], [68, -39], [68, 39],
      [0, 78], [-68, 39], [-68, -39],
    ],
    edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6]],
    accent: 0,
  },
  {
    id: 'complete',
    row: 'secondary',
    origin: [1310, 530],
    vertices: [[0, -76], [72, -24], [45, 62], [-45, 62], [-72, -24]],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 2], [1, 3], [1, 4],
      [2, 3], [2, 4], [3, 4],
    ],
    accent: 3,
  },
] satisfies readonly Motif[];

export function GraphField({ compact = false }: { compact?: boolean }) {
  const visibleMotifs = compact
    ? motifs.filter((motif) => motif.row === 'primary')
    : motifs;

  return (
    <svg
      className={`graph-field${compact ? ' compact' : ''}`}
      viewBox={compact ? '0 0 1440 390' : '0 0 1440 720'}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {visibleMotifs.map((motif) => (
        <g
          className="graph-anchor"
          transform={`translate(${motif.origin[0]} ${motif.origin[1]})`}
          key={motif.id}
        >
          <g className={`graph-motif graph-motif-${motif.id}`}>
            <g className="graph-lines">
              {motif.edges.map(([from, to], index) => (
                <line
                  key={`${from}-${to}-${index}`}
                  x1={motif.vertices[from][0]}
                  y1={motif.vertices[from][1]}
                  x2={motif.vertices[to][0]}
                  y2={motif.vertices[to][1]}
                />
              ))}
            </g>
            <g className="graph-nodes">
              {motif.vertices.map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}-${index}`}
                  className={index === motif.accent ? 'graph-node-accent' : undefined}
                  cx={cx}
                  cy={cy}
                  r={index === motif.accent ? 6.2 : 4.5}
                />
              ))}
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
