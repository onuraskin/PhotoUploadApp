import {ADD_SESION} from '../actions/Actions';
import {ADD_PHOTO} from '../actions/Actions';
import {DELETE_PHOTO} from '../actions/Actions';
const initialState = {session: []};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SESION:
      const id = String(state.session.length);
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      const currentDate = date + '/' + month + '/' + year;
      const name = 'Session ' + id + ' -' + currentDate;
      const image = null;

      return {
        session: [...state.session, {id, name, currentDate, image}],
      };

    case ADD_PHOTO:
      console.log('Clicked');
      const index = action.payload.id;
      const photo = action.payload.photo;
      console.log(photo);
      console.log(index);
      const copyList = [...state.session];
      copyList[index].image = photo;

      return {...state, session: copyList};

    case DELETE_PHOTO:
      console.log('Clicked');
      const ind = action.payload;
      console.log(ind);
      const copy = [...state.session];
      copy[ind].image == null;

      return {...state, session: copy};

    default:
      return state;
  }
}
