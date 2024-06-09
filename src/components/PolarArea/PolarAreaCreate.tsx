import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useRoundChartData } from '~/hooks/useRoundChartData.ts';
import { ExportChildToPngWrapper } from '~/components/ExportChildToPngWrapper/ExportChildToPngWrapper.tsx';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
ChartJS.defaults.font.family = 'Montserrat';
ChartJS.defaults.font.size = 16;

const PolarAreaCreate = () => {
    const { data, chosenCol, columnNames } = useAppSelector(state => state.tableDataReducer);
    const { labels, backgroundColorData, dataValues } = useRoundChartData(data, chosenCol);

    const polarAreaData = {
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
                    <PolarArea data={polarAreaData}/>
                </ExportChildToPngWrapper>
            }
        </>
    );
};

export default PolarAreaCreate;
