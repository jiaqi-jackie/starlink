import React, {Component} from 'react';
import { Form, InputNumber, Button} from "antd";

class SatSetting extends Component {

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 13 }
            }
        };
        return (
            <Form {...formItemLayout} className="sat-setting">
                <Form.Item label="Longitude(degrees)">
                    {<InputNumber/>}
                </Form.Item>
                <Form.Item label="Latitude(degrees)">
                    {<InputNumber/>}
                </Form.Item>
            </Form>
        );
    }
}

export default SatSetting;