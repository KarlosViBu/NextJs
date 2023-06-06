import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';
import { ProductSlideshow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui/ItemCounter';

import { dbProducts } from '@/database';
import { IProduct } from '@/interfaces';

interface Props {
  product: IProduct
}


//    SEO ok    Video 227
// Cada vez que se de click para Pedir (Request) la informacion de un producto
// Esta pagina es generada (Response) del lado del Servidor.

// Cada vez que venga un Request a esta pagina.  
// El servidor procesa, renderiza y genera la respuesta. 
const ProductPage:NextPage<Props> = ({ product }) => {

        // Dificultades mas cambio por hacer  v.226  y el SEO es malo  pagina Cargando
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


// getServerSideProps
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// * No usar esto.... SSR
//                                                              ctx
// Cada vez que venga un Request a esta pagina.  El servidor procesa, renderiza y genera la respuesta. 
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await dbProducts.getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    }
  }
}


export default ProductPage