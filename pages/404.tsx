import { NavBarBg, Footer } from '@features'
import { Button } from '@atoms'

const NotFound = () => {
  return (
    <main>
      <NavBarBg />
      <div className='page-404'>
        <div className='container container--96'>
          <div className='page-404__content'>
            <div className='numbers'>
              <h1 className='gradient-header'>404</h1>
            </div>
            <div>
              <h2>Sorry,</h2>
              <br />
              <h2>We hebben niks voor je kunnen vinden</h2>
              <Button
                text='Terug naar af'
                type='primary'
                to='/'
                target='internal'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default NotFound
