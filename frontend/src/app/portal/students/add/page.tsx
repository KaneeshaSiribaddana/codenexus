'use client';

import { Button, Checkbox, Label, TextInput, Select, Radio, Modal } from 'flowbite-react';

import { message } from 'antd';

import Link from 'next/link';
import React, { useState } from 'react'
import {
    createStudent,
} from "@/app/services/StudentService";

function page() {
    const [selective, setSelective] = useState(false);
    const [selectiveGrade, setSelectiveGrade] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const [formData, setFormData] = useState({
        name: '',
        grade: '6',
        contact: '',
        district: '1',
        city: '',
        firstSegment: '1',
        secondSegment: '6',
        thirdSegment: '12',
        artistic: '6',
    });
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let response = await createStudent(formData);
    
            if (response.newStudent) {
                setUsername(response.newStudent.username);
                setPassword(response.newStudent.password);
                console.log(response);
                setOpenModal(true);
            } else {
                console.error("Failed to create student:", response);
                messageApi.open({
                    type: 'error',
                    content: response ? response.error || 'Unknown error' : 'Failed to create student',
                });
            }
        } catch (error:any) {
            console.error('Error adding student:', error);
            message.error('Error adding student:', error.message || 'Unknown error');
        }
    
        console.log('Form Data:', formData);
    };
    

    // Function to handle input changes and update form data
    const handleInputChange = (id: any, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const handleSelective = (value: any) => {
        handleSelectiveGrade(value);
        if (value == '10' || value == "11")
            setSelective(true)
        else
            setSelective(false)

    };
    const handleSelectiveGrade = (value: any) => {
        if (value == '10' || value == "11")
            setSelectiveGrade(false)
        else
            setSelectiveGrade(true)

    };
    return (
        <div className=''>
            <div className='h-screen flex items-center justify-center mt-48 md:mt-0'>
                <div className="backdrop-blur-md bg-white/30 p-4 rounded shadow-lg h-min content-center md:w-3/4">
                    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                        <div>
                            <h5 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Student Profile</h5>
                            <hr className="h-px mb-1 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="name" value="Name" />
                                        </div>
                                        <TextInput id="name" type="text" placeholder="Student's Name" value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)} required shadow />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="grade" value="Grade" />
                                        </div>
                                        <Select id="grade" value={formData.grade}
                                            onChange={(e) => { handleSelective(e.target.value), handleInputChange('grade', e.target.value) }} required shadow>
                                            <option value="6">Grade 6</option>
                                            <option value="7">Grade 7</option>
                                            <option value="8">Grade 8</option>
                                            <option value="9">Grade 9</option>
                                            <option value="10">Grade 10</option>
                                            <option value="11">Grade 11</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="contact" value="Contact Number" />
                                        </div>
                                        <TextInput id="contact" type="number" placeholder="Student's Contact Number" value={formData.contact}
                                            onChange={(e) => handleInputChange('contact', e.target.value)} required shadow />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="district" value="District" />
                                        </div>
                                        <Select id="district" value={formData.district}
                                            onChange={(e) => handleInputChange('district', e.target.value)} required shadow>
                                            <option value="1">Colombo</option>
                                            <option value="2">Gampaha</option>
                                            <option value="3">Kalutara</option>
                                            <option value="4">Kandy</option>
                                            <option value="5">Matale</option>
                                            <option value="6">Nuwara Eliya</option>
                                            <option value="7">Galle</option>
                                            <option value="8">Matara</option>
                                            <option value="9">Hambantota</option>
                                            <option value="10">Jaffna</option>
                                            <option value="11">Kilinochchi</option>
                                            <option value="12">Mannar</option>
                                            <option value="13">Vavuniya</option>
                                            <option value="14">Mullaitivu</option>
                                            <option value="15">Batticaloa</option>
                                            <option value="16">Ampara</option>
                                            <option value="17">Trincomalee</option>
                                            <option value="18">Kurunegala</option>
                                            <option value="19">Puttalam</option>
                                            <option value="20">Anuradhapura</option>
                                            <option value="21">Polonnaruwa</option>
                                            <option value="22">Badulla</option>
                                            <option value="23">Moneragala</option>
                                            <option value="24">Ratnapura</option>
                                            <option value="25">Kegalle</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="city" value="City" />
                                        </div>
                                        <TextInput id="city" type="text" placeholder="Enter city if not in the select" value={formData.city}
                                            onChange={(e) => handleInputChange('city', e.target.value)} required shadow />
                                    </div>
                                </div>
                                {
                                    selectiveGrade ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="artistic " value="Artistic Subject" />
                                                </div>
                                                <Select id="artistic" value={formData.artistic}
                                                    onChange={(e) => handleInputChange('artistic', e.target.value)} required shadow>
                                                    <option value="6">Drama</option>
                                                    <option value="7">Art</option>
                                                    <option value="8">Dancing</option>
                                                    <option value="9">Eastern Music</option>
                                                    <option value="10">Western Music</option>
                                                </Select>
                                            </div>
                                        </div>
                                    ) : null
                                }

                            </div>
                        </div>
                        {
                            selective ? (
                                <div>
                                    <h5 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Selective Subjects</h5>
                                    <hr className="h-px mb-1 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className='px-6'>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="firstSegment" value="First Segment" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="firstSegment"
                                                            value="1"
                                                            checked={formData.firstSegment === '1'}
                                                            onChange={() => handleInputChange('firstSegment', '1')}
                                                        />
                                                        <Label>Commerce</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="firstSegment"
                                                            value="2"
                                                            checked={formData.firstSegment === '2'}
                                                            onChange={() => handleInputChange('firstSegment', '2')}
                                                        />
                                                        <Label>Civics</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="firstSegment"
                                                            value="3"
                                                            checked={formData.firstSegment === '3'}
                                                            onChange={() => handleInputChange('firstSegment', '3')}
                                                        />
                                                        <Label>Geography</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="firstSegment"
                                                            value="4"
                                                            checked={formData.firstSegment === '4'}
                                                            onChange={() => handleInputChange('firstSegment', '4')}
                                                        />
                                                        <Label>Tamil</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="firstSegment"
                                                            value="5"
                                                            checked={formData.firstSegment === '5'}
                                                            onChange={() => handleInputChange('firstSegment', '5')}
                                                        />
                                                        <Label>Japan</Label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="secondSegment" value="Second Segment" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="6"
                                                            checked={formData.secondSegment === '6'}
                                                            onChange={() => handleInputChange('secondSegment', '6')}
                                                        />
                                                        <Label>Drama</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="7"
                                                            checked={formData.secondSegment === '7'}
                                                            onChange={() => handleInputChange('secondSegment', '7')}
                                                        />
                                                        <Label>Art</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="8"
                                                            checked={formData.secondSegment === '8'}
                                                            onChange={() => handleInputChange('secondSegment', '8')}
                                                        />
                                                        <Label>Dancing</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="9"
                                                            checked={formData.secondSegment === '9'}
                                                            onChange={() => handleInputChange('secondSegment', '9')}
                                                        />
                                                        <Label>Eastern Music</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="10"
                                                            checked={formData.secondSegment === '10'}
                                                            onChange={() => handleInputChange('secondSegment', '10')}
                                                        />
                                                        <Label>Western Music</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="secondSegment"
                                                            value="11"
                                                            checked={formData.secondSegment === '11'}
                                                            onChange={() => handleInputChange('secondSegment', '11')}
                                                        />
                                                        <Label>English Literature</Label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="thirdSegment" value="Third Segment" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="thirdSegment"
                                                            value="12"
                                                            checked={formData.thirdSegment === '12'}
                                                            onChange={() => handleInputChange('thirdSegment', '12')}
                                                        />
                                                        <Label>ICT</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="thirdSegment"
                                                            value="13"
                                                            checked={formData.thirdSegment === '13'}
                                                            onChange={() => handleInputChange('thirdSegment', '13')}
                                                        />
                                                        <Label>Media Studies</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="thirdSegment"
                                                            value="14"
                                                            checked={formData.thirdSegment === '14'}
                                                            onChange={() => handleInputChange('thirdSegment', '14')}
                                                        />
                                                        <Label>Health</Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="thirdSegment"
                                                            value="15"
                                                            checked={formData.thirdSegment === '15'}
                                                            onChange={() => handleInputChange('thirdSegment', '15')}
                                                        />
                                                        <Label>Home science</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ) : null
                        }

                        <Button type="submit" onClick={() => setOpenModal(true)}>Register new account</Button>
                    </form>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Login Details of the Student</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="contact" value="User Name" />
                                </div>
                                <TextInput id="username" type="text" value={username} placeholder="Student's User Name" disabled shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="contact" value="Password" />
                                </div>
                                <TextInput id="password" type="text" value={password} placeholder="Student's Password" disabled shadow />
                            </div>

                        </div>
                        <div>
                            <Label value="Copy this text and send to the student" />
                            <div role="status" className="text-gray-900 dark:text-white items-center justify-center px-4 py-2 w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 border-solid border-2 border-indigo-600">
                                <p>{formData.name}'s Login details for the classes are</p>
                                <p>Username : {username}</p>
                                <p>Password : {password}</p>
                            </div>
                            <Button className='mt-3'>Copy Text</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default page