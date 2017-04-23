import { REGISTER } from '../constants/register';

export default {
    [REGISTER]: (state, { payload }) => {
        return payload.user;
    }
}