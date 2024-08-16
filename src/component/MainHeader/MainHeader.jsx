import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'
import classes from './MainHeader.module.css'

function MainHeader() {

  const defaultMode = useContext( ModeContext ).mode;
  const wordObj = useContext( ModeContext ).wordDetail;

  return (
    <div>
        <div className={` ${ classes.container } ${ defaultMode ? '' : classes.dark }` }>
          <div className={ classes.wordDetail }>
            <h2>{wordObj.word}</h2>
            <p>{wordObj.phonetic}</p>
          </div>
          <div className={ classes.play }>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>
            </svg>
          </div>
        </div>
    </div>
  )
}

export default MainHeader