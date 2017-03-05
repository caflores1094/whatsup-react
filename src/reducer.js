import {setChatLog, addChatEntry, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action){
  //figures out which function to call, and calls it
  switch(action.type){
    case 'SET_CHAT_LOG':
      return setChatLog(state, action.log);
      break;
    case 'ADD_CHAT_ENTRY':
      return addChatEntry(state, action.entry);
      break;
  }

  return state;
}