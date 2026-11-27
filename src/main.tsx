import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { experiences } from './data';
import './styles.css';

const STATION_WIDTH = 440;
const WORLD_WIDTH = STATION_WIDTH * experiences.length;
const stationPosition = (index: number) => index * STATION_WIDTH + STATION_WIDTH / 2;

function Scenery({ kind }: { kind: string }) {
  if (kind === 'sangati') {
    return <svg viewBox="0 0 230 180" aria-hidden="true" shapeRendering="crispEdges">
      <path fill="#667d83" d="M22 75 78 48v27l51-27v27h70v92H22z" />
      <path fill="#405866" d="M22 75 78 48v11L22 87zm56 0 51-27v11L78 87zM12 162h198v9H12z" />
      <path fill="#e1ae78" d="M150 14h23v63h-23z" /><path fill="#405866" d="M146 12h31v8h-31z" />
      <path fill="#c6d9cd" d="M39 99h25v24H39zm38 0h25v24H77zm38 0h25v24h-25zm38 0h25v24h-25z" />
      <path fill="#405866" d="M49 99h5v24h-5zm38 0h5v24h-5zm38 0h5v24h-5zm38 0h5v24h-5zM84 136h47v31H84z" />
      <path fill="#f3c98c" d="M91 143h33v24H91z" />
    </svg>;
  }
  if (kind === 'irede') {
    return <svg viewBox="0 0 230 180" aria-hidden="true" shapeRendering="crispEdges">
      <path fill="#597581" d="M39 34h151v132H39z" /><path fill="#405866" d="M30 28h169v10H30zm0 133h169v10H30z" />
      <path fill="#bad5cc" d="M52 48h125v69H52z" /><path fill="#405866" d="M109 48h8v69h-8z" />
      <path fill="#eeb389" d="M77 64h21v20H77zm48 0h21v20h-21z" /><path fill="#789c99" d="M67 87h41v20H67zm48 0h41v20h-41z" />
      <path fill="#e5b07b" d="M77 130h75v36H77z" /><path fill="#405866" d="M84 138h61v7H84z" />
      <path fill="#eef0d3" d="M90 13h49v15H90z" /><path fill="#789c99" d="M99 18h31v5H99z" />
    </svg>;
  }
  if (kind === 'power') {
    return <svg viewBox="0 0 230 180" aria-hidden="true" shapeRendering="crispEdges">
      <path fill="#789395" d="M15 72h53v95H15zm58-42h65v137H73zm71 27h71v110h-71z" />
      <path fill="#405866" d="M8 162h214v9H8zM73 30h65v8H73z" />
      <path fill="#dbe5cc" d="M29 88h13v17H29zm20 0h13v17H49zm37-40h15v19H86zm23 0h15v19h-15zM86 78h15v19H86zm23 0h15v19h-15zm48-5h17v20h-17zm25 0h17v20h-17z" />
      <path fill="#e4b179" d="M145 113h54v49h-54z" /><path fill="#405866" d="M151 119h42v36h-42z" />
      <path fill="#f7db8a" d="m177 122-13 16h9l-5 14 15-19h-9z" />
    </svg>;
  }
  if (kind === 'catskillet') {
    return <svg viewBox="0 0 230 180" aria-hidden="true" shapeRendering="crispEdges">
      <path fill="#627c83" d="M25 67h180v100H25z" /><path fill="#405866" d="M15 61h200v10H15zm0 101h200v9H15z" />
      <path fill="#e4b185" d="M44 83h142v38H44z" /><path fill="#405866" d="M50 89h130v26H50z" />
      <path fill="#f7d58d" d="M61 96h18v6H61zm25 0h18v6H86zm25 0h18v6h-18zm25 0h18v6h-18z" />
      <path fill="#b9d1c5" d="M54 132h22v30H54zm31 0h22v30H85zm38 0h22v30h-22zm31 0h22v30h-22z" />
      <path fill="#e4b185" d="M94 26h42v35H94z" /><path fill="#405866" d="M89 21h52v8H89z" /><path fill="#f7d58d" d="M105 34h20v15h-20z" />
    </svg>;
  }
  return <svg viewBox="0 0 230 180" aria-hidden="true" shapeRendering="crispEdges">
    <path fill="#77979a" d="M38 43h154v124H38z" /><path fill="#405866" d="M30 36h170v10H30zm0 126h170v9H30z" />
    <path fill="#d0e2d5" d="M55 58h120v54H55z" /><path fill="#83b9aa" d="M67 69h28v29H67zm67 0h28v29h-28z" />
    <path fill="#f7d58d" d="M108 67h13v11h11v13h-11v11h-13V91H97V78h11z" />
    <path fill="#405866" d="M91 128h49v34H91z" /><path fill="#b9d8cb" d="M97 134h37v28H97z" />
    <path fill="#d8a57e" d="M93 11h44v25H93z" /><path fill="#405866" d="M88 8h54v7H88z" />
    <path fill="#fff1d2" d="M111 17h8v5h5v7h-5v5h-8v-5h-5v-7h5z" />
  </svg>;
}

