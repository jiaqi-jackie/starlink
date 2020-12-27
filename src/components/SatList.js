import React, {Component} from 'react';
import {List, Avatar, Button, Checkbox, Spin} from 'antd';
import satellite from "../assets/images/satellite.svg";

class SatList extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
            isLoad: false
        }
    }

    onChange = e => {
        const {dataInfo, checked} = e.target;
        const {selected} = this.state;
        const list = this.addOrRemove(dataInfo, checked, selected);
        this.setState({
            selected: list
        })
    }

    addOrRemove = (item, checked, selected) => {
        const found = selected.some(entry => entry.satid === item.satid);
        if (checked && !found) {
            selected.push(item);
        }

        if (!checked && found) {
            selected = selected.filter(entry => entry.satid !== item.satid );
        }
        return selected;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.satInfo !== this.props.satInfo) {
            this.setState({selected: []})
        }
    }

    showSatMap = () => {
        this.props.onShowMap(this.state.selected)
    }

    render() {
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const {isLoad} = this.props;

        return (
            <div className="sat-list-box">
                <div className="btn-container">
                    <Button className="sat-list-btn"
                            size="large"
                            type="primary"
                            disabled={this.state.selected.length === 0}
                            onClick={this.showSatMap}
                    > Track on map
                    </Button>
                </div>
                <hr/>
                <div>
                    {
                        isLoad ?
                            <div className="spin-box">
                                <Spin tip="Loading..." size="large"/>
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
                                            avatar={<Avatar size={50} src={satellite}/>}
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