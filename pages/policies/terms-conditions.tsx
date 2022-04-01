import ReactMarkdown from 'react-markdown';

// Head
import GenerateHead from '@components/head/GenerateHead'
import NavBarBg from "@ui/layout/NavBarBg";

const TermsConditions = ({ page }) => {
    return (
        <>
            {page.search_engines &&
                <GenerateHead data={page.search_engines} />
            }
            <main className='terms-conditions'>
                <NavBarBg />
                <div className="container container--96">
                    <h1>{page.privacy.title}</h1>
                    <ReactMarkdown>
                        {page.privacy.content}
                    </ReactMarkdown>
                </div>
            </main>
        </>
    )
}

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context: any) {

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/terms-and-condition`)

    if (response.status && response.status < 300) {
        return {
            props: {
                page: response.data.data.attributes
            }
        }
    } else {
        console.log('Error: ', response)
    }
}


export default TermsConditions