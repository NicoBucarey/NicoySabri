import { FileText, X } from 'lucide-react'
import { useState } from 'react'
import { notes } from '../data/memories'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

function Letters() {
  const [selected, setSelected] = useState(null)
  return <section className="section-shell letters-section" id="palabras"><Reveal><div className="section-heading"><p className="kicker">notas al margen</p><h2>Palabras que guardé</h2><p>Algunas palabras merecen una pausa y una segunda lectura</p></div></Reveal><div className="notes-grid">{notes.map((note, index) => <Reveal key={note.title}><button className={`note-card note-${index}`} onClick={() => setSelected(note)}><FileText size={19} /><span>{note.title}</span><small>Abrir nota →</small></button></Reveal>)}</div>{selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="image-modal note-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button><ImagePlaceholder src={selected.image} alt={selected.alt} className="modal-image" /><p className="kicker">palabras que guardé</p><h3>{selected.title}</h3></div></div>}</section>
}

export default Letters
