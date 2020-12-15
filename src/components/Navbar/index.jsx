import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import Logo from "../../assets/beer.svg"
import useStyle  from "./style";

const Navbar = () => {

    const classes = useStyle();

    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="Beer commerce" height="25px" className={classes.image} />
                        Beer Commerce
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
