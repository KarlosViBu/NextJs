import { useContext, useState } from "react";
import { UiContext } from "@/context";
import { useRouter } from "next/router";

import { Icon } from "@iconify/react"
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
// import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"


export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext( UiContext );
    const navigateTo = ( url: string ) => {
        toggleSideMenu();
        router.push(url);
    }

    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;
        navigateTo(`/search/${ searchTerm }`);
    }

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(1px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu }
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        autoFocus
                        value={ searchTerm }
                        onChange={ (e) => setSearchTerm( e.target.value ) }
                        onKeyPress={ (e) => e.key === 'Enter' ? onSearchTerm() : null }
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={ onSearchTerm }
                                >
                                <Icon icon="ic:outline-search" />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Icon icon="fa-regular:user" color="#019" width="25" />
                        {/* <Icon icon="bytesize:user" color="#019" width="25" /> */}
                        {/* <Icon icon="streamline:interface-user-full-body-geometric-human-person-single-up-user-full-body" color="#019" width="30" /> */}
                        {/* <Icon icon="raphael:user" color="#019" width="25" /> */}
                        {/* <AccountCircleOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Icon icon="fluent-mdl2:activate-orders" color="#154" width="25" />
                        {/* <ConfirmationNumberOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Mis Ordenes'} />
                </ListItem>


                <ListItem 
                    button
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/men') }
                >
                    <ListItemIcon>
                        <Icon icon="icons8:user-male" color="#019" width="30" />
                        {/* <MaleOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItem>

                <ListItem 
                    button
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/women') }
                >
                    <ListItemIcon>
                        <Icon icon="icons8:user-female" color="#019" width="30" />
                        {/* <FemaleOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItem>

                <ListItem 
                    button
                    sx={{ display: { xs: '', sm: 'none' } }}
                    onClick={ () => navigateTo('/category/kid') }
                >
                    <ListItemIcon>
                        <Icon icon="mdi:human-male-child" color="#019" width="30" />
                        {/* <EscalatorWarningOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItem>


                <ListItem button>
                    <ListItemIcon>
                        <Icon icon="material-symbols:key-outline-rounded" color="#019" width="30" />
                        {/* <VpnKeyOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Ingresar'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Icon icon="mdi:login" color="#019" width="30" />
                        {/* <LoginOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>


                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItem button>
                    <ListItemIcon>
                        {/* <Icon icon="material-symbols:category-outline-rounded" color="#019" width="30" /> */}
                        <Icon icon="carbon:category-new-each" color="#019" width="30" />
                        {/* <CategoryOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Icon icon="fluent-mdl2:activate-orders" color="#154" width="25" />
                        {/* <ConfirmationNumberOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Ordenes'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        {/* <Icon icon="clarity:administrator-line" color="#154" width="240" /> */}
                        <Icon icon="system-uicons:users" color="#154" width="25" />
                        {/* <AdminPanelSettings/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Usuarios'} />
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}