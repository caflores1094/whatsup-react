import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setChatLog} from '../src/core';

describe('application logic', () => {

  describe('setChatLog', () => {

    it('adds the given chat log to the state', () => {
      const state = Map();
      const log = [{text: 'hey whats up!', user:'me'}, {text: 'not much you?', user:'them'}, {text: 'chillin', user:'me'}, {text: 'lets bounce', user:'them'}];
      const nextState = setChatLog(state, log);
      expect(nextState.size).to.equal(1);
      expect(nextState.get('log').size).to.equal(4);
    });

  });

});