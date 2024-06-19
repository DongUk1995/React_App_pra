import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMoive = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMoive();
  }, [getMoive]);
  //console.log(movie);
  //console.log(id); // const id = useParms()의 콘솔 로그 결과는 {id : xxxxx} {}씌우면 xxxxx만 나옴

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.roder}>Loading...</h1>
      ) : (
        <div className={styles.one_movie}>
          <img
            className={styles.one_movie__img}
            src={movie.medium_cover_image}
            alt="title"
          />
          <div className={styles.one_movie__title}>
            <h1>{movie.title}</h1>
            <div>
              ⭐️ {movie.rating} / SINCE: {movie.year}
            </div>
            <p>{movie.description_full}</p>
            <ul>
              {movie.genres.map((genres) => (
                <li key={genres}>{genres}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;

//1. 홈 컴포넌트에서 요청한 id를 movie 컴포넌트에게 주고 movie 컴포넌트에 제목에 있는 링크를 누르면 id의 데이터를 받게 되는데 그때 useParms를 사용하여 id 데이터를 받아오고 그것을 사용해여
//2. 다시 id를 사용하여 사이트에 요청을 하면 데이터를 받아 올 수 있다는 것 ?
