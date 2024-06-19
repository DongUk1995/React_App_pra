import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// 메인인 home에서 사이트에 요청을 한 자료 id, cover, title 등등 받아 무비 컴포넌트에 전달 해주면 무비 컴포넌트는 받아서 사용 할 수 있다. 그 후 프롭 타입에 기입을 한다.
function Moive({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
