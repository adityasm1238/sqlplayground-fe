import axios from 'axios';
import { apiConfig } from '../../config/config';

const execute = (payload) => axios.post(`${apiConfig.baseUrl}/sql/execute`, payload);
const getLogCount = () => axios.get(`${apiConfig.baseUrl}/sql/logsCount`)

export const sqlService = {
    execute,
    getLogCount
};
