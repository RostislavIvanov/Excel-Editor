import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import Table from '~/components/Table/Table.tsx';
import roundChart from '~/assets/icons/round-chart.svg';
import graph from '~/assets/icons/graph.svg';
import { useState } from 'react';
import ChartSelect from '~/pages/Visualisation/ChartSelect/ChartSelect.tsx';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { chooseColumn } from '~/store/tableData/tableDataSlice.ts';

export type ChartType = 'pieChart' | 'lineChart' | undefined;

ChartJS.register(ArcElement, Tooltip, Legend);

const Visualisation = () => {
    const { data, columnTypes } = useAppSelector(state => state.tableDataReducer);
    const [ chartType, setChartType ] = useState<ChartType>(undefined);
    const dispatch = useAppDispatch();

    const handleChangeChartType = (type: ChartType) => {
        dispatch(chooseColumn(-1));
        setChartType(type);
    };

    return (
        <div>
            <div>
                <DashboardLayout>
                    <p className={'text-4xl font-medium text-center mb-8'}>
                        Выберите тип визуализации:
                    </p>
                    <div className={'flex justify-center'}>
                        <div
                            onClick={() => handleChangeChartType('lineChart')}
                            className={'p-4 w-[150px] bg-emerald-600 rounded-[50px] cursor-pointer mx-4 flex flex-col'}>
                            <img src={graph} alt=""/>
                        </div>
                        <div
                            onClick={() => handleChangeChartType('pieChart')}
                            className={'p-4 w-[150px] bg-emerald-600 rounded-[50px] cursor-pointer mx-4 flex flex-col'}>
                            <img src={roundChart} alt=""/>
                        </div>
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
            </div>
        </div>
    );
};

export default Visualisation;
