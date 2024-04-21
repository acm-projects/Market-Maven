import { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

export const GoogleMap = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            const coordsPromises = props.items.map(item =>
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${item.zip}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.results.length > 0) {
                            return { _id: item._id, coordinates: data.results[0].geometry.location };
                        }
                        throw new Error(`No results found for ZIP: ${item.zip}`);
                    })
                    .catch(error => console.error(`Error fetching coordinates for ${item.zip}:`, error))
            );

            Promise.all(coordsPromises)
                .then(results => {
                    setLocations(results);
                })
                .catch(error => console.error('Error resolving all coordinates:', error));
        };

        fetchCoordinates();
    }, [props.items]); // Dependency on props.items to re-run when items change

    return (
        <div>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div className="h-64 w-full">
                    <Map zoom={7} center={{ lat: 32.9857019, lng: -96.7528223 }} mapId={process.env.REACT_APP_GOOGLE_MAPS_MAP_ID}>
                        {locations.map(location => (
                            location.coordinates && (
                                <AdvancedMarker key={location._id} position={location.coordinates}>
                                    <Pin />
                                </AdvancedMarker>
                            )
                        ))}
                    </Map>
                </div>
            </APIProvider>
        </div>
    );
};
