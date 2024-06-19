import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";
// 메인인 home에서 사이트에 요청을 한 자료 id, cover, title 등등 받아 무비 컴포넌트에 전달 해주면 무비 컴포넌트는 받아서 사용 할 수 있다. 그 후 프롭 타입에 기입을 한다.
function Moive({ coverImg, year, title, summary, genres, id }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.moive__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// 받아오는 props들을 확인 하는 절차임.
Moive.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;

// Movie componet는 그냥 무비라고 불리는 함수일 뿐이다.
