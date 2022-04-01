import React from 'react'
import Image from 'next/image'

// Components
import renderImage from '@components/helper-functions/renderImage'
import GenerateHead from '@components/head/GenerateHead'
import Hero from '@components/ui-components/Hero'
import Button from '@components/ui-components/Button'
import Accordion from '@components/ui-components/Accordion'
import Footer from '@components/ui-components/layout/Footer'
import ReactMarkdown from 'react-markdown'

interface Props {
    page: any
}

const Article: React.FC<Props> = ({ page }) => {

    const authorImage = renderImage(page?.author?.author_image?.data?.attributes)
    const date = new Date(page.publishedAt).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })

    return (
        <>
            {page.search_engines && <GenerateHead data={page.search_engines} />}
            <Hero
                header={page.header}
            />
            <main className='container container--96'>
                <div className='article'>
                    <div className='article__author'>
                        <div className='avatar'>
                            <Image src={authorImage.url} width={100} height={100} layout='fixed' />
                        </div>
                        <h4 className='author'>Chloé Webers</h4>

                        <small className='published'>Gepubliceerd op {date}</small>
                    </div>
                    <div className='article__content'>
                        {page.body &&
                            page.body.map((item, i) => {
                                const img = "ui-components.image";
                                const button = "ui-components.button";
                                const content = "ui-components.rich-text";
                                const accordion = "ui-components.accordion"

                                if (item.__component === img) {
                                    const image = renderImage(item.image.data.attributes);
                                    const customWidth = item.max_width ? item.max_width : image.width
                                    const aspectRatio = image.height / image.width
                                    const customHeight = item.max_width ? item.max_width * aspectRatio : image.height

                                    return (
                                        <section key={i} className='container--24'>
                                            <div className="dynamic-image">
                                                <Image src={image.url} alt={item.image.data.name} width={customWidth} height={customHeight} />
                                            </div>
                                        </section>
                                    );
                                }

                                if (item.__component === button) {
                                    return (
                                        <section key={i} className='container--24'>
                                            <Button
                                                text={item.text}
                                                to={item.url}
                                                target={item.target}
                                                type={item.type}
                                            />
                                        </section>
                                    );
                                }

                                if (item.__component === content) {
                                    return (
                                        <section key={i} className='container--24'>

                                            <ReactMarkdown >
                                                {item.rich_text}
                                            </ReactMarkdown>
                                        </section>
                                    );
                                }

                                if (item.__component === accordion) {
                                    return (
                                        <section key={i} className='container--24'>
                                            <Accordion accordion={item} />
                                        </section>);
                                }
                            })
                        }
                    </div>

                </div>
            </main>
            <Footer />
        </>

    )
}

// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context: any) {

    const slug = context.query.article

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${slug}`)

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


export default Article