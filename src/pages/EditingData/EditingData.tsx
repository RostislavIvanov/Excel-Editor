import DashboardLayout from '~/components/ui/DashboardLayout.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store.ts';

const EditingData = () => {
    const tableData = useSelector((state: RootState) => state.tableDataReducer);

    return (
        <div>
            <DashboardLayout>
                <div>
                    {!!tableData.length &&
                        <table>
                            <thead>
                            <tr>
                                {Object.keys(tableData[0]).map((column, index) => (
                                    <th className={'p-2 border border-black'} key={index}>{column}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    {Object.keys(tableData[0]).map((column, columnIndex) => (
                                        <td className={'p-2 text-center border border-black'}
                                            key={columnIndex}>{item[column].toLocaleString()}</td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    }
                </div>
            </DashboardLayout>
        </div>
    );
};

export default EditingData;
