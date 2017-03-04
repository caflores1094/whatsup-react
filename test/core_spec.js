//immutable is really cool and worth looking into
//DO THIS IN THE FUTURE
//for now i;m moving on inorder to get this up and running

import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setChatLog, addChatEntry} from '../src/core';

describe('application logic', () => {

  describe('Chat Functions', () => {

    it('adds the given chat log to the state', () => {
      const state = {};
      const log = [{text: 'hey whats up!', user:'me'}, {text: 'not much you?', user:'them'}, {text: 'chillin', user:'me'}, {text: 'lets bounce', user:'them'}];
      const nextState = setChatLog(state, log);

      expect(nextState.log.length).to.equal(4);
    });

    it('adds an individual chat to the state', () => {
      const log = [{text: 'hey whats up!', user:'me'}, {text: 'not much you?', user:'them'}, {text: 'chillin', user:'me'}, {text: 'lets bounce', user:'them'}];
      const state = setChatLog({}, log);
      const entry = {text: 'yo where you at?', user:'them'};
      
      const nextState = addChatEntry(state, entry);

      expect(nextState.log.length).to.equal(5);
      expect(nextState.log[nextState.log.length - 1].user).to.equal('them');
      expect(nextState.log[nextState.log.length - 1].text).to.equal('yo where you at?');
    });

  });

});