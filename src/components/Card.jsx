import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../redux/actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Card(props) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav === true) {
         setIsFav(false)
         props.removeFav(props.id)
      }
      if(isFav === false){
         setIsFav(true)
         props.addFav(props)
      }
   }


   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
         ) : (
               <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.id}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />

      </div>
   );
}


export function mapDispatchToProps (dispatch) {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps (state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
