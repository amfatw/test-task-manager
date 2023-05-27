const UserBlock = () => {
  return (
    <div className='user-block'>
      <button className='user-block__alerts'>
        <span className='visually-hidden'>Оповещения</span>
      </button>
      <div className='user-block__image-container'></div>
      <div className='user-block__user-data'>
        <p className='user-block__user-name'>Иванов В.А</p>
        <span className='user-block__user-title'>Должность</span>
      </div>
    </div>
  )
}


export { UserBlock }