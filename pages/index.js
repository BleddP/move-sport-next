import Button from '@UI/Button'

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button to='/' text='Plan jou sessie' type='primary' />
      <Button to='/' text='Neem contact op' type='secondary' />
    </div>
  )
}

export default Home