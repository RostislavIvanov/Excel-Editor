import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { Pie } from 'react-chartjs-2';

const PieCreate = () => {
    const { data, chosenCol, columnNames } = useAppSelector(state => state.tableDataReducer);
    const { labels, backgroundColorData, dataValues } = useRoundChartData(data, chosenCol);

    const pieData = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: backgroundColorData,
            },
        ],
    };

    return (
        <div className={'w-[500px] m-auto'}>
            {chosenCol !== -1 &&
                <Pie data={pieData}/>
            }
        </div>
    );
};

export default PieCreate;
