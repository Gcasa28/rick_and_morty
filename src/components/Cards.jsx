import Card from './Card';

export default function Cards(props) {
   return <div>
      {
         !props.characters.length
         ? <h2>Por Favor, ingrese un id...</h2>
         :
         props.characters.map((character) => {
            return <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
         />
         })
      }
   </div>;
}
