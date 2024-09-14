import axios from 'axios';

const BASE_URL = 'https://api.trademarkia.com/v1';

export const searchTrademarks = async(searchParams) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                query: searchParams.query,
                owner: searchParams.owner,
                lawFirm: searchParams.lawFirm,
                attorney: searchParams.attorney,
                status: searchParams.status
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};