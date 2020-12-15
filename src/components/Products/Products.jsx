import React from 'react';
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

import useStyle from "./style";

const products = [
    { id: 1, name: "EVERBREW DOUBLE", description: "Cerveja Artesanal Everbrew Double Think Hop 473ml", price: 'R$ 35,99', image: 'https://cervejabox.vteximg.com.br/arquivos/ids/188846-1000-1000/think-hop-min.jpg?v=637411373716400000' },
    { id: 2, name: "KUD BLACKBIRD BLACK", description: "A emblemática música 'Blackbird' de Paul McCartney é a grande inspiração da cerveja Küd BlackBird Black IPA", price: 'R$ 2000', image: 'https://cervejabox.vteximg.com.br/arquivos/ids/188013-1000-1000/Kud-blackbird-min.jpg?v=637369994648430000' }
];

const Products = () => {

    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;