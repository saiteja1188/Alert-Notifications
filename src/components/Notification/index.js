// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="c-icon" />
    </div>
  )
}

export default Notification
