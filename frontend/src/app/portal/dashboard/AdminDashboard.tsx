"use client"
import React, { useState, PureComponent } from 'react';
import { PieChart, Pie, Sector, LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataLine = [{ name: 'Page A', male: 400, female: 2400, amt: 2400 }];

const data = [
    {
        name: 'Grade 6',
        male: 4000,
        female: 2400,
    },
    {
        name: 'Grade 7',
        male: 3000,
        female: 1398,
    },
    {
        name: 'Grade 8',
        male: 2000,
        female: 9800,
    },
    {
        name: 'Grade 9',
        male: 2780,
        female: 3908,
    },
    {
        name: 'Grade 10',
        male: 1890,
        female: 4800,
    },
    {
        name: 'Grade 11',
        male: 2390,
        female: 3800,
    },
];

const dataPie = [
    { name: 'Colombo', value: 178 },
    { name: 'Gall', value: 38 },
    { name: 'Kandy', value: 81 },
    { name: 'Anuradhapura', value: 34 },
];
function AdminDashboard() {
    const [screennSize, setScreenSize] = useState(false);
    const [state, setState] = useState({ activeIndex: 0 });

    const onPieEnter = (_: any, index: number) => {
        setState({
            activeIndex: index,
        });
    };
    const isSmallScreenWidth = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 568) {
            return 350;
        } else {
            return 600;
        }
    };
    const isSmallScreenHeight = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 568) {
            return 200;
        } else {
            return 350;
        }
    }
    const isSmallPieWidth = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 568) {
            return window.innerWidth;
        } else {
            return 600;
        }
    };
    const isSmallPieHeight = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 568) {
            return 350;
        } else {
            return 350;
        }
    }
    return (
        <div>
            <div className='grid gap-4 mb-8 md:grid-cols xl:grid-cols-2'>
                <div className='text-center'>
                    <h5 className="text-xl my-2 font-bold dark:text-white">Registered Students</h5>
                    <div className='flex justify-center'>
                        <BarChart
                            width={isSmallScreenWidth()}
                            height={isSmallScreenHeight()}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="female" fill="#0284c7" activeBar={<Rectangle fill="#075985" />} />
                            <Bar dataKey="male" fill="#f43f5e" activeBar={<Rectangle fill="#9f1239" />} />
                        </BarChart>

                    </div>
                </div>
                <div className='text-center'>
                    <h5 className="text-xl my-2 font-bold dark:text-white">Students Registered Districts</h5>
                    <div className='flex justify-center'>
                        <PieChart width={350} height={350}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={true}
                                data={dataPie}
                                cx="50%"
                                cy="50%"
                                style={{ outline: 'none' }}
                                outerRadius={80}
                                innerRadius={40}
                                fill="#0284c7"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-start mt-6'>
                    <h5 className="text-xl my-2 font-bold dark:text-white">Today Classes</h5>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg> Download ZIP</a>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li className="ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard