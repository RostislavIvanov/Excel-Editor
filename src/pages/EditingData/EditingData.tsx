import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { FC } from 'react';
import Table from '~/components/Table/Table.tsx';
import ColumnTypingPanel from '~/pages/EditingData/ColumnTypingPanel/ColumnTypingPanel.tsx';

const EditingData: FC = () => {
    const { data, columnTypes } = useAppSelector(state => state.tableDataReducer);

    return (
        <DashboardLayout>
            <div>
                <p className={'text-3xl font-medium'}>
                    Убедитесь, что ваши данные выглядят правильно
                </p>
                <p className={'text-2xl font-normal my-4'}>
                    Убедитесь, что Excel Visualisator правильно интерпретирует ваши данные. В таблице числовые столбцы
                    должны отображаться <span className={'text-darkBlue'}>синим</span> цветом, даты - <span className={'text-orange-500'}>оранжевым</span>, а текст - черным.
                </p>
            </div>
            <ColumnTypingPanel/>
            <div className={'overflow-auto container max-h-[100vh]'}>
                {!!data.length &&
                    <Table data={data} columnTypes={columnTypes}/>
                }
            </div>
        </DashboardLayout>
    );
};

export default EditingData;
