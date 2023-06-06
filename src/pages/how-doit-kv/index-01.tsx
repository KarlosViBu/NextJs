//      VIDEO 218
//  sIN HOOKS carga del lado SERVIDOR
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
// import { initialData } from "@/database/products";
import { Typography } from "@mui/material";

//CArga sin hooks products del lado del servidor
import useSWR from 'swr';
const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());

export default function HomePage() {

  const { data, error, isLoading } = useSWR('/api/products', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // console.log({data});

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <Typography variant='h1'>Tienda</Typography>
        {/* <h1>Tienda</h1> */}
        <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
        {/* <h2>Todos los Productos</h2> */}

        <ProductList
          // products={ initialData.products as any }
          products={ data }  /// swr
        />
    
    </ShopLayout>
  )
}
