import s from '../../css/MatchTest.module.css'
import matchtest from '../../assets/images/matchTest.jpg'
import { Link } from 'react-router-dom'

const MatchTest = () => {
  return (
    <article className={s.matchBox}>
      <div className={s.textAndButton}>
        <h1>No sabes cuál escoger?</h1>
        <h3>Te ayudamos a encontrar la mascota perfecta</h3>
        <Link to='/quizz'>
          <button>Haz el Test</button>
        </Link>
      </div>
      <div className={s.imgFilter}></div>
      <div className={s.infoBox}>
        <img src={matchtest} alt="" />
      </div>
    </article>
  )
}

export default MatchTest