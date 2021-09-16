import React from 'react'
import {AppBar, Toolbar, InputBase, Grid, IconButton, Badge, makeStyles} from '@material-ui/core'
import {Notifications, ChatBubble, PowerSettingsNew, Search} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
    // position: "fixed"
  },
  searchInput: {
    opacity: '0.6',
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)
    }
  }
}))

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase className={classes.searchInput} placeholder="search topics" startAdornment={<Search fontSize="small" />} />
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <Notifications fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubble fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
