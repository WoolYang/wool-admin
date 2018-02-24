/**
 * Created by hzzhangzhang1 on 2018-2
 */
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

import LoginComponent from '../components/LoginComponent'
import AcceptCommissionComponent from '../components/AcceptCommissionComponent'
import InfomationAcquisitionComponent from '../components/InfomationAcquisitionComponent'
import ReportUploadComponent from '../components/ReportUploadComponent'
export default class CRouter extends Component {
    render() {
        //const {isLogin} = this.props;
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/index" component={AcceptCommissionComponent} />
                    <Route exact path="/InfomationAcquisitionComponent" component={InfomationAcquisitionComponent} />
                    <Route exact path="/ReportUploadComponent" component={ReportUploadComponent} />
                </div>
            </BrowserRouter>
        )
    }
}