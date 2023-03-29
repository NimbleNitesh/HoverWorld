import {useList} from '@pankod/refine-core'
import { Typography,Box, Stack } from '@pankod/refine-mui'

import{
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from'components'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={30} fontWeight={700} color="#e6f1ff">
        Dashboard
      </Typography>

      <Box mt="1.25rem" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
         title="Drones for Sale" 
         value={30}
         series={[54,46]}
         colors={['#475be8','#e4e8ef']}
         />
         <PieChart
         title="Drones for Rent" 
         value={57}
         series={[75,25]}
         colors={['#475be8','#e4e8ef']}
         />
        <PieChart
         title="Total Customers" 
         value={428}
         series={[80,20]}
         colors={['#475be8','#e4e8ef']}
         />
        <PieChart
         title="Available in Cities" 
         value={17}
         series={[10,90]}
         colors={['#475be8','#e4e8ef']}
         />
      </Box>

      <Stack mt="1.6rem" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home