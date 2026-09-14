const navigation = [
  ['Home', '/'],
  ['About', '/about/'],
  ['Research', '/research/'],
  ['Talks', '/talks/'],
  ['News', '/news/'],
  ['Contact', '/contact/'],
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Hojin Chu home">
        <span>Hojin Chu</span><small>추호진</small>
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, href]) => (
          <a className={active === label.toLowerCase() ? 'active' : ''} href={href} key={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
