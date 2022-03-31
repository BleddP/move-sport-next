import React from 'react'
import Image from 'next/image'

// Components
import Button from '@components/ui-components/Button'

interface Props {
    image?: string,
    title: string,
    content: string
    url: string
    highlight?: boolean,
    pin_to_top?: boolean
}

const ArticleCard: React.FC<Props> = ({ image, title, content, url, highlight, pin_to_top }) => {
    return (
        <div className={highlight ? 'articles__card highlight' : 'articles__card'}>
            {!image &&
                <Image className='articles__card__image' src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" width={600} height={300} />
            }
            <div className="content">
                <h3 className='articles__card__title'>{title}</h3>
                <p className='articles__card__author'>Door: Chloe Wevers</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reiciendis numquam tempore quia quidem libero cupiditate porro accusamus quaerat dolorum magnam, excepturi dolores optio sint consectetur eos corrupti laborum natus, iure itaque a labore cum! Fugiat, quaerat? Harum, molestias temporibus quasi minus quidem facilis alias hic sunt, cumque accusantium tempora!</p>
            </div>
            <Button text='Lees meer' target='internal' type='primary' to='contact'/>
        </div>
    )
}

export default ArticleCard