import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    const buttonStyle = {
        "margin-left":"auto"
    }

  return (
    <AppBar position="static" style={{ background: 'white' }}>
      <Toolbar>
        <Button component={Link} to="/"><Typography variant="h4" style={{ color: 'black' }}>Group 2</Typography></Button>
        <Button color="secondary" component={Link} to="/patient" style={buttonStyle}>
          Patients
        </Button>
        <Button color="secondary" component={Link} to="/" style={buttonStyle}>
          Info
        </Button>
        <Button color="secondary" component={Link} to="/" style={buttonStyle}>
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Menu