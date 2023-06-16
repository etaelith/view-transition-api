import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContainerMain from "./components/ContainerMain";
import PageNotFound from "./components/PageNotFound";
import CardView from "./components/CardView";


function App() {
  let isViewTransition =
    "Opss, Your browser doesn't support View Transitions API";
  if (document.startViewTransition) {
    isViewTransition = "Yess, Your browser support View Transitions API";
  }
  return (
    <>
      <Routes>
        <Route index element={<ContainerMain/>} />
        <Route path="About" element={<CardView/>}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <footer>
        <a href="/">Complete this tutorial</a>
        <p>{isViewTransition}</p>
      </footer>
    </>
  );
}

export default App;
