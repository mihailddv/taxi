import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAddressList, getMapCoordinates } from '../../modules/Map';
import mapboxgl from 'mapbox-gl';
import Order from '../Order';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    const { getAddressList } = this.props;
    getAddressList();

    mapboxgl.accessToken =
      'pk.eyJ1Ijoid2FsYWxlZGUiLCJhIjoiY2swMjZkcm40MXZicDNjbGE4cnB0dzhqdiJ9.VHxZZeHRvmYNGlhqx0rO1g';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3158, 59.9391],
      zoom: 12
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { coordinates } = this.props;
    if (
      JSON.stringify(coordinates) !== JSON.stringify(prevProps.coordinates) &&
      coordinates.length
    ) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 15
      });
      this.map.addLayer({
        id: 'track',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates
            }
          }
        },
        paint: {
          'line-color': '#a00',
          'line-width': 5
        }
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  removeLayer = () => {
    this.map.removeLayer('track');
    this.map.removeSource('track');
  };

  render() {
    return (
      <React.Fragment>
        <Order removeLayer={this.removeLayer} />
        <div
          className='map'
          style={{ height: window.innerHeight - 65 }}
          ref={this.mapContainer}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ coordinates: getMapCoordinates(state) });
const mapDispatchToProps = { getAddressList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
