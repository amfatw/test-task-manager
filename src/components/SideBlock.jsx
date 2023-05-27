const SideBlock = () => {
  return (
    <ul className='side-block'>
      <li className='side-block__li'>
        <a
          className='side-block__item side-block__item--something' 
          href="#"
        >
          <span className='visually-hidden'>Ссылка куда-то</span>
        </a>
      </li>
    </ul>
  )
}


export { SideBlock }