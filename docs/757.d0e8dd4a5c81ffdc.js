"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[757],{3757:(k,h,i)=>{i.r(h),i.d(h,{CreateMessageComponent:()=>M,DeleteMessageComponent:()=>C,MessageComponent:()=>S,MessageModule:()=>_,MessageService:()=>d,UpdateMessageComponent:()=>b,ViewMessageComponent:()=>E});var l=i(2382),e=i(5e3),w=i(441),I=i(1924),L=i(520);let d=(()=>{class o extends w.T{constructor(t,s){super("Message",t,s)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(I.yV),e.LFG(L.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var a=i(4650),c=i(9632),f=i(9358),u=i(4534),g=i(845),v=i(4119);const U=function(){return["../"]};let M=(()=>{class o{constructor(t,s,n,m,p){this.messageService=t,this.router=s,this.route=n,this.toService=m,this.fromService=p,this.submitted=!1,this.title="Create Message",this.formGroup=new l.cw({message:new l.NI("",[l.kI.required,l.kI.minLength(0),l.kI.maxLength(400)]),to:new l.NI("",[]),from:new l.NI("",[])}),this.fields=[{name:"message",type:"text",placeholder:"message",required:!0,minLength:0,maxLength:400},{name:"to",type:"select",placeholder:"to",asyncOptions:this.toService.entities$,optionValue:"id",optionLabel:"username"},{name:"from",type:"select",placeholder:"from",asyncOptions:this.fromService.entities$,optionValue:"id",optionLabel:"username"}]}ngOnInit(){this.toService.getAll(),this.fromService.getAll()}submit(){var t,s;!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.messageService.add({message:this.value("message"),to:null===(t=this.value("to"))||void 0===t?void 0:t.id,from:null===(s=this.value("from"))||void 0===s?void 0:s.id}))}value(t){var s;return null===(s=this.formGroup.get(t))||void 0===s?void 0:s.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.K),e.Y36(c.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-message"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return s.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,U)),e.xp6(2),e.hij(" ",s.title," "),e.xp6(2),e.Q6J("formGroup",s.formGroup)("fields",s.fields))},dependencies:[f.U,u.o,g.zx,v.u,a.rH,a.Od]}),o})();var y=i(9783),A=i(9114);const Y=function(){return["../"]};let C=(()=>{class o{constructor(t,s,n,m){this.prmConfirmationService=t,this.messageService=s,this.router=n,this.route=m,this.title="Delete Message"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.messageService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.YP),e.Y36(d),e.Y36(a.F0),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-message"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,Y)),e.xp6(2),e.hij(" ",s.title," "))},dependencies:[u.o,g.zx,v.u,A.Q,a.rH,a.Od]}),o})();var V=i(7773);let S=(()=>{class o{constructor(t,s,n,m){this.router=t,this.route=s,this.resourceService=n,this.prmMessageService=m}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","message"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(d),e.Y36(y.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-message"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,s){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[V.FN,a.lC]}),o})();var T=i(9808),Z=i(9671),G=i(4453),D=i(3905);const F=function(){return["../"]};let b=(()=>{class o{constructor(t,s,n,m,p){this.messageService=t,this.router=s,this.route=n,this.toService=m,this.fromService=p,this.title="Update Message",this.formGroup=new l.cw({message:new l.NI("",[l.kI.required,l.kI.minLength(0),l.kI.maxLength(400)]),to:new l.NI("",[]),from:new l.NI("",[])}),this.fields=[{name:"message",type:"text",placeholder:"message",required:!0,minLength:0,maxLength:400},{name:"to",type:"select",placeholder:"to",asyncOptions:this.toService.entities$,optionValue:"id",optionLabel:"name"},{name:"from",type:"select",placeholder:"from",asyncOptions:this.fromService.entities$,optionValue:"id",optionLabel:"name"}],this.toService.getAll(),this.fromService.getAll()}ngAfterViewInit(){var t=this;return(0,Z.Z)(function*(){const s=t.messageService.getItemToBeUpdated();s&&(t.itemToBeUpdated=yield(0,D.z)(t.messageService.getByKey(s.id)),(0,G.E)(t.formGroup,t.itemToBeUpdated))})()}submit(){var t,s;this.formGroup.valid&&this.messageService.update({id:this.itemToBeUpdated.id,message:this.value("message"),to:null===(t=this.value("to"))||void 0===t?void 0:t.id,from:null===(s=this.value("from"))||void 0===s?void 0:s.id})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var s;return null===(s=this.formGroup.get(t))||void 0===s?void 0:s.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.K),e.Y36(c.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-message"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return s.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,F)),e.xp6(2),e.hij(" ",s.title," "),e.xp6(2),e.Q6J("formGroup",s.formGroup)("fields",s.fields))},dependencies:[f.U,u.o,g.zx,v.u,a.rH,a.Od]}),o})();var N=i(2530);const O=["dataTable"];let E=(()=>{class o{constructor(t,s,n,m,p){this.messageService=t,this.router=s,this.route=n,this.toService=m,this.fromService=p,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.messageService.allCount$,this.items$=this.messageService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"message",field:"message"},{header:"to",field:"to"},{header:"from",field:"from"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.messageService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,s){this.router.navigate([t],{relativeTo:this.route,queryParams:s})}selectItems(t){this.messageService.updateSelection([...t])}handleEvent(){this.messageService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d),e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.K),e.Y36(c.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-message"]],viewQuery:function(t,s){if(1&t&&e.Gf(O,5),2&t){let n;e.iGM(n=e.CRH())&&(s.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,s){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return s.handleEvent()})("sortEvent",function(){return s.handleEvent()})("pageEvent",function(){return s.handleEvent()})("selectEvent",function(m){return s.selectItems(m)})("newEvent",function(){return s.newItem()})("editEvent",function(){return s.editItems()})("deleteEvent",function(m){return s.deleteItems(m)})("clearEvent",function(){return s.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,s.items$))("columns",s.columns)("totalRecords",e.lcZ(3,5,s.totalRecords$))},dependencies:[N.a,T.Ov]}),o})();var z=i(7834);let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[d,c.K,c.K],imports:[T.ez,z.d,a.Bz.forChild([{path:"",component:S,children:[{title:"View Message",path:"",component:E},{title:"Create Message",path:"create",component:M},{title:"Update Message",path:"update",component:b},{title:"Delete Message",path:"delete",component:C}]}])]}),o})()}}]);