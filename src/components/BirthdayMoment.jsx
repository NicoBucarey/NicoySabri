import Reveal from './Reveal'
import ImagePlaceholder from './ImagePlaceholder'

const treats = [
  {
    title: 'Tiramisú',
    image: '/images/tiramisu.jpg',
    alt: 'Tiramisú que me preparó Sabri',
    // IMAGEN: tiramisu.jpg - tiramisú que me preparó Sabri en nuestro segundo encuentro
  },
  {
    title: 'Tarta de manzana',
    image: '/images/tarta-manzana.jpg',
    alt: 'Tarta de manzana que me preparó Sabri',
    // IMAGEN: tarta-manzana.jpg - tarta de manzana que me preparó Sabri en nuestro segundo encuentro
  },
]

function BirthdayMoment() {
  return (
    <section className="birthday-moment section-shell" id="segundo-encuentro">
      <Reveal>
        <div className="birthday-heading">
          <p className="kicker">segundo encuentro · un día antes de mi cumpleaños</p>
          <h2>Un día antes de mi cumpleaños <span aria-hidden="true">🎂</span></h2>
          <p>Fue nuestro segundo encuentro y, un día antes de mi cumpleaños, ella me sorprendia preparando un tiramisú y una tarta de manzana ❤️</p>
        </div>
        <div className="birthday-treats">
          {treats.map((treat) => (
            <article className="birthday-treat" key={treat.title}>
              <div className="birthday-photo">
                <ImagePlaceholder src={treat.image} alt={treat.alt} className="birthday-image" label={`La foto del ${treat.title.toLowerCase()} va acá`} />
              </div>
              <h3>{treat.title}</h3>
              <span>un detalle para recordar</span>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default BirthdayMoment
