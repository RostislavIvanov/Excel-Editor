import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppSelector } from '~/hooks/useAppSelector.ts';
import { useAppDispatch } from '~/hooks/useAppDispatch.ts';
import { changeColumnType, updateColumn } from '~/store/tableData/tableDataSlice.ts';

const ColumnTypingPanel: FC = () => {
    const { data, chosenCol, columnTypes } = useAppSelector(state => state.tableDataReducer);
    const [ selectedValue, setSelectedValue ] = useState(columnTypes[chosenCol]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setSelectedValue(columnTypes[chosenCol]);
    }, [ chosenCol ]);

    const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeColumnType(event.target.value));
        setSelectedValue(event.target.value);
        dispatch(updateColumn({ type: event.target.value, col: chosenCol }));
    };

    return (
        <>
            {chosenCol !== -1 &&
                <>
                    <div className={'text-2xl mb-8 inline-block'}>
                        Тип колонки {Object.keys(data[0])[chosenCol]}:
                    </div>
                    <div className={'inline-block ml-2'}>
                        <select
                            value={selectedValue}
                            onChange={handleDropdownChange}
                            className="py-2 px-4 border border-gray-600 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                            name="typeSelector"
                            id="typeSelector"
                        >
                            <option value="string">string</option>
                            <option value="number">number</option>
                            <option value="object">date</option>
                        </select>
                    </div>
                </>
            }
        </>
    )
        ;
};

export default ColumnTypingPanel;
