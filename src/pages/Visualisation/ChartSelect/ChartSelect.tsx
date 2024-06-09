import { FC } from 'react';
import { ChartType } from '~/pages/Visualisation/Visualisation.tsx';
import PieCreate from '~/components/PieCreate/PieCreate.tsx';
import LineChart from '~/components/LineChart/LineChart.tsx';
import PolarAreaCreate from '~/components/PolarArea/PolarAreaCreate.tsx';
import DonutChart from '~/components/DonutChart/DonutChart.tsx';
import RadarChart from '~/components/RadarChart/RadarChart.tsx';

type ChartSelectProps = {
    chart: ChartType;
}

const ChartSelect: FC<ChartSelectProps> = ({ chart }) => {
    switch (chart) {
        case 'pieChart': {
            return <PieCreate/>;
        }
        case 'lineChart': {
            return <LineChart/>;
        }
        case 'polarArea': {
            return <PolarAreaCreate/>;
        }
        case 'donutChart': {
            return <DonutChart/>;
        }
        case 'radarChart': {
            return <RadarChart/>;
        }
        default: {
            return null;
        }
    }
};

export default ChartSelect;
