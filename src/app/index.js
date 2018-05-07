import { App } from '../woox/index';
import Routes from './routes/routes';
import * as Models from './models/index';
import '../styles/base.less';

App.router(Routes);
App.model(Models);

App.run(document.getElementById('app'),true);