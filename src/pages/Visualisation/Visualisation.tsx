import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { countOccurrences } from '~/utils/utils.ts';
import { useAppSelector } from '~/hooks/useAppSelector.ts';

ChartJS.register(ArcElement, Tooltip, Legend);

const Visualisation = () => {
    const tableData = useAppSelector(state => state.tableDataReducer);
    const chosenOne = tableData.data.map((row) => row[' Product ']);

    const occurrences = countOccurrences(chosenOne);
    const labels = Object.keys(occurrences);
    const dataValues = Object.values(occurrences);

    const backgroundColorData = labels.map(() => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgba(${red}, ${green}, ${blue}, 0.7)`;
    });

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataValues,
                backgroundColor: backgroundColorData
            },
        ],
    };

    return (
        <div>
            <div>
                <DashboardLayout>
                    {tableData && <Pie data={data} />}
                </DashboardLayout>
            </div>
        </div>
    );
};

export default Visualisation;
