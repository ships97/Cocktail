import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Info.css";

const Info = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    const cocktail = JSON.parse(localStorage.getItem("cocktail"));
    console.log(cocktail);

  return (
    <>
      <button onClick={handleBack} id='butn'>BACK HOME</button>

      <div>
        <h1>{cocktail.name}</h1>
        <div className='mainInfo'>
          <div id='firbox'>
            <img id='img1' src={cocktail.image} alt="" />
          </div>
          <div id='secbox'>
            <span id='divi1' style={{display:"flex"}}>
              <h4 id='name1' >Name : </h4>
              <h4 id='title1'>{cocktail.name}</h4>
            </span>
            <div id='divi2' style={{display:"flex"}}>
              <h4 id='category1'>Category : </h4>
              <h4 id='title1'>{cocktail.category}</h4>
            </div>
            <div id='divi3' style={{display:"flex"}}>
              <h4 id='info1'>Info : </h4>
              <h4 id='title1'>{cocktail.alcoholic}</h4>
            </div>
            <div id='divi4' style={{display:"flex"}}>
              <h4 id='glass1'>Glass : </h4>
              <h4 id='title1'>{cocktail.glass}</h4>
            </div>
            <div id='divi5' style={{display:"flex"}}>
              <h4 id='instruct1'>Instructions :</h4>
              <h4 id='titlee2'>{cocktail.instructions}</h4>
            </div>
            <div id='divi6' style={{display:"flex"}}>
              <h4 id='ingre1'>Ingredient : </h4>
              <h4 id='title1'>{cocktail.ingredient}</h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Info;
