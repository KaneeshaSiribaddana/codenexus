import React from 'react'
import Hero from './hero'
import Image from "next/image";
import { IoBookSharp } from "react-icons/io5";
import { MdPayments, MdOutlineSupportAgent } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import mathsImg from "../../images/Subjects/Mathematics.jpeg";
import scienceImg from "../../images/Subjects/Science.jpeg";
import sinhalaImg from "../../images/Subjects/Sinhala.jpeg";
import buddhismImg from "../../images/Subjects/Buddhism.jpeg";
import englishImg from "../../images/Subjects/English.jpeg";
import historyImg from "../../images/Subjects/History.jpeg";
import tamilImg from "../../images/Subjects/Tamil.jpeg";
import ictImg from "../../images/Subjects/ICT.jpeg";
import healthImg from "../../images/Subjects/Health.jpeg";
import geographyImg from "../../images/Subjects/Geography.jpeg";
import musicImg from "../../images/Subjects/Music.jpeg";
import artImg from "../../images/Subjects/Art.jpeg";
import dancingImg from "../../images/Subjects/Dancing.jpeg";
import dramaImg from "../../images/Subjects/Drama.jpeg";
import civicsImg from "../../images/Subjects/Civics.jpeg";

function Home() {
    return (
        <>

            <Hero />
            <div className='mt-3 px-5 lg:px-8'>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">All Subjects Covered, <span className="text-blue-600 dark:text-blue-500">All Grades Empowered</span> </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At IslandClassroom, we cover all subjects for grades 6 to 11, providing a comprehensive educational experience to empower students across diverse disciplines.</p>

                <div className="p-1 flex flex-wrap items-center justify-center">

                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={mathsImg} alt="mathematics_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Mathematics</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={scienceImg} alt="science_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Science</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-yellow-700 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={buddhismImg} alt="buddhism_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Buddhism</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={sinhalaImg} alt="sinhala_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Sinhala</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={englishImg} alt="english_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">English</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={historyImg} alt="history_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">History</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-lime-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={tamilImg} alt="tamil_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Tamil</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-pink-500 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={ictImg} alt="ict_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">ICT</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-indigo-900 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={healthImg} alt="health_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Health</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-600 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={geographyImg} alt="geography_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Geography</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-amber-600 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={musicImg} alt="music_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Music</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-200 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={artImg} alt="art_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Art</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-900 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={dancingImg} alt="dancing_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Dancing</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-300 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={dramaImg} alt="drama_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Drama</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-300 rounded-lg max-w-xs shadow-lg">
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                            style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}>
                            </div>
                            <Image className="relative rounded" width={160} src={civicsImg} alt="civics_image" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-center">
                                <span className="block font-semibold text-xl">Civics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32 text-center">
                    <div className="flex justify-center">
                        <div className="max-w-[700px] text-center">
                            <h2 className="mb-6 text-center text-3xl font-bold">
                                Why is it so <u className="text-primary dark:text-primary-400">
                                    great?</u>
                            </h2>
                            <p className="mb-16 text-neutral-500 dark:text-neutral-300">
                                Reimagine online learning for grades 6 to 11. IslandClassroom offers a comprehensive curriculum, live Zoom sessions, and recorded classes. Our instructors and continuous support create an enriching environment for educational success. Join us in empowering futures through quality education.
                            </p>
                        </div>
                    </div>


                    <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-3 text-primary shadow-lg">
                                <IoBookSharp className='text-3xl text-blue-700' />
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Comprehensive Curriculum Coverage</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                Unlock a world of knowledge with our comprehensive curriculum covering all 15 subjects for grades 6 to 11.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-3 text-primary shadow-lg">
                                <MdPayments className='text-3xl text-blue-700' />
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Affordable All-In-One Subscription</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                Say goodbye to high tuition costs! Our affordable subscription model allows students to access live Zoom classes and a week's worth of recorded sessions for all subjects in their grade, all for just Rs 1000.
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-lg">
                                <GrSchedulePlay className='text-3xl text-blue-700' />
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Flexible Learning Schedule</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                We understand the demands of a student's life. With our flexible learning schedule, students can attend live classes, revisit recorded sessions, and access resources at their convenience.
                            </p>
                        </div>

                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-lg">
                                <MdOutlineSupportAgent className='text-3xl text-blue-700' />
                            </div>
                            <h5 className="mb-4 text-lg font-bold">Continuous Support and Feedback</h5>
                            <p className="text-neutral-500 dark:text-neutral-300">
                                At IslandClassroom, we believe in continuous improvement. Our dedicated team provides ongoing support to both students and parents. Engage in a feedback loop, attend parent-teacher meetings, and stay informed about your child's progress.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home