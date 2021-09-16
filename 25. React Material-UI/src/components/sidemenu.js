import React from 'react'
import {makeStyles} from "@material-ui/core"

const style = makeStyles(theme => ({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '0',
    width: '320px',
    height: '100%',
    backgroundColor:' #253053',
    [theme.breakpoints.down('md')]: {
      width: '0%',
      display: 'none',
      height: '0%',
    },
  }
}))

// const style = {
//   sideMenu: {
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'absolute',
//     left: '0',
//     width: '320px',
//     minHeight: '100%',
//     backgroundColor:' #253053',
//   }
// }

const SideMenu = (props) => {
  // const {classes} = props
  const classes = style()
  return (
    <div className={classes.sideMenu}>
      
    </div>
  )
}

export default SideMenu
