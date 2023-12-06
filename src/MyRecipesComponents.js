import vinkje from "./vinkje.png";

function MyRecipesComponents({label, image, calories, ingredients}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="food"/>
            </div>
            <div className="container"> 
                <ul>
                    {ingredients.map((element, index) => (
                        <li key={index}>
                            <img src={vinkje} alt="tick" width="30px"/>
                            {element}</li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponents;