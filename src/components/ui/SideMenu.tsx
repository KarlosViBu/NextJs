import { Icon } from "@iconify/react"
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
// import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"


export const SideMenu = () => {
  return (
    <Drawer
        open={ false }
        anchor='right'
        sx={{ backdropFilter: 'blur(3px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
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


                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <Icon icon="icons8:user-male" color="#019" width="30" />
                        {/* <MaleOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                    <ListItemIcon>
                        <Icon icon="icons8:user-female" color="#019" width="30" />
                        {/* <FemaleOutlined/> */}
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
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