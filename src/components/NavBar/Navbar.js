import { AppBar, Button, Icon, IconButton, Toolbar, Typography, Stack } from "@mui/material"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "black", boxShadow: "none" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ShoppingBagIcon size="large" color="black" />
        </IconButton>
        <Typography
          variant="h6"
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
        >
          Shopify
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Solutions
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pricing
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            What's New
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Log In
          </Typography>
        </Stack>
        <Button
          sx={{
            color: "black",
            bgcolor: "white",
            fontSize: "12px",
            border: "2px solid white",
            borderRadius: "50px",
            textTransform: "none",
            px: 3,
            py: 1,
            height: "36px",
          }}
          variant="outlined"
        >
          Start Free Trial
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar