import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import * as XLSX from 'xlsx';
import { useAppSelector } from '~/hooks/useAppSelector.ts';

const ExportData = () => {
    const { data } = useAppSelector(state => state.tableDataReducer);

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'Excel.xlsx');
    };

    return (
        <div>
            <DashboardLayout>
                <div className={'mt-8 flex justify-center'}>
                    <button className={'py-6 px-10 bg-emerald-600 text-3xl font-light text-white rounded-[50px]'}
                            onClick={handleExport}>
                        Экспортировать таблицу
                    </button>
                </div>
            </DashboardLayout>
        </div>
    );
};

export default ExportData;
