dg_google_maps.libraries = function() {
  var apiKey = dg_google.apiKey('maps');
  var libraries = {};
  libraries['maps'] = {

    js: [

      // Prepare the Google Maps .js asset.
      {
        _attributes: {
          src: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&loading=async&callback=dg_google_maps.initMap'
        }
      }

    ]

  };
  return libraries;
};

dg_google_maps.initMap = function() {

  var attachment = dg.getAttachment('dg_google_maps');
  var library = attachment[0];
  if (library.initMap) { library.initMap(); }

};
