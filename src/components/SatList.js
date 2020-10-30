import React, {Component} from 'react';
import { List, Avatar, Button, Checkbox, Spin } from 'antd';
import satellite from "../assets/images/satellite.svg";

class SatList extends Component {
    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const { isLoad } = this.props;
        return (
            <div className="sat-list-box">
                <div className="btn-container">
                    <Button className="sat-list-btn" size="large" type="primary"> Track on map </Button>
                </div>
                <hr/>
                <div>
                    {
                        isLoad ?
                            <div className="spin-box">
                                <Spin tip="Loading..." size="large" />
                            </div>
                            :
                            <List
                                className="sat-list"
                                itemLayout="horizontal"
                                size="small"
                                dataSource={satList}
                                renderItem={item => (
                                    <List.Item
                                        actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar size={50} src={satellite} />}
                                            title={<p>{item.satname}</p>}
                                            description={`Launch Date: ${item.launchDate}`}
                                        />

                                    </List.Item>
                                )}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default SatList;