import { CalendarDays } from 'lucide-react'
import Reveal from './Reveal'

const dates = [
  ['Desde nuestro primer mensaje', '12/06/2026', '2026-06-12'],
  ['Desde que nos vimos por primera vez', '26/06/2026', '2026-06-26'],
  ['Desde que somos novios', '07/08/2026', '2026-08-07'],
]

function daysSince(date) {
  return Math.max(0, Math.floor((new Date() - new Date(`${date}T00:00:00`)) / 86400000))
}

function Counters() {
  return <section className="section-shell counter-section" id="tiempo"><Reveal><div className="section-heading"><p className="kicker">nuestro presente</p><h2>Nuestro tiempo</h2><p>El calendario sigue avanzando, y nosotros también.</p></div></Reveal><div className="counter-grid">{dates.map(([label, displayDate, date]) => <Reveal key={date}><article className="counter-card"><CalendarDays size={18} /><strong>{daysSince(date)}</strong><span>días</span><p>{label}</p><small>{displayDate}</small></article></Reveal>)}</div></section>
}

export default Counters
