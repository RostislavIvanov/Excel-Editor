import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { updateData } from '~/store/tableData/tableDataSlice.ts';
import { FC } from 'react';

const EditingData: FC = () => {
    const { data } = useAppSelector(state => state.tableDataReducer);
    const dispatch = useAppDispatch();
    const handleCellChange = (value: string | null, row: number, col: number) => {
        dispatch(updateData({ newValue: value, row, col }));
    };

    return (
        <DashboardLayout>
            <div className={'overflow-auto container max-h-[100vh]'}>
                {!!data.length &&
                    <table>
                        <thead>
                        <tr>
                            {Object.keys(data[0]).map((column, index) => (
                                <th className={'p-2 border border-black'} key={index}>{column}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.keys(data[0]).map((column, columnIndex) => (
                                    <td className={'p-2 text-center border border-black'}
                                        key={columnIndex}
                                        contentEditable={true}
                                        suppressContentEditableWarning={true} // Для подавления предупреждения
                                        onBlur={(e) => handleCellChange(e.target.textContent, index, columnIndex)}
                                    >
                                        {item[column]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                }
            </div>
        </DashboardLayout>
    );
};

export default EditingData;
