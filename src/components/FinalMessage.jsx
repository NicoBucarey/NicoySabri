import { Heart, LogOut } from 'lucide-react'
import Reveal from './Reveal'
import UpdateNotice from './UpdateNotice'

function FinalMessage({ onLogout }) {
  return <><UpdateNotice /><footer className="final-section"><Reveal><Heart size={18} fill="currentColor" /><p>Un mes de nosotros.<br /><em>Y espero que este sea solamente el primero de muchos.</em></p><strong>Nico & Sabri</strong></Reveal><button className="logout-button" onClick={onLogout}><LogOut size={14} /> cerrar sesión</button></footer></>
}

export default FinalMessage
