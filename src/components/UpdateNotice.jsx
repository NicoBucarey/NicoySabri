import { Activity, Heart, TriangleAlert } from 'lucide-react'
import Reveal from './Reveal'

const systemInfo = [
  ['Versión actual', 'v1.0'],
  ['Contenido', 'Nuestro primer mes ♥'],
  ['Estado', 'Historia en construcción'],
  ['Responsable de futuras actualizaciones', 'Tu noviecito'],
]

function UpdateNotice() {
  return (
    <section className="update-section section-shell" id="actualizaciones">
      <Reveal>
        <div className="update-window">
          <div className="update-window-bar">
            <div className="window-lights" aria-hidden="true"><i /><i /><i /></div>
            <span><Activity size={14} /> actualización del sistema</span>
            <span className="update-live"><i /> en construcción</span>
          </div>
          <div className="update-content">
            <div className="update-icon"><TriangleAlert size={24} /></div>
            <p className="kicker">actualización importante</p>
            <h2>Esta página<br /><em>no está terminada.</em></h2>
            <div className="update-copy">
              <p>A lo largo del tiempo, tu noviecito irá agregando nuevos momentos, recuerdos e historias que vayamos construyendo juntos.</p>
              <p>Cada tanto podrías encontrarte con alguna actualización nueva y, por supuesto, serás notificada oficialmente cuando eso ocurra.</p>
              <p>Porque esto no es solamente un recuerdo de nuestro primer mes...</p>
              <p className="update-closing">Es una historia que espero seguir escribiendo con vos. <Heart size={16} fill="currentColor" /></p>
            </div>
            <div className="system-info" aria-label="Información de la página">
              {systemInfo.map(([label, value]) => <div className="system-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default UpdateNotice
