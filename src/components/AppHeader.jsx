import { ProjectBlock } from './ProjectBlock';
import { UserBlock } from './UserBlock';


const AppHeader = () => {
  return (
    <header className='app-header'>
      <ProjectBlock/>
      <UserBlock/>
    </header>
  )
}


export { AppHeader }