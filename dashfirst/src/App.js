


import AppVisitPage from './VisitPage/AppVisitPage.jsx'
import Welcome from './wlcomepage/Welcome.jsx'
import {Routes , Route} from 'react-router-dom'
function App() {


  return (
<>

<Routes >
  {/* ici route pour visite normal  */}
<Route path="/" element={<AppVisitPage/>}/>
{/* <Route path="/register" element={<Register/>}/> */}



{/* ici pour l'admin  */}
<Route path="/dashbordAdmin" element={<Welcome/>}/>




</Routes>


</>
  )
}

export default App