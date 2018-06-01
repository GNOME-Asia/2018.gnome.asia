webpackJsonp([0],{"1ngM":function(t,e){},AQny:function(t,e){t.exports={Nav:{home:"Home",apply:"Apply",agenda:"Agenda",news:"News",community:"Community",thanks:"Thanks",aboutUs:"About us",lang:"Language"},About:{news:"News",aboutp1:"GNOME.Asia Summit is the featured annual GNOME Conference in Asia. The event focuses primarily on the GNOME desktop, but also covers applications and the development platform tools. It brings together the GNOME community in Asia to provide a forum for users, developers, foundation leaders, governments and businesses to discuss the present technology and future developments.GNOME.Asia Summits have been held in Beijing, Ho-Chi-Minh City, Taipei, Bangalore, Hong Kong, Seoul, Beijing, Depok, New Delhi, Chongqing respectively over the last ten years.",hoping:"Our vision of SOSCON",hopingp1:"SOSCON 2018 will be held in hot Chongqing from June 9-10, 2018. Students from all over the country will gather together. It must be a feast for technology and reflection!",hopingp2:"We also hope that the community formed by SOSCON will be a long-term stage, active in various places, and become a platform for students to exchange technology and open discussions, so that the concept of open source can thrive in the student community.",hopingp3:"During the conference, students are expected to actively communicate, let students stand on the stage, demonstrate the ideas born in the laboratory, share the passion contained in the code, and talk about the future of open source concepts. It is also expected that the participants will continue to exert their influence and allow more people around to contribute to open source.",time:"Meeting Time",time1:"August 11 and 12, 2018(Sat & Sun)",place:"Meeting Location:",place1:"National Taiwan University of Science and Technology",bottom1:"Imagine the future and embrace open source",bottom2:"Contact Us: soscon@openingsource.org",map:"Bigger Map"},AboutUs:{about:"List of staff",about1:"SOSCON's Event General Coordinator",about2:"Design team",about3:"Director team",about4:"Development team",about5:"Administrative team",contactWay:"Contact way",footer1:"Imagine the future and embrace open source",contact:"Contact Us: soscon@openingsource.org",footer:"Students Open Source Conference",email:"Official email",email1:"SOSCON's Event General Coordinator",email2:"Administrative team",email3:"Design team",email4:"Director team",email5:"Development team"},Apply:{cfp:"Call Fro Proposal",summit:"Summit your proposal",info:"Important Information",deadline:"Submission deadline：",deadline1:"2018-5-25",notification:"Notification of acceptance：",notification1:"2018-06-01 until 2018-06-05",agenda:"Full programme published：",agenda1:"Early July",date:"Conference Date：",date1:"Aug 11th – 12th , 2018",location:"Venue：",location1:"National Taiwan University of Science and Technology, Taipei, Taiwan",applyInfo1:"Possible topics include, but are not limited to",list0:"Contributing to GNOME",list1:"Latest developments",list2:"Writing applications for GNOME 3",list3:"UI design",list4:"QA and testing",list5:"Accessibility",list6:"Human Interface Engineering (Icons and Graphic Design)",list7:"Marketing/Engagement",list8:"Asia success stories / Local GNOME Projects",list9:"GNOME and Education",list10:"FOSS outreach programs, including Google Summer of Code",list11:"Developing GNOME on mobile devices (smart phones, tablets)",list12:"Developing GNOME on embedded systems or open hardware",linux:"Contributing to Linux and F/LOSS",olist1:"Linux kernel and development",olist2:"The development and promotion of open-source operating systems",olist3:"About Debian, Fedora, openSUSE, Ubuntu, FreeBSD, and other distributions",olist4:"The development and promotion of other open-source projects",story:"Open Source Enlightenment and Related Story",olist5:"Open Source stories of your own",olist6:"How to engage more female contributors in Open Source Projects",olist7:"How to optimize the process and  improve efficiency with the help of open-source tools",emerging:"Emerging Technologies",olist8:"Artificial Intelligence、Deep Learning",olist9:"AR & VR",olist10:"Big Data",olist11:"Distributed systems"},Community:{community:"Joint founding community",community1:"Cooperative community",media:"Cooperative Media",foot:"Imagine the future and embrace open source",contactus:"Contact Us: soscon@openingsource.org",foot1:"Students Open Source Conference"}}},FFh0:function(t,e){},H7sP:function(t,e,i){t.exports=i.p+"static/img/background.8f1fe13.jpg"},M4kl:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={props:["id"],methods:{switchLanguage(t){localStorage.lang=t,this.$i18n.locale=t,window.location.reload()}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"dropdown-content tit1",attrs:{id:t.id}},[i("li",[i("a",{on:{click:function(){return t.switchLanguage("en")}}},[t._v("English")])]),t._v(" "),i("li",[i("a",{on:{click:function(){return t.switchLanguage("zhCHS")}}},[t._v("简体中文")])]),t._v(" "),i("li",[i("a",{on:{click:function(){return t.switchLanguage("zhCHT")}}},[t._v("繁体中文")])])])},staticRenderFns:[]},n={components:{"language-switcher":i("VU/8")(s,o,!1,null,null,null).exports},name:"nav",props:["name"],methods:{open1(){$("#modalLogin").modal("open")},open(){$(".modal").modal(),$("#modalRegister").modal("open")},closeNav(){$(".sidenav").sidenav("close")}},mounted(){$(".dropdown-trigger").dropdown(),$(".modal").modal()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("language-switcher",{attrs:{id:"dropdown1"}}),t._v(" "),i("nav",{staticClass:"title1"},[i("div",{staticClass:"nav-wrapper"},[i("router-link",{staticClass:"brand-logo",staticStyle:{"margin-left":"3%"},attrs:{to:"/"}},[t._v("GNOME.Asia"),i("span",{staticStyle:{color:"#66ccff"}},[t._v(" 2018 Summit")])]),t._v(" "),i("router-link",{staticClass:"sidenav-trigger",attrs:{to:"","data-target":"mobile-demo"}},[i("i",{staticClass:"material-icons"},[t._v("menu")])]),t._v(" "),i("ul",{staticClass:"right hide-on-med-and-down",staticStyle:{"margin-right":"3%"}},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("Nav.home")))])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"apply"}},[t._v(t._s(t.$t("Nav.apply")))])],1),t._v(" "),i("li",{staticClass:"t1"},[i("router-link",{attrs:{to:""}},[t._v(t._s(t.$t("Nav.agenda")))])],1),t._v(" "),i("li",{staticClass:"t1"},[i("router-link",{attrs:{to:""}},[t._v(t._s(t.$t("Nav.news")))])],1),t._v(" "),i("li",{staticClass:"t1"},[i("router-link",{attrs:{to:""}},[t._v(t._s(t.$t("Nav.thanks")))])],1),t._v(" "),i("li",[i("a",{staticClass:"dropdown-trigger",attrs:{"data-target":"dropdown1"}},[t._v(t._s(t.$t("Nav.lang"))),i("i",{staticClass:"material-icons right"},[t._v("arrow_drop_down")])])])])],1)]),t._v(" "),i("language-switcher",{attrs:{id:"dropdown2"}}),t._v(" "),i("ul",{staticClass:"sidenav",attrs:{id:"mobile-demo"}},[i("li",{on:{click:t.closeNav}},[i("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("Nav.home")))])],1),t._v(" "),i("li",{on:{click:t.closeNav}},[i("router-link",{attrs:{to:"/apply"}},[t._v(t._s(t.$t("Nav.apply")))])],1),t._v(" "),i("li",[i("router-link",{staticClass:"t1",attrs:{to:""}},[t._v(t._s(t.$t("Nav.agenda")))])],1),t._v(" "),i("li",[i("router-link",{staticClass:"t1",attrs:{to:""}},[t._v(t._s(t.$t("Nav.news")))])],1),t._v(" "),i("li",{staticClass:"t3",on:{click:t.closeNav}},[i("router-link",{attrs:{to:"/community"}},[t._v(t._s(t.$t("Nav.community")))])],1),t._v(" "),i("li",[i("router-link",{staticClass:"t1",attrs:{to:""}},[t._v(t._s(t.$t("Nav.thanks")))])],1),t._v(" "),i("li",[i("a",{staticClass:"dropdown-trigger",attrs:{"data-target":"dropdown2"}},[t._v(t._s(t.$t("Nav.lang"))),i("i",{staticClass:"material-icons right"},[t._v("arrow_drop_down")])])])])],1)},staticRenderFns:[]};var r=i("VU/8")(n,l,!1,function(t){i("bG+r")},"data-v-471718c2",null).exports,c=navigator.language;console.log(c),console.log(navigator.language),localStorage.lang||(localStorage.lang=c&&"zh-CN"!=c?"zh-HK"==c||"zh-TW"==c?"zhCHT":"en":"zhCHS");var v={name:"App",components:{Nav:r},data:()=>({transitionName:"fade",name:"none"}),methods:{Login(t){this.name=t}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("transition",{attrs:{name:this.transitionName}},[e("router-view",{staticClass:"child-view"})],1)],1)},staticRenderFns:[]};var p=i("VU/8")(v,m,!1,function(t){i("v6QL")},null,null).exports,_=i("/ocq"),u={name:"about",data:()=>({center:{lng:0,lat:0},zoom:3,aboutUsWidth:"100px"}),computed:{w_screen:function(){return document.documentElement.clientWidth},mapWidth:function(){return this.w_screen/1.26+"px"}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{width:"80%",margin:"0 auto"}},[i("div",[i("div",{staticStyle:{display:"inline-block","text-align":"center","margin-top":"135px"}},[i("h4",{staticStyle:{"background-color":"black",color:"white",padding:"20px 20px"}},[t._v(t._s(t.$t("About.news")))])]),t._v(" "),i("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")]),t._v(" "),i("p",{staticStyle:{"font-weight":"600","font-size":"medium",color:"gray"}},[t._v("May 18, 2018")]),t._v(" "),i("a",{staticStyle:{"font-weight":"600","font-size":"large"},attrs:{href:"https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/"}},[t._v("GNOME.Asia Summit 2018 Call for Papers deadline is 5/25")]),t._v(" "),i("p",[t._v("Call for paper will be closed in 7 days.A standard session will be scheduled for 45 mins (35 mins talk + 10 mins Q&A). The session could be a technical talk, panel discussion, or BOF. If you need more time or additional resources, feel free to get in touch with the organizing team.\n        ")]),t._v(" "),i("p",{staticStyle:{"font-weight":"600","font-size":"medium",color:"gray"}},[t._v("April 27, 2018")]),t._v(" "),i("a",{staticStyle:{"font-weight":"600","font-size":"large"},attrs:{href:"https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/"}},[t._v("GNOME.Asia Summit 2018 Call for Papers is now open")]),t._v(" "),t._m(0)]),t._v(" "),i("div",[t._m(1),t._v(" "),i("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")]),t._v(" "),i("p",{staticStyle:{"font-weight":"600","font-size":"large"}},[t._v("GNOME.Asia")]),t._v(" "),i("p",[t._v(t._s(t.$t("About.aboutp1"))+"\n      ")])]),t._v(" "),i("div",[i("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")]),t._v(" "),i("p",{staticStyle:{"font-weight":"700","font-size":"large",display:"inline","margin-right":"20px"}},[t._v(t._s(t.$t("About.time"))+"："),i("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.$t("About.time1")))])]),t._v(" "),i("p",{staticStyle:{"font-weight":"700","font-size":"large",display:"inline"}},[t._v(t._s(t.$t("About.place"))+":"),i("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.$t("About.place1")))])])]),t._v(" "),i("div",{staticStyle:{"margin-top":"2%","margin-bottom":"50px"}},[i("iframe",{staticStyle:{border:"1px solid black"},attrs:{width:t.mapWidth,height:"500",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://www.openstreetmap.org/export/embed.html?bbox=121.53814034674727%2C25.01024013321245%2C121.54543595526778%2C25.01676397022128&layer=mapnik"}}),i("br"),i("small",[i("a",{attrs:{href:"https://www.openstreetmap.org/#map=17/25.01350/121.54179&layers=N"}},[t._v(t._s(t.$t("About.map")))])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GNOME.Asia Summit 2018 invites proposals for presentations at the conference. GNOME.Asia Summit is the featured annual GNOME conference in Asia. It focuses primarily on the GNOME desktop, but also covers applications and the platform development tools. The summit brings together the GNOME community in Asia to provide a forum for users, developers, foundation leaders, governments \n        "),e("a",{attrs:{href:"https://www.gnome.org/news/2018/04/gnome-asia-summit-2018-call-for-papers-is-now-open/"}},[this._v("[…]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block","text-align":"center","margin-top":"135px"}},[e("h4",{staticStyle:{"background-color":"black",color:"white",padding:"20px 20px"}},[this._v("GNOME.Asia"),e("span",{staticStyle:{color:"#66ccff"}},[this._v(" 2018")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"80%",left:"0",right:"0",margin:"50px auto 10px auto",overflow:"hidden"}},[i("span",{staticClass:"foot",staticStyle:{"margin-left":"10px"}},[t._v("Attending us")]),t._v(" "),i("span",{staticClass:"foot",staticStyle:{"margin-left":"10px"}},[t._v("Follow us")]),t._v(" "),i("span",{staticClass:"foot"},[t._v("About us")]),t._v(" "),i("hr",{staticStyle:{clear:"both"}}),t._v(" "),i("span",{staticStyle:{"font-size":"small",color:"gray"}},[t._v("Copyright © 2018 GNOME.Asia Summit")]),t._v(" "),i("i",{staticClass:"iconfont icon",staticStyle:{"margin-left":"10px"}},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont icon",staticStyle:{"margin-left":"10px"}},[t._v("")]),t._v(" "),i("i",{staticClass:"iconfont icon"},[t._v("")])])}]};var h=i("VU/8")(u,d,!1,function(t){i("VFgN")},"data-v-0ccdea24",null).exports,g={name:"homeImage",computed:{lang:function(){return localStorage.lang},title:function(){return"zhCHS"===this.lang?"homeTitle":"en"===this.lang?"enHomeTitle":"twHomeTitle"}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.title},["zhCHS"===this.lang?e("a",{staticClass:"homeButton1",attrs:{href:"#about"}}):"en"===this.lang?e("a",{staticClass:"enHomeButton1",attrs:{href:"#about"}}):e("a",{staticClass:"twHomeButton1",attrs:{href:"#about"}}),this._v(" "),"zhCHS"===this.lang?e("router-link",{staticClass:"homeButton2",attrs:{to:"/apply"}}):"en"===this.lang?e("router-link",{staticClass:"enHomeButton2",attrs:{to:"/apply"}}):e("router-link",{staticClass:"twHomeButton2",attrs:{to:"/apply"}})],1)},staticRenderFns:[]};var C={name:"home",components:{homeImage:i("VU/8")(g,f,!1,function(t){i("1ngM")},"data-v-900cf7e8",null).exports,About:h},computed:{h_screen:function(){return document.documentElement.clientHeight},h1:function(){return this.h_screen+"px"},h2:function(){return this.h_screen+"px"}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"pic1",style:{height:this.h1}},[e("home-image")],1),this._v(" "),e("About",{style:{height:this.h2},attrs:{id:"about"}})],1)},staticRenderFns:[]};var b=i("VU/8")(C,y,!1,function(t){i("ojS7")},"data-v-3e9a0658",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about1"},[i("div",{staticClass:"about"},[i("div",[i("h4",[t._v("关于我们")]),t._v(" "),i("p",[t._v("————")]),t._v(" "),i("p",[t._v("SOSON全称是学生开源年会 ( Student Open Source Conference )是中国大陆首届面向学生的开源会议，讲者，工作人员，听众几乎全为学生，畅想未来，我们学生更有感觉。")])]),t._v(" "),i("div",[i("h4",[t._v("联系我们")]),t._v(" "),i("p",[t._v("————")]),t._v(" "),i("p",[t._v("总召: 刘煜民"),i("br"),t._v("Email: lbb@openingsource.org")])]),t._v(" "),i("div",[i("h4",[t._v("关注我们")]),t._v(" "),i("p",[t._v("————")]),t._v(" "),i("p",[t._v("Offical Website SOSCON.top"),i("br"),t._v("Offical Email soscon@openingsource.org"),i("br"),t._v("Telegram Group https://t.me/soscon")])]),t._v(" "),i("hr"),t._v(" "),i("p",{staticStyle:{"font-size":"smaller",color:"gray"}},[t._v("畅想未来，拥抱开源。Copyleft@2018学生开源年会 SOSCON.top")])])])}]};var S=i("VU/8")({name:"aboutUs"},w,!1,function(t){i("M4kl")},"data-v-cb15a160",null).exports;let N=window.screen.height;var A={name:"apply",methods:{openModal(t){$(".modal").modal(),$(`#modal${t}`).modal("open")},sub(){$.ajax({method:"post",url:"/account/register",data:$("#form1").serialize()}).done(function(t){"提交成功"!==t.result?swal({text:t.result,type:"error",timer:2e3}):(swal({text:t.result,type:"success",timer:3e3}),$("#form1")[0].reset())})}},computed:{h1:()=>(console.log(N+"px"),N+"px")}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticStyle:{width:"100%",position:"fixed"},style:{height:t.h1},attrs:{src:i("H7sP")}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"baoming"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("div",{staticClass:"icon-block second applyContainer"},[t._m(0),t._v(" "),a("h3",{staticClass:"center"},[t._v(t._s(t.$t("Apply.cfp")))]),t._v(" "),a("div",[a("a",{staticClass:"waves-effect waves-light btn modal-trigger back1 center",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfKnffsc_Ke2ZEP3fInJkAwEzXFUM24HZ7dYYluoGLmHMQjZw/viewform"}},[t._v("\n                "+t._s(t.$t("Apply.summit"))+"\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"40px"}},[a("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")]),t._v(" "),a("h5",{staticClass:"center"},[t._v(t._s(t.$t("Apply.info")))]),t._v(" "),a("ul",{staticClass:"collection"},[a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(t._s(t.$t("Apply.deadline"))+" "+t._s(t.$t("Apply.deadline1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(t._s(t.$t("Apply.notification"))+" "+t._s(t.$t("Apply.notification1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(t._s(t.$t("Apply.agenda"))+" "+t._s(t.$t("Apply.agenda1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(t._s(t.$t("Apply.date"))+" "+t._s(t.$t("Apply.date1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(t._s(t.$t("Apply.location"))+" "+t._s(t.$t("Apply.location1")))])]),t._v(" "),a("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")]),t._v(" "),a("h5",{staticClass:"center"},[t._v("\n              "+t._s(t.$t("Apply.applyInfo1"))+"\n            ")]),t._v(" "),a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h6",[t._v(t._s(t.$t("Apply.list0")))])]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list2")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list3")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list4")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list5")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list6")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list7")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list8")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list9")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list10")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list11")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.list12")))])]),t._v(" "),a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h6",[t._v(" "+t._s(t.$t("Apply.linux"))+" ")])]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist1")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist2")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist3")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist4")))])]),t._v(" "),a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h6",[t._v(" "+t._s(t.$t("Apply.story"))+" ")])]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist5")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist6")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist7")))])]),t._v(" "),a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h6",[t._v(" "+t._s(t.$t("Apply.emerging"))+" ")])]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist8")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist9")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist10")))]),t._v(" "),a("li",{staticClass:"collection-item"},[a("i",{staticClass:"large material-icons "},[t._v("chevron_right")]),t._v(" "+t._s(t.$t("Apply.olist11")))])]),t._v(" "),a("p",{staticStyle:{"font-weight":"700","font-size":"x-large"}},[t._v("————")])])])])])])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"modal modal-fixed-footer",staticStyle:{"box-shadow":"black 0px 0px 5px 1px"},attrs:{id:"modal2"}},[a("form",{attrs:{id:"form1"}},[t._m(2),t._v(" "),a("div",{staticClass:"modal-footer"},[a("input",{staticClass:"btn waves-effect waves-light",attrs:{type:"button",value:"提交"},on:{click:t.sub}})])])]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"center brown-text"},[e("i",{staticClass:"material-icons co1"},[this._v("perm_camera_mic")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal",staticStyle:{"box-shadow":"black 0px 0px 5px 1px"},attrs:{id:"modal1"}},[e("div",{staticClass:"modal-content"},[e("p",[this._v("尚未开始")])]),this._v(" "),e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"modal-action modal-close waves-effect waves-green btn-flat",attrs:{href:"#!"}},[this._v("关闭")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-content row"},[i("h5",[t._v("志愿者信息填写")]),t._v(" "),i("p",[t._v("填写志工信息。我们的负责人将会在之后的三个工作日内联系你。\n      ")]),t._v(" "),i("p",[i("span",{staticStyle:{"font-weight":"800"}},[t._v("注意：")]),t._v("我们会优先通过邮箱联系你，如果你没有收到邮件，请检查你的邮箱垃圾箱。如果三个工作日内没有收到邮件，请及时与我们取得联系。(邮箱：volhtt@gmail.com)\n      ")]),t._v(" "),i("p",{staticStyle:{color:"red"}},[t._v("*标记的为必填")]),t._v(" "),i("p"),i("div",{staticClass:"input-field col l6 s12 "},[i("i",{staticClass:"material-icons prefix"},[t._v("account_circle")]),t._v(" "),i("input",{staticClass:"validate",attrs:{id:"name",type:"text",name:"name"}}),t._v(" "),i("label",{attrs:{for:"name"}},[t._v("姓名"),i("span",{staticStyle:{color:"red"}},[t._v("*")])])]),t._v(" "),i("div",{staticClass:"input-field col l6 s12 "},[i("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),i("input",{staticClass:"validate",attrs:{id:"email",type:"email",name:"email"}}),t._v(" "),i("label",{attrs:{for:"email"}},[t._v("邮箱"),i("span",{staticStyle:{color:"red"}},[t._v("*")])])]),t._v(" "),i("div",{staticClass:"input-field col s12"},[i("i",{staticClass:"material-icons prefix"},[t._v("phone")]),t._v(" "),i("input",{staticClass:"validate",attrs:{id:"phonenumber",type:"number",name:"phonenumber"}}),t._v(" "),i("label",{attrs:{for:"phonenumber"}},[t._v("电话号码"),i("span",{staticStyle:{color:"red"}},[t._v("*")])])]),t._v(" "),i("div",{staticClass:"row"},[i("span",{staticStyle:{"font-size":"1rem"}},[t._v("愿意加入志愿者的哪些组？(多选)"),i("span",{staticStyle:{color:"red"}},[t._v("*")])]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"1"}}),i("i",[t._v("✓")]),t._v("摄影组：如果你是摄影爱好者，请用相机记录下我们的精彩瞬间。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"2"}}),i("i",[t._v("✓")]),t._v("翻译组：GNOME.Asia是面向全球学生的开源年会，如果你擅长英语交流，请不吝赐教。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"3"}}),i("i",[t._v("✓")]),t._v("场务组：负责会议筹备到正式进行期间场地的相关问题。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"4"}}),i("i",[t._v("✓")]),t._v("服务组：负责检票&发放物资，在会场帮助引导嘉宾。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"5"}}),i("i",[t._v("✓")]),t._v("放映组：负责会场的放映，帮助嘉宾准备演讲。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"6"}}),i("i",[t._v("✓")]),t._v("宣传组：负责撰写文案，联系媒体。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"7"}}),i("i",[t._v("✓")]),t._v("赞助组：负责和赞助商联系接洽。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"8"}}),i("i",[t._v("✓")]),t._v("设计组：负责设计会议用品，纪念品，舞台等。")]),i("br"),t._v(" "),i("label",{staticClass:"col "},[i("input",{attrs:{type:"checkbox",name:"teams",value:"9"}}),i("i",[t._v("✓")]),t._v("主持人：负责主持会议（仅招4人）。")]),i("br")]),t._v(" "),i("div",{staticClass:"row"},[t._v("\n        请简单介绍一下自己"),i("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{"font-size":"0.5rem","margin-bottom":"0px"}},[t._v("你可以介绍你参加过哪些志愿者活动、对哪些方面的东西感兴趣、有什么爱好、对这次开源年会有什么期待和想法…… 当然你也可以写任何你想写的内容。")]),t._v(" "),i("div",{staticClass:"input-field col s12"},[i("i",{staticClass:"material-icons prefix"},[t._v("mode_edit")]),t._v(" "),i("textarea",{staticClass:"materialize-textarea",attrs:{id:"icon_prefix2",name:"SelfIntroduction"}}),t._v(" "),i("label",{attrs:{for:"icon_prefix2"}},[t._v("自我介绍")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("i",{staticClass:"material-icons prefix"},[t._v("mode_edit")]),t._v(" "),i("textarea",{staticClass:"materialize-textarea",attrs:{id:"icon_prefix3",name:"note"}}),t._v(" "),i("label",{attrs:{for:"icon_prefix3"}},[t._v("备注")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal modal-fixed-footer",staticStyle:{"box-shadow":"black 0px 0px 5px 1px"},attrs:{id:"modal3"}},[i("div",{staticClass:"modal-content"},[i("h4",[t._v("報名演講")]),t._v(" "),i("div",{staticClass:"divider"}),t._v(" "),i("div",{staticClass:"section"},[i("h5",[t._v("投稿主题")]),t._v(" "),i("ul",[i("li",[t._v("开源贡献")]),t._v(" "),i("li",[t._v("工作经验")]),t._v(" "),i("li",[t._v("研究收获")]),t._v(" "),i("li",[t._v("其他很多技术相关方面")])])]),t._v(" "),i("div",{staticClass:"divider"}),t._v(" "),i("div",{staticClass:"section"},[i("h5",[t._v("演讲内容及要求")]),t._v(" "),i("ul",[i("li",[t._v("1.Anything about opening source. 我们鼓励任何与开源相关的演讲内容。无论你是技术大牛，社区达人或是开源初识者，我们欢迎你报名演讲，与全国大学生一同分享自己的知识、经历与想法。\n        ")]),t._v(" "),i("li",[t._v("2.演讲时长不超过40分钟，不短于20分钟。当然如果你有很棒的 idea 且渴望表现自己，不过因为时长原因不能报名演讲，那么年会中的 Lighting Talk 环节会是你的舞台。\n        ")]),t._v(" "),i("li",[t._v("3.演讲内容符合开源精神。\n        ")]),t._v(" "),i("li",[t._v("4.Enjoy yourself. 我们希望每个年会的参与者都能乐在其中，享受技术与思考的氛围。也希望作为演讲者的你能与大家分享你的快乐\n        ")])])]),t._v(" "),i("div",{staticClass:"divider"}),t._v(" "),i("div",{staticClass:"section"},[i("h5",[t._v("投稿要求")]),t._v(" "),i("ul",[i("li",[t._v("题目：必填（20字以内）")]),t._v(" "),i("li",[t._v("摘要：必填：（大致说明内容，150字以内）")]),t._v(" "),i("li",[t._v("附件：请附上程序代码，幻灯片（必要），或任何您认为有助于我们了解您的附件。")]),t._v(" "),i("li",[t._v("投稿时，请附带您的个人信息，包括电子邮箱地址，名称，联系电话或其他联系方式，以便联系。")])])]),t._v(" "),i("div",{staticClass:"divider"}),t._v(" "),i("div",{staticClass:"section"},[i("h5",[t._v("投稿方式")]),t._v(" "),i("ul",[i("li",[t._v("投稿邮箱: GNOME.Asia@openingsource.org")])])]),t._v(" "),i("div",{staticClass:"divider"}),t._v(" "),i("div",{staticClass:"section"},[i("h5",[t._v("注意事项\n      ")]),t._v(" "),i("ul",[i("li",[t._v("1.演讲内容力求是原创，如有引用，应注明出处。\n        ")]),t._v(" "),i("li",[t._v("2.任何演讲内容不得侵犯任何第三方的著作权、专利权或其它合法的法律权利。若作品或其使用的素材侵犯了他人的合法权利，由此产生的全部法律责任由该演讲者承担。")])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("a",{staticClass:"modal-action modal-close waves-effect waves-green btn-flat ",attrs:{href:"#!"}},[t._v("同意")])])])}]};var E=i("VU/8")(A,x,!1,function(t){i("FFh0")},"data-v-699da7a4",null).exports;a.a.use(_.a);var O=new _.a({mode:"history",scrollBehavior(t,e,i){if(t.hash)return{selector:t.hash}},routes:[{path:"/",name:"home",component:b,meta:{Num:0}},{path:"/aboutUs",name:"/aboutUs",component:S,meta:{Num:1}},{path:"/apply",name:"/apply",component:E,meta:{Num:1}}]}),M=i("TXmL"),G=i("AQny"),k=i.n(G),z=i("b4y2"),U=i.n(z),F=i("ZpxJ"),H=i.n(F);a.a.use(M.a);const L=new M.a({locale:localStorage.lang,messages:{en:k.a,zhCHS:U.a,zhCHT:H.a}});new a.a({el:"#app",router:O,i18n:L,components:{App:p},template:"<App/>"}),$(document).ready(function(){$(".modal").modal()})},VFgN:function(t,e){},ZpxJ:function(t,e){t.exports={Nav:{home:"首頁",apply:"報名",agenda:"議程",news:"動態",thanks:"感謝",aboutUs:"關於我們",lang:"語言",community:"社區"},About:{news:"新聞",aboutp1:"GNOME 基金會亞洲委員會在 2008 年成立，旨在通過舉辦 GNOME.Asia 亞洲峰會在亞洲地區推廣GNOME項目以及自由開源軟體的理念。GNOME.Asia 峰會與 GUADEC 峰會和 Boston 峰會一起成為了 GNOME 基金會每年的全球三大活動。此前的 GNOME.Asia 分別在北京、越南胡志明、台北、印度班加羅爾、香港和韓國首爾、印尼雅加達和重慶舉辦。",time:"舉辦時間：",time1:"2018年8月11-12日（Sat & Sun)",place:"地點：",place1:"台灣科技大學",bottom1:"暢想未來，擁抱開源",bottom2:"聯繫我們: soscon@openingsource.org",map:"查看更大的地圖"},AboutUs:{about:"工作人員名單",about1:"總召",about2:"設計組",about3:"導演組",about4:"開發組",about5:"行政組",contactWay:"聯繫方式",footer1:"暢想未來，擁抱開源",contact:"聯繫我們: soscon@openingsource.org",footer:"學生開源年會",email:"官方郵箱",email1:"總召",email2:"行政組",email3:"設計組",email4:"導演組",email5:"開發組"},Community:{community:"聯合創始社區",community1:"合作社區",media:"合作媒體",foot:"暢想未來，擁抱開源",contactus:"聯繫我們: soscon@openingsource.org",foot1:"學生開源年會"},Apply:{cfp:"招募講者",summit:"報名",info:"重要訊息",deadline:"投稿期限：",deadline1:"2018 年 5 月 25 日",notification:"投稿公佈時間：",notification1:"2018-06-01 until 2018-06-05",agenda:"日程表預定公佈時間：",agenda1:"七月上旬",date:"活動時間：",date1:"8 月 11 - 12 日",location:"舉辦地點：",location1:"臺灣科技大學",applyInfo1:"與 GNOME 有關的開發、本地化、社區運營、推廣等話題，包括但不限於：",list0:"對 GNOME 貢獻",list1:"GNOME 的最新開發動態",list2:"開發 GNOME 3 的應用",list3:"GNOME 界面設計",list4:"GNOME 測試",list5:"GNOME 輔助功能",list6:"GNOME人機界面工程（圖標和圖形設計）",list7:"GNOME 市場",list8:"亞洲成功案例或本地GNOME項目",list9:"GNOME和教育",list10:"GNOME 女性拓展計劃",list11:"在移動設備上使用和開發 GNOME (智能手機和平板)",list12:"在嵌入設備或開源硬體上使用和開發 GNOME",linux:"Contributing to Linux and F/LOSS",olist1:"Linux 內核及開發",olist2:"開源操作系統的開發、使用和技術、推廣",olist3:"Debian、Fedora、openSUSE、Ubuntu、及FreeBSD等發行版相關的話題",olist4:"其他開源項目有關的開發、使用、推廣話題",story:"Open Source Enlightenment and Related Story",olist5:"你的開源故事、如何參與開源社區、開源經歷",olist6:"女生如何更好地參與開源",olist7:"在生活及工作中如何使用開源工具改善流程與提高效率",emerging:"Emerging Technologies",olist8:"人工智慧、深度學習、機器學習相關話題",olist9:"AR/VR 虛擬顯示、增強顯示、顯示技術",olist10:"大數據",olist11:"分散式系統"}}},b4y2:function(t,e){t.exports={Nav:{home:"首页",apply:"报名",agenda:"议程",news:"动态",thanks:"感谢",aboutUs:"关于我们",community:"社区",lang:"语言"},AboutUs:{about:"工作人员名单",about1:"总召",about2:"设计组",about3:"导演组",about4:"开发组",about5:"行政组",contactWay:"联系方式",footer1:"畅想未来，拥抱开源",contact:"联系我们: soscon@openingsource.org",footer:"学生开源年会",email:"官方邮箱",email1:"总召",email2:"行政组",email3:"设计组",email4:"导演组",email5:"开发组"},Community:{community:"联合创始社区",community1:"合作社区",media:"合作媒体",foot:"畅想未来，拥抱开源",contactus:"联系我们: soscon@openingsource.org",foot1:"学生开源年会"},About:{news:"新聞",aboutp1:"GNOME 基金会亚洲委员会在 2008 年成立，旨在通过举办 GNOME.Asia 亚洲峰会在亚洲地区推广GNOME项目以及自由开源软体的理念。GNOME.Asia 峰会与 GUADEC 峰会和 Boston 峰会一起成为了 GNOME 基金会每年的全球三大活动。此前的 GNOME.Asia 分别在北京、越南胡志明、台北、印度班加罗尔、香港和韩国首尔、印尼雅加达和重庆举办。",hoping:"年会展望",hopingp1:"SOSCON 2018 将于 2018年 6 月9日-10日在火热的重庆举办，来自全国各地的学生届时将齐聚一堂，想必是一场技术与思考的饕餮盛宴！",hopingp2:"我们也希望SOSCON所聚集而成的社群会作为一个长期的舞台，活跃在各地，成为学生交流技术、开放讨论的平台，使得开源理念能够在学生群体中茁壮成长。",hopingp3:"会议期间希望学生能积极交流，让学生站上舞台，展示诞生在实验室里的创想，分享蕴含在编码中的激情，畅聊属于开源理念的未来。也期待参会者能继续发挥自己的影响力，让周围更多的人为开源做贡献。",time:"举办时间：",time1:"2018年8月11.12日（Sat & Sun)",place:"地点：",place1:"台湾科技大学",bottom1:"畅想未来，拥抱开源",bottom2:"联系我们: soscon@openingsource.org",map:"查看更大的地图"},Apply:{cfp:"招募讲者",summit:"报名",info:"重要讯息",deadline:"投稿期限：",deadline1:"5 月 25 日",notification:"投稿公布时间：",notification1:"2018-06-01 until 2018-06-05",agenda:"日程表预定公布时间：",agenda1:"七月上旬",date:"活动时间：",date1:"8 月 11 - 12 日",location:"举办地点：",location1:"台湾科技大学",applyInfo1:"与 GNOME 有关的开发、本地化、社区运营、推广等话题，包括但不限于：",list0:"对 GNOME 贡献",list1:"GNOME 的最新开发动态",list2:"开发 GNOME 3 的应用",list3:"GNOME 界面设计",list4:"GNOME 测试",list5:"GNOME 辅助功能",list6:"GNOME人机界面工程（图标和图形设计）",list7:"GNOME 市场",list8:"亚洲成功案例或本地 GNOME 项目",list9:"GNOME 和教育",list10:"GNOME 女性拓展计划",list11:"在移动设备上使用和开发 GNOME (智能手机和平板)",list12:"在嵌入设备或开源硬体上使用和开发 GNOME",linux:"Contributing to Linux and F/LOSS",olist1:"Linux 内核及开发",olist2:"开源操作系统的开发、使用和技术、推广",olist3:"Debian、Fedora、openSUSE、Ubuntu、及 FreeBSD 等发行版相关的话题",olist4:"其他开源项目有关的开发、使用、推广话题",story:"Open Source Enlightenment and Related Story",olist5:"你的开源故事、如何参与开源社区、开源经历",olist6:"女生如何更好地参与开源",olist7:"在生活及工作中如何使用开源工具改善流程与提高效率",emerging:"Emerging Technologies",olist8:"人工智慧、深度学习、机器学习相关话题",olist9:"AR/VR 虚拟显示、增强显示、显示技术",olist10:"大数据",olist11:"分散式系统"}}},"bG+r":function(t,e){},ojS7:function(t,e){},v6QL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e9682e16ec026bc61f69.js.map