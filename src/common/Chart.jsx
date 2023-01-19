import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ chartData }) => {
    return (
        <>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    Title: {
                        display: true,
                        text: 'Category',
                        fontSize: 25,
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    },
                }}
            />
        </>
    )
}

export default Chart;