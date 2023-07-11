// Write your code here
import './index.css'

const TabItem = props => {
  const {eachitem, selectedtab, isActive} = props
  const {tabId, displayText} = eachitem
  const result = isActive ? 'active-btn' : ''
  const myselectedvalue = () => {
    selectedtab(tabId)
  }

  return (
    <li>
      <button
        onClick={myselectedvalue}
        type="button"
        className={`tabItembutton ${result}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
