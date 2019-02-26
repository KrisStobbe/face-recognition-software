import React from 'react';
import './Signin.css';

const Signin = ({onRouteChange}) => {
  return (
      <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main class="pa4 black-80">
            <form class="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend class="f2 fw6 ph0 mh0">Sign In</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
          </div>
          <div class="mv3">
            <label class="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
          </div>
          <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
        </fieldset>
        <div class="">
          <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          onClick = {() => onRouteChange('home')}
          type="submit" 
          value="Sign in" />
        </div>
        <div class="lh-copy mt3">
          <p onClick = {() => onRouteChange('register')}  class="f6 link dim black db pointer">Register</p>
          </div>
        </form>
      </main>
      </article>

  );
}

export default Signin;