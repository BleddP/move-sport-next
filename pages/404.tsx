import NavbarBg from '@components/ui-components/layout/NavBarBg'
import Footer from '@components/ui-components/layout/Footer'
import Button from '@components/ui-components/Button'


export const NotFound = () => {
    return (
        <main>
            <NavbarBg />
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
                            <Button text='Terug naar af' type="primary" to="/" target="internal" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default NotFound