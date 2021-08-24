import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [cocktail, setCocktail] = useState(null)
  
  useEffect(() => {
    // let isMounted = true;
    setLoading(true)
    async function getCocktail() {
      // if (isMounted) {
        try {
          const response = await fetch(`${url}${id}`)
          const data = await response.json()
          if (data.drinks) {
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
            } = data.drinks[0]
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
            const newCocktail = {name, image, info, category, glass, instructions, ingredients}
            setCocktail(newCocktail)
          } else {
            setCocktail(null)
          }
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      // }
    }
    getCocktail()
    // return () => { isMounted = false }
  }, [id])

  if(loading) {
    return <Loading/>
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>
  }

  const {name, image, info, category, glass, instructions, ingredients} = cocktail
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">
              name: {name}
            </span>
          </p>
          <p>
            <span className="drink-data">
              category: {category}
            </span>
          </p>
          <p>
            <span className="drink-data">
              info: {info}
            </span>
          </p>
          <p>
            <span className="drink-data">
              glass: {glass}
            </span>
          </p>
          <p>
            <span className="drink-data">
              instructions: {instructions}
            </span>
          </p>
          <p>
            <span className="drink-data">
              ingredients: <span>
                {
                  ingredients.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null
                  })
                }
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
