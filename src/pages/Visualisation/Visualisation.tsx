import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import Table from '~/components/Table/Table.tsx';
import roundChart from '~/assets/icons/round-chart.svg';
import graph from '~/assets/icons/graph.svg';
import donutChart from '~/assets/icons/donut-chart.svg';
import polarArea from '~/assets/icons/polar-area.svg';
import radarChart from '~/assets/icons/radar-chart.svg';
import { useState } from 'react';
import ChartSelect from '~/pages/Visualisation/ChartSelect/ChartSelect.tsx';
import ChartButton from '~/pages/Visualisation/ChartButton/ChartButton.tsx';

export type ChartType = 'pieChart' | 'lineChart' | 'polarArea' | 'donutChart' | 'radarChart' | undefined;

ChartJS.register(ArcElement, Tooltip, Legend);

const Visualisation = () => {
    const { data, columnTypes } = useAppSelector(state => state.tableDataReducer);
    const [ chartType, setChartType ] = useState<ChartType>(undefined);

    const handleChangeChartType = (type: ChartType) => {
        setChartType(type);
    };

    return (
        <DashboardLayout>
            <p className={'text-4xl font-medium text-center mb-8'}>
                Выберите тип визуализации:
            </p>
            <div className={'flex justify-center'}>
                <ChartButton changeChartType={handleChangeChartType} img={graph} chartType={'lineChart'}/>
                <ChartButton changeChartType={handleChangeChartType} img={roundChart} chartType={'pieChart'}/>
                <ChartButton changeChartType={handleChangeChartType} img={polarArea} chartType={'polarArea'}/>
                <ChartButton changeChartType={handleChangeChartType} img={donutChart} chartType={'donutChart'}/>
                <ChartButton changeChartType={handleChangeChartType} img={radarChart} chartType={'radarChart'}/>
            </div>
            <div className={'flex justify-between my-8'}>
                <div className={'overflow-auto container max-h-[70vh] w-[47%]'}>
                    {!!data.length && !!chartType &&
                        <Table data={data} columnTypes={columnTypes}/>
                    }
                </div>
                <div className={'w-1/2'}>
                    <ChartSelect chart={chartType}/>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Visualisation;
