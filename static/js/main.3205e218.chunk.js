(this["webpackJsonpapi-frontend-project"]=this["webpackJsonpapi-frontend-project"]||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(11),c=t.n(n),r=t(12),m=t(13),i=t(16),o=t(15);function u(){return s.a.createElement("section",{className:"hero is-info"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("figure",{className:"center"},s.a.createElement("h1",{className:"has-text-primary"},"A"),s.a.createElement("h3",null,"nimated"),s.a.createElement("h1",{className:"has-text-primary"},"P"),s.a.createElement("h3",null,"eople"),s.a.createElement("h1",{className:"has-text-primary"},"I"),s.a.createElement("h3",null,"nitiative")))))}function d(e){var a=e.name,t=e.age,l=e.bio,n=e.link,c=e.likes,r=e.dislikes,m=(e.skills,e.animeName),i=e.url;return s.a.createElement("article",{className:"media notification is-danger"},s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("img",{src:n,className:"image is-256x256",alt:""}),s.a.createElement("h1",{className:"is-size-4"},a),s.a.createElement("p",{className:"is-size-5"},"Age: ",t),s.a.createElement("div",{className:"field is-grouped is-primary"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-primary"},s.a.createElement("span",{className:"icon is-small has-text-white-ter"},s.a.createElement("i",{className:"fas fa-heart"})))),s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-primary"},"More Info"))),s.a.createElement("div",{className:"level mt-2"},s.a.createElement("div",{className:"field is-grouped level-left mt-3"},s.a.createElement("p",{className:"control is-size-7"},"Likes: ",c),s.a.createElement("p",{className:"control is-size-7"},"Dislikes: ",r," ")),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"buttons has-addons level-right"},s.a.createElement("button",{className:"button is-primary is-small"},s.a.createElement("span",{className:"icon is-small has-text-success"},s.a.createElement("i",{className:"fas fa-thumbs-up"}))),s.a.createElement("button",{className:"button is-primary is-small"},s.a.createElement("span",{className:"icon is-small has-text-danger-dark"},s.a.createElement("i",{className:"fas fa-thumbs-down"})))))))),s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-card"},s.a.createElement("header",{className:"modal-card-head has-background-danger"},s.a.createElement("p",{className:"modal-card-title"},a)),s.a.createElement("section",{className:"modal-card-body has-text-black"},s.a.createElement("p",null,s.a.createElement("b",null,"Bio: "),l),s.a.createElement("p",null,s.a.createElement("b",null,"Anime Name: "),m),s.a.createElement("p",null,s.a.createElement("b",null,"URL: "),i)),s.a.createElement("footer",{className:"modal-card-foot has-background-danger"},s.a.createElement("button",{className:"button"},"Close")))))}var h=t(14),E=t.n(h),N=(t(39),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this)).state={characters:[]},l}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://lexleach-api-project.herokuapp.com/characters").then((function(e){return e.json()})).then((function(a){console.log("=========================="),console.log(a),console.log("=========================="),e.setState({characters:a})})).catch((function(e){console.log("Something went wrong!")}))}},{key:"createCharacter",value:function(e){E()({method:"post",url:"https://lexleach-api-project.herokuapp.com/characters",data:{name:"",age:0,bio:"",skills:[{name:"",description:""},{name:"",description:""}],animeName:"",url:"",image:"",favorited:!0,likes:0,dislikes:0}}).then((function(e){console.log(e)})),alert("New Character Created!")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u,null),s.a.createElement("section",{className:"section has-background-white"},s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"field level-left has-background-white"},s.a.createElement("input",{id:"switch",type:"checkbox",name:"switch",className:"switch is-success is-small"}),s.a.createElement("label",{htmlFor:"switch"},"Dark Mode")),s.a.createElement("button",{className:"button level-right is-primary"},"Create Character")),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns is-multiline is-vcentered"},this.state.characters.map((function(e){return s.a.createElement("div",{className:"column is-one-third",key:e._id},s.a.createElement(d,{link:e.image,name:e.name,age:e.age,bio:e.bio,skills:e.skills,likes:e.likes,dislikes:e.dislikes,animeName:e.animeName,url:e.url}))}))))))}}]),t}(l.Component));c.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3205e218.chunk.js.map