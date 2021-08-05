import React from 'react';
import axios from 'axios';
import ImageList from './components/ImageList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageList: []}
    }
    async componentDidMount() {
        const response =  await axios.get('https://api.unsplash.com/search/photos/?client_id=Wb_z0K1vKcPuDnKkN8HNlBVLarl77XRwwYGAF7fLCXs', {
            params: {
                query: 'tiger'
            },
            headers: {
                Authorization: 'Client-ID YOUR_ACCESS_KEY'
            }
        });
        this.setState({ imageList: response.data.results });
        console.log(this.state.imageList)
    }
    render() {
        return(
            <div className="container mt-4"
                style={{
                  backgroundColor: '#3e3e3e'
                }}
                >
                <ImageList images={ this.state.imageList }/>
            </div>
        );
    }
}

export default App;
