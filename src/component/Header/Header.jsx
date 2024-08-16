import { useState, useContext } from 'react'
import { ModeContext } from '../../context/ModeContext';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'
import book from '../../assets/iconoir_book.svg'
import SearchBar from '../SearchBar/SearchBar';


function Header() {

    const [ displayOption, setDisplayOption ] = useState(false);
    const [ selectedFont, setSelectedFont ] = useState('Sans-serif');

    const setDefaultMode = useContext(ModeContext).setMode;
    const defaultMode = useContext(ModeContext).mode;

    function handleMode() {
        setDefaultMode((prev) => !prev)

        document.querySelector('body').classList.toggle('dark');
    }
    
    function handleOptions() {
        setDisplayOption((prev) => !prev)
    }

    function handleSelectFont (e) {
        setSelectedFont(prev => {
            document.querySelector('body').classList.replace(prev,e.target.value)
            return e.target.value;
        });
        
        handleOptions()
    }

  return (
    <div>
    
        <div className={ `${classes.container} ${ defaultMode ? '' : classes.dark }` }>
            <div className={ classes['book-icon'] }>
              <img src={ book } alt="book-icon" />
            </div>
            <div className={ classes.selectionContainer }>
              <div className={ classes.selectFont }>
                <div onClick={ handleOptions } className={ classes.select}>
                    <p>{selectedFont}</p>
                    <div className={ classes.selectIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                          <path d="M1 1L7 7L13 1" stroke="#A445ED" stroke-width="1.5"/>
                      </svg>
                    </div>
                </div>

                <div className={ `${classes.selectOption} ${ displayOption ? classes.flex : ''}` }>
                    <button value='Sans-serif' onClick={ handleSelectFont }>Sans serif</button>
                    <button value='Serif' onClick={ handleSelectFont }>Serif</button>
                    <button value='Mono' onClick={ handleSelectFont }>Mono</button>
                </div>
              </div>
              <div className={ classes.selectMode}>
                <div className={ classes.selector }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="22" viewBox="0 0 81 22" fill="none">
                        <rect onClick={handleMode} y="1" width="40" height="20" rx="10" fill={defaultMode ? "#757575" : "#A445ED"}/>
                        <circle onClick={handleMode} cx={defaultMode ? "10" : "30"} cy="11" r="7" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M60 10.449C59.9985 12.8283 60.8017 15.1383 62.2791 17.0033C63.7566 18.8683 65.8214 20.1788 68.138 20.7218C70.4545 21.2647 72.8866 21.0082 75.039 19.994C77.1912 18.9797 78.9373 17.2673 79.9931 15.1352C70.5442 15.1352 65.858 10.4479 65.858 1C64.0984 1.87311 62.6177 3.22033 61.5827 4.88981C60.5476 6.5593 59.9995 8.48469 60 10.449Z" stroke={defaultMode ? "#757575" : "#A445ED"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
              </div>
            </div>
        </div>
        <SearchBar />
    </div>
  )
}

export default Header