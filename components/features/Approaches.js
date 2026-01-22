import { Card } from '@atoms'

export const Approaches = ({ approaches }) => {
  return (
    <div className='columns columns--3-col'>
      {approaches.map((approach) => {
        return <Card key={approach.id} card={approach} />
      })}
    </div>
  )
}
