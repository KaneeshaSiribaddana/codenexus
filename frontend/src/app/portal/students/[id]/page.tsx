"use client"
import { Badge, Breadcrumb, Progress } from "flowbite-react";
import { FC, useEffect, useState } from "react";
import { HiBriefcase, HiHome, HiMap } from "react-icons/hi";
import {
    getStudent,
    Districts
} from "@/app/services/StudentService";


function UserProfilePage({ params }: any) {

    const [studentData, setStudentData] = useState([null]);
    const { id } = params;

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const responseStudent = await getStudent(id);
                setStudentData(responseStudent);
                console.log(responseStudent);
            } catch (error) {
                alert(error)
            }
        };

        fetchStudents();

    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
                <div className="col-span-full mb-4 xl:mb-2">
                    <Breadcrumb className="mb-4">
                        <Breadcrumb.Item href="/portal/dashboard/">
                            <div className="flex items-center gap-x-3">
                                <HiHome className="text-xl" />
                                <span className="dark:text-white">Home</span>
                            </div>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/portal/students/">Users</Breadcrumb.Item>
                        <Breadcrumb.Item>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Profile
                    </h1>
                </div>
                <div className="col-span-full xl:col-auto">
                    <ProfileIntro data={studentData} />
                </div>
                <div className="col-span-2">
                    <GeneralInformation />
                </div>
            </div>
            <div className="px-4 pt-3">
                <ProgressBars />
            </div>
        </div>
    );
};
function ProfileIntro({ data }: any) {
    return (
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
                <img
                    alt=""
                    src="../../images/users/jese-leos-2x.png"
                    className="mb-2 h-20 w-20 rounded-lg"
                />
                <div>
                    <h2 className="text-xl font-bold dark:text-white">{data.name}</h2>
                </div>
            </div>
            <div className="sm:flex xl:block xl:space-y-4">
                <div className="sm:flex-1">
                    <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                        <div className="mt-4">Contact Number</div>
                        <a
                            className="text-sm font-medium text-gray-900 dark:text-white"
                            href="mailto:webmaster@flowbite.com"
                        >
                            {data.contact}
                        </a>
                        <div className="mt-4">District</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {Districts(data.district)}
                        </div>
                        <div className="mt-4">City</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {data.city}
                        </div>
                        <div className="mt-4">Registered Date</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {data.registerDate}
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

function GeneralInformation() {
    return (
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-4 text-xl font-bold dark:text-white">
                Subjects
            </h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Artistic Subject
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        Thomas Jeff High School, Stanford University
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Work History
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        Twitch, Google, Apple
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Join Date
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        12-09-2021
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Languages
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        English, German, Italian, Spanish
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Organization
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        Themesberg LLC
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Role
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        Graphic Designer
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Department
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        Marketing
                    </dd>
                </div>
                <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Birthday
                    </dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                        15-08-1990
                    </dd>
                </div>
            </dl>
        </div>
    );
};

const ProgressBars: FC = function () {
    return (
        <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 lg:gap-8 2xl:gap-24">
                <div className="space-y-6">
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Figma
                        </div>
                        <Progress progress={95} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Php
                        </div>
                        <Progress progress={55} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            HTML
                        </div>
                        <Progress progress={85} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            React
                        </div>
                        <Progress progress={65} color="dark" />
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Vue
                        </div>
                        <Progress progress={45} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Marketing
                        </div>
                        <Progress progress={90} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Product Design
                        </div>
                        <Progress progress={99} color="dark" />
                    </div>
                    <div>
                        <div className="mb-1 text-base font-medium text-gray-500 dark:text-gray-400">
                            Angular
                        </div>
                        <Progress progress={45} color="dark" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
