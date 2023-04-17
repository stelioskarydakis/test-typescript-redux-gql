import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export function FamousAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return <div>Loading...</div>;

  return (
    <FamousAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItemContainer key={anime?.title?.english}>
            <AnimeCover>
              <img src={anime?.coverImage?.extraLarge || ""} alt="anime" />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
            <Average>Average Score: {anime?.averageScore}</Average>
          </AnimeItemContainer>
        ))}
    </FamousAnimeContainer>
  );
}

const FamousAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const AnimeItemContainer = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #383838;
`;

const AnimeCover = styled.div`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  padding: 10px;
  text-align: center;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;
const Average = styled.h5`
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #000;
  font-weight: 600;
`;
