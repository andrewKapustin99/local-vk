(this["webpackJsonplocal-vk"]=this["webpackJsonplocal-vk"]||[]).push([[3],{302:function(t,e,s){t.exports={"front-layout":"ProfileInfo_front-layout__3nM83",profile_info_wrap:"ProfileInfo_profile_info_wrap__2l_oQ",img_wrap:"ProfileInfo_img_wrap__5CXTK",info_wrap:"ProfileInfo_info_wrap__1tz5I",infoItem:"ProfileInfo_infoItem__3t8Od",infoJob:"ProfileInfo_infoJob__15o6z",socialNet:"ProfileInfo_socialNet__3n8f1",logo_wrap:"ProfileInfo_logo_wrap__ZCDR-",logoIcon:"ProfileInfo_logoIcon__2lbeN"}},303:function(t,e,s){t.exports={"front-layout":"Profile_front-layout__3x9Je"}},304:function(t,e,s){},305:function(t,e,s){t.exports={item:"Post_item__ngDyW"}},307:function(t,e,s){"use strict";s.r(e);var o=s(5),n=s(29),i=s(30),a=s(32),r=s(31),c=s(0),u=s.n(c),l=(s(303),s(43)),j=s(302),p=s.n(j),f=s(110),d=s(133),b=s(1),O=function(t){var e=Object(c.useState)(!1),s=Object(d.a)(e,2),o=s[0],n=s[1],i=Object(c.useState)(t.status),a=Object(d.a)(i,2),r=a[0],u=a[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsx)("div",{children:o?Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},onBlur:function(){n(!1),t.updateStatus(r)},value:r})}):Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){n(!0)},children:r||"No Status"})})})},h=function(t){var e=t.profile,s=t.status,o=t.updateStatus;return e?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:p.a.profile_info_wrap,children:[Object(b.jsx)("div",{className:p.a.img_wrap,children:e.photos.large?Object(b.jsx)("img",{src:e.photos.large}):Object(b.jsx)("img",{src:f.a})}),Object(b.jsxs)("div",{className:p.a.info_wrap,children:[Object(b.jsxs)("div",{className:p.a.infoItem,children:[Object(b.jsx)("h3",{children:e.fullName}),Object(b.jsx)(O,{status:s,updateStatus:o})]}),e.lookingForAJob?Object(b.jsxs)("div",{className:p.a.infoJob,children:[Object(b.jsx)("span",{children:"Looking for a job"}),Object(b.jsx)("span",{children:"status 2"})]}):null,Object(b.jsx)("div",{className:p.a.socialNet,children:"social networks"})]})]})}):Object(b.jsx)(l.a,{})},_=s(13),x=s(10),m=s(100),v=s(304),g=s.n(v),P=s(95),I=s(132),w=s(305),S=s.n(w),k=s.p+"static/media/Wa4vBSHaZI4(1).a6a8223e.jpg",N=function(t){return Object(b.jsxs)("div",{className:S.a.item,children:[Object(b.jsx)("img",{src:k}),Object(b.jsx)("p",{children:t.message}),Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["Like ",t.likesCount]})})]})},y=s(80),C=s(38),J=Object(y.a)(10),T=Object(I.a)({form:"profileAddPostForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(P.a,{component:C.b,name:"newPostText",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 ...",validate:[y.b,J]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),z=function(t){var e=t.posts.map((function(t){return Object(b.jsx)(N,{message:t.postContent,likesCount:t.likesCount},t.id)}));return Object(b.jsxs)("div",{children:["My posts",Object(b.jsx)("div",{children:Object(b.jsx)(T,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(b.jsx)("div",{className:g.a.posts,children:e})]})},A=Object(x.d)(Object(_.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),{addPost:m.a}))(z),D=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(A,{})]})},F=s(9),M=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(D,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(x.d)(Object(_.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:m.c,getStatus:m.d,updateStatus:m.e}),F.f)(M)}}]);
//# sourceMappingURL=3.801b77a6.chunk.js.map