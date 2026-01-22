import ReactMarkdown from 'react-markdown'
import { LinkedSteps } from '@features'

export const OurMethods = ({ page }) => {
  const steps = page.methods.methods.data

  return (
    <section>
      <div className='our-methods'>
        <div className='our-methods__content'>
          <h1>{page.title}</h1>
          <ReactMarkdown>{page.intro}</ReactMarkdown>
        </div>
        <div>
          <LinkedSteps steps={steps} />
        </div>
      </div>
    </section>
  )
}