function ExperienceCard({ index, titleId }: { index: number; titleId: string }) {
  const experience = experiences[index];
  return <>
    <div className="card-top"><span>CHAPTER {String(index + 1).padStart(2, '0')} / 05</span><span className="card-star">✳</span></div>
    <div className="card-period">{experience.period}</div>
    <h3 id={titleId}>{experience.company}<span>.</span></h3>
    <p className="card-role">{experience.role} <span>·</span> {experience.location}</p>
    <p className="card-summary">{experience.summary}</p>
    <div className="card-body"><div><div className="card-label">THE IMPACT</div><ul>{experience.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div><div className="metric"><strong>{experience.metric}</strong><span>{experience.metricLabel}</span></div></div>
    <div className="tags">{experience.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
  </>;
}

function App() {
  const [position, setPosition] = useState(stationPosition(0));
  const [selected, setSelected] = useState(0);
  const [openExperience, setOpenExperience] = useState<number | null>(null);
  const [moving, setMoving] = useState(false);
  const [facing, setFacing] = useState(1);
  const [announcement, setAnnouncement] = useState('');
  const viewportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const direction = useRef(0);
  const keys = useRef(new Set<string>());
  const pointer = useRef<{ id: number; started: number; position: number; direction: number } | null>(null);
  const nearest = Math.min(experiences.length - 1, Math.max(0, Math.round((position - STATION_WIDTH / 2) / STATION_WIDTH)));
  const isNear = Math.abs(position - stationPosition(nearest)) < 115;

  const openStation = (index: number, jump = false, reveal = false) => {
    setSelected(index);
    if (jump) setPosition(stationPosition(index));
    if (reveal) {
      keys.current.clear();
      pointer.current = null;
      direction.current = 0;
      setMoving(false);
      setOpenExperience(index);
    } else {
      setAnnouncement(`${experiences[index].company} selected. Details are beside the chapter list.`);
    }
  };

  useLayoutEffect(() => {
    if (openExperience !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [openExperience]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const centerPlayer = () => { viewport.scrollLeft = position - viewport.clientWidth / 2; };
    centerPlayer();
    window.addEventListener('resize', centerPlayer);
    return () => window.removeEventListener('resize', centerPlayer);
  }, [position]);

  useEffect(() => {
    let frame = 0;
    let previous = 0;
    const tick = (time: number) => {
      if (previous && direction.current) {
        const distance = Math.min(time - previous, 50) * 0.22 * direction.current;
        setPosition(value => Math.max(24, Math.min(WORLD_WIDTH - 24, value + distance)));
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const updateDirection = () => {
      const next = Number(keys.current.has('arrowright') || keys.current.has('d'))
        - Number(keys.current.has('arrowleft') || keys.current.has('a'));
      direction.current = next;
      setMoving(next !== 0);
      if (next) setFacing(next);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('dialog, input, textarea, select') || (target.closest('button, a') && !target.closest('.game-shell'))) return;
      const key = event.key.toLowerCase();
      if (['arrowleft', 'a', 'arrowright', 'd'].includes(key)) {
        event.preventDefault();
        keys.current.add(key);
        updateDirection();
      } else if (key === 'e' && isNear && !event.repeat) {
        openStation(nearest, false, true);
      }
    };
    const onKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (keys.current.delete(key)) updateDirection();
    };
    const stop = () => {
      keys.current.clear();
      pointer.current = null;
      updateDirection();
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', stop);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', stop);
    };
  }, [isNear, nearest]);

  const startMoving = (value: number, id: number) => {
    pointer.current = { id, started: performance.now(), position, direction: value };
    direction.current = value;
    setFacing(value);
    setMoving(true);
  };
  const stopMoving = (id: number, complete: boolean) => {
    const active = pointer.current;
    if (!active || active.id !== id) return;
    pointer.current = null;
    direction.current = 0;
    setMoving(false);
    if (complete && performance.now() - active.started < 200) {
      const target = Math.max(24, Math.min(WORLD_WIDTH - 24, active.position + active.direction * 50));
      setPosition(value => active.direction > 0 ? Math.max(value, target) : Math.min(value, target));
    }
  };
  return <>
    <a className="skip-link" href="#experience">Skip to experience details</a>
    <header className="header">
      <a className="brand" href="#top" aria-label="Emerson Veras, back to top"><span className="brand-mark">E<span>.</span></span><span>EMERSON<br /><small>VERAS</small></span></a>
      <nav aria-label="Main navigation">
        <a href="#journey">THE JOURNEY</a>
        <a href="#about">ABOUT</a>
        <a className="nav-cta" href="#experience">EXPLORE MY WORK <span>↗</span></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> A LITTLE DIFFERENT KIND OF PORTFOLIO</div>
          <h1>Building things.<br /><span>Going places.</span></h1>
          <p>Hey, I’m Emerson <span className="wave">✳</span> A senior software engineer who loves turning complex problems into things that work beautifully.</p>
          <a className="primary-button" href="#journey">LET’S EXPLORE <span>↓</span></a>
        </div>
        <div className="hero-side" aria-hidden="true">
          <div className="side-orbit orbit-one" /><div className="side-orbit orbit-two" />
          <span className="side-star star-one">✦</span><span className="side-star star-two">✳</span>
          <div className="hero-badge"><span>PLAYER 01</span><strong>EV</strong><small>READY TO EXPLORE</small></div>
          <span className="side-note">EST. 2021<br />SCROLL TO START ↓</span>
        </div>
        <div className="hero-bottom"><span>BASED IN IRELAND <i>✳</i> WORKING EVERYWHERE</span><span>SOFTWARE ENGINEER / WORLD BUILDER</span></div>
      </section>

      <section className="journey section-wrap" id="journey">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="section-number">01 /</span> THE INTERACTIVE BIT</div><h2>A journey in <em>pixels.</em></h2></div>
          <p>Every stop has a story.<br />Come along for the ride.</p>
        </div>

        <div className="game-shell">
          <div className="game-topbar"><div><span className="game-dot coral" /><span className="game-dot yellow" /><span className="game-dot green" /></div><span>EMERSON’S CAREER QUEST</span><span className="topbar-level">LEVEL {String(nearest + 1).padStart(2, '0')} / 05</span></div>
          <div className="game-viewport" ref={viewportRef} tabIndex={0} aria-label="Interactive career journey. Use left and right arrow keys or A and D to move. Press E near a station to see its details.">
            <div className="world" style={{ width: WORLD_WIDTH }}>
              <div className="sun" /><div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="cloud cloud-c" />
              <div className="mountains mountain-back" /><div className="mountains mountain-front" />
              {experiences.map((item, index) => <div className={`station station-${item.id}`} key={item.id} style={{ left: index * STATION_WIDTH }}>
                <span className="station-year">{item.years} <span>✦</span></span>
                <div className="scenery"><Scenery kind={item.id} /></div>
                <button className={`station-sign ${isNear && nearest === index ? 'near' : ''}`} onClick={() => openStation(index, true, true)} aria-label={`View ${item.company} experience`}>
                  <span>{String(index + 1).padStart(2, '0')} / {item.sector}</span><strong>{item.shortName}</strong><small>VIEW STORY ↗</small>
                </button>
                <div className="bush bush-left" /><div className="bush bush-right" />
              </div>)}
              <div className="ground"><div className="ground-detail" /></div>
              <div className={`character ${moving ? 'walking' : ''} ${facing < 0 ? 'face-left' : ''}`} style={{ left: position }} aria-hidden="true">
                <span className="character-hair" /><span className="character-head" /><span className="character-eye" /><span className="character-body" /><span className="character-arm" /><span className="character-leg leg-one" /><span className="character-leg leg-two" />
              </div>
            </div>
          </div>
          <div className="game-controls">
            <div className="control-help"><span className="control-icon">↔</span><div><strong>TAKE A WALK</strong><small>Use ← → or A / D to move</small></div></div>
            <div className="control-help interact-help"><span className="control-icon">E</span><div><strong>DISCOVER A STORY</strong><small>Press E near a stop</small></div></div>
            <div className="touch-controls" aria-label="Movement controls">
              <button aria-label="Move left" onPointerDown={(event) => { if (event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); startMoving(-1, event.pointerId); }} onPointerUp={event => stopMoving(event.pointerId, true)} onPointerCancel={event => stopMoving(event.pointerId, false)} onLostPointerCapture={event => stopMoving(event.pointerId, false)} onClick={event => { if (event.detail === 0) { setFacing(-1); setPosition(value => Math.max(24, value - 50)); } }}>←</button>
              <button aria-label="Move right" onPointerDown={(event) => { if (event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); startMoving(1, event.pointerId); }} onPointerUp={event => stopMoving(event.pointerId, true)} onPointerCancel={event => stopMoving(event.pointerId, false)} onLostPointerCapture={event => stopMoving(event.pointerId, false)} onClick={event => { if (event.detail === 0) { setFacing(1); setPosition(value => Math.min(WORLD_WIDTH - 24, value + 50)); } }}>→</button>
              <button className="explore-control" disabled={!isNear} onClick={() => openStation(nearest, false, true)}>EXPLORE ↗</button>
            </div>
          </div>
        </div>
        <dialog ref={dialogRef} className="experience-dialog" aria-labelledby="dialog-experience-title" onClose={() => setOpenExperience(null)} onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            dialogRef.current?.close();
          }
        }}>
          <div className="experience-card">
            <button className="dialog-close" type="button" aria-label="Close story and return to the journey" onClick={() => dialogRef.current?.close()}>×</button>
            {openExperience !== null && <ExperienceCard index={openExperience} titleId="dialog-experience-title" />}
          </div>
        </dialog>
        <div className="journey-caption"><span><span className="tiny-spark">✳</span> FIVE STOPS. ONE JOURNEY.</span><span>NO RUSH — EXPLORE AT YOUR OWN PACE</span></div>
      </section>

      <section className="experience-section section-wrap" id="experience">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="section-number">02 /</span> THE STORY SO FAR</div><h2>Pick a <em>chapter.</em></h2></div>
          <p>Short on time? Jump straight<br />to any stop along the way.</p>
        </div>
        <div className="chapters">
          <div className="chapter-list" aria-label="Select an experience">
            {experiences.map((item, index) => <button key={item.id} className={`chapter ${selected === index ? 'active' : ''}`} onClick={() => openStation(index, true)} aria-pressed={selected === index}>
              <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span><span className="chapter-name">{item.company}<small>{item.years} · {item.sector}</small></span><span className="chapter-arrow">↗</span>
            </button>)}
          </div>
          <article className="experience-card" id="experience-card" tabIndex={-1} aria-labelledby="experience-title">
            <ExperienceCard index={selected} titleId="experience-title" />
          </article>
        </div>
        <p className="sr-only" aria-live="polite">{announcement}</p>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about-intro"><div className="eyebrow"><span className="section-number">03 /</span> BEHIND THE PIXELS</div><h2>A bit more<br /><em>about me.</em></h2><p>I’m a full-stack engineer with a soft spot for backend systems, cloud infrastructure, and making complex things feel simple.</p></div>
        <div className="about-grid"><div className="about-item"><span>✳</span><h3>THE TOOLKIT</h3><p>Python · Go · GCP · Terraform · Docker · Django · FastAPI · PostgreSQL · MongoDB</p></div><div className="about-item"><span>⌘</span><h3>THE FOUNDATION</h3><p>Studying Mechatronics Engineering at IFCE, Brazil. Always curious, always learning.</p></div><div className="about-item"><span>◎</span><h3>THE LANGUAGES</h3><p>Portuguese (native), English (advanced), and Spanish (basic communication).</p></div></div>
      </section>
    </main>
    <footer><span className="footer-brand">E<span>.</span>V</span><p>THANKS FOR STOPPING BY <span>✳</span><br /><small>BUILT WITH CURIOSITY & A LITTLE PIXEL MAGIC.</small></p><a href="#top">BACK TO TOP ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<App />);
