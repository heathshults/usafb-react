import { Map } from 'immutable';
import { isNil } from 'ramda';
/**
* Util class to normalize objects
*/
export default class Normalize {

    /**
    * Returns a normalized user object to facilitate access to user
    * profile
    *
    * @param {object} user
    *
    * @return {object}
    */
    static userToView(user) {
        const data = Object.assign({}, user, {
            user_id: undefined, user_metadata: undefined
        });
        Object.keys(user).map((field) => {
            if (field === 'user_id') {
                data.id = user[field];
            }
            return data;
        });
        if (!isNil(user.user_metadata)) {
            Object.keys(user.user_metadata).map((field) => {
                if (field === 'roles') {
                    data.role = user.user_metadata[field][0];
                } else {
                    data[field] = user.user_metadata[field];
                }
                return data;
            });
        }
        return data;
    }

    /**
    * Returns an inmutable Map of a normalized user object
    *
    * @param {object} user
    *
    * @return {Map}
    */
    static userMap(user) {
        const data = this.userToView(user);
        return new Map(data);
    }

    /**
    * Returns a clone of user data except role and id
    *
    * @param {object} user
    *
    * @return {object}
    */
    static userToUpdate(user) {
        return Object.assign({}, user,
            { id: undefined, user_id: undefined, role: undefined });
    }
}
