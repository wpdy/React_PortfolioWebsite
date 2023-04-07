import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Cart from './components/Cart';
// import Home from './components/Home';
// import ProductsList from './components/ProductsList';

import Container from 'react-bootstrap/Container';

import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projectss/Projects';
import Contacts from './components/contacts/Contacts';
import Skills from './components/skills/Skills';


const App = () => {

  return (
    <Container>
      
      <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
        
    </Container>
  )
}

export default App
