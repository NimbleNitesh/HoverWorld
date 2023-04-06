import ReactApexChart from 'react-apexcharts'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import { PieChartProps } from "interfaces/home"

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#233554"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            gap={2}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
        >
            <Stack direction="column">

                <Typography fontSize={14}
                    color="#a8b2d1"
                >{title}</Typography>
                <Typography fontSize={22}
                    color="#e6f1ff" fontWeight={700}
                    mt={1}
                >{value}</Typography>
            </Stack>

            <ReactApexChart
                options={{
                    chart: { type: 'donut' },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}

                series={series}
                type="donut"
                width="120px"
            />
        </Box >
    )
}

export default PieChart