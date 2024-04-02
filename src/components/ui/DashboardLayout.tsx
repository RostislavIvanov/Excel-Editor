import { FC, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import arrow from '~/assets/icons/arrow-right.svg';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const { pathname: url } = useLocation();

    return (
        <>
            <header className={'h-[100px] bg-emerald-600 flex justify-between items-center text-white p-8'}>
                <h1 className={'text-5xl font-medium'}>
                    Excel Editor
                </h1>
                <ul className={'flex'}>
                    <li className={'mr-8'}>
                        Меню
                    </li>
                    <li>
                        Еще что-то
                    </li>
                </ul>
            </header>
            <main className={'container m-auto px-2'}>
                <div className={'flex justify-center items-center my-8'}>
                    <Link to={'/'}
                          className={clsx('mx-2 p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer', {
                              'bg-emerald-600': url === '/',
                              'bg-emerald-300': url !== '/',
                          })}>
                        Загрузка данных
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px]'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/editing'}
                          className={clsx('mx-2 p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer', {
                              'bg-emerald-600': url === '/editing',
                              'bg-emerald-300': url !== '/editing',
                          })}>
                        Редактирование
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px]'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/visualisation'}
                          className={clsx('mx-2 p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer', {
                              'bg-emerald-600': url === '/visualisation',
                              'bg-emerald-300': url !== '/visualisation',
                          })}>
                        Визуализация
                    </Link>
                    <div className={'max-h-[80px] max-w-[80px]'}>
                        <img src={arrow} className={'w-full h-full'} alt="->"/>
                    </div>
                    <Link to={'/export'}
                          className={clsx('mx-2 p-6 text-2xl font-medium text-white rounded-[50px] cursor-pointer', {
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
