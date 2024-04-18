import { countOccurrences } from '~/utils/utils.ts';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { Pie } from 'react-chartjs-2';

const PieCreate = () => {
    const { data, chosenCol } = useAppSelector(state => state.tableDataReducer);
    const chosenOne = data.map((row) => row[Object.keys(data[0])[chosenCol]]);
    const occurrences = countOccurrences(chosenOne);
    const labels = Object.keys(occurrences);
    const dataValues = Object.values(occurrences);

    const backgroundColorData = labels.map(() => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, 0.7)`;
    });

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
