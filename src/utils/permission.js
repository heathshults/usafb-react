
/**
* Permission checking based on user permissions and feature to be seen
*
* @param {array} property
* @param {string} property
*
* @return {boolean}
*/
export const isPermissionAllowed = (permissions, toBeAccessed) => {
  if (permissions && toBeAccessed) {
    if (Array.isArray(toBeAccessed)) {
      for (let j = 0; j < toBeAccessed.length; j += 1) {
        for (let i = 0; i < permissions.length; i += 1) {
          if (permissions[i] === toBeAccessed[j]) {
            return true;
          }
        }
      }
      return false;
    }
    for (let i = 0; i < permissions.length; i += 1) {
      if (permissions[i] === toBeAccessed) {
        return true;
      }
    }
    return false;
  }
  return false;
};

export default isPermissionAllowed;
