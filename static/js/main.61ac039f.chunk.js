(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"Peugeot T5","description":"Aluminum Road Bike","path":"peugeot","image":"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","price":400},{"name":"YO Handle","description":"Carbon Fiber Handle","path":"handle","image":"https://images.unsplash.com/photo-1497515098781-e965764ab601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80","price":150},{"name":"Haul","description":"Carbon Fiber Road Bike","path":"haul","image":"https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","price":1000}]')},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(23),i=c.n(a),r=c(13),l=c(11),o=(c(29),c(4)),j=c(0);var d=function(){return Object(j.jsxs)("div",{className:"home d-flex flex-column justify-content-center align-items-center flex-grow-1",children:[Object(j.jsx)("h1",{className:"text-white fw-bold display-3",children:"Premium Classic"}),Object(j.jsx)("h2",{className:"text-white fw-lighter fs-4 p-2",children:"New Collection of Summer"}),Object(j.jsxs)("div",{className:"button-group",children:[Object(j.jsx)(o.b,{to:"/shop",children:Object(j.jsx)("button",{className:"btn btn-light p-3 m-2 fs-6 text-uppercase",children:"products"})}),Object(j.jsx)(o.b,{to:"/about",children:Object(j.jsx)("button",{className:"btn btn-light p-3 m-2 fs-6 text-uppercase",children:"about"})})]})]})},b=c(21),x=c(10);var h=function(e){return Object(j.jsxs)("nav",{className:"d-flex justify-content-around p-2 align-items-center",children:[Object(j.jsx)(o.b,{className:"link p-2",to:"/",children:Object(j.jsx)(b.a,{icon:x.c,size:"2x",className:""})}),Object(j.jsxs)("ul",{className:"d-flex list-unstyled w-25 m-0 justify-content-evenly align-items-center",children:[Object(j.jsx)(o.b,{className:"link",to:"/about",children:Object(j.jsx)("li",{className:"fw-bold px-2",children:"ABOUT"})}),Object(j.jsx)(o.b,{className:"link",to:"/shop",children:Object(j.jsx)("li",{className:"fw-bold px-2",children:"SHOP"})}),Object(j.jsx)(o.b,{className:"link",to:"/cart",children:Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(b.a,{icon:x.a,size:"lg",className:"px-1"}),Object(j.jsx)("span",{className:x.b,children:e.cart.length})]})})]})]})},m=c(15);var u=function(){return Object(j.jsxs)("div",{className:"shop d-flex flex-column",children:[Object(j.jsx)("div",{className:"shop-products d-flex justify-content-center flex-wrap p-4",children:m.map((function(e){return Object(j.jsx)("div",{className:"card m-3 p-0 border-light",children:Object(j.jsxs)(o.c,{to:"/shop/".concat(e.path),children:[Object(j.jsx)("img",{src:e.image,alt:e.name,className:"card-img-top"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"d-flex align-items-center justify-content-between text-black",children:[Object(j.jsxs)("div",{className:"p-2",children:[Object(j.jsx)("p",{className:"m-0 p-0",children:e.name}),Object(j.jsx)("p",{className:"m-0 p-0",children:e.description})]}),Object(j.jsx)("div",{className:"p-2",children:Object(j.jsxs)("p",{className:"m-0 p-0",children:["$",e.price]})})]})})]})},e.name)}))}),Object(j.jsxs)("div",{className:"soon d-flex flex-column justify-content-center align-items-center p-4",children:[Object(j.jsx)("h3",{className:"fs-3 fw-bold",children:"Want to see more products"}),Object(j.jsx)("p",{className:"fw-lighter",children:"Sign up to be the first to know"}),Object(j.jsx)("button",{disabled:!0,className:"p-2 text-uppercase",children:"sign up"})]})]})};var p=function(){return Object(j.jsxs)("div",{className:"about d-flex justify-content-center align-items-center flex-grow-1",children:[Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(j.jsx)("h1",{className:"m-auto",children:"A Better Bike Shop Experience"}),Object(j.jsx)("p",{className:"w-50 m-auto py-4",children:"We're devoted to delivering the bike shop experience the way we've always wanted it to be. A curated collection of cycling's standout brands, hands-on expertise and service."})]}),Object(j.jsx)("img",{className:"about-img",src:"https://images.unsplash.com/photo-1622456149571-44563067b5d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",alt:"cyclists"})]})},f=c(16);var O=function(e){var t=Object(s.useState)(0),c=Object(l.a)(t,2),n=c[0],a=c[1];function i(){return 0!==e.cart.length?Object(j.jsx)(o.b,{to:"/checkout",children:Object(j.jsx)("button",{className:"btn btn-dark p-3 fs-6 text-uppercase",children:"checkout"})}):null}var d=function(t){for(var c=0,s=0;s<e.cart.length;s++)e.cart[s].name===t&&(c+=1);return c};return Object(s.useEffect)((function(){!function(){var t=0;if(0===e.cart.length)a(t);else for(var c in e.cart)a(t+=e.cart[c].price)}()}),[e.cart.length]),Object(j.jsx)("div",{className:"cart d-flex flex-grow-1 p-4",children:0===e.cart.length?Object(j.jsxs)("div",{className:"d-flex flex-grow-1 align-items-center justify-content-evenly",children:[Object(j.jsx)("h2",{children:"Your cart is currently empty."}),Object(j.jsxs)("div",{className:"py-5",children:[Object(j.jsx)("h4",{children:"Want to shop?"}),Object(j.jsx)("p",{children:"This is the perfect opportunity to shop for the gear you've been wanting."}),Object(j.jsx)(o.b,{to:"/shop",children:Object(j.jsx)("button",{className:"btn btn-dark p-3 my-2 fs-6 text-uppercase",children:"continue shopping"})})]})]}):Object(j.jsxs)("div",{className:"d-flex flex-grow-1 align-items-center justify-content-evenly",children:[Object(j.jsx)("div",{className:"cartItemized d-flex flex-column",children:e.cart.filter((function(e,t,c){return t===c.findIndex((function(t){return t.place===e.place&&t.name===e.name}))})).map((function(t,c){return Object(j.jsxs)("div",{id:t.path,className:"d-flex align-items-center justify-contents-evenly",children:[Object(j.jsx)("div",{className:"d-flex flex-column",children:Object(j.jsx)("img",{alt:t.name,src:t.image,className:"thumbnail"})}),Object(j.jsxs)("div",{className:"p-4",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("p",{children:t.description}),Object(j.jsxs)("p",{children:["$",t.price]}),Object(j.jsxs)("div",{className:"btn-group m-3",role:"group","aria-label":"quantity count",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-dark","aria-label":"remove one",onClick:function(){return c=t,void e.setCart(e.cart.filter((function(e){return e!==c})));var c},children:"-"}),Object(j.jsx)("button",{className:"btn btn-outline-dark",disabled:!0,children:d(t.name)}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-dark","aria-label":"add one",onClick:function(){return function(t){e.setCart([].concat(Object(f.a)(e.cart),[Object(r.a)({},t)]))}(t)},children:"+"})]})]})]},c)}))}),Object(j.jsxs)("div",{className:"cartCost d-flex flex-column align-items-end",children:[Object(j.jsx)("h2",{children:"Cart Total"}),Object(j.jsxs)("h1",{children:["$",n]}),Object(j.jsx)(i,{})]})]})})};var g=function(e){Object(s.useEffect)((function(){i()}));var t=Object(s.useState)({}),c=Object(l.a)(t,2),n=c[0],a=c[1],i=function(){var t=e.match.params.id,c=m.find((function(e){return e.path===t}));a(c)};return Object(j.jsxs)("div",{className:"prod d-flex justify-content-start align-items-center flex-grow-1",children:[Object(j.jsx)("img",{alt:n.name,src:n.image,className:"prod-img"}),Object(j.jsxs)("div",{className:"prod-det d-flex flex-column m-auto",children:[Object(j.jsx)("h1",{children:n.name}),Object(j.jsx)("p",{children:n.description}),Object(j.jsxs)("p",{children:["$",n.price]}),Object(j.jsx)(o.b,{to:"/cart",children:Object(j.jsx)("button",{onClick:function(){e.setCart([].concat(Object(f.a)(e.cart),[n]))},className:"btn btn-dark p-3 fs-6 text-uppercase",children:"add to cart"})})]})]})},N=c(3);var v=function(){return Object(j.jsxs)("div",{className:"checkout d-flex flex-column flex-grow-1 align-items-center justify-content-center",children:[Object(j.jsx)("h1",{className:"text-white fw-bold display-3",children:"Checkout"}),Object(j.jsx)("p",{className:"text-white fw-lighter fs-6 p-2",children:"Payments not accepted at this time."}),Object(j.jsx)(o.b,{to:"/cart",children:Object(j.jsx)("button",{className:"btn btn-light p-3 my-2 fs-6 text-uppercase",children:"back"})})]})};var w=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("div",{className:"app d-flex flex-column",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(h,{cart:c}),Object(j.jsxs)(N.c,{children:[Object(j.jsx)(N.a,{path:"/",exact:!0,component:d}),Object(j.jsx)(N.a,{path:"/about",component:p}),Object(j.jsx)(N.a,{path:"/shop",exact:!0,component:u}),Object(j.jsx)(N.a,{path:"/cart",render:function(){return Object(j.jsx)(O,{cart:c,setCart:n})}}),Object(j.jsx)(N.a,{path:"/shop/:id",render:function(e){return Object(j.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{cart:c,setCart:n}))}}),Object(j.jsx)(N.a,{path:"/checkout",exact:!0,component:v})]})]})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.61ac039f.chunk.js.map