    import React from 'react'

  /*props.alert is basically working like an if-else sttement if props.alert is null then it will automatically
  not evaluate the next part*/

    const Capitalize=(word)=>
    {
      let lower= word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }



    export default function Alert(props) {
    return (

      <div style={{height:'50px'}}>

         { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}

      </div>
    
    
    
    );
    }
