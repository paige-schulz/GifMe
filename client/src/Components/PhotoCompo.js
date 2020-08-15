import React from "react";
import ReactDOM from "react-dom";
import "./PhotoCompo.css";
import AbstractedImgCompo from "./AbstractedImgCompo";
import SearchBarCompo from "./SearchBarCompo";

export default class PhotoCompo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.state = {
      ThingsArray: [],
      imageFile: "",
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }
  async onChange(event) {
    console.log("onChange reach");
    let url1 = URL.createObjectURL(event.target.files[0]);
    this.setState({ imageFile: url1 });
    const that = this;
    let makeblob = function (dataURL) {
      let BASE64_MARKER = ";base64,";
      if (dataURL.indexOf(BASE64_MARKER) === -1) {
        let parts = dataURL.split(",");
        let contentType = parts[0].split(":")[1];
        let raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
      }
      let parts = dataURL.split(BASE64_MARKER);
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    };
    let file = event.target.files[0];
    let reader = new FileReader();
    console.log("before onload reach");
    reader.onload = async function (event) {
      console.log("onload reach");
      let contents = reader.result;
      fetch(
        "https://northcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Objects&details=Landmarks&language=en",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
            "Ocp-Apim-Subscription-Key": "78fe4d181b4244d2bb8c1ed301b861b6",
          },
          body: makeblob(contents),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          that.setState({
            ThingsArray: res.objects,
          });
          console.log(that.state.ThingsArray);
        });
    };

    reader.readAsDataURL(file);
    console.log(this.state.ThingsArray);
  }

  render() {
    console.log(this.state.ThingsArray);
    var objectList = this.state.ThingsArray.map((x) => {
      return (
        <AbstractedImgCompo
          objectRef={x}
          img={this.state.imageFile}
        ></AbstractedImgCompo>
      );
    });
    return (
      <div className="photo">
        <div>
          <form onSubmit={this.handleSubmit}>
            <label >
              Upload Picture:
              <input 
                type="file"
                onChange={this.onChange}
                ref={this.fileInput}
              />
            </label>
          </form>
        </div>
        <br></br>
        <SearchBarCompo></SearchBarCompo>
        <div>{objectList}</div>
      </div>
    );
  }
}
