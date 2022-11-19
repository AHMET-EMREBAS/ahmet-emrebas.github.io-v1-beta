"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[757],{3757:(B,y,r)=>{r.r(y),r.d(y,{CreateMessageComponent:()=>S,DeleteMessageComponent:()=>L,MessageComponent:()=>U,MessageModule:()=>_,MessageService:()=>c,UpdateMessageComponent:()=>w,ViewMessageComponent:()=>E});var l=r(3075),C=r(7489),I=r(9728),e=r(5e3),Z=r(1924),A=r(520);let c=(()=>{class o extends I.T{constructor(t,s){super("Message",t,s)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(Z.yV),e.LFG(A.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=r(7980),T=r(9783),a=r(7783),u=r(9808),b=r(9358),v=r(4534),f=r(845),h=r(4119),d=r(2567);function O(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e.qZA()()()()}if(2&o){const t=n.$implicit,s=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",s.formGroup)("fields",t[1])("submitLabel",!1)}}const Y=function(){return["../"]};let S=(()=>{class o{constructor(t,s,i,m,g){this.messageService=t,this.systemMessageService=s,this.router=i,this.route=m,this.userService=g,this.submitted=!1,this.title="Create Message",this.formGroup=new l.cw({message:new l.NI(void 0,[l.kI.required,l.kI.minLength(0),l.kI.maxLength(400)]),to:new l.NI(void 0,[]),from:new l.NI(void 0,[])}),this.fields=[{name:"message",type:"text",group:"Message",placeholder:"message",required:!0,minLength:0,maxLength:400},{name:"to",type:"select",group:"To",placeholder:"to",asyncOptions:this.userService.entities$,optionValue:"id",optionLabel:"username"},{name:"from",type:"select",group:"To",placeholder:"from",asyncOptions:this.userService.entities$,optionValue:"id",optionLabel:"username"}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){this.userService.getAsOptions(["id","username"])}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.messageService.add({message:this.value("message"),to:this.value("to"),from:this.value("from")});else{const t=Object.entries(this.formGroup.controls).filter(s=>s[1].errors)[0];this.systemMessageService.add({severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var s;return null===(s=this.formGroup.get(t))||void 0===s?void 0:s.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c),e.Y36(T.ez),e.Y36(a.F0),e.Y36(a.gz),e.Y36(p.UserService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-create-message"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Message",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,O,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Y)),e.xp6(2),e.hij(" ",s.title," "),e.xp6(4),e.Q6J("ngForOf",s.groups))},dependencies:[u.sg,b.U,v.o,f.zx,h.u,d.C0,d.Vq,a.rH,a.Od,u.rS]}),o})();var M=r(9014),G=r(9114);const V=function(){return["../"]};let L=(()=>{class o{constructor(t,s,i,m){this.prmConfirmationService=t,this.messageService=s,this.router=i,this.route=m,this.title="Delete Message"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.messageService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.fL),e.Y36(c),e.Y36(a.F0),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-delete-message"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,V)),e.xp6(2),e.hij(" ",s.title," "))},dependencies:[v.o,f.zx,h.u,G.Q,a.rH,a.Od]}),o})();var x=r(7773);let U=(()=>{class o{constructor(t,s,i,m){this.router=t,this.route=s,this.resourceService=i,this.prmMessageService=m}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","message"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(c),e.Y36(M.sr))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-message"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,s){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[x.FN,a.lC]}),o})();var F=r(9671),D=r(6882),N=r(3905);function k(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e.qZA()()()()}if(2&o){const t=n.$implicit,s=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",s.formGroup)("fields",t[1])("submitLabel",!1)}}const J=function(){return["../"]};let w=(()=>{class o{constructor(t,s,i,m,g){this.messageService=t,this.router=s,this.systemMessageService=i,this.route=m,this.userService=g,this.title="Update Message",this.formGroup=new l.cw({message:new l.NI(void 0,[l.kI.required,l.kI.minLength(0),l.kI.maxLength(400)]),to:new l.NI(void 0,[]),from:new l.NI(void 0,[])}),this.fields=[{name:"message",type:"text",group:"Message",placeholder:"message",required:!0,minLength:0,maxLength:400},{name:"to",type:"select",group:"To",placeholder:"to",asyncOptions:this.userService.entities$,optionValue:"id",optionLabel:"username"},{name:"from",type:"select",group:"To",placeholder:"from",asyncOptions:this.userService.entities$,optionValue:"id",optionLabel:"username"}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){this.userService.getAsOptions(["id","username"])}ngAfterViewInit(){var t=this;return(0,F.Z)(function*(){const s=t.messageService.getItemToBeUpdated();if(s)return t.itemToBeUpdated=yield(0,N.z)(t.messageService.getByKey(s.id)),void(0,D.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.messageService.update({id:this.itemToBeUpdated.id,message:this.value("message"),to:this.value("to"),from:this.value("from")});else{const t=Object.entries(this.formGroup.controls).filter(s=>s[1].errors)[0];this.systemMessageService.add({severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var s;return null===(s=this.formGroup.get(t))||void 0===s?void 0:s.value}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c),e.Y36(a.F0),e.Y36(T.ez),e.Y36(a.gz),e.Y36(p.UserService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-update-message"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Message",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,k,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,J)),e.xp6(2),e.hij(" ",s.title," "),e.xp6(4),e.Q6J("ngForOf",s.groups))},dependencies:[u.sg,b.U,v.o,f.zx,h.u,d.C0,d.Vq,a.rH,a.Od,u.rS]}),o})();var $=r(2530);const z=["dataTable"];let E=(()=>{class o{constructor(t,s,i,m,g){this.messageService=t,this.router=s,this.route=i,this.toService=m,this.fromService=g,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.messageService.allCount$,this.items$=this.messageService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"message",field:"message"},{header:"to",field:"to"},{header:"from",field:"from"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.messageService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,s){this.router.navigate([t],{relativeTo:this.route,queryParams:s})}selectItems(t){this.messageService.updateSelection([...t])}handleEvent(){this.messageService.query(this.dataTable.table)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c),e.Y36(a.F0),e.Y36(a.gz),e.Y36(p.UserService),e.Y36(p.UserService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ae-view-message"]],viewQuery:function(t,s){if(1&t&&e.Gf(z,5),2&t){let i;e.iGM(i=e.CRH())&&(s.dataTable=i.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,s){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return s.handleEvent()})("sortEvent",function(){return s.handleEvent()})("pageEvent",function(){return s.handleEvent()})("selectEvent",function(m){return s.selectItems(m)})("newEvent",function(){return s.newItem()})("editEvent",function(){return s.editItems()})("deleteEvent",function(m){return s.deleteItems(m)})("clearEvent",function(){return s.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,s.items$))("columns",s.columns)("totalRecords",e.lcZ(3,5,s.totalRecords$))},dependencies:[$.a,u.Ov]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[c,p.UserService,p.UserService],imports:[u.ez,M.dT,d.T5,a.Bz.forChild([{path:"",component:U,children:[{title:"View Message",path:"",component:E},{title:"Create Message",path:"create",component:S},{title:"Update Message",path:"update",component:w},{title:"Delete Message",path:"delete",component:L}]}])]}),o})()}}]);