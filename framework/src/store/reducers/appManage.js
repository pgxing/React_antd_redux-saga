import update from 'immutability-helper';

const appManage = (state = {}, { type, payload }) => {
    switch (type) {
        case 'SAVE_USER_DATA':
            return update(state, {
                userData: { $set: payload }
            })
        default:
            return state;
    }
}
export default appManage;