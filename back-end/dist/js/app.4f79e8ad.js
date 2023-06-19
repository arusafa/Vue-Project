(function(){"use strict";var t={426:function(t,r,e){var n=e(9242),o=e(3396);const a={class:"page-wrap"};function s(t,r,e,n,s,i){const c=(0,o.up)("NavBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{user:s.user},null,8,["user"]),(0,o._)("div",a,[(0,o.Wm)(u,{user:s.user},null,8,["user"])])],64)}var i=e(1450);const c={class:"nav-bar"},u={class:"logo-wrap"},p=["src"],d={class:"div nav-buttons-wrap"},l=(0,o._)("button",{class:"cart-button"},"Shopping Cart",-1);function g(t,r,e,n,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(i,{to:"/products",class:"products-link"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o._)("img",{src:a.logo},null,8,p)])])),_:1}),(0,o._)("div",d,[e.user?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"sign-out",onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.kq)("",!0),(0,o.Wm)(i,{to:"/cart"},{default:(0,o.w5)((()=>[l])),_:1})])])}var m=e.p+"img/logo-hexagon.d2768201.svg",v={name:"NavBar",props:["user"],data(){return{logo:m}},methods:{async signOut(){const t=(0,i.v0)();await(0,i.w7)(t),alert("You have been signed out")}}},h=e(89);const f=(0,h.Z)(v,[["render",g]]);var w=f,y={name:"App",components:{NavBar:w},data(){return{user:null}},created(){const t=(0,i.v0)();(0,i.Aj)(t,(t=>{this.user=t}))}};const b=(0,h.Z)(y,[["render",s]]);var k=b,I=e(2483);const _=(0,o._)("h1",null,"My Shopping Cart",-1),C={key:0},D=(0,o._)("button",{class:"checkout-button"},"Proceed to Checkout",-1),P={key:1},S=(0,o._)("h3",null,"There are no items in your cart",-1),Z=[S];function O(t,r,e,n,a,s){const i=(0,o.up)("ShoppingCartList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[_,a.cartItems.length>0?((0,o.wg)(),(0,o.iD)("div",C,[(0,o.Wm)(i,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),D])):(0,o.kq)("",!0),0===a.cartItems.length?((0,o.wg)(),(0,o.iD)("div",P,Z)):(0,o.kq)("",!0)],64)}var $=e(7139);const j=["src"],F={class:"details-wrap"},N=["onClick"];function U(t,r,e,n,a,s){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(r=>((0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:r.id},[(0,o._)("img",{class:"product-image",src:r.imageUrl},null,8,j),(0,o._)("div",F,[(0,o._)("h3",null,(0,$.zw)(r.name),1),(0,o._)("p",null,(0,$.zw)(r.price),1)]),(0,o._)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,N)])))),128)}var W={name:"ShoppingCartList",props:["products"]};const q=(0,h.Z)(W,[["render",U]]);var x=q,z=e(4161),A={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:x},data(){return{cartItems:[]}},watch:{async user(t){if(t){const r=await z.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async removeFromCart(t){const r=await z.Z.delete(`/api/users/${this.user.uid}/cart/${t}`),e=r.data;this.cartItems=e}},async created(){if(this.user){const t=await z.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const L=(0,h.Z)(A,[["render",O]]);var Y=L;const B=(0,o._)("h1",null,"Products",-1);function T(t,r,e,n,a,s){const i=(0,o.up)("ProductsList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[B,(0,o.Wm)(i,{products:a.products},null,8,["products"])],64)}const H={class:"grid-wrap"},E=["src"],K={class:"product-name"},M={class:"product-price"},R=(0,o._)("button",null,"View Details",-1);function X(t,r,e,n,a,s){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:t.id},[(0,o._)("img",{src:t.imageUrl},null,8,E),(0,o._)("h3",K,(0,$.zw)(t.name),1),(0,o._)("p",M,(0,$.zw)(t.price),1),(0,o.Wm)(i,{to:/products/+t.id},{default:(0,o.w5)((()=>[R])),_:2},1032,["to"])])))),128))])}var J={name:"ProductsList",props:["products"]};const Q=(0,h.Z)(J,[["render",X]]);var V=Q,G={name:"ProductsPage",components:{ProductsList:V},data(){return{products:[]}},async created(){const t=await z.Z.get("/api/products"),r=t.data;this.products=r}};const tt=(0,h.Z)(G,[["render",T]]);var rt=tt;const et={key:0},nt={class:"img-wrap"},ot=["src"],at={class:"product-details"},st={class:"price"},it={key:1,class:"grey-button"},ct={key:1};function ut(t,r,e,n,a,s){const i=(0,o.up)("NotFoundPage");return a.product?((0,o.wg)(),(0,o.iD)("div",et,[(0,o._)("div",nt,[(0,o._)("img",{src:a.product.imageUrl},null,8,ot)]),(0,o._)("div",at,[(0,o._)("h1",null,(0,$.zw)(a.product.name),1),(0,o._)("h3",st,(0,$.zw)(a.product.price),1),e.user&&!s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,o.kq)("",!0),e.user&&s.itemIsInCart?((0,o.wg)(),(0,o.iD)("button",it,"Item is already in cart")):(0,o.kq)("",!0),e.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:2,class:"sign-up",onClick:r[1]||(r[1]=(...t)=>s.signUp&&s.signUp(...t))},"Sign up")),e.user?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:3,class:"login",onClick:r[2]||(r[2]=(...t)=>s.login&&s.login(...t))},"Login"))])])):((0,o.wg)(),(0,o.iD)("div",ct,[(0,o.Wm)(i)]))}function pt(t,r,e,n,a,s){return(0,o.wg)(),(0,o.iD)("h1",null,"404: Page Not Found")}var dt={name:"NotFoundPage"};const lt=(0,h.Z)(dt,[["render",pt]]);var gt=lt,mt={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(t){const r=await z.Z.get(`/api/users/${t.uid}/cart`),e=r.data;this.cartItems=e}}},methods:{async addToCart(){await z.Z.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")},async signIn(){const t=prompt("Please enter your email to sign in:"),r=(0,i.v0)(),e={url:`https://vue-project-e4cn.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,i.oo)(r,t,e),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)},async signUp(){const t=(0,i.v0)(),r=prompt("Please enter your email to sign up:"),e=prompt("Please enter your password to sign up:");try{await(0,i.Xb)(t,r,e),alert("Successfully signed up!")}catch(n){alert(`Error in sign up: ${n.message}`)}},async login(){const t=(0,i.v0)(),r=prompt("Please enter your email to login:"),e=prompt("Please enter your password to login:");try{await(0,i.e5)(t,r,e),alert("Successfully logged in!")}catch(n){alert(`Error in login: ${n.message}`)}}},components:{NotFoundPage:gt},async created(){const t=(0,i.v0)();if((0,i.JB)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,i.P6)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await z.Z.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await z.Z.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}}};const vt=(0,h.Z)(mt,[["render",ut]]);var ht=vt,ft=e(7795);const wt={apiKey:"AIzaSyAgKSFoavtXNNjk-urgDmxYybaQlUEBsvU",authDomain:"vue-prj-24fb9.firebaseapp.com",projectId:"vue-prj-24fb9",storageBucket:"vue-prj-24fb9.appspot.com",messagingSenderId:"846090692784",appId:"1:846090692784:web:6efdf39a01bca7b6ee3375"};(0,ft.ZF)(wt),(0,n.ri)(k).use(I.p7({history:I.PO("/"),routes:[{path:"/cart",component:Y},{path:"/products",component:rt},{path:"/products/:productId",component:ht},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:gt}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(p=0;p<t.length;p++){n=t[p][0],o=t[p][1],a=t[p][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(p--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],i=n[1],c=n[2],u=0;if(s.some((function(r){return 0!==t[r]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(c)var p=c(e)}for(r&&r(n);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(426)}));n=e.O(n)})();
//# sourceMappingURL=app.4f79e8ad.js.map