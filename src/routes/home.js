import { useEffect, useState } from "react";
import Moive from "../components/movie";
import styles from "./home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const getMoives = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMoives(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMoives();
  }, []);
  //console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Moive
              key={movie.id} // key는 react.js에서만 map안에서 componet들을 불러 올 때 사용하는 것이다.
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
            //coverImg는 마음대로 준다. 이 코드는 부모인 App 컴포넌트가 정보를 받아서 Prpos(소품)로써 Movie 컴포넌트에게 준다.
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
