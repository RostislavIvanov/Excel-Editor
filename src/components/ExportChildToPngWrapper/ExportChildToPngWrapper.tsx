import { FC, PropsWithChildren, useRef } from 'react';
import { toPng } from 'html-to-image';

type ExportChildToPngWrapperProps = PropsWithChildren;

export const ExportChildToPngWrapper:FC<ExportChildToPngWrapperProps> = ({children}) => {
    const exportPngRef = useRef<HTMLDivElement>(null);

    const handleExportToPng = () => {
        if (exportPngRef.current === null) {
            return;
        }

        toPng(exportPngRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'diagram.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div ref={exportPngRef}>
                {children}
            </div>
            <div className={'flex justify-center mt-4'}>
                <button
                    className={'py-6 px-10 bg-emerald-600 text-3xl font-light text-white rounded-[50px] mb-4'}
                    onClick={handleExportToPng}
                >
                    Экспорт в png
                </button>
            </div>
        </>
    );
};
