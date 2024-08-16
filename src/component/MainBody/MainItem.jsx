import {useContext} from 'react'
import { ModeContext } from '../../context/ModeContext'
import classes from './MainItem.module.css'
import { fetchWordMeaning } from '../../request/fetchWordMeaning';


function MainItem({ obj }) {

  const defaultMode = useContext(ModeContext).mode;
  const setWordObj = useContext(ModeContext).setWordObj;
  const setNotFound = useContext(ModeContext).setNotFound;
  const setWord = useContext(ModeContext).setWord;
  

  async function handleClick(name) {

    setNotFound(false);
    setWordObj(null);
    setWord(name)

    try {
      const response = await fetchWordMeaning(name);
      const [meaning] = await response
      setWordObj(meaning);
      
    } catch (error) {
      setNotFound(error)
    }
  }


  return (
    <li>
        <div className={ `${classes.container} ${ defaultMode ? '' : classes.dark }` }>
            <div className={ classes.heading }>
                <p>{obj.partOfSpeech}</p>
                <div className={ classes.line }></div>
            </div>
            <div className={ classes.meaning }>
              <p>Meaning</p>
              <ul>
                { obj.definitions.map((list,index) => (
                  <li key={index}><p>{list.definition}</p></li>

                ))}
              </ul>
            </div>
            <div className={classes.synonyms}>
              <p>synonyms</p>
              <ul>
                { obj.synonyms.map((syn,index)=> (
                  <li key={syn} onClick={() => handleClick(syn)}><p>{`${syn}${obj.synonyms.length > (index + 1) ? ',' : ''}`}</p></li>
                ))}
              </ul>
            </div>
        </div>
    </li>
  )
}

export default MainItem