// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem
  return (
    <li className="Appitemmy">
      <img className="myimage" src={imageUrl} alt={appName} />
      <p className="itemDescription">{appName}</p>
    </li>
  )
}

export default AppItem
