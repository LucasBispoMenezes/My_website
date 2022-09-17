import React, { ReactElement } /* useState */ from 'react'
import NavBar from './Components/navBar'
function App (): ReactElement {
  // const [scroll, setScroll] = useState();
  return (
        <>
            <main>
                <NavBar />
                <body></body>
            </main>
        </>
  )
}

export default App
