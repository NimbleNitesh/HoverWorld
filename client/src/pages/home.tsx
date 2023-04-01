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
        About Us
      </Typography>

      <Box mt="1.25rem" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
         title="Sold Items" 
         value={305}
         series={[305,231]}
         colors={['#475be8','#e4e8ef']}
         />
         <PieChart
         title="Items for Rent" 
         value={154}
         series={[244,382]}
         colors={['#475be8','#e4e8ef']}
         />
        <PieChart
         title="Total Customers" 
         value={428}
         series={[80,20]}
         colors={['#475be8','#e4e8ef']}
         />
        <PieChart
         title="Total Items" 
         value={536}
         series={[536,0]}
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