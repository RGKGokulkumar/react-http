import React from 'react'
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, category, image, price, description } = product;

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        return (
            <Box sx={{ width: '100%' }} key={id} >
                <Link to={`/product/${id}`}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2} sm={4} md={4} key={id}>
                        <Item>
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
                                    <Button size="small">$ {price}</Button>
                                    <Button size="small">{category}</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>

                </Grid>
                </Link>
            </Box>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent