import { CalendarDays, Heart, X } from 'lucide-react'
import { useEffect } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

function ImageModal({ memory, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="memory-modal-backdrop" role="presentation" onClick={onClose}>
      <article className="memory-modal-card" role="dialog" aria-modal="true" aria-labelledby="memory-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="memory-modal-close" type="button" onClick={onClose} aria-label="Cerrar recuerdo">
          <X size={19} />
        </button>
        <div className="memory-modal-image-wrap">
          <ImagePlaceholder src={memory.image} alt={memory.alt} className="memory-modal-image" label="Esta imagen todavía no fue agregada" />
        </div>
        <div className="memory-modal-details">
          <div className="memory-modal-label"><Heart size={13} fill="currentColor" /> recuerdo guardado</div>
          <h3 id="memory-modal-title">{memory.title}</h3>
          {memory.description && <p>{memory.description}</p>}
          {memory.date && <div className="memory-modal-date"><CalendarDays size={15} /> {memory.date}</div>}
        </div>
      </article>
    </div>
  )
}

export default ImageModal
