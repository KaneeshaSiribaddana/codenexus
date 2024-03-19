import React from 'react'
import PdfThumbnail from './pdfthumbnail'
import Image from 'next/image'
import pdfImage from './1.jpg'
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resource() {
    return (
        <div>
            <section className='mt-3'>
                <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Grade 11 Mathematics Model Paper</h3>
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="flex justify-center">
                    <Image className="object-fit h-96 w-64 rounded shadow-lg shadow-blue-500/50" alt="pdf"src={pdfImage}/>
                </div>
                <div className='mt-6 flex justify-center'>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-center inline-flex items-center "><FaCloudDownloadAlt className="text-xl mr-2"/> Download</button>
                </div>

            </section>
        </div>
    )
}

export default Resource