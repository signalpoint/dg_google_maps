# dg_google_maps

The Google Maps Module for DrupalGap 8.

## settings.js

Place this inside the `dg_google` JSON config object in your `settings.js` file with the API key(s) you retrieve from
your project's Google API Console:

```
dg.settings.dg_google = {

  /* ... */

  maps: {
    apiKey: {
      web: '',
      android: '',
      ios: ''
    }
  },

  /* ... */

};
```

## Usage

Use the `_attached` variable on any widget to have Google Maps loaded and ready for your widget's render time:

```
var html = dg.render({
  _type: 'foo',
  _attached: {
    dg_google_maps: [
      {
        name: 'maps',
        initMap: function() {
          console.log('my map is ready');
        }
      }
    ]
  }
});
```
