import { useState } from 'react'
import { memories } from '../data/memories'
import ImageModal from './ImageModal'
import MemoryCard from './MemoryCard'
import Reveal from './Reveal'

function Memories() {
  const [selected, setSelected] = useState(null)
  return (
    <section className="section-shell memories-section" id="recuerdos">
      <Reveal><div className="section-heading"><p className="kicker">archivo visual</p><h2>Nuestros recuerdos</h2><p>Pequeñas cosas que, juntas, cuentan algo enorme ❤️</p></div></Reveal>
      <div className="memory-grid">{memories.map((memory, index) => <MemoryCard key={`${memory.title}-${index}`} memory={memory} index={index} onOpen={setSelected} />)}</div>
      {selected && <ImageModal memory={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Memories
