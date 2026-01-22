import clsx from 'clsx'

export const Container = ({ narrow = false, children }) => {
  return (
    <div className={clsx('container', narrow && 'container__narrow')}>
      {children}
    </div>
  )
}
