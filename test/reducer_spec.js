import {expect} from 'chai';

import reducer from '../src/reducer'

//test that the reducer can handle the actions we want 

describe('reducer', () => {

  it('has an initialState', () => {
    const action = {type: 'SET_CHAT_LOG', log: [{text: 'yo', user:'me'}]};
    const nextState = reducer(undefined, action);

    expect(nextState.log.length).to.equal(1);
    expect(nextState.log[0].text).to.equal('yo');
  });

  it('handles SET_CHAT_LOG', () => {
    const initialState = {};
    const action = {type: 'SET_CHAT_LOG', log: [{text: 'yo', user:'me'}]};
    const nextState = reducer(initialState, action);

    expect(nextState.log.length).to.equal(1);
    expect(nextState.log[0].text).to.equal('yo');

  })

  it('handles ADD_CHAT_ENTRY', () => {
    const action = {type: 'SET_CHAT_LOG', log: [{text: 'yo', user:'me'}]};
    const initialState = reducer({}, action);
    const action2 = {type: 'ADD_CHAT_ENTRY', entry: {text: 'whatsup?', user:'me'}};
    const nextState = reducer(initialState, action2);

    expect(nextState.log.length).to.equal(2);
    expect(nextState.log[0].text).to.equal('yo');
    expect(nextState.log[1].text).to.equal('whatsup?');
  });

  it('can be used with reduce', () => {
    const action = {type: 'SET_CHAT_LOG', log: [{text: 'yo', user:'me'}]};
    const initialState = reducer({}, action);
    const actions = [
      {type: 'ADD_CHAT_ENTRY', entry: {text: 'whatsup?', user:'me'}},
      {type: 'ADD_CHAT_ENTRY', entry: {text: 'nm', user:'them'}},
      {type: 'ADD_CHAT_ENTRY', entry: {text: 'nm', user:'them'}},
      {type: 'ADD_CHAT_ENTRY', entry: {text: 'bummer', user:'me'}}
    ];
    const finalState = actions.reduce(reducer, initialState);

    expect(finalState.log.length).to.equal(5);
    expect(finalState.log[3].text).to.equal('nm');
  })


});