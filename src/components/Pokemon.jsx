import './Pokemon.css'

export default function Pokemon(props){
    return (
        <div>
        <div>

            <h1>Strength: {props.strength}%</h1>
            <h1>{props.name}</h1>
            <img class="image" src={props.image}></img><br></br>
            <button onClick={props.updatestrength}>Attack</button>
        </div>
        </div>
    )
}