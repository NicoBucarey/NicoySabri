import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

function MemoryCard({ memory, index, onOpen }) {
  return (
    <Reveal className={`memory-card-wrap memory-card-${index % 4}`}>
      <button className="memory-card" style={{ '--rotation': memory.rotation }} onClick={() => onOpen(memory)}>
        {/* La imagen se carga desde public/images; si aún no existe aparece un placeholder. */}
        <ImagePlaceholder src={memory.image} alt={memory.alt} className="memory-image" />
        <span className="memory-card-copy"><strong>{memory.title}</strong><small>{memory.description}</small></span>
      </button>
    </Reveal>
  )
}

export default MemoryCard
