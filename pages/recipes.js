import React, { Component } from "react";
import styled from "styled-components";

const RecipeContainer = styled.div`
  margin: 0 10%;
`;
const HeaderRecipe = styled.div`
  h1 {
    display: flex;
    text-align: center;
    color: ${props => props.theme.red};
    font-size: 2rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .headerDetails {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .detailBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      height: 100px;
      width: 100px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.15);
      span {
        color: #9b9b9b;
      }
    }
  }
`;
const IngredientsContainer = styled.div`
  h2 {
    color: ${props => props.theme.red};
  }
`;
const StepsContainer = styled.div`
  .step {
    background: #fff;
    margin-top: 5%;
    padding: 5%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

const StepsArr = [
  "Make the fried shallots: In a small skillet, heat Â¼-inch of oil until shimmering. Working in small batches, add a handful of shallots, and cook, turning frequently, until golden, about 1 minute. Using a slotted spoon, transfer fried shallots to a paper towel lined plate.",
  "Make the soup: In a medium pot, heat the oil over medium-high. Add the chicken and brown on both sides, about 4 minutes per side. Remove the chicken to a plate.",
  "Reduce the heat to medium and add the ginger, turmeric, and cumin. Cook, stirring constantly, until fragrant, about 1 minute.",
  "Pour the broth into the pot and return the chicken. Bring to a boil and then reduce to medium-low. Cover and gently simmer until the chicken breasts are just cooked through, about 10 to 12 minutes. Turn off heat. Using tongs or a slotted spoon remove the chicken breast to a plate and let cool slightly. Discard skin and bones and shred chicken meat. Keep warm.",
  "Meanwhile, bring a large pot of salted water to a boil. Add the rice noodles or thin spaghetti and cook until al dente per package instructions. Drain.",
  "Add noodles to broth and serve brothy noodles topped with pulled chicken, herbs, fried shallots, and black pepper."
];
const IngredientsArr = [
  "Extra-virgin olive oil",
  "4 shallots, thinly sliced into rings",
  "1/4 cup unbleached all-purpose flour",
  "2 tablespoons extra virgin olive oil",
  "2 bone-in, skin-on chicken thighs",
  "Kosher salt and freshly ground pepper",
  "One 2-inch piece of ginger, peeled and finely chopped, (1 tablespoon)",
  "1/4 tsp. ground cumin",
  "1 tsp. ground tumeric",
  "4 cups Swanson Chicken Broth",
  "8 ounces vermicelli rice noodles or thin spaghetti",
  "1 cup leafy herbs, such as cilantro, dill and basil"
];

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
            <div className="detailBox">
              20mins
              <span>Yields</span>
            </div>
            <div className="detailBox">
              20mins<span>Yields</span>
            </div>
            <div className="detailBox">
              20mins<span>Yields</span>
            </div>
          </div>
        </HeaderRecipe>
        <RecipeContainer>
          <IngredientsContainer>
            <h2>Ingredients: </h2>
            {IngredientsArr.map((ingredient, index) => {
              return (
                <ul key={index}>
                  <li>{ingredient}</li>
                </ul>
              );
            })}
          </IngredientsContainer>
          <StepsContainer>
            {StepsArr.map((step, index) => {
              return (
                <div className="step" key={index}>
                  <h2>Step: {index + 1}</h2>
                  {step}
                </div>
              );
            })}
          </StepsContainer>
        </RecipeContainer>
      </>
    );
  }
}

export default Recipes;
