import React from 'react'
import SideMenu from '../components/sidemenu'
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core'
import Header from '../components/header'
import Employees from '../Pages/Employees/Employees'

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: 'rgb(100, 150, 150)',
  //   },
  //   secondary: {
  //     main: 'rgb(200, 150, 150)',
  //   },
  //   background: {
  //     default: '#f4f5fd'
  //   }
  // },
  // overrides: {
  //   MuiAppBar: {
  //     root: {
  //       transform: "translateZ(0)"
  //     }
  //   }
  // },
  // props: {
  //   MuiIconButton: {
  //     disableRipple: true
  //   }
  // }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px',
      width: '100%',
    },
  }
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  )
}

export default App
