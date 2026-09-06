import { ArrowDown, Heart } from 'lucide-react'

function Welcome({ onStart }) {
  return (
    <section className="hero-section section-shell" id="inicio">
      <div className="hero-copy">
        <div className="eyebrow"><Heart size={14} fill="currentColor" /> Nuestra primera página</div>
        <h1>Nico <span>&</span> Sabri</h1>
        <p className="hero-lead">Un mes<br />Muchos momentos<br /><em>Y recién estamos empezando</em></p>
        <button className="button button-dark" onClick={onStart}>Comenzar nuestro recorrido <ArrowDown size={17} /></button>
      </div>
      <div className="hero-stamp" aria-hidden="true"><span>desde</span><strong>12</strong><small>junio<br />2026</small></div>
      <div className="scroll-hint">Deslizá para descubrir <span /></div>
    </section>
  )
}

export default Welcome
