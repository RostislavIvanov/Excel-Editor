import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { Pie } from 'react-chartjs-2';
import { useRoundChartData } from '~/hooks/useRoundChartData.ts';
import { Chart as ChartJS } from 'chart.js';
import { ExportChildToPngWrapper } from '~/components/ExportChildToPngWrapper/ExportChildToPngWrapper.tsx';

ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.font.size = 16;

const PieCreate = () => {
    const { data, chosenCol, columnNames } = useAppSelector(state => state.tableDataReducer);
    const { labels, backgroundColorData, dataValues } = useRoundChartData(data, chosenCol);

    const pieData = {
        labels: labels,
        datasets: [
            {
                label: columnNames[chosenCol],
                data: dataValues,
                backgroundColor: backgroundColorData,
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
                    <Pie data={pieData}/>
                </ExportChildToPngWrapper>
            }
        </>
    );
};

export default PieCreate;
