'use strict';

import { assert } from 'chai';
import { describe, it } from 'meteor/practicalmeteor:mocha';

import { Fingerprint } from '../../index';

describe( 'Test suite - szchenghuang:fingerprint', function() {
  describe( 'Feature test', function() {

    it( 'Fingerprint.compute', function() {
      assert.throws( Fingerprint.compute, 'Fingerprint is client-side only.' );
    });

    it( 'Fingerprint.get', function() {
      assert.throws( Fingerprint.get, 'Fingerprint is client-side only.' );
    });

  });
});
