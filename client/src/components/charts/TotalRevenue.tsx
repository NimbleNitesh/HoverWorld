import ReactApexChart from 'react-apexcharts'
import { Box, Typography, Stack } from '@pankod/refine-mui'

import { ArrowCircleUpRounded } from '@mui/icons-material'

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'


const TotalRevenue = () => {
    return (
        <Box
            p={4}
            flex={1}
            bgcolor={"#233554"}
            id="chart"
            flexDirection="column"
            borderRadius="15px"
        >
            <Typography fontSize={18} fontWeight={600} color="#a8b2d1">
                Total Revenue
            </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#a8b2d1">
                    ₹236,535
                </Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpRounded sx={{
                        fontSize: 25, color: "#475be8"
                    }} />
                    <Stack>
                        <Typography fontSize={15} color="#475be8">
                            0.8%
                        </Typography>
                        <Typography fontSize={12} color="#808191">
                            Than Last Month
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
                color="#64ffda"
            />
        </Box>
    )
}

export default TotalRevenue