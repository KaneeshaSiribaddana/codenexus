"use client"
import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table,Tooltip } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import {
    getStudents,
} from "@/app/services/StudentService";
import { useRouter } from 'next/navigation';

interface DataType {
    id:string,
    key: string;
    name: string;
    grade: number;
    city: string;
}

type DataIndex = keyof DataType;


function Students() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [studentsData, setStudentsData] = useState([]);
    const searchInput = useRef<InputRef>(null);

    const router = useRouter();

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const responseStudents = await getStudents();
                const data = responseStudents.map((item: any, index: number) => ({
                    id:item._id,
                    key: index.toString(),
                    name: item.name,
                    grade: item.grade,
                    city: item.city,
                }));
                setStudentsData(data);
                console.log(responseStudents);
            } catch (error) {
                alert(error)
            }
        };

        fetchStudents();

    }, []);

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };
    const onClickViewUser = (data: DataType) => {
        router.push(`students/${data.id}`)
        console.log(data);
      };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
            width: '20%',
            sorter: (a, b) => a.grade - b.grade,
            ...getColumnSearchProps('grade'),
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            ...getColumnSearchProps('city'),
            sorter: (a, b) => a.city.length - b.city.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="View">
                        <Button
                            className="btn-alt"
                            onClick={() => {
                                onClickViewUser(record);
                            }}
                            size="small"
                        >
                            <GrView />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Edit">
                        <Button
                            className="btn-alt"
                            onClick={() => {
                               // onClickEditUser(record);
                            }}
                            size="small"
                        >
                            <FaRegEdit />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <Button className="btn-alt" onClick={() => { 
                           // onClickDeleteUser(record) 
                            }} size="small">
                            <MdDeleteOutline className="text-red-600" />
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className='mt-3'>
                <div className='flex justify-end'>
                    <a href='./students/add'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add +</button></a>
                </div>
                <Table columns={columns} dataSource={studentsData} className='bg-white dark:bg-gray-900' />

            </div>
        </div>
    )
}

export default Students