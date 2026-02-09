import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { CardInterface } from '@typings'
import { Button } from '@atoms'
import { renderImage } from '@utils'

export const Card = (props: any) => {
  const card: CardInterface = props.card
  let image = {
    url: '',
  }
  if (card.image.data) {
    image = renderImage(card?.image?.data?.attributes)
  }

  return (
    <div className='card'>
      {image && (
        <div className='card__image'>
          <Image
            src={image.url}
            alt={card.title}
            width={750}
            height={500}
            layout='intrinsic'
            priority={false}
          />
        </div>
      )}
      <div className='card__content'>
        <h4 className='gradient-header'>{card.title}</h4>
        <ReactMarkdown>{card.content || card.intro}</ReactMarkdown>
      </div>

      {card.button && (
        <Button
          to={card.button.to}
          text={card.button.text}
          type={(card.button as any).type}
          target={
            (card.button as any).target
              ? (card.button as any).target
              : 'internal'
          }
        />
      )}

      {card.buttons &&
        card.buttons.map((button: any, i: number) => {
          return (
            <Button
              key={i}
              to={button.url ? button.url : '/'}
              text={button.text}
              type={button.type ? button.type : 'primary'}
              target={button.target ? button.target : 'internal'}
            />
          )
        })}
    </div>
  )
}
