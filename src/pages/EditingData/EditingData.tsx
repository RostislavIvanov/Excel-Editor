import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { FC } from 'react';
import Table from '~/components/Table/Table.tsx';
import ColumnTypingPanel from '~/pages/EditingData/ColumnTypingPanel/ColumnTypingPanel.tsx';

const EditingData: FC = () => {
    const { data, columnTypes } = useAppSelector(state => state.tableDataReducer);

    return (
        <DashboardLayout>
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
