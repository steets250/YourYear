import React from 'react';
import { Select, Button } from 'antd';

import history from '../../history';

import './style.less';

const { Option } = Select;

const Onboard = () => {
    return (
        <div className="onboard">
            <div className="header">
                <div className="header-title">YourYear</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' }}>
                <div className="body">
                    <div className="welcome">Hello!</div>
                    <div className="input-container">
                        <div>
                            <Select className="dropdown" style={{ width: 300 }} placeholder="Select your college" size="large"  >
                                <Option value="Earl Warren College">Earl Warren College</Option>
                                <Option value="Revelle College">Revelle College</Option>
                                <Option value="John Muir College">John Muir College</Option>
                                <Option value="Thurgood Marshall College">Thurgood Marshall College</Option>
                                <Option value="Eleanor Roosevelt College">Eleanor Roosevelt College</Option>
                                <Option value="Sixth College">Sixth College</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="input-container">
                        <div>
                            <Select className="dropdown" style={{ width: 300 }} placeholder="Major" size="large" >
                                <Option value="Bioengineering">Bioengineering</Option>
                                <Option value="Computer Science">Computer Science</Option>
                                <Option value="Computer Engineering">Computer Engineering</Option>
                                <Option value="Electrical Engineering">Electrical Engineering</Option>
                                <Option value="Engineering Physics">Engineering Physics</Option>
                                <Option value="Aerospace Engineering">Aerospace Engineering</Option>
                                <Option value="Environmental Engineering">Environmental Engineering</Option>
                                <Option value="Mechanical Engineering">Mechanical Engineering</Option>
                                <Option value="Chemical Engineering">Chemical Engineering</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="input-container">
                        <div>
                            <Select className="dropdown" style={{ width: 150 }} placeholder="Minor" size="large" >
                                <Option value="None">None</Option>
                                <Option value="Accounting">Accounting</Option>
                                <Option value="Anthropology">Anthropology</Option>
                                <Option value="Business">Business</Option>
                                <Option value="Chemistry">Chemistry</Option>
                                <Option value="Communication">Communication</Option>
                                <Option value="Design">Design</Option>
                                <Option value="Economics">Economics</Option>
                                <Option value="Entrepreneurship and Innovation">Entrepreneurship</Option>
                            </Select>
                            <Select className="dropdown" style={{ width: 150 }} placeholder="Grad Year" size="large" >
                                <Option value="2021">2021</Option>
                                <Option value="2022">2022</Option>
                                <Option value="2023">2023</Option>
                                <Option value="2024">2024</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="button-container">
                        <Button className="button" type="primary" shape="round" size="large" onClick={() => { history.push('/planner') }}>
                            Continue
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboard;