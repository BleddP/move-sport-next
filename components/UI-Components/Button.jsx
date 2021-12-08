import Link from 'next/link'

const Button = ({to, type, text}) => {
    return (
        <Link href={to}>
            <button className={type === 'secondary' ? 'btn btn--secondary' : 'btn btn--primary'}>{text}</button>
        </Link>
    )
}

export default Button