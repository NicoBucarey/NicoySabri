import { ImageOff } from 'lucide-react'
import { useState } from 'react'

function ImagePlaceholder({ src, alt, className = '', label = 'Imagen por agregar' }) {
  const [missing, setMissing] = useState(false)

  return missing ? (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${alt}: ${label}`}>
      <ImageOff size={24} strokeWidth={1.5} />
      <span>{label}</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setMissing(true)}
    />
  )
}

export default ImagePlaceholder
