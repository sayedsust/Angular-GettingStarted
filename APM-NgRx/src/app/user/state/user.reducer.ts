// Homework
import { User } from '../user';

/* NgRx */
import { createReducer, on, createFeatureSelector, createSelector, createAction } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}
const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};
// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);
export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
