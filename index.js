'use strict';

import { Meteor } from 'meteor/meteor';
import Fingerprint from 'fingerprintjs2';

const fingerprint = {
  compute: function() {},
  get: function() {}
};

const dep = new Tracker.Dependency;
const fp = { isReady: false, hash: undefined };

if ( Meteor.isClient ) {
  fingerprint.get = function() {
    dep.depend();
    return fp;
  };

  fingerprint.compute = function() {
    new Fingerprint().get( function( hash ) {
      fp.isReady = true;
      fp.hash = hash;
      dep.changed();
    });
  }
} else {
  fingerprint.compute = fingerprint.get = function() {
    throw new Meteor.Error( 503, 'Fingerprint is client-side only.' );
  };
}

export default fingerprint;
export { fingerprint as Fingerprint };
