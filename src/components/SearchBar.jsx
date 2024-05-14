import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   const handleRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1
      onSearch(randomNumber)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>

         <button onClick={() => onSearch(id)}>Agregar</button>

         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
