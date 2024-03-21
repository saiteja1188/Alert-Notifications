// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderInfoView = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="success-container">
        <h1 className="content-heading info">Info</h1>
        <p className="content-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderWarningView = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="success-container">
        <h1 className="content-heading warning">Warning</h1>
        <p className="content-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorView = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="container">
        <h1 className="content-heading error">Error</h1>
        <p className="content-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessView = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="success-container">
        <h1 className="content-heading success">Success</h1>
        <p className="content-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="alert-notification-content">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessView()}
        {renderErrorView()}
        {renderWarningView()}
        {renderInfoView()}
      </div>
    </div>
  )
}

export default AlertNotifications
