import { MessageCircle, Heart, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const moments = [
  { date: '12 de junio de 2026', title: 'Todo comenzó con un mensaje', icon: MessageCircle },
  { date: '26 de junio de 2026', title: 'La primera vez que nos vimos', icon: Heart },
  { date: '7 de agosto de 2026', title: 'El día que empezamos oficialmente nuestro camino juntos', icon: Sparkles },
]

function Timeline() {
  return (
    <section className="section-shell section-paper" id="historia">
      <Reveal><div className="section-heading"><p className="kicker">capítulo uno</p><h2>Nuestra historia</h2><p>Algunas fechas se vuelven importantes sin pedir permiso.</p></div></Reveal>
      <div className="timeline">
        {moments.map(({ date, title, icon: Icon }, index) => (
          <Reveal key={date} className="timeline-item"><div className="timeline-marker"><Icon size={17} /></div><div className="timeline-content"><span>0{index + 1} · {date}</span><h3>{title}</h3></div></Reveal>
        ))}
      </div>
    </section>
  )
}

export default Timeline
