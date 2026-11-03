import { ExternalLink } from './external-link';

type Talk = {
  readonly type: string;
  readonly session?: string;
  readonly event: string;
  readonly eventUrl: string;
  readonly date: string;
  readonly place: string;
  readonly placeBreakBeforeCity?: boolean;
  readonly title: string;
  readonly deck: string;
};

export function TalkList({ items, showType = true }: { items: readonly Talk[]; showType?: boolean }) {
  return (
    <div className="talk-list">
      {items.map((talk) => (
        <article
          className={`talk-row${showType && (talk.type === 'Invited' || talk.type === 'Minisymposium') ? ' talk-row--featured' : ''}`}
          key={`${talk.date}-${talk.title}`}
        >
          <div className="talk-meta">
            {showType && <span>{talk.type}</span>}
            <time>{talk.date}</time>
            <small>
              {talk.placeBreakBeforeCity ? (
                <>
                  {talk.place.split(', ')[0]},<br />
                  {talk.place.split(', ').slice(1).join(', ')}
                </>
              ) : talk.place}
            </small>
          </div>
          <div className="talk-main">
            <h3>{talk.eventUrl ? <ExternalLink href={talk.eventUrl}>{talk.event}</ExternalLink> : talk.event}</h3>
            {!showType && talk.type === 'Minisymposium' && <p className="talk-session">Minisymposium</p>}
            {talk.session && <p className="talk-session">Session · {talk.session}</p>}
            <p>{talk.title}</p>
          </div>
          <div className="talk-link">{talk.deck && <ExternalLink href={talk.deck}>Deck ↗</ExternalLink>}</div>
        </article>
      ))}
    </div>
  );
}
