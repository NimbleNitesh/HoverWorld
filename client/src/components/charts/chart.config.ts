import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
    {
        name: 'Sell Revenue',
        data: [175, 114, 113, 95, 143, 143, 96],
    },
    {
        name: 'Rent Revenue',
        data: [85, 84, 52, 44, 108, 98, 47],
    },
];

export const TotalRevenueOptions: ApexOptions = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
    },
    colors: ['#2a9918', '#0fd183'],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: ['transparent'],
        width: 4,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
        title: {
            text: '₹ (thousands)',
        },
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    },
    tooltip: {
        y: {
            formatter(val: number) {
                return `₹ ${val} thousands`;
            },
        },
    },
};