import React from 'react'
import Image from 'next/image'

// Helpers
import renderImage from '@components/helper-functions/renderImage'

// Components
import Button from '@components/ui-components/Button'

interface Props {
    slug: string,
    highlight?: boolean,
    articleCard: {
        image?: any,
        title: string,
        short_description: string
        url: string
    }
}

const ArticleCard: React.FC<Props> = ({ slug, highlight, articleCard }) => {

    const { image, title, short_description } = articleCard

    const imageUrl = renderImage(image?.data?.attributes)

    return (
        <div className={highlight ? 'articles__card highlight' : 'articles__card'}>
            {image &&
                <Image className='articles__card__image' src={imageUrl.url} width={600} height={300} />
            }
            <div className="content">
                <h3 className='articles__card__title'>{title}</h3>
                <p>{short_description}</p>
            </div>
            <Button text='Lees meer' target='internal' type='primary' to={`/articles/${slug}`} />
        </div>
    )
}

export default ArticleCard