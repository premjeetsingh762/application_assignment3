import React from 'react';

 const App=()=>{
     const [name,setName]=React.userState("");
     const [lastName,setLastName]=React.userState("Singh");
     const[fullName,setfullName]=React.useState();

     const onSubmit=(event)=>{
          event.preventDefault();
          setfullName(name);

     };

    const inputEvent=(event)=>{
          setName(event.target.value);
    };

    const inputEvent2=(event)=>{
          setLastName(event.target.value);
    };

    return(
         <>
            <div className="form">
                 <form onsubmit={onSubmit}>
                     <div>
                          <h1>Welcome {FullName} {LastName}</h1>
                          <input type="text" placeholder="Enter your name" onchange={inputEvent} value={name}/>
                          <br/>
                          <input type="text" placeholder="Enter your lastName" onchange={inputEvent2} value={lastName}/>
                          <button type="submit">Submit</button>
                     </div>
                 </form>
            </div>
            </>
    )

     
 }
 
export default App;
