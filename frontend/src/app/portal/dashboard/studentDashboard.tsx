import React from 'react'
import { Button, Card } from 'flowbite-react';
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

function StudentDashboard() {
    return (
        <>
            <section className='mt-3'>
                <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Scheduled Classes</h3>
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                    <Card className="">
                        <div
                            className="bg-black dark:bg-gray-900  text-center rounded-t-lg text-white border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
                            Sinhala
                        </div>
                        <span className="text-start text-xs font-semibold inline-block py-1 px-2  rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1 w-fit">
                            2024-03-01
                        </span>
                        <div className="px-2">
                            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center font-bold w-full">
                                    <CiClock2 className='mr-2' /><span>20:00 PM to 20:15 PM </span>
                                </li>
                            </ul>
                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded dark:bg-gray-900 bg-black px-6 my-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Click to Join
                                </button>
                            </div>
                        </div>
                        <div
                            className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-white text-center">
                            2 days ago
                        </div>
                    </Card>
                </div>
            </section>

            <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2'>
                <Card className="max-w-md mx-3  mt-2 sm:w-full">
                    <div className='flex  items-center rounded-lg shadow-xs'>
                        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                            <MdOutlineSupportAgent className='text-4xl' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Acedemic Officer
                            </h5>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaUser className='mr-2' /> Mr. Kaneesha Siribaddana
                                </li>
                                <li className="flex items-center">
                                    <IoMail className='mr-2' /> kaneeshasiribaddana@gmail.com
                                </li>
                                <li className="flex items-center">
                                    <FaPhoneAlt className='mr-2' />076 739 0862
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
                <Card className="max-w-md mx-3  mt-2 sm:w-full">
                    <div className='flex  items-center rounded-lg shadow-xs'>
                        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                            <MdOutlineSupportAgent className='text-4xl' />
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Acedemic Officer
                            </h5>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center">
                                    <FaUser className='mr-2' /> Mr. Kaneesha Siribaddana
                                </li>
                                <li className="flex items-center">
                                    <IoMail className='mr-2' /> kaneeshasiribaddana@gmail.com
                                </li>
                                <li className="flex items-center">
                                    <FaPhoneAlt className='mr-2' />076 739 0862
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </>

    )
}

export default StudentDashboard