import React, { Component } from "react";
import styled from "styled-components";

const HeaderRecipe = styled.div`
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  .headerDetails {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .detailBox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.15);
    }
  }
`;

class Recipes extends Component {
  render() {
    return (
      <>
        <HeaderRecipe>
          <img
            src="https://assets.epicurious.com/photos/5a70997409de9619fbdda443/6:4/w_1080%2Ch_720/Valentine's-Day-Steak-Dinner-For-Two-03012018.jpg"
            alt=""
          />
          <h1>Instant Pot Braised Lamb with White Beans and Spinach </h1>
          <div className="headerDetails">
            <div className="detailBox">20mins</div>
            <div className="detailBox">20mins</div>
            <div className="detailBox">20mins</div>
          </div>
        </HeaderRecipe>
      </>
    );
  }
}

export default Recipes;
