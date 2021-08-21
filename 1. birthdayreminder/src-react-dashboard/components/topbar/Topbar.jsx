import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OyeroAdmin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings/>
          </div>
          <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
