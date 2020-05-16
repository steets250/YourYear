import React from 'react';
import { PageHeader } from 'antd';
import { Layout, Dropdown, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './style.less';


const { Option } = Select;


function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}




const Onboard = () => {
    return (
        <div className="register">
            <div className="header">
                <div className="header-title">YourYear</div>
            </div>
            <div className="body">
                {/* <div className="square"></div> */}
                <div className="welcome">Hello IvyCool</div>
                <div className="input-container">
                    <div>
                        <Select className="dropdown"
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Select your college"
                            optionFilterProp="college"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
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
                        <Select className="dropdown"
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Major"
                            optionFilterProp="major"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
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
                        <Select className="dropdown"
                            showSearch
                            style={{ width: 150 }}
                            placeholder="Minor"
                            optionFilterProp="minor"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
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
                        <Select className="dropdown"
                            showSearch
                            style={{ width: 150 }}
                            placeholder="Graduation Year"
                            optionFilterProp="year"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
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