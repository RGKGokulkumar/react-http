import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selecttProducts } from "../redux/actions/productActions";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductDetail() {

    const { productId } = useParams();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    console.log(product)
    const { id, title, category, description, price, image } = product;

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log(err)
        })
        console.log(response)
        dispatch(selecttProducts(response?.data))
    }

    useEffect(() => {
        if (productId && productId != "") {
            fetchProductDetail()
        }
    }, [productId])

    return (
        <>
            {/* {Object.keys(product).length === 0 ? (<div>...Loading</div>) : ( */}
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{price}</Button>
                    <Button size="small">{category}</Button>
                </CardActions>
            </Card>
            {/* )} */}
        </>
    )
}

export default ProductDetail