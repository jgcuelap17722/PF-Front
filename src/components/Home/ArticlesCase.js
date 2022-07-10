import s from '../../css/ArticlesCase.module.css'
import ArticleCard from './ArticleCard'
import dogCare  from '../../assets/images/dog-care.jpg'
import catCare  from '../../assets/images/cat-care.jpg'

const ArticlesCase = () => {


  return (
    <section className={s.articlesBox}>
      <h1 className={s.articlesTitle}>Información Para el Cuidado de tus Mascotas</h1>
      <div className={s.articlesPosition}>
        <ArticleCard img={dogCare} />
        <ArticleCard img={catCare} />
      </div>
    </section>
  )
}

export default ArticlesCase