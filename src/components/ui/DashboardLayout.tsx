import { FC, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import arrow from '~/assets/icons/arrow-right.svg';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const { pathname: url } = useLocation();

    return (
        <>
            <header className={'bg-emerald-600 flex justify-between items-center text-white p-4'}>
                <h1 className={'text-5xl font-medium p-2'}>
                    Excel Visualisator
                </h1>
                <ul className={'flex'}>
                </ul>
            </header>
            <main className={'container m-auto px-2'}>
                <div className={'flex justify-center items-center my-8 flex-wrap md:flex-nowrap'}>
                    <Link to={'/'}
                          className={clsx('mx-2 p-3 md:p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer mb-2 md:mb-0', {
                              'bg-emerald-600': url === '/',
                              'bg-emerald-300': url !== '/',
                          })}>
                        Загрузка данных
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px] hidden md:block'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/editing'}
                          className={clsx('mx-2 p-3 md:p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer mb-2 md:mb-0', {
                              'bg-emerald-600': url === '/editing',
                              'bg-emerald-300': url !== '/editing',
                          })}>
                        Редактирование
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px] hidden md:block'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/visualisation'}
                          className={clsx('mx-2 p-3 md:p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer mb-2 md:mb-0', {
                              'bg-emerald-600': url === '/visualisation',
                              'bg-emerald-300': url !== '/visualisation',
                          })}>
                        Визуализация
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px] hidden md:block'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/export'}
                          className={clsx('mx-2 p-3 md:p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer mb-2 md:mb-0', {
                              'bg-emerald-600': url === '/export',
                              'bg-emerald-300': url !== '/export',
                          })}>
                        Экспорт
                    </Link>
                </div>
                {children}
            </main>
        </>

    );
};

export default DashboardLayout;
