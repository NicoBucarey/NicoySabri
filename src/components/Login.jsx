import { Heart, LockKeyhole, UserRound } from 'lucide-react'
import { useState } from 'react'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (username === 'NicoySabri' && password === 'TuJamonsin') {
      localStorage.setItem('nico-y-sabri-session', 'active')
      onLogin()
    } else {
      setError('Revisá los datos e intentá nuevamente. Esta historia es solo para nosotros.')
    }
  }

  return (
    <main className="login-shell">
      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />
      <section className="login-card" aria-labelledby="login-title">
        <div className="eyebrow"><Heart size={14} fill="currentColor" /> Un espacio para nosotros</div>
        <h1 id="login-title">Nico y Sabri</h1>
        <p className="login-subtitle">Una pequeña historia para una persona especial <span aria-hidden="true">♥</span></p>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username"><UserRound size={16} /> Usuario</label>
          <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" placeholder="Escribí el usuario" required />
          <label htmlFor="password"><LockKeyhole size={16} /> Contraseña</label>
          <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" placeholder="Escribí la contraseña" required />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-primary" type="submit">Entrar <span aria-hidden="true">→</span></button>
        </form>
        <p className="login-note">Un rincón privado de recuerdos, palabras y primeras veces.</p>
      </section>
    </main>
  )
}

export default Login
