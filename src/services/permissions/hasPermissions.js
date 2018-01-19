/**
* Permission checking based on user permissions and feature to be seen
*
* @param {array} property
* @param {string} property
*
* @return {boolean}
*/
export const hasPermissions = (permissions, toBeAccessed) => {
  if (permissions && toBeAccessed) {
    if (Array.isArray(toBeAccessed)) {
      for (let j = 0; j < toBeAccessed.length; j += 1) {
        const foundPermission = permissions.find(permission => permission === toBeAccessed[j]);
        if (foundPermission) {
          return foundPermission;
        }
      }
      return false;
    }
    const foundPermission = permissions.find(permission => permission === toBeAccessed);
    return foundPermission;
  }
  return false;
};

export default hasPermissions;
