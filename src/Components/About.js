import React ,{useState} from 'react'

 export default function About() {

    const[MyStyle, setMyStyle]= useState({
        backgroundColor : 'white',
        color: 'black'
   })

   const[BtnText, setBtnText]=useState("Enable Dark Mode");
   
   const Toggle = ()=>{
   
   if(MyStyle.color==='white')
       {
           setMyStyle({backgroundColor : 'white',
           color: 'black'})
           setBtnText("Enable Dark Mode");
           document.h4.style.Color = 'dark';

       }
   else
       {
           setMyStyle({backgroundColor : 'black',
           color: 'white'})
           setBtnText("Enable Light Mode");
           document.h4.style.Color = 'white';

       }
   
   }

return (
    <>

    <h4 className='mx-4'>ABOUT</h4>

<div className="container my-8">
    <div className="accordion" id="accordionExample" style={MyStyle}>
<div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Analyze your Text</strong>
    </button></h2>

<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={MyStyle}>
    TextUtils gives you a way to analyze your text very <code>quickly and efficiently.</code>
    It gives us a facility to count our words or characters. It can convert our text to upper and lower case or in invert and title case.
    It also gives us a facility of listenting, copying, and removing of text.</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>Free to Use</strong>
    </button></h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={MyStyle}>
    TestUtils is completely free to use. It allows us to perform various operations on our text or on our any desired document.</div>
</div>
</div>

<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <strong>Browser Compatible</strong>
    </button></h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body " style={MyStyle}>
    TextUtils work in any web browser such as Google Chrome, Internt Explorer, Opera, Firefox and Safari.It is used to perform multiple operation on 
    facebook, books, excel sheets, documents, pdfs, on blogs and essay.</div>
    </div></div>
</div>

<div className="container my-3">
    <button className="btn btn-primary" onClick={Toggle}>{BtnText}</button>
</div>

</div>

</>
)
}
