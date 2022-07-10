import s from '../../css/Pagination.module.css'
import back from '../../assets/icons/backArrow.svg'
import foward from '../../assets/icons/fowardArrow.svg'
const Pagination = ({ petsPerPage, allPets, pagination, page }) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(allPets / petsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className={s.paginationBox}>
      <ul>
        {page > 1 && <li><div className={s.paginationIcons} onClick={() => pagination(page - 1)}> <img src={back} alt=""/></div></li>}
        {
          pageNumbers && pageNumbers.map((number, index) =>
            <li key={`${number}${index}`}>
              <div className={page === number? s.pageActive : s.paginationItem} onClick={() => pagination(number)}><p>{number}</p></div>
            </li>
          )
        }
        {page >= 1 && page <= pageNumbers.length - 1 && <li><div className={s.paginationIcons} onClick={() => pagination(page + 1)}><img src={foward} alt=""/></div></li>}
      </ul>
    </nav>
  )
}

export default Pagination 