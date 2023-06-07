import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ShopLayout } from '@/components/layouts';
import { ProductSlideshow, SizeSelector } from '@/components/products';
import { initialData } from '@/database/seed-data';
import { ItemCounter } from '@/components/ui/ItemCounter';

const product = initialData.products[0];


const ProductPage = () => {

        // Dificultades mas cambio por hacer  v.226
  // const router = useRouter();
  // const { products: product, isLoading } = useProducts(`/products/${ router.query.slug }`);

  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
    
      <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
          <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

            {/* titulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            {/* <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography> */}
            <Typography fontSize={35} fontWeight={600}>{ `$${product.price}` }</Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle1' fontSize={25}>Cantidad</Typography>
              <ItemCounter />
              <SizeSelector 
                // selectedSize={ product.sizes[2] } 
                sizes={ product.sizes }
              />
            </Box>


            {/* Agregar al carrito */}
            <Button color="secondary" className='circular-btn'>
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}

            {/* Descripción */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>


      </Grid>

    </ShopLayout>
  )
}

export default ProductPage