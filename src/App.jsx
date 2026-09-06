import { useState } from 'react'
import { BedDouble, Coffee, Moon, Snowflake, Sparkles } from 'lucide-react'
import './App.css'
import Login from './components/Login'
import Welcome from './components/Welcome'
import Timeline from './components/Timeline'
import Memories from './components/Memories'
import Letters from './components/Letters'
import Counters from './components/Counters'
import Contract from './components/Contract'
import FinalMessage from './components/FinalMessage'
import Reveal from './components/Reveal'
import BirthdayMoment from './components/BirthdayMoment'

function Intro() {
  return <section className="intro-section section-shell" id="intro"><Reveal><div className="intro-mark">01</div><div><p className="kicker">una pequeña introducción</p><h2>En tan poco tiempo<br /><em>pasaron muchas cosas...</em></h2><p className="intro-text">Esta página es un lugar para volver a nuestras primeras veces, guardar lo que nos hizo sonreír y celebrar que recién estamos escribiendo el principio.</p></div></Reveal></section>
}

function FirstMessage() {
  return <section className="moment-section section-shell" id="mensaje"><Reveal><div className="moment-copy"><p className="kicker">12 · 06 · 2026</p><h2>Todo comenzó<br />con un mensaje</h2><p>Quién hubiera pensado que una conversación iba a convertirse en todo esto ❤️</p></div><div className="feature-photo">{/* IMAGEN: primeros-mensajes.png - captura de nuestros primeros mensajes */}<img src="/images/primeros-mensajes.png" alt="Captura de nuestros primeros mensajes" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.hidden = false }} /><div className="image-placeholder" hidden><span>La captura de nuestros primeros mensajes va acá</span></div><small></small></div></Reveal></section>
}

function FirstMeeting() {
  const days = Math.max(0, Math.floor((new Date() - new Date('2026-06-26T00:00:00')) / 86400000))
  const details = [
    ['Una noche fría', Snowflake],
    ['Unos mates', Coffee],
    ['El Paseo de la Costa', Moon],
    ['Una frazada compartida', BedDouble],
    ['Y varias horas hablando', Sparkles],
  ]

  return <section className="meeting-night section-shell" id="encuentro"><div className="night-stars" aria-hidden="true"><i /><i /><i /><i /><i /></div><Reveal><div className="night-heading"><p className="kicker">26 · 06 · 2026 · nuestro primer encuentro</p><h2>La primera vez<br />que nos vimos <span aria-hidden="true">♥</span></h2><p>Una noche en el Paseo de la Costa, cuando todavía no sabíamos todo lo que iba a empezar ahí.</p></div><div className="night-orbit" aria-hidden="true"><div className="night-moon"><Moon size={34} fill="currentColor" /></div><div className="mate-symbol"><Coffee size={28} /><span>mate</span></div></div><div className="night-details">{details.map(([text, Icon], index) => <div className="night-detail" key={text} style={{ '--delay': `${index * 120}ms` }}><Icon size={18} /><span>{text}</span></div>)}</div><div className="night-memory"><p>Cada vez que me destapaba,<br />ella muy atenta me volvía a tapar 💕 </p><div className="night-divider" /><p className="nickname-intro">Y así nació uno de mis primeros apodos...</p><strong>Chihuahua <span aria-hidden="true">🐕</span></strong></div><div className="days-pill night-counter"><span>Desde aquella primera noche</span><strong>{days}</strong><small>días</small></div></Reveal></section>
}

function SevenAugust() {
  const start = new Date('2026-08-07T00:00:00')
  const days = Math.max(0, Math.floor((new Date() - start) / 86400000))
  return <section className="official-section section-shell" id="oficial"><Reveal><p className="kicker">07 · 08 · 2026</p><h2>El día que oficialmente<br /><em>empezó todo</em> <span aria-hidden="true">♥</span></h2><p>Un día para marcar en el calendario, aunque la historia ya venía encontrando su forma.</p><div className="official-counter"><span><strong>{days}</strong> días</span><span><strong>{Math.floor(days / 7)}</strong> semanas</span><span><strong>{Math.floor(days / 30.44)}</strong> meses</span></div></Reveal></section>
}

function Cooking() {
  return <section className="section-shell cooking-section" id="cocina"><Reveal><div className="section-heading"><p className="kicker">capítulo comestible</p><h2>Nuestra cocina experimental <span aria-hidden="true">👨‍🍳♥👩‍🍳</span></h2><p>Cuatro pequeñas pruebas de que cocinar juntos también es una aventura, y las demás comidas que nos queda por hacer 💖 </p></div></Reveal><div className="cooking-list">{['Bizcochuelo de corazón', 'Ñoquis', 'Budín', 'Pastelito'].map((item, index) => <Reveal key={item}><div><span>0{index + 1}</span><strong>{item}</strong><small>{index === 0 ? '' : ''}</small></div></Reveal>)}</div></section>
}

function FootArt() {
  return <section className="foot-section section-shell"><Reveal><div className="foot-photo">{/* IMAGEN: nombre-pie.jpg - nombre de Sabri escrito en la planta del pie */}<img src="/images/nombre-pie.jpg" alt="Nombre de Sabri escrito en la planta del pie" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.hidden = false }} /><div className="image-placeholder" hidden><span>La foto de esta obra de arte va acá</span></div></div><div><p className="kicker"></p><h2>Una obra de arte</h2><p></p><small></small></div></Reveal></section>
}

function App() {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('nico-y-sabri-session') === 'active')
  const logout = () => { localStorage.removeItem('nico-y-sabri-session'); setLoggedIn(false); window.scrollTo(0, 0) }
  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />
  return <div className="app-shell"><header className="site-nav"><a href="#inicio" className="brand">N <span>&</span> S</a><nav><a href="#historia">Historia</a><a href="#recuerdos">Recuerdos</a></nav><button className="nav-login" onClick={logout}>salir</button></header><main><Welcome onStart={() => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })} /><Intro /><Timeline /><FirstMessage /><FirstMeeting /><BirthdayMoment /><Memories /><Letters /><Cooking /><FootArt /><SevenAugust /><Counters /><Contract /><FinalMessage onLogout={logout} /></main></div>
}

export default App
