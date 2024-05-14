import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import axios from 'axios'
import { Routes , Route, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import NotFound from './components/NotFound.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';

// const URL = "https://rym2.up.railway.app/api/character"

// const API_KEY = "henrystaff"

var EMAIL = "gabrielcasanov8@gmail.com"

var PASSWORD = 'casanova1'

function App() {
   const navigate = useNavigate()
   const location = useLocation()
   const dispatch = useDispatch()

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false);
   
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   //    else{
   //       alert("Credenciales incorrectas!")
   //    }
   // }

   async function login(userData) {

      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         if (data.access) {
            setAccess(data.access);
            navigate('/home');
            
         } else {
            alert("Credenciales Incorrectas")
         }
      } catch (error) {
         alert(error.message)
      }
   }

   function logout() {
      setAccess(false)
   }

   useEffect(() => {
     !access && navigate('/');
      // !access && navigate('/home');
   }, [access]);


async function onSearch(id) {
   if( id === ""){
      return alert("Ingrese un ID")
   }

   try {
   const characterId = characters.filter(
      char => char.id === Number(id)
   )

   if(characterId.length){
      return alert(`${characterId[0].name} ya existe!`)
   }

   const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
         setCharacters([...characters, data]);
         navigate('/home')
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   } catch (error) {

      console.error("Hubo un error al obtener el personaje:", error)
   }
   // axios(`${URL}/${id}?key=${API_KEY}`).then(
}



   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== Number(id)))
      dispatch(removeFav(id))
   }

   return (
      <div className='App'>

         {
            location.pathname !== "/" ? <NavBar onSearch={onSearch} logout={logout}/> : null
         }
         
         <Routes>

            <Route path='/' element={<Form login={login} />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />

            <Route path='/about' element={<About/>} />

            <Route path='/detail/:id' element={<Detail/>} />

            <Route path='/favorites' element={<Favorites onClose={onClose}/>} />

            <Route path='*' element={<NotFound/>} />
         </Routes>
      </div>
   );
}

export default App;
