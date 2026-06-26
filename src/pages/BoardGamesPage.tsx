import { useState, useMemo } from 'react';
import { games } from '../data/games';
import { Search, Users, Clock, Zap, Star, X } from 'lucide-react';

const CATEGORIES = ['All', 'Strategy', 'Party', 'Family', 'Cooperative', 'Card Games', 'Mystery', 'RPG', 'Puzzle'];
const PLAYERS = ['Any', '1-2', '3-4', '5-6', '7+'];
const DIFFICULTIES = ['Any', 'Easy', 'Medium', 'Hard'];
const DURATIONS = ['Any', '<30min', '30-60min', '60-120min', '120min+'];
const AGE_GROUPS = ['Any', 'Kids', 'Teens+', 'Adults', 'All Ages'];
const MOODS = ['Competitive', 'Cooperative', 'Casual', 'Strategic'];
const LENGTHS = ['<30min', '30-60min', '60-120min', '120min+'];

function GameCard({ game }: { game: typeof games[0] }) {
  return (
    <div className="game-card">
      <div style={{ position: 'relative' }}>
        <img src={game.image} alt={game.name} loading="lazy" />
        <span
          className={`badge ${game.available ? 'badge-green' : 'badge-red'}`}
          style={{ position: 'absolute', top: 10, right: 10 }}
        >
          {game.available ? 'Available' : 'In Use'}
        </span>
      </div>
      <div className="game-card-body">
        <div className="game-card-title">{game.name}</div>
        <span className="badge badge-accent" style={{ width: 'fit-content' }}>{game.category}</span>
        <div className="game-card-desc">{game.description}</div>
        <div className="game-card-meta">
          <div className="game-meta-item"><Users size={11} />{game.players} players</div>
          <div className="game-meta-item"><Clock size={11} />{game.duration}</div>
          <div className="game-meta-item"><Zap size={11} />{game.difficulty}</div>
          <div className="game-meta-item"><Star size={11} />{game.rating}</div>
        </div>
      </div>
    </div>
  );
}

function SmartFinder() {
  const [sel, setSel] = useState({ players: '', difficulty: '', mood: '', length: '' });
  const toggle = (key: keyof typeof sel, val: string) =>
    setSel(s => ({ ...s, [key]: s[key] === val ? '' : val }));

  const results = useMemo(() => {
    if (!sel.players && !sel.difficulty && !sel.mood && !sel.length) return [];
    return games.filter(g => {
      const pOk = !sel.players || g.players.includes(sel.players.replace('+', '').split('-')[0]);
      const dOk = !sel.difficulty || g.difficulty === sel.difficulty;
      const mOk = !sel.mood || g.mood.includes(sel.mood);
      const lOk = !sel.length || g.duration === sel.length;
      return pOk && dOk && mOk && lOk;
    });
  }, [sel]);

  const ready = !!(sel.players || sel.difficulty || sel.mood || sel.length);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-32">
          <div className="section-label">Not Sure What to Play?</div>
          <h2 className="section-title serif">Smart <span className="gradient-text">Game Finder</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tell us your preferences and we'll find the perfect game.
          </p>
        </div>

        <div className="card" style={{ padding: 32, maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}>
            <div>
              <div className="label">Number of Players</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {PLAYERS.slice(1).map(p => (
                  <button key={p} className={`finder-option${sel.players === p ? ' selected' : ''}`} onClick={() => toggle('players', p)}>{p}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="label">Difficulty</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {DIFFICULTIES.slice(1).map(d => (
                  <button key={d} className={`finder-option${sel.difficulty === d ? ' selected' : ''}`} onClick={() => toggle('difficulty', d)}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="label">Mood</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {MOODS.map(m => (
                  <button key={m} className={`finder-option${sel.mood === m ? ' selected' : ''}`} onClick={() => toggle('mood', m)}>{m}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="label">Game Length</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {LENGTHS.map(l => (
                  <button key={l} className={`finder-option${sel.length === l ? ' selected' : ''}`} onClick={() => toggle('length', l)}>{l}</button>
                ))}
              </div>
            </div>
          </div>

          {ready && (
            <div style={{ marginTop: 32 }}>
              <div className="section-label" style={{ marginBottom: 16 }}>
                {results.length} Game{results.length !== 1 ? 's' : ''} Found
              </div>
              {results.length === 0 ? (
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px 0' }}>
                  No games match these criteria. Try adjusting your filters.
                </p>
              ) : (
                <div className="grid-3" style={{ gap: 16 }}>
                  {results.slice(0, 6).map(g => <GameCard key={g.id} game={g} />)}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function BoardGamesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [players, setPlayers] = useState('Any');
  const [difficulty, setDifficulty] = useState('Any');
  const [duration, setDuration] = useState('Any');
  const [ageGroup, setAgeGroup] = useState('Any');

  const filtered = useMemo(() =>
    games.filter(g => {
      const qOk = g.name.toLowerCase().includes(query.toLowerCase()) || g.description.toLowerCase().includes(query.toLowerCase());
      const cOk = category === 'All' || g.category === category;
      const pOk = players === 'Any' || g.players.includes(players.replace('+', ''));
      const dOk = difficulty === 'Any' || g.difficulty === difficulty;
      const durOk = duration === 'Any' || g.duration === duration;
      const aOk = ageGroup === 'Any' || g.ageGroup === ageGroup;
      return qOk && cOk && pOk && dOk && durOk && aOk;
    }),
    [query, category, players, difficulty, duration, ageGroup]
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">500+ Titles</div>
          <h1 className="serif">Board Game <span className="gradient-text">Library</span></h1>
          <p>From quick party games to epic campaigns — find your next adventure.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          {/* Search */}
          <div className="search-bar" style={{ marginBottom: 20 }}>
            <Search />
            <input
              className="input-field"
              placeholder="Search games by name or description..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          {/* Filters row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 10, marginBottom: 24 }}>
            {[
              { label: 'Category', val: category, set: setCategory, opts: CATEGORIES },
              { label: 'Players', val: players, set: setPlayers, opts: PLAYERS },
              { label: 'Difficulty', val: difficulty, set: setDifficulty, opts: DIFFICULTIES },
              { label: 'Duration', val: duration, set: setDuration, opts: DURATIONS },
              { label: 'Age Group', val: ageGroup, set: setAgeGroup, opts: AGE_GROUPS },
            ].map(f => (
              <div key={f.label}>
                <div className="label">{f.label}</div>
                <select
                  className="input-field"
                  value={f.val}
                  onChange={e => f.set(e.target.value)}
                >
                  {f.opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{filtered.length} games found</p>
            {(query || category !== 'All' || players !== 'Any' || difficulty !== 'Any' || duration !== 'Any' || ageGroup !== 'Any') && (
              <button className="btn-ghost" onClick={() => { setQuery(''); setCategory('All'); setPlayers('Any'); setDifficulty('Any'); setDuration('Any'); setAgeGroup('Any'); }}>
                <X size={14} /> Clear Filters
              </button>
            )}
          </div>

          {/* Category chips */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {CATEGORIES.map(cat => (
              <button key={cat} className={`filter-chip${category === cat ? ' active' : ''}`} onClick={() => setCategory(cat)}>{cat}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎲</div>
              <p>No games match your criteria. Try adjusting filters.</p>
            </div>
          ) : (
            <div className="grid-4">
              {filtered.map(g => <GameCard key={g.id} game={g} />)}
            </div>
          )}
        </div>
      </section>

      <SmartFinder />
    </>
  );
}
