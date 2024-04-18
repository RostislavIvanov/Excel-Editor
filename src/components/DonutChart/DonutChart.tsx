import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { useRoundChartData } from '~/hooks/useRoundChartData.ts';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.font.size = 16;

const DonutChart = () => {
    const { data, chosenCol, columnNames } = useAppSelector(state => state.tableDataReducer);
    const { labels, backgroundColorData, dataValues } = useRoundChartData(data, chosenCol);

    const donutChartData = {
        labels: labels,
        datasets: [
            {
                label: columnNames[chosenCol],
                data: dataValues,
                backgroundColor: backgroundColorData,
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <p className={'text-3xl text-center mb-8'}>
                Выберите столбец для визуализации в таблице
            </p>
            {
                chosenCol !== -1 &&
                <Doughnut data={donutChartData}/>
            }
        </>
    );
};

export default DonutChart;
