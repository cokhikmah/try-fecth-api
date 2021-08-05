import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ImageList = ({ images }) => {
    console.log(images);
    if(images.length > 0) {
        return (
            <div className="row">
            <button type="button" className="btn btn-danger">Fetch The Tigerz</button>
                {images.map(element => {
                    return(
                        <img src={element.urls.small}
                        alt="..."  style={{maxHeight: "150px"}}
                        className="col-sm-2 img-fluid "
                        >
                        </img>




                    );
                })}
            </div>
        );
    }
    return <div className="bg-warning text-center">Not Image to show</div>;
};

export default ImageList;
