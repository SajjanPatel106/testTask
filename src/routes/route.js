import { Route, Routes } from "react-router-dom";
import { SingleCard } from "../screens/cardDetail/SingleCard";
import { CardList } from "../components";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="singlecard/:id" element={<SingleCard />}></Route>
      <Route path="/" element={<CardList />}></Route>
    </Routes>
  );
};
