import { FC } from 'react';
import { ChartType } from '~/pages/Visualisation/Visualisation.tsx';
import PieCreate from '~/components/PieCreate/PieCreate.tsx';
import LineChart from '~/components/LineChart/LineChart.tsx';

type ChartSelectProps = {
    chart: ChartType;
}

const ChartSelect: FC<ChartSelectProps> = ({ chart }) => {
    const chartTypeSelector = (chart: ChartType) => {
        switch (chart) {
            case 'pieChart': {
                return <PieCreate/>;
            }
            case 'lineChart': {
                return <LineChart/>;
            }
            default: {
                return null;
            }
        }
    };

    return (chartTypeSelector(chart));
};

export default ChartSelect;
