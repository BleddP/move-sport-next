import ReactMarkdown from 'react-markdown'
import { LinkedSteps } from '@features'
import { Container } from '@atoms'

export const OurMethods = ({ page }) => {
  const steps = page.methods.methods.data

  return (
    <section>
      <div className='our-methods'>
        <Container narrow>
          <div className='our-methods__content'>
            <h1>{page.title}</h1>
            <ReactMarkdown>{page.intro}</ReactMarkdown>
          </div>
        </Container>
        <Container>
          <LinkedSteps steps={steps} />
        </Container>
      </div>
    </section>
  )
}
