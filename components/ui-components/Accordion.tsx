// Nextjs
import {useState, useRef} from 'react'
import Image from 'next/image'

// Components
import Chevron from '@assets/icons/chevron-down.svg'

const Accordion = ({accordion}) => {
    // Types
    const title:string = accordion.title
    const content:string = accordion.content

    // State
    const [open, setOpen] = useState(false)
    const [dynamicHeight, setDynamicHeight] = useState(0)
    const accordionContent = useRef(null)

    // Methods
    const toggleAccordion = () => {
        setOpen(!open)
        const contentHeight = accordionContent.current.offsetHeight
        if (open) {
            setDynamicHeight(0)
        } else {
            setDynamicHeight(contentHeight)
        }
    }

    return (
        <div className="accordion">
            <div className={open ? 'accordion__header open' : 'accordion__header'} onClick={toggleAccordion}>
                <h4 className="accordion__title">{title}</h4>
                <div className="accordion__icon">
                    <Image src={Chevron} alt="chevron" width={25} height={25} />
                </div>
            </div>
            <div className="accordion__content" style={{height: `${dynamicHeight}px`}}>
                <p ref={accordionContent}>{content}</p>
            </div>
        </div>
    )
}

export default Accordion