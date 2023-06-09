
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
// import { initialData } from "@/database/products";
import { Typography } from "@mui/material";

export default function HomePage() {


  const { products, isLoading } = useProducts('/products');


  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <Typography variant='h1'>Tienda</Typography>
        {/* <h1>Tienda</h1> */}
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
        {/* <h2>Todos los Productos</h2> */}

        {
          isLoading 
          ? <FullScreenLoading />
          : <ProductList products={ products } />
        }

    </ShopLayout>
  )
}
