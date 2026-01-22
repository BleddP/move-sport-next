import { Approaches } from '@features'

export const Trajecten = ({ intro, trajecten }) => {
  return (
    <div>
      {intro && (
        <div>
          <h3>{intro.title}</h3>
          <p>{intro.content}</p>
        </div>
      )}
      <Approaches approaches={trajecten} />
    </div>
  )
}
