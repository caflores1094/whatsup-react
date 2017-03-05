import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', ()=> {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState().log).to.be.an('undefined');

    store.dispatch({
      type: 'SET_CHAT_LOG',
      log: [{text: 'whatup', user: 'me'}]
    });

    expect(store.getState().log.length).to.equal(1);
    expect(store.getState().log[0].text).to.equal('whatup');
  })
});