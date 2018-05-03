import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';

import { dashboardRequest } from 'actions/dashboard';

const mapStateToProps = state => ({
    dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
    dashboardRequest: bindActionCreators(dashboardRequest, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {

    componentDidMount(){
        this.props.dashboardRequest();
    }

    render() {
        const {dashboard} =this.props;
        const {cardList} = dashboard;
        return (
            <div>
                <Row gutter={16}>
                    {
                        cardList.map((item,idx)=>{
                            return (
                                <Col key={idx} span={6}>
                                    <Card title={item.name} bordered={false}>
                                        <span style={{fontSize:'40px'}} >{item.value}</span>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
                <Row gutter={16} className="pt10">
                    <Col span={24}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
                <Row gutter={16} className="pt10">
                    <Col span={12}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;