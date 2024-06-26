import { FC } from 'react';
import { ChartType } from '~/pages/Visualisation/Visualisation.tsx';

type ChartButtonProps = {
    changeChartType: (type: ChartType) => void;
    img: string;
    chartType: ChartType;
}

const ChartButton: FC<ChartButtonProps> = ({ img, changeChartType, chartType }) => {
    return (
        <button
            onClick={() => changeChartType(chartType)}
            className={'p-4 w-[150px] bg-emerald-600 rounded-[50px] cursor-pointer mx-4 mb-4 flex flex-col'}>
            <img src={img} alt=""/>
        </button>
    );
};

export default ChartButton;
