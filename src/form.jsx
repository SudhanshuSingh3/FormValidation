import React from "react";

const Form=()=>{
    return(
        <>
        <div className='container'>
            <table className='center'>
                  
                  <tr>
                      <th><label for="name">Name</label></th>
                      <th><input type="text" id="name" name="name" /></th>
                  </tr>
  
                  <tr>
                      <th><label for="name">Email</label></th>
                      <th><input type="text" id="email" name="email" /></th>
                  </tr>
                  <tr>
                      <th><label for="name">Contact Number</label></th>
                      <th><input type="text" id="cnumber" name="cnumber" /></th>
                  </tr>
  
                  <tr>
                      <th><label for="age"> Age</label></th>
                      <th><input type="text" id="age" name="age" min="1" max="99" /></th>
                      
                  </tr>

                  <tr>
                      <th><label for="gender"> Gender</label></th>
                      <th><input type="text" id="gender" name="gender" /></th>
                      
                  </tr>
                  <tr>
                      <th><label for="address"> Address</label></th>
                      <th><textarea  rows="5"></textarea></th>
                      
                  </tr>
                  <tr>
                      <th><label for="gender"> Password</label></th>
                      <th><input type="password" id="password" name="password" /></th>
                      
                  </tr>
            
                  
                  <tr>
                      <th></th>
                      <th><button type="submit">Submit</button></th>
                  </tr>
             
              </table>
            </div>
            
        </>
    )
}
export default Form