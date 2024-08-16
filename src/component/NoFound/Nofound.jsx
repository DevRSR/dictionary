import React from 'react'
import classes from './Nofound.module.css'
import emoji from '../../assets/emoji.png'

function Nofound() {
  return (
    <div>
        <div className={classes.container}>
            <div className={classes.emoji}>
                <img src={emoji} alt="emoji" />
            </div>
            <div className={classes.detail}>
                <h2>No Definitions Found</h2>
                <p>
                   Sorry pal, we couldn't find definitions for the word you
                   were looking for. You can try the search again at later 
                   time or head to the web instead.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Nofound