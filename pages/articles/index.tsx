import React from 'react'

// Components
import GenerateHead from '@components/head/GenerateHead'
import Hero from '@components/ui-components/Hero'
import ArticleCard from '@components/ui-components/ArticleCard'

interface Props {
    page: any
}



const ArticlesOverview: React.FC<Props> = ({ page }) => {

    const articles = page.articles?.articles?.data
    return (
        <>
            {page.search_engines && <GenerateHead data={page.search_engines} />}
            <main>
                <Hero
                    header={page.header}
                />
                <div className="container container--96">
                    <section>
                        <h2>Artikelen en Blogs</h2>
                    </section>
                    <section className='articles'>
                        {articles && articles .length > 0 &&
                            articles.map((article: any) => {
                                return <ArticleCard key={article.id} slug={article.attributes.slug} highlight={article.attributes.highlight} articleCard={article.attributes.article_card} />
                            })
                        }
                    </section>
                </div>
            </main>
        </>
    )
}


// Libs
import axios from 'axios';

// Fetch data from the server
export async function getServerSideProps(context: any) {

    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article-overview`)

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

export default ArticlesOverview