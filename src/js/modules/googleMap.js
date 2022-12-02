import {Loader} from "@googlemaps/js-api-loader"

export const googleMap = () => {
  const loader = new Loader({
    version: "weekly",
    apiKey: "",
  })

  const mapOptions = {
    center: {
      lat: 50.483140,
      lng: 30.479804
    },
    zoom: 2
  };

  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    })
}