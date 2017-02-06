# Reactive client fingerprint #

Reactive client fingerprint based on [fingerprintjs2](https://github.com/Valve/fingerprintjs2) for Meteor.

## Install ##

```sh
meteor add szchenghuang:fingerprint
```

## Example ##

```js
// Client code only.
import Fingerprint from 'meteor/szchenghuang:fingerprint';

Tracker.autorun( function() {
    var fp = Fingerprint.get();
    // => { isReady: Boolean, hash: String }
});

Fingerprint.compute();
```

## Usage ##

The `fingerprint` function establishes a reactive dependency of the client's fingerprint.

Before this package finishes computing by calling `compute`, an object `{ isReady: false, hash: undefined }` is returned by `get` when it gets called. Once the fingerprint is derived, a re-run is triggered and an object taking the form `{ isReady: true, hash: <hash code> }` is returned.

This package throws an error on the server side.

## Test ##

```js
meteor test-packages ./ --driver-package practicalmeteor:mocha
```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/fingerprint/blob/master/LICENSE.md) for details.
