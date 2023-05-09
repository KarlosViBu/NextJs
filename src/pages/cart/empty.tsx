import NextLink from 'next/link';

// import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { Icon } from '@iconify/react';
import { Slide } from 'react-slideshow-image';


const EmptyPage = () => {
   return (
      <ShopLayout title="Carrito vació" pageDescription="No hay artículos en el carrito de compras">

         <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
         >
            {/* <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} /> */}
            {/* <Icon icon="fa6-brands:opencart" color="#154" width="250" /> */}
            <img className='img404' src="/kv/p404-4.png" alt="" />


            <Box display='flex' flexDirection='column' alignItems='center'>
               <Typography variant='h5'>Su carrito está vació</Typography>
               <NextLink href='/' passHref legacyBehavior>
                  <Link typography="h4" color='secondary'>
                     Regresar
                  </Link>
               </NextLink>
            </Box>


         </Box>
      </ShopLayout>
   )
}

export default EmptyPage