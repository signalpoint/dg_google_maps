dg_google_maps.libraries = function() {
  var apiKey = dg_google.apiKey('maps');
  var libraries = {};
  libraries['maps'] = {

    js: [

      // Prepare the Google Maps .js asset.
      {
        _attributes: {
          src: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey
        }
      }

    ]

  };
  return libraries;
};
