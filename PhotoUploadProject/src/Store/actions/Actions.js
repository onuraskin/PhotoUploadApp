const ADD_SESION = 'ADD_SESSION';
export {ADD_SESION};
const ADD_PHOTO = 'ADD_PHOTO';
export {ADD_PHOTO};
const DELETE_PHOTO = 'DELETE_PHOTO';
export {DELETE_PHOTO};

export const incrementSession = () => {
  return {
    type: ADD_SESION,
  };
};
export const savePhoto = (id, photo) => {
  return {
    type: ADD_PHOTO,
    payload: {id: id, photo: photo},
  };
};
export const deletePhoto = payload => {
  return {
    type: DELETE_PHOTO,
    payload,
  };
};
