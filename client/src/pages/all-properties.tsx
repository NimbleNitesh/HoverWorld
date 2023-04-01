import {Add} from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';

import { PropertyCard, CustomButton } from 'components';

const AllProperties = () => {
  const navigate =useNavigate();
  return (
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
      <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
        All Items
      </Typography>
      <CustomButton
        title="Add Item"
        handleClick={() => navigate('/Items/create')}
        backgroundColor="#17e66a"
        color="#fcfcfc"
        icon={<Add/>}
      />
      </Stack>
    </Box>
  )
}

export default AllProperties