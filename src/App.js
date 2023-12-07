import { useState, useEffect } from "react";
import './App.css';
import video from "./food.mp4";
import icon from "./fry.png";
import MyRecipesComponents from "./MyRecipesComponents";

function App () {
    const MY_ID = "9b59406a";
    const MY_KEY = "83c7a10175db23e97f060713dd25dbe8";

    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("");

    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
            const data = await response.json();
            console.log(data.hits);
            //setMyRecipes(data.hits);
        }
        getRecipe()
    }, [wordSubmitted])

    const myRecipeSearch = (e) => {
        setMySearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch)
    }

    return (<div className="App">
        <div className="container">
            <video src={video} autoPlay muted loop type="video/mp4"/>
            <h1>Find a Recipe</h1>
        </div>
        <div className="container">
            <form onSubmit={finalSearch}>
                <input className="search" onChange={myRecipeSearch} value={mySearch}/>
            </form>
        </div>
        <div className="container">
            <button onClick={finalSearch}>
                <img src={icon} alt="Search button"/>
            </button>
        </div>
            {myRecipes.map((element, index) => (
                <MyRecipesComponents key={index}
                label={element.recipe.label} 
                image={element.recipe.image} 
                calories={element.recipe.calories} 
                ingredients={element.recipe.ingredientLines}/>
            ))}
    </div>
    );
}

export default App;
