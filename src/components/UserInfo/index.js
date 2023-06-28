// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {blogList} = props
  const {title, description, publishedDate} = blogList

  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default UserInfo
