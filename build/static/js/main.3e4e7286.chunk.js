(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),l=t(6),c=t.n(l),s=(t(16),t(3)),r=(t(18),t(4));function i(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(r.b,{className:"navbar-brand",to:"/text"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link active","aria-current":"page",to:"/text"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link",to:"/about"},e.about)),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/"},e.cont)),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},e.drop),o.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},o.a.createElement("li",null,o.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),o.a.createElement("li",null,o.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),o.a.createElement("li",null,o.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))),o.a.createElement("div",{className:"form-check form-switch text-light"},o.a.createElement("input",{type:"checkbox",className:"form-check-input",onClick:e.toggleMode,id:"customSwitch1"}),o.a.createElement("label",{className:"form-check-label1",htmlFor:"customSwitch1"},"Enable DarkMode")))))}i.defaultProps={title:"mention your title please",about:"tell some new about your textutils"};t(20);function m(e){var a=Object(n.useState)("Enter Your Text"),t=Object(s.a)(a,2),l=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"mb-3"},o.a.createElement("h5",null,o.a.createElement("label",{htmlFor:"box",className:"form-label text-success"},e.heading)),o.a.createElement("textarea",{className:"form-control",id:"box",value:l,onChange:function(e){console.log("On Change function was envoked"),c(e.target.value)},rows:"10"})),o.a.createElement("div",{className:"container my-3"},o.a.createElement("h6",{className:"text-success"},"The count of words is:",l.split(" ").length," "),o.a.createElement("h6",{className:"text-success"},"The count of characters is:",l.length," "),o.a.createElement("h6",{className:"text-success"},"The time to read these words is:",.008*l.split(" ").length," minutes "),o.a.createElement("h5",{className:"text-dark my-3"},"Preview"),o.a.createElement("h6",{className:"text-success"},l)),o.a.createElement("div",{className:"container my-3"},o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){console.log("UpperCase button was clicked");var a=l.toUpperCase();c(a),e.showAlert("Converted to Upper Case","success")}},"Covert to UpperCase"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){console.log("LowerCase button was clicked");var a=l.toLowerCase();c(a),e.showAlert("Converted to Lower Case","success")}},"Covert to LowerCase"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){console.log("ClearText button was clicked");c(" "),e.showAlert("Cleared Text","success")}},"Clear Text"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){var a=l.substring(7,39);c("The substring of sentence is: "+a),e.showAlert("Converted to Sub String","success")}},"SubString"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){var a,t=l.toUpperCase(),n=l.toLowerCase();a===t?(c(a=n),console.log("hello ")):c(a=t),e.showAlert("Converted to Invert Case","success")}},"Invert Case"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){var a=l.split(" ").map(function(e,a){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}).join(" ");c(a),e.showAlert("Converted to Title Case","success")}},"Title Case"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){var a=new SpeechSynthesisUtterance;a.text=l,window.speechSynthesis.speak(a),e.showAlert("Listening Text Mode is Enabled","success")}},"Speak"),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){var a=document.getElementById("box");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text is Copied","success")}},"Copy Text"),o.a.createElement("button",{className:"bg-success mx-2 my-4",onClick:function(){var a=l.split(/[  ]+/);c(a.join(" ")),e.showAlert("Extra Space has been removed","success")}},"Remove Extra Spaces"),o.a.createElement("span",null,o.a.createElement("button",{className:"bg-success mx-2 ",onClick:function(){document.body.style.backgroundColor="lightgrey",e.showAlert("LightGrey Color Enabled","success")}},"Change you background with lighter mode")),o.a.createElement("button",{className:"bg-success mx-2",onClick:function(){document.body.style.backgroundColor="Black",e.showAlert("Black Color Enabled","success")}},"Change you background with darker mode"))))}function d(){var e=Object(n.useState)({backgroundColor:"white",color:"black"}),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("Enable Dark Mode"),r=Object(s.a)(c,2),i=r[0],m=r[1];return o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body ",style:t},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),o.a.createElement("div",{className:"container my-3"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){"white"===t.color?(l({backgroundColor:"white",color:"black"}),m("Enable Dark Mode")):(l({backgroundColor:"black",color:"white"}),m("Enable Light Mode"))}},i)))}var u=function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)};function b(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,u(e.alert.type)),": ",e.alert.msg)}var h=t(0);var p=function(){var e=Object(n.useState)("success"),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),u=Object(s.a)(c,2),p=u[0],g=u[1],E=function(e,a){g({msg:e,type:a}),setInterval(function(){g(null)},3e3)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null,o.a.createElement(i,{title:"TextUtils",about:"About Us",cont:"Contact",drop:"Dropdown",mode:t,toggleMode:function(){"success"===t?(l("dark"),document.body.style.backgroundColor="#042743",E("Dark Mode has been enabled","success"),document.title="TextUtils-Dark Mode"):(l("success"),document.body.style.backgroundColor="white",E("Light Mode has been enabled","success"),document.title="TextUtils-Light Mode")}}),o.a.createElement(b,{alert:p}),o.a.createElement("div",{className:" container my-5"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/about",element:o.a.createElement(d,null)}),o.a.createElement(h.a,{exact:!0,path:"/text",element:o.a.createElement(m,{heading:"ENTER YOUR TEXT TO ANALYZE BELOW",showAlert:E})})))))},g=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,23)).then(function(a){var t=a.getCLS,n=a.getFID,o=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),o(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null))),g()},7:function(e,a,t){e.exports=t(22)}},[[7,3,2]]]);
//# sourceMappingURL=main.3e4e7286.chunk.js.map