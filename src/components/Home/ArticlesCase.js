import s from '../../css/ArticlesCase.module.css'
import ArticleCard from './ArticleCard'

const ArticlesCase = () => {
  return (
    <section className={s.articlesBox}>
      <h1 className={s.articlesTitle}>Información Para el Cuidado de tus Mascotas</h1>
      <ArticleCard />
    </section>
  )
}

export default ArticlesCase