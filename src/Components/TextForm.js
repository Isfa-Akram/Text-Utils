import React ,{useState} from 'react'
import './style.css';


export default function TextForm(props) {

//text is basically a state, setText is used to update a text 
//this is the syntax of hooks we can set or update value by using this hook

//text="update text" //this is a wrong way to update a text react will give us an error
//setText=("new text"); //this is a correct way to update a text 

const[text, setText] = useState("Enter Your Text");

const UpperTextChange = ()=>{
console.log("UpperCase button was clicked");
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to Upper Case","success");


}

const LowerTextChange = ()=>{
console.log("LowerCase button was clicked");
let newText= text.toLowerCase();
setText(newText);
props.showAlert("Converted to Lower Case","success");
}

const ClearText = ()=>{
console.log("ClearText button was clicked");
let newText= " ";
setText(newText);
props.showAlert("Cleared Text","success");
  
}

const SubString = ()=>{

let newText= text.substring(7,39);
setText("The substring of sentence is: " + newText);
props.showAlert("Converted to Sub String","success"); 
}

const Speak = () => {
let msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);
props.showAlert("Listening Text Mode is Enabled","success");

}

const handleOnChange = (event)=>{
console.log("On Change function was envoked");
//we can write some values in text box with the help of this setText 
setText(event.target.value);


}

const InvertCase =()=>{
  
  let obj;

  let upper= text.toUpperCase();
  let lower= text.toLowerCase();

  //if(obj===text.toUpperCase())
  if(obj===upper)
  {
    //obj=text.toLowerCase;
    obj=lower;
    setText(obj);
    console.log("hello ");
  }
  else
  {
    //obj=text.toUpperCase();
    obj=upper;
    setText(obj);
  }
  props.showAlert("Converted to Invert Case","success");
}

const TitleCase=() =>{
    let newText = text.split(" ").map(function (word, index) {
    return word.charAt(0)
        .toUpperCase() + word.slice(1)
        .toLowerCase();
    })
    .join(' ');
  setText(newText);
  props.showAlert("Converted to Title Case","success");

    }

  const LightBack=() =>{
      document.body.style.backgroundColor = "lightgrey";
      props.showAlert("LightGrey Color Enabled","success");
      }
  const DarkBack=() =>{
        document.body.style.backgroundColor = "Black";
        props.showAlert("Black Color Enabled","success");
        }

  const CopyText= ()=>{
    let obj = document.getElementById("box");
    obj.select();
    navigator.clipboard.writeText(obj.value);
    props.showAlert("Text is Copied","success");

  }
  
  const ExtraSpace=()=>{
      let obj=text.split(/[  ]+/);
      setText(obj.join(" "));
      props.showAlert("Extra Space has been removed","success");

  }

return (
<>
<div>
    <div className="mb-3">
        <h5><label htmlFor="box" className="form-label text-success">{props.heading}</label></h5>
        {/*onchange() event is used to type in text area otherwise we will type it */}
        <textarea className="form-control" id="box" value={text} onChange={ handleOnChange} rows="10"></textarea>
    </div>

    <div className="container my-3">
        <h6 className="text-success">The count of words is:{ text.split(" ").length} </h6>
        <h6 className="text-success">The count of characters is:{ text.length} </h6>
        <h6 className="text-success">The time to read these words is:{ 0.008 * text.split(" ").length} minutes </h6>
        <h5 className="text-dark my-3">Preview</h5>
        <h6 className="text-success">{text}</h6>
    </div>

    <div className="container my-3">
        <button className="bg-success mx-2" onClick={UpperTextChange} >Covert to UpperCase</button>
        <button className="bg-success mx-2" onClick={LowerTextChange} >Covert to LowerCase</button>
        <button className="bg-success mx-2" onClick={ClearText} >Clear Text</button>
        <button className="bg-success mx-2" onClick={SubString} >SubString</button>
        
        <button className="bg-success mx-2" onClick={InvertCase} >Invert Case</button>

        <button className="bg-success mx-2" onClick={TitleCase} >Title Case</button>
        <button className="bg-success mx-2" onClick={Speak} >Speak</button>
        <button className="bg-success mx-2" onClick={CopyText} >Copy Text</button>

        <button className="bg-success mx-2 my-4" onClick={ExtraSpace} >Remove Extra Spaces</button>
        <span><button className="bg-success mx-2 " onClick={LightBack} >Change you background with lighter mode</button></span>
        <button className="bg-success mx-2" onClick={DarkBack} >Change you background with darker mode</button>
       </div>

</div>

</>
)

}

