import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { useRef } from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initData } from '~/store/tableData/tableDataSlice.ts';

const ImportData = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
            const arrayBuffer = (e.target as FileReader)?.result as ArrayBuffer;
            const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            dispatch(initData(XLSX.utils.sheet_to_json(sheet)));
            navigate('editing');
        };
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div>
            <DashboardLayout>
                <div className={'mt-8 flex justify-center'}>
                    <button className={'py-6 px-10 bg-emerald-600 text-3xl font-light text-white rounded-[50px]'}
                            onClick={handleClick}>
                        Загрузить данные из вашей таблицы
                    </button>
                    <input ref={inputRef} type="file" onChange={handleChange} className={'hidden'}/>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default ImportData;
