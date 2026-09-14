import Link from 'next/link';

const navigation = [
  ['About', '/about/'],
  ['Research', '/research/'],
  ['Talks', '/talks/'],
  ['News', '/news/'],
  ['Contact', '/contact/'],
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Hojin Chu home">
        <span>Hojin Chu</span><small>추호진</small>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <Link className={active === label.toLowerCase() ? 'active' : ''} href={href} key={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
