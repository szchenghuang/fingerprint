'use strict';

import { assert } from 'meteor/practicalmeteor:chai';
import { describe, it } from 'meteor/practicalmeteor:mocha';
import { Tracker } from 'meteor/tracker';

import { Fingerprint } from '../../index';

describe( 'Test suite - szchenghuang:fingerprint', function() {
  describe( 'Feature test', function() {

    it( 'Fingerprint - missing mandatory computation', function( done ) {
      var fp = {};

      Tracker.autorun(function() {
        fp = Fingerprint.get();
      });

      setTimeout( function() {
        assert.isFalse( fp.isReady );
        assert.isUndefined( fp.hash );

        done();
      }, 1000 );
    });

    it( 'Fingerprint', function( done ) {
      var fp = {};

      Tracker.autorun(function() {
        fp = Fingerprint.get();
      });

      setTimeout( function() {
        Fingerprint.compute();
      }, 1000 );

      setTimeout( function() {
        assert.isTrue( fp.isReady );
        assert.isString( fp.hash );
        done();
      }, 1500 );
    });

  });
});
