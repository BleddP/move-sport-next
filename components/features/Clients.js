import { Button, Container, Slider } from '@atoms'

export const Clients = ({ clients }) => {
  return (
    <section className='section'>
      <Container narrow>
        <div className='clients'>
          <div className='clients__content'>
            <h2>{clients.title}</h2>
            <p>{clients.intro}</p>
            {clients.button && (
              <Button
                text={clients.button.text}
                to={clients.button.url}
                type={clients.button.type}
                target={clients.button.target}
              />
            )}
          </div>
          <div className='clients__reviews'>
            <Slider slides={clients.clients.data} />
          </div>
        </div>
      </Container>
    </section>
  )
}
