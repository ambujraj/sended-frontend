import React from 'react'
import { AppBar, Typography } from '@mui/material'

import './Header.css'
function Header() {
    return (
        <AppBar position="fixed">
          <Typography align="center" variant="h6" color="inherit" backgroundColor="rgb(90, 127, 200)" noWrap >
            Sended 
          </Typography>
        </AppBar>
        
       
    )
}

export default Header
