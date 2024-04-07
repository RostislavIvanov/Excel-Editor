import { FC, useState } from 'react';
import { TableDataType } from '~/types/tableTypes.ts';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { updateData } from '~/store/tableData/tableDataSlice.ts';
import clsx from 'clsx';

const ALPHABET = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

type TableProps = {
    data: TableDataType;
    columnTypes: string[];
};

const Table: FC<TableProps> = ({ data, columnTypes }) => {
    const dispatch = useAppDispatch();
    const keys = Object.keys(data[0]);
    const [ chosenCol, setChosenCol ] = useState<number | undefined>(undefined);
    const handleCellChange = (value: string | null, row: number, col: number) => {
        dispatch(updateCell({ newValue: value, row, col }));
    };

    const handleChoosingColumn = (columnIndex: number) => {
        setChosenCol(columnIndex);
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
