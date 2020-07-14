import React from 'react'
import './app.css'

function SignUp() {
     return (
      <div class="container mt-4">
        <form>
        <div class="row d-flex justify-content-center">
              <div class="col-md-5">
                  <div class="card p-3 py-1">
                      <h2>Sign Up</h2>
                      <div class="signup mt-3"> 
                      <input type="text"   class="form-control" placeholder="Full Name"  required/>
                      <input type="email"   class="form-control" placeholder="Email"  required/> 
                      <input type="text" class="form-control" placeholder="Phone Number"   required/>
                      <input type="text" class="form-control" placeholder="Password"   required/> 
                      <label class="form-control font-weight-bold text-secondary">Profession</label>
                      <select  class="form-control" required>
                          <option></option>
                          <option>Software Developer</option>
                          <option>Architect</option>
                          <option>Student</option>
                          <option>Consultant</option>
                          <option>Other</option>
                     </select>
                      </div>
                      <div class="form-check form mt-3"> 
                      </div>
                      <div class="mt-4"> 
                      <button type="submit" value="Submit" class="btn btn-danger button btn-block">Sign Up</button> 
                      <div class="mt-3"> 
                      <p class="font-weight-bold text-secondary ">Already have an account ?</p>
                      <p><a href="#" class="signin-link text-primary" >Sign In Here</a></p>
                     </div>
                    </div>
                  </div>
              </div>
          </div>
        </form>
      </div>
      )
}

export default SignUp
