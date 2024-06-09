import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { useRoundChartData } from '~/hooks/useRoundChartData.ts';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';
import { ExportChildToPngWrapper } from '~/components/ExportChildToPngWrapper/ExportChildToPngWrapper.tsx';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);
ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.font.size = 16;

const RadarChart = () => {
    const { data, chosenCol, columnNames } = useAppSelector(state => state.tableDataReducer);
    const { labels, backgroundColorData, dataValues } = useRoundChartData(data, chosenCol);

    const radarChartData = {
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
                <ExportChildToPngWrapper>
                    <Radar data={radarChartData}/>
                </ExportChildToPngWrapper>
            }
        </>
    );
};

export default RadarChart;
