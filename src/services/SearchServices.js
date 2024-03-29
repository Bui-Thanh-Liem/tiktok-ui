import request from '../utils/request';

export const fetchAPI = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type
            }
        })
        return res.data;

    } catch (error) {
        // 
        console.log('Error fetching search results !', error);
    }
};