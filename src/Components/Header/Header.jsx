import React from 'react'
import { AppBar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Road Rage, cursive',
  },
})
function Header() {
    return (
        <AppBar position="fixed">
          <ThemeProvider theme={theme} >
            <Typography align="center" variant="h4" color="inherit" backgroundColor="rgb(90, 127, 200)" noWrap>
              Sended
            </Typography> 
          </ThemeProvider>
        </AppBar>
    )
}

export default Header
