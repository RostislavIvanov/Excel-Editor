import { FC } from 'react';
import { TableDataType } from '~/types/tableTypes.ts';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { updateData } from '~/store/tableData/tableDataSlice.ts';

type TableProps = {
    data: TableDataType
};

const Table: FC<TableProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const handleCellChange = (value: string | null, row: number, col: number) => {
        dispatch(updateData({ newValue: value, row, col }));
    };

    return (
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
    );
};

export default Table;
