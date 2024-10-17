dg_google_maps.libraries = function() {

  var libraries = {};

  // Prepare the Google Maps .js asset src.
  var apiKey = dg_google.apiKey('maps');
  var src = 'https://maps.googleapis.com/maps/api/js?' + [
    'key=' + apiKey,
    'loading=async',
    'callback=dg_google_maps.initMap',
    'libraries=marker' // TODO make this configurable by the developer
  ].join('&');

  libraries['maps'] = {
    js: [
      {
        _attributes: {
          src: src
        }
      }
    ]
  };

  return libraries;

};

dg_google_maps.initMap = function() {

  this._initialized = true;

  var attachment = dg.getAttachment('dg_google_maps');
  var library = attachment[0];
  if (library.initMap) { library.initMap(); }

};
