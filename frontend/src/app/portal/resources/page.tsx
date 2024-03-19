import React from 'react'

function resources() {
  return (
    <div>
      <section className='mt-3'>
        <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">Resources</h3>
        <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className='mt-3 grid grid-cols-2 lg:grid-cols-4'>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 6</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 7</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 8</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 9</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 10</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Grade 11</button>
        </div>
        <div className='mt-3'>
          <h3 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">Recently Added</h3>
          <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 pb-5'>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sinhala
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Short Note
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      ICT
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Past Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 10
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Buddhism
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Short Notes
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 8
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Mathematics
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Model Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 11
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Science
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Past Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      History
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Maps
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Sinhala
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Short Note
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      ICT
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Past Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 10
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Buddhism
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Short Notes
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 8
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Mathematics
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Model Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 11
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Science
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Past Papers
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
              <li className="pb-3 sm:pb-4 mx-3 shadow shadow-blue-500/50 pt-2 px-3 rounded mt-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      History
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Maps
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Grade 7
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default resources