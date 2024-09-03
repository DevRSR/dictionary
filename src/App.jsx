import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import MainHeader from "./component/MainHeader/MainHeader";
import MainBody from "./component/MainBody/MainBody";
import Footer from "./component/Footer/Footer";
import { ModeContext } from "./context/ModeContext";
import Nofound from "./component/NoFound/Nofound";

function App() {
  
  const [ defaultMode, setDefaultMode ] = useState(true);
  const [ wordObj, setWordObj ] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [word, setWord] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  
 
  let modeObj = {
    mode: defaultMode,
    setMode: setDefaultMode,
    setWordObj,
    wordDetail: wordObj,
    setNotFound,
    setWord,
    setIsLoading,
    isLoading,
    word
  }


  return (
    <ModeContext.Provider value={ modeObj }>
        <div className="container">
          <Header />
           { wordObj && 
           (<>
            <main>
              <MainHeader />
              <MainBody />
            </main>
            <Footer />
           </> )}
           {notFound && <Nofound />}
           {
            !wordObj && !notFound && !isLoading && 
            <div className="welcome-container">
              <h2>Welcome To Our Platform</h2>
              <p>Here Is Home For Finding Meaning To Word, So As To Build Your Vocabulary.</p>
            </div>
            }

            {
              isLoading && <div className="spin"></div>
            }
        </div>
    </ModeContext.Provider>
  )
}

export default App
