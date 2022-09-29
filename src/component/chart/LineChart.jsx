import Chart from 'react-apexcharts';

const LineChart = ({ data }) => {
    const options = {
        chart: {
            id: '코스피',
        },
        xaxis: {},
    };
    const series = [
        {
            name: 'series-1',
            data,
        },
        {
            name: 'series-2',
            data,
        },
    ];

    return <Chart options={options} series={series} type="line" width="400" />;
};

export default LineChart;
