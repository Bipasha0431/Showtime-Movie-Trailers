import React from "react";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";
import MovieBox from "./components/MovieBox";

const App = () => {
  return (
    <div>
      <Main />
      <Toaster />
      <MovieBox />
    </div>
  );
};

export default App;
