import { server_configuration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import config from './webpack.config';

export default server_configuration(config, settings);
