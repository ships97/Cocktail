import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate("");
  // console.log(cocktails)
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then(res => {  
        // console.log(res.data.drinks);
        setData(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    // console.log(search);
    const getData = setTimeout(() => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {  
        // console.log(res.data.drinks);
        setData(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      })
    }, 100);
    return () => clearTimeout(getData);
  }, [search]);

  const handleInfo = (idDrink,strDrink,strGlass,strDrinkThumb,strAlcoholic,strCategory,strInstructions,strIngredient1) => {
    // console.log("clicked");
    navigate("/info");
    const payload = {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      glass: strGlass,
      alcoholic: strAlcoholic,
      category: strCategory,
      instructions: strInstructions,
      ingredient: strIngredient1,
    };
    console.log(payload);
    localStorage.setItem("cocktail", JSON.stringify(payload));
  }

  return (
    <>
      <div className='main'>
        <h3 id='head1'>Search Your Favorite Cocktail</h3>
        <input onChange={(e) => setSearch(e.target.value)} id='inp' type="search" />
      </div>
      <h1 id='head2'>Cocktails</h1>
      <div className="firstdiv">
        {
          data?.map((item) => {
            return(
              <div className="secdiv" key={item.idDrink} >
                <img className='image' src={item.strDrinkThumb} alt="drink" />
                <h1 id='head3'>{item.strDrink}</h1>
                <h4 id='head4'>{item.strGlass}</h4>
                <p id='para1'>{item.strAlcoholic}</p>
                <button onClick={() => handleInfo(item.idDrink,item.strDrink,item.strGlass,item.strDrinkThumb,item.strAlcoholic,item.strCategory,item.strInstructions,item.strIngredient1)} id='btn'>DETAILS</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home;
