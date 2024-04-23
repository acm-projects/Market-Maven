import { useEffect, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

// items prop takes in an array of items, for individual itemdetails pages you can pass an array of one item, the one that the page is for
export const GoogleMap = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            if (!props.items || props.items.length === 0) {
                return; // No items to process, exit early
            }
    
            const coordsPromises = props.items.map(item =>
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${item.zip}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.results.length > 0) {
                            return { _id: item._id, coordinates: data.results[0].geometry.location };
                        }
                        console.log(`No results found for ZIP: ${item.zip}`); // Log instead of throw
                        return null; // Return null for no result
                    })
                    .catch(error => {
                        console.error(`Error fetching coordinates for ${item.zip}:`, error);
                        return null; // Return null on error
                    })
            );
    
            Promise.all(coordsPromises)
                .then(results => {
                    const validLocations = results.filter(result => result !== null); // Filter out null results
                    setLocations(validLocations);
                });
        };
    
        fetchCoordinates();
    }, [props.items]);
    
    return (
        <div>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <div className="h-64 w-full">
                    <Map zoom={props.zoom == null ? 9 : props.zoom} center={!props.single ? { lat: 32.9857019, lng: -96.7528223 } : locations[0].coordinates} mapId={process.env.REACT_APP_GOOGLE_MAPS_MAP_ID}>
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
