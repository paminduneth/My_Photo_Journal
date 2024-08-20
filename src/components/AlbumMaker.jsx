import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from "./data/photo-entries.json";

class AlbumMaker extends React.Component {
    render()
    {

        var radius = 56;
        const PI = 3.14;
        debugger;
        var area = radius ** 2 * PI;


        console.log(entries);
        return(
            <div className="flex-container">
                {/* <PhotoEntry src="Berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" />  */}
                {
                    // * map will get every item in the entires list and loop through one by one by saving it to photo variable
                    entries.itemlist && entries.itemlist.map((photo) => {
                        return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption}/>
                    })
                    
                }
            </div>
        )
    }
}

export default AlbumMaker;