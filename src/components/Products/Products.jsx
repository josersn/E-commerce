import React from 'react';
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

const products = [
    { id: 1, name: "Shoes", description: "Running Shos", price: 'R$ 20', image: 'https://images.vans.com/is/image/Vans/D3HY28-HERO' },
    { id: 2, name: "Macbook", description: "Apple Macbook", price: 'R$ 2000', image: 'https://images-shoptime.b2w.io/produtos/01/00/offers/01/00/item/132490/7/132490742_1GG.png' }
];

const Products = () => {
    return (
        <main>
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