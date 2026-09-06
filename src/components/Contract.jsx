import { Download, ExternalLink, FileSignature } from 'lucide-react'
import { useEffect, useState } from 'react'
import Reveal from './Reveal'

function Contract() {
  const [available, setAvailable] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { fetch('/documents/contrato-noviazgo.pdf', { method: 'HEAD' }).then((response) => setAvailable(response.ok)).catch(() => setAvailable(false)) }, [])
  return <section className="section-shell contract-section" id="contrato"><Reveal><div className="contract-card"><div className="contract-icon"><FileSignature size={27} /></div><div><p className="kicker">documento oficial</p><h2>Todo acuerdo importante necesita un contrato ❤️ <span aria-hidden="true"></span></h2><p></p><div className="contract-actions">{/* DOCUMENTO: public/documents/contrato-noviazgo.pdf */}<button className="button button-dark" onClick={() => available && setOpen(true)} disabled={!available}><ExternalLink size={16} /> Ver contrato</button><a className={`button button-outline ${!available ? 'disabled-link' : ''}`} href={available ? '/documents/contrato-noviazgo.pdf' : undefined} download={available ? 'contrato-noviazgo.pdf' : undefined} aria-disabled={!available}><Download size={16} /> Descargar contrato</a></div>{!available && <small className="empty-state">El contrato todavía no fue agregado. Cuando exista, estos botones se activarán.</small>}</div></div></Reveal>{open && <div className="modal-backdrop" onClick={() => setOpen(false)}><div className="pdf-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button><iframe src="/documents/contrato-noviazgo.pdf" title="Contrato de noviazgo" /></div></div>}</section>
}

export default Contract
