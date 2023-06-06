import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { CartContext, UiContext } from '@/context';

import { Icon } from '@iconify/react';
import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {

   const { asPath, push } = useRouter();
   // console.log(asPath);
   const { toggleSideMenu } = useContext(UiContext);
   const { numberOfItems } = useContext( CartContext );

   const [searchTerm, setSearchTerm] = useState('');
   const [isSearchVisible, setIsSearchVisible] = useState(false);

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      push(`/search/${searchTerm}`);
   }

   return (
      <AppBar>
         <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
               <Link display='flex' alignItems='center'>
                  <Typography sx={{ color: 'olive' }}variant='h6'>Teslo |</Typography>
                  <Typography sx={{ ml: 0.5, color: 'blue' }}>Shop</Typography>
               </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                    className="fadeIn">
               <NextLink href='/category/men' passHref legacyBehavior>
                  <Link>
                     <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
                  </Link>
               </NextLink>
               <NextLink href='/category/women' passHref legacyBehavior>
                  <Link>
                     <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
                  </Link>
               </NextLink>
               <NextLink href='/category/kid' passHref legacyBehavior>
                  <Link>
                     <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
                  </Link>
               </NextLink>
            </Box>


            <Box flex={1} />

            {/* Pantallas pantallas grandes */}
            {
               isSearchVisible
                  ? (
                     <Input
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        className='fadeIn'
                        autoFocus
                        value={searchTerm}
                        onChange={(e:any) => setSearchTerm(e.target.value)}
                        onKeyPress={(e:any) => e.key === 'Enter' ? onSearchTerm() : null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={() => setIsSearchVisible(false)}
                              >
                              <Icon icon="mdi:clear-circle-outline" color="#834" width="30" />
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                  )
                  :
                  (
                     <IconButton
                        onClick={() => setIsSearchVisible(true)}
                        className="fadeIn"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                     >
                        <Icon icon="ic:outline-search" />
                     </IconButton>
                  )
            }

            {/* Pantallas pequeñas */}
            <IconButton
               sx={{ display: { xs: 'flex', sm: 'none' } }}
               onClick={toggleSideMenu}
            >
               <Icon icon="ic:outline-search" />
            </IconButton>

            <NextLink href="/cart" passHref legacyBehavior>
               <Link>
                  <IconButton>
                     <Badge badgeContent={ numberOfItems > 9 ? '+9': numberOfItems  } color="secondary">
                        <Icon icon="noto:shopping-cart" width="35" hFlip={true} />
                        {/* <Icon icon="twemoji:shopping-cart" width="35" /> */}
                     </Badge>
                  </IconButton>
               </Link>
            </NextLink>


            <Button onClick={toggleSideMenu}>
               Menú
            </Button>

         </Toolbar>
      </AppBar>
   )
}
