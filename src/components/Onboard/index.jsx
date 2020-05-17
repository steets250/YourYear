import React, { useState, useEffect } from 'react';
import { Select, Button } from 'antd';

import { getColleges, getMajors } from '../../actions/info';

import './style.less';

const { Option } = Select;

const Onboard = () => {
    const [colleges, setColleges] = useState([]);
    const [majors, setMajors] = useState([]);

    useEffect(() => {
        getColleges((resp) => {
            console.log(resp);
            setColleges(resp.data)
        });
    });

    const onChange = (option) => {
        // getMajors('ksdljfklds', (resp) => {
        //     console.log(resp);
        //     setMajors(resp.data)
        // });
    }

    const onChangeCollege = (option) => {

    }

    return (
        <div className="register">
            <div className="header">
                <div className="header-title">YourYear</div>
            </div>
            <div className="body">
                <div className="welcome">Hello!</div>
                <div className="input-container">
                    <div>
                        <Select className="dropdown" style={{ width: 300 }} placeholder="Select your college" onChange={onChangeCollege} >
                            {colleges.map((college) => 
                                <Option value={college.uuid}>{college.name}</Option>
                            )}
                        </Select>
                    </div>
                </div>
                <div className="input-container">
                    <div>
                        <Select className="dropdown" style={{ width: 300 }} placeholder="Major" onChange={onChange} >
                            {majors.map((major) => 
                                <Option value={major.uuid}>{major.name}</Option>
                            )}
                        </Select>
                    </div>
                </div>
                <div className="input-container">
                    <div>
                        <Select className="dropdown" style={{ width: 150 }} placeholder="Minor" onChange={onChange} >
                            <Option value="None">None</Option>
                            <Option value="Accounting">Accounting</Option>
                            <Option value="Anthropology">Anthropology</Option>
                            <Option value="Business">Business</Option>
                            <Option value="Chemistry">Chemistry</Option>
                            <Option value="Communication">Communication</Option>
                            <Option value="Design">Design</Option>
                            <Option value="Economics">Economics</Option>
                            <Option value="Entrepreneurship and Innovation">Entrepreneurship and Innovation</Option>
                        </Select>
                        <Select className="dropdown" style={{ width: 150 }} placeholder="Graduation Year" optionFilterProp="year" onChange={onChange} >
                            <Option value="2021">2021</Option>
                            <Option value="2022">2022</Option>
                            <Option value="2023">2023</Option>
                            <Option value="2024">2024</Option>
                        </Select>
                    </div>
                </div>
                <div className="button-container">
                    <Button className="button" type="primary" shape="round" size={"large"}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Onboard;