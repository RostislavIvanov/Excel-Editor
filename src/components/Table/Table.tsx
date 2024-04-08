import { FC } from 'react';
import { TableDataType } from '~/types/tableTypes.ts';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { chooseColumn, updateCell } from '~/store/tableData/tableDataSlice.ts';
import clsx from 'clsx';
import { useAppSelector } from '~/hooks/useAppSelector.ts';

const ALPHABET = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

type TableProps = {
    data: TableDataType;
    columnTypes: string[];
};

const Table: FC<TableProps> = ({ data, columnTypes }) => {
    const { chosenCol } = useAppSelector(state => state.tableDataReducer);
    const dispatch = useAppDispatch();
    const keys = Object.keys(data[0]);
    const handleCellChange = (value: string | null, row: number, col: number) => {
        dispatch(updateCell({ newValue: value, row, col }));
    };

    const handleChoosingColumn = (columnIndex: number) => {
        dispatch(chooseColumn(columnIndex));
    };

    const columnLettering = (): string[] => {
        return keys.map((_key, i) => ALPHABET[i]);
    };

    return (
        <table>

            <thead className={'sticky top-0'}>
            <tr>
                <td className={'p-2 text-center bg-lightGrey border border-borderGrey cursor-default'}>
                    ◢
                </td>
                {columnLettering().map((letter, index) =>
                    <th key={index}
                        className={clsx('font-normal p-2 border border-borderGrey text-center cursor-pointer', {
                            'text-white bg-darkBlue': index === chosenCol,
                            'bg-lightGrey hover:bg-hoverGrey': index !== chosenCol,
                        })}
                        onClick={() => handleChoosingColumn(index)}
                    >
                        {letter.toUpperCase()}
                    </th>,
                )}
            </tr>
            <tr>
                <td className={'p-2 text-center bg-lightGrey border border-borderGrey cursor-pointer'}>
                    1
                </td>
                {keys.map((column, index) => (
                    <td className={clsx('p-2 border border-borderGrey font-bold bg-lightGrey text-center whitespace-nowrap', {
                        'border-2 border-darkBlue': index === chosenCol,
                        'text-textBlue': columnTypes[index] === 'number',
                        'text-orange-500': columnTypes[index] === 'object',
                    })}
                        key={index}>
                        {column}
                    </td>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <th className={'font-normal p-2 text-center bg-lightGrey border border-borderGrey cursor-pointer'}>
                        {index + 2}
                    </th>
                    {keys.map((column, columnIndex) => (
                        <td className={clsx('p-2 border-borderGrey text-center border', {
                            'bg-lightBlue border-darkBlue': columnIndex === chosenCol,
                            'text-textBlue': columnTypes[columnIndex] === 'number',
                            'text-orange-500': columnTypes[columnIndex] === 'object',
                        })}
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
