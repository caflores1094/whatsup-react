// import {List} from 'immutable';
//immutable is really cool and worth looking into
//DO THIS IN THE FUTURE
//for now i;m moving on inorder to get this up and running

//initial state in case we ever need to have an action call without 
//a specified state
export const INITIAL_STATE = {};

export function setChatLog(state, log){
  return Object.assign({}, state, {
    log: log
  });
}

export function addChatEntry(state, entry){
  return Object.assign({}, state, {
    log: [
        ...state.log,
        entry
      ]
    }
  );
}