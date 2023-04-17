import styled from "styled-components";
import animeService from "../../services/animeService";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import { useAppDispatch } from "../../hooks";
import { FamousAnime } from "./famousAnime";

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

const HomePage = () => {
  const { setAnimePage } = actionDispatch(useAppDispatch());
  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => {
      console.log("error: ", err);
    });
    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot anime of the month</h1>
      <FamousAnime />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default HomePage;
