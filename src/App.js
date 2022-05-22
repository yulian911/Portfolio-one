import React,{useState}from 'react';
import './App.css';
import { About, Contact, Footer, Header, Home, Members, NavBar } from './components';


function App() {
  const [state, setState] = useState({
    home:'#home',
    about:'#about',
    members:'#members',
    contact:"#contact",
    footer:'#footer'
  })

  const {home,about,members,contact,footer}=state
 
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <NavBar nav={state} />
      <Home home={home}/>
      <About about={home}/>
      <Members members={members}/>
      <Contact contact={contact}/>
      <Footer footer={footer}/>
    </>
  );
}

export default App;
