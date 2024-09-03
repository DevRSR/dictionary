import {useContext, useEffect} from 'react'
import { ModeContext } from '../../context/ModeContext'
import MainItem from './MainItem';

function MainBody() {

  const wordObj = useContext( ModeContext ).wordDetail;
 

  return (
    <div>
      {<ul style={{ listStyleType: 'none'}}>
        { wordObj.meanings && wordObj.meanings.map((meaning,index) => (
          <MainItem key={index} obj={meaning}  />
        )) }
      </ul>}

    </div>
  )
}

export default MainBody