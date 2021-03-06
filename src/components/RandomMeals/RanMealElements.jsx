import styled from 'styled-components';

export const MealsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  margin-bottom: 260px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MealCard = styled.div`
  background: #ece9e6;
  background: -webkit-linear-gradient(to bottom, rgb(230, 230, 230), #ece9e6);
  background: linear-gradient(to bottom, rgb(230, 230, 230), #ece9e6);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  height: 100%;
  border: none;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
  }

  &.active {
    /* background: #c3d3baae; */
    /* background: #76b852; */
    background: -webkit-linear-gradient(to bottom, #89da5e9d, #98c47f89);
    background: linear-gradient(to bottom, #8dc26f, #76b852);
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MealImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 240px;
`;

export const MealTitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 15px;
  margin-bottom: 0px;
  text-align: start;
  position: relative;
  height: 80px;
  overflow: scroll;
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;

  @media screen and (max-width: 768px) {
    max-height: 90px;
  }
`;

export const Summary = styled.div`
  height: 150px;
  overflow: scroll;
  font-weight: 300;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: -15px;
  align-items: center;
  position: relative;
`;

export const Ingredients = styled.p`
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const ReadyIn = styled.p`
  /* text-transform: uppercase; */
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const Servings = styled.p`
  font-weight: 300;
  margin-top: 10px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;
