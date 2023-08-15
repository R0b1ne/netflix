import { useState } from "react";
import movies from "./assets/movies.json";
import Content from "./components/Content";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // console.log(movies);

  return (
    <div className="container">
      <Header />
      <section>
        {movies.map((movie, index) => {
          return (
            <Content
              key={index}
              category={movie.category}
              images={movie.images}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
