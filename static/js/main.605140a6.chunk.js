(this["webpackJsonpinstagram-ui"]=this["webpackJsonpinstagram-ui"]||[]).push([[0],{148:function(e,t,a){e.exports=a(303)},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(59),s=a.n(c),i=(a(153),a(154),a(11)),r=a(12),o=a(14),m=a(13),u=a(15),d=(a(155),a(43)),h=a(307),p=a(308),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Header"},l.a.createElement(h.a,{bg:"light",expand:"lg"},l.a.createElement(h.a.Brand,{href:"/"},l.a.createElement("img",{src:"https://www.goddess-c.com/assets/images/marketing/instagram/2475.new-instagram-text-logo.png",style:{height:"40px"}})),l.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto"},l.a.createElement(d.b,{className:"navbar-link",to:"/profile"},"Profile"),l.a.createElement(d.b,{className:"navbar-link",to:"/post/create"},"New Post")))))}}]),t}(n.Component),g=(a(161),a(162),a(142)),b=a.n(g),f=(a(164),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"TagList"},this.props.tags.map((function(e,t){return l.a.createElement("div",{className:"tag",key:t}," #",e)})))}}]),t}(n.Component)),v=a(30),N=a(67),k=a(68),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={like:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"likePost",value:function(){this.setState({like:!this.state.like})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Post"},l.a.createElement("div",{className:"card"},l.a.createElement("article",null,l.a.createElement("header",{className:"header"},l.a.createElement("span",null,this.props.id),l.a.createElement("div",null,l.a.createElement(v.a,{icon:k.c,className:"icon-user"}))),l.a.createElement("img",{src:this.props.url,className:"card-img-top",onDoubleClick:this.likePost.bind(this),alt:"..."}),l.a.createElement("div",{className:"post-actions"},l.a.createElement("span",{className:"number-likes"},this.props.likes," likes"),l.a.createElement("div",{className:"actions-icons"},l.a.createElement("div",{className:"like",onClick:this.likePost.bind(this)},this.state.like?l.a.createElement(v.a,{icon:k.b,className:"icon"}):l.a.createElement(v.a,{icon:N.b,className:"icon"})),l.a.createElement("div",{className:"comment"},l.a.createElement(v.a,{icon:N.c,className:"icon"})),l.a.createElement("div",{className:"share"},l.a.createElement(v.a,{icon:N.a,className:"icon"})))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text-title"},this.props.title),l.a.createElement(f,{tags:this.props.tags}),l.a.createElement("small",{className:"text-muted"},"Last updated ",l.a.createElement(v.a,{icon:k.a,className:"icon-time"}),l.a.createElement(b.a,{format:" HH:MM - MMM DD",unix:!0},this.props.time))))))}}]),t}(n.Component),O=a(143),y=a.n(O),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],loading:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t,loading:!1})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"Feed"},l.a.createElement("div",{className:"loading"},this.state.loading?l.a.createElement("div",null,l.a.createElement(y.a,{sizeUnit:"px",color:"#ff6377",size:50,margin:2,loading:this.state.loading}),l.a.createElement("div",null,"Loading...")):null),l.a.createElement("div",{className:"container"},this.state.posts.map((function(e){return l.a.createElement(j,{url:e.image,id:e.id,title:e.title,likes:e.likes,tags:e.tags,time:Number(e.created)})}))))}}]),t}(n.Component),w=(a(171),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Profile"},"Profile")}}]),t}(n.Component)),P=a(24),x=a(306),S=a(305),M=(a(172),a(21)),F=a(47),G=F.object().shape({title:F.string().min(2).max(255).required("What is your title? need help?\ud83d\ude0f"),image:F.mixed().required("You must choose a picture to upload!\ud83d\ude31"),tags:F.mixed().notRequired()}),L=a(146),T=a.n(L),D=(a(301),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={tags:[],toggle:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({tags:e})}},{key:"showComment",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"CreatePost"},l.a.createElement("h1",null,"Create Post \ud83d\udcf8"),l.a.createElement(M.d,{initialValues:{image:"",title:"",tags:""},validationSchema:G},l.a.createElement(M.c,{className:"col-xs-12 col-sm-6"},l.a.createElement("div",{className:"custom-file"},l.a.createElement(M.b,{name:"image",type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01"}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},"Choose your favorite image \u270c\ud83c\udffb"),l.a.createElement(M.a,{class:"alert alert-dark",name:"image",component:"div"})),l.a.createElement(x.a.Group,{controlId:"formUploadPost"},l.a.createElement(x.a.Label,{column:"false"},"Tittle"),l.a.createElement(M.b,{name:"title",className:"form-control"}),l.a.createElement(M.a,{class:"alert alert-dark",name:"title",component:"div"})),l.a.createElement(x.a.Group,{controlId:"formUploadPost"},l.a.createElement(x.a.Label,{column:"false"},"Tags"),l.a.createElement("div",{onClick:this.showComment.bind(this)},l.a.createElement(M.b,{name:"tags"},(function(){return l.a.createElement(T.a,{value:e.state.tags,onChange:e.handleChange.bind(e)})}))),this.state.toggle?l.a.createElement("div",{className:"badge badge-secondary"},"Press 'Tab' or 'Enter' to add new tag"):null,l.a.createElement(M.a,{class:"alert alert-dark",name:"tags",component:"div"})),l.a.createElement(S.a,{className:"button",type:"submit"},"Share"))))}}]),t}(n.Component));var q=function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("main",null,l.a.createElement(P.c,null,l.a.createElement(P.a,{path:"/profile"},l.a.createElement(w,null)),l.a.createElement(P.a,{path:"/post/create"},l.a.createElement(D,null)),l.a.createElement(P.a,{path:"/"},l.a.createElement(C,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[148,1,2]]]);
//# sourceMappingURL=main.605140a6.chunk.js.map