import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 155.36 }` }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Impuestos (15%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 35.34 }` }</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt:2  }}>
            <Typography variant="h2"><b> Total: </b></Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant="h2">{ `$${ 186.34 }` }</Typography>
            {/* <Typography fontSize={35} fontWeight={600}>>{ `$${ 186.34 }` }</Typography> */}
        </Grid>

    </Grid>
  )
}
