import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"

import useStyle from "./style";

const Product = ({ product }) => {

    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary"> {product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton arial-aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
        </Card>
    )
}

export default Product
