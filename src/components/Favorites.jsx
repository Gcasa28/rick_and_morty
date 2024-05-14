import React, { useState } from 'react'
import { useDispatch, useSelector} from "react-redux"
import Card from "./Card"
import { filterCards, orderCards } from '../redux/actions'


export default function Favorites({onClose}) {

    const favorites = useSelector((state) => state.myFavorites)

    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    const handleOrder = (evento) => {
      dispatch(orderCards(evento.target.value))
      setAux(true)
    }

    const  handleFilter = (evento) => {
      dispatch(filterCards(evento.target.value))
    }

  return (
    <div>
        <select onChange={handleOrder} name='order'>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter} name='filter'>
          <option value="All">Todos</option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>

        {favorites.map((fav, index) => {
            return <Card
              key={index}
              id={fav.id}
              name={fav.name}
              status={fav.status}
              species={fav.species}
              gender={fav.gender}
              origin={fav.origin?.name}
              image={fav.image}
              onClose={onClose}
         />
        })}

    </div>
  )
}
