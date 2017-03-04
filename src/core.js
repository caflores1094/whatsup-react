import {List} from 'immutable';

export function setChatLog(state, log){
  return state.set('log', List(log));
}