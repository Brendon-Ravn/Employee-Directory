(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),s=(n(23),n(1)),c=n(2),i=n(5),u=n(4);var m=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search for an employee by name, email, or phone.",id:"search"})))};var h=function(e){return r.a.createElement("ul",{className:"list-group search-results"},e.results.map((function(e){return r.a.createElement("li",{key:e.id.value,className:"list-group-item"},r.a.createElement("img",{alt:"employee",src:e.picture.large,className:"img-fluid"}),r.a.createElement("p",null,"Name: ",e.name.first," ",e.name.last," | Email: ",e.email," | Phone: ",e.phone))})))},p=n(16),f=n.n(p),d=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},g=n(17),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[],filtered:[]},e.searchEmp=function(t){var n=new g.a(e.state.results,{keys:["name.first","name.last","email","phone"]});e.setState({filtered:n.search(t).map((function(e){return e.item}))})},e.handleInputChange=function(t){var n=t.target.value;e.searchEmp(n)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,{handleInputChange:this.handleInputChange}),this.state.filtered.length>0?r.a.createElement(h,{results:this.state.filtered}):r.a.createElement(h,{results:this.state.results}))}}]),n}(a.Component);n(41);var E=function(){return r.a.createElement(v,null)};n(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb17df86.chunk.js.map