import {authRole} from '../../../shared/constants/AppEnums';
import image from '../../../assets/avatar/A11.png';

export const getUserFromAuth0 = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.sub,
      displayName: user.name,
      email: user.email,
      photoURL: user.picture,
      role: authRole.user,
    };
  return user;
};

export const getUserFromFirebase = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Bekorchi',
      photoURL: user.photoURL ? user.photoURL : image.toString(),
      role: authRole.user,
    };
  return user;
};
export const getUserFromAWS = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      displayName: user.attributes.name ? user.attributes.name : 'Crema User',
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.admin,
    };
  return user;
};

export const getUserFromJwtAuth = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.admin_id,
      displayName: user.admin_name,
      photoURL: user.avatar,
      role: user.admin_role === 'superadmin' ? ['user', 'admin'] : ['user'],
    };
  return user;
};
