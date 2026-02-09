// Next
import Image from 'next/image'

// Typescript interfaces
import { Header } from '@typings'

// Components
import { Button } from '@atoms'
import { renderImage } from '@utils'

// Logos
import VSPN from '@assets/logos/vspn.svg'

export const Hero = (props: any) => {
  const header: Header = props.header
  const type: string = props.type

  const image = renderImage(props.header.header_image.data.attributes)

  return (
    <div
      className={type === 'homepage' ? 'hero homepage' : 'hero'}
      style={
        {
          backgroundImage: `url('${image.url}')`,
          '--hero-height': type === 'homepage' ? '80vh' : '40vh',
        } as React.CSSProperties
      }
    >
      <div className='hero__overlay'></div>
      <div className='container'>
        <div className='hero__content'>
          {type === 'homepage' && (
            <div className='vspn-certified'>
              <Image src={VSPN} />
              <span>gecertificeerd</span>
            </div>
          )}{' '}
          <h1>{header.title}</h1>
          {header.subtitle && (
            <h4 className='text--muted font--secondary'>{header.subtitle}</h4>
          )}
          <div className='hero__cta'>
            {header.buttons &&
              header.buttons.map((button: any) => {
                return (
                  <Button
                    key={button.id}
                    to={button.url}
                    text={button.text}
                    type={button.button_type}
                    target={button.target}
                  />
                )
              })}
            {type === 'homepage' && (
              <Button text='Ons aanbod' variant='outlined' to='/aanbod' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
