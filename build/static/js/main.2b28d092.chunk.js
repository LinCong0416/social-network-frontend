(this["webpackJsonpsocial-network-frontend"]=this["webpackJsonpsocial-network-frontend"]||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(20),r=n.n(s),o=n(2),i=function(){return Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h2",{children:"Home"}),Object(a.jsx)("p",{className:"lead",children:" Welcome to React Frontend"})]})},l=n(7),j=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},u=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"#ffffff"}},d=Object(o.g)((function(e){var t=e.history;return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"nav nav-tabs bg-primary",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link",style:u(t,"/"),to:"/",children:"Home"})}),!j()&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link",style:u(t,"/signin"),to:"/signin",children:"Sign In"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link",style:u(t,"/signup"),to:"/signup",children:"Sign Up"})})]}),j()&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",style:(u(t,"/signup"),{cursor:"pointer",color:"#fff"}),onClick:function(){return e=function(){return t.push("/")},"undefined"!==typeof window&&localStorage.removeItem("jwt"),e(),fetch("".concat("http://localhost:8080","/signout"),{method:"GET"}).then((function(e){return console.log("signout",e),e.json()})).catch((function(e){return console.log(e)}));var e},children:"Sign Out"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/user/".concat(j().user._id),style:{color:"#fff"},className:"nav-link",children:"".concat(j().user.name,"'s profile")})})]})]})})})),m=n(14),h=n(9),b=n(10),p=n(12),f=n(11),O=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).signupForm=function(t,n,c){return Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Name"}),Object(a.jsx)("input",{onChange:e.handleChange("name"),type:"text",className:"form-control",value:t})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Email"}),Object(a.jsx)("input",{onChange:e.handleChange("email"),type:"email",className:"form-control",value:n})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Password"}),Object(a.jsx)("input",{onChange:e.handleChange("password"),type:"password",className:"form-control",value:c})]}),Object(a.jsx)("button",{onClick:e.clickSubmit,className:"btn btn-raised btn-primary",children:"Submit"})]})},e.handleChange=function(t){return function(n){e.setState({error:""}),e.setState(Object(m.a)({},t,n.target.value))}},e.clickSubmit=function(t){t.preventDefault();var n=e.state;(function(e){return fetch("".concat("http://localhost:8080","/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({name:n.name,email:n.email,password:n.password}).then((function(t){t.error?e.setState({error:t.error}):e.setState({error:"",name:"",email:"",password:"",open:!0})}))},e.state={name:"",email:"",password:"",error:"",open:!1},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,c=e.password,s=e.error,r=e.open;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"mt-5 mb-5",children:"Signup"}),Object(a.jsx)("div",{className:"alert alert-danger",style:{display:s?"":"none"},children:s}),Object(a.jsx)("div",{className:"alert alert-info",style:{display:r?"":"none"},children:"New account is successfully created. Please Sign in."}),this.signupForm(t,n,c)]})}}]),n}(c.Component),x=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).signinForm=function(t,n){return Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Email"}),Object(a.jsx)("input",{onChange:e.handleChange("email"),type:"email",className:"form-control",value:t})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Password"}),Object(a.jsx)("input",{onChange:e.handleChange("password"),type:"password",className:"form-control",value:n})]}),Object(a.jsx)("button",{onClick:e.clickSubmit,className:"btn btn-raised btn-primary",children:"Submit"})]})},e.handleChange=function(t){return function(n){e.setState({error:""}),e.setState(Object(m.a)({},t,n.target.value))}},e.clickSubmit=function(t){t.preventDefault(),e.setState({loading:!0});var n=e.state;(function(e){return fetch("http://localhost:8080/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})({email:n.email,password:n.password}).then((function(t){var n,a;t.error?e.setState({error:t.error,loading:!1}):(n=t,a=function(){e.setState({redirectToReferer:!0})},"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(n)),a()))}))},e.state={email:"",password:"",error:"",redirectToReferer:!1,loading:!1},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,c=e.error,s=e.redirectToReferer,r=e.loading;return s?Object(a.jsx)(o.a,{to:"/"}):Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"mt-5 mb-5",children:"Signin"}),Object(a.jsx)("div",{className:"alert alert-danger",style:{display:c?"":"none"},children:c}),r?Object(a.jsx)("div",{className:"jumbotron text-center",children:Object(a.jsx)("h2",{children:"Loading..."})}):"",this.signinForm(t,n)]})}}]),n}(c.Component),g=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={user:"",redirectToSignin:!1},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;fetch("".concat("http://localhost:8080","/user/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(j().token)}}).then((function(e){e.error?console.log("ERROR"):console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"mt-5 mb-5",children:"Profile"}),Object(a.jsxs)("p",{children:["Hello ",j().user.name]}),Object(a.jsxs)("p",{children:["Email: ",j().user.email]})]})}}]),n}(c.Component),v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:i}),Object(a.jsx)(o.b,{exact:!0,path:"/signup",component:O}),Object(a.jsx)(o.b,{exact:!0,path:"/signin",component:x}),Object(a.jsx)(o.b,{exact:!0,path:"/user/:userId",component:g})]})]})},N=function(){return Object(a.jsx)(l.a,{children:Object(a.jsx)(v,{})})};r.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2b28d092.chunk.js.map