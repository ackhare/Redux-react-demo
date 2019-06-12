import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import Dropzone from 'react-dropzone'
import axios from 'axios'

class App extends Component {
  // This function does the uploading to cloudinary
  constructor(props) {
    super(props);
    this.state = { mode: undefined } ;
  }

  mm() {

    var fileInput = document.getElementById('the-file');
var file = fileInput.files[0];
var formData = new FormData();
formData.append('file', file);
    //formData.append("file", "C:\\Users\\ac38591\\Downloads\\37929654_1083155691847732_8115744797790044160_n.jpg");
    formData.append("tags", '{Array}'); // Add tags for the images - {Array}
    formData.append("upload_preset", "x4x80alg"); // Replace the preset name with your own
    formData.append("api_key", "387787758366226"); // Replace API key with your own Cloudinary API key
    formData.append("timestamp", (Date.now() / 1000) | 0);
    formData.append("return_delete_token", true );

    // Replace cloudinary upload URL with yours
    axios.post(
      "https://api.cloudinary.com/v1_1/dsz6drsin/image/upload",
      formData, 
      { headers: { "X-Requested-With": "XMLHttpRequest"}})
      .then(response => console.log(response.data))
  }
  
  

  render() {
    return (
<div>
<input id="the-file" name="file" type="file"/>>
<button onClick={this.mm}>mmmmm</button>
</div>
    )
  }


}


export default App