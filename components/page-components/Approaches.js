import Card from '@components/ui-components/Card'

const Approaches = ({approaches}) => {
    return (
        <div className='columns columns--3-col'>
            {approaches.map((approach) => {
                return <Card key={approach.id} card={approach} />
            })}
        </div>
    )
}

export default Approaches