import {
    CategoryScale,
    Chart as ChartJS,
    type ChartData,
    Legend,
    LinearScale,
    LineElement,
    Point,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { useState } from 'react';
import { ExportChildToPngWrapper } from '~/components/ExportChildToPngWrapper/ExportChildToPngWrapper.tsx';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.font.size = 16;

type AxesType = { x: string, y: string }

const LineChart = () => {
    const { columnNames, data } = useAppSelector(state => state.tableDataReducer);
    const [ axes, setAxes ] = useState<AxesType>({ x: '', y: '' });

    const handleSelectAxes = (key: 'x' | 'y', value: string) => {
        setAxes(prevAxes => ({
            ...prevAxes,
            [key]: value,
        }));
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const axeX = data.map(row => row[axes.x]);

    const lineChartData: ChartData<'line', (number | Point | null)[], unknown> = {
        labels: axeX,
        datasets: [
            {
                tension: 0.1,
                label: 'Dataset 1',
                data: data.map(row => row[axes.y]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <>
            <div className={'flex text-2xl'}>
                <div className={'mr-8'}>
                    <span className={'pl-4'}>
                        Горизонтальная ось:
                    </span>
                    <select
                        onChange={(event) => handleSelectAxes('x', event.target.value)}
                        className="block mt-2 py-2 px-4 border-b-2 border-emerald-600 focus:outline-none"
                        name="columnNames" id="columnNames">
                        {columnNames.map((columnName, index) => (
                            <option key={index} value={columnName}>
                                {columnName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <span className={'pl-4'}>
                        Вертикальная ось:
                    </span>
                    <select
                        onChange={(event) => handleSelectAxes('y', event.target.value)}
                        className="block mt-2 py-2 px-4 border-b-2 border-emerald-600 focus:outline-none"
                        name="columnNames" id="columnNames">
                        {columnNames.map((columnName, index) => (
                            <option key={index} value={columnName}>
                                {columnName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <ExportChildToPngWrapper>
                <Line options={options} data={lineChartData}/>
            </ExportChildToPngWrapper>
        </>
    );
};

export default LineChart;
