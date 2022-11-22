"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[213],{7213:(z,y,n)=>{n.r(y),n.d(y,{CreatePricelevelComponent:()=>b,DeletePricelevelComponent:()=>E,PricelevelComponent:()=>L,PricelevelModule:()=>J,PricelevelService:()=>p,UpdatePricelevelComponent:()=>S,ViewPricelevelComponent:()=>I});var c=n(3075),C=n(7489),A=n(9728),e=n(5e3),Z=n(1924),w=n(520);let p=(()=>{class i extends A.T{constructor(t,r){super("Pricelevel",t,r)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Z.yV),e.LFG(w.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var P=n(9783),s=n(7783),m=n(9808),T=n(9358),d=n(4534),f=n(845),h=n(4119),u=n(2567);function G(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e.qZA()()()()}if(2&i){const t=l.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const U=function(){return["../"]};let b=(()=>{class i{constructor(t,r,o,a){this.pricelevelService=t,this.systemMessageService=r,this.router=o,this.route=a,this.submitted=!1,this.title="Create Pricelevel",this.formGroup=new c.cw({name:new c.NI(void 0,[c.kI.required,c.kI.minLength(3),c.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Price Level",placeholder:"name",required:!0,minLength:3,maxLength:20}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.pricelevelService.add({name:this.value("name")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p),e.Y36(P.ez),e.Y36(s.F0),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ae-create-pricelevel"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Pricelevel",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,G,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,U)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[m.sg,T.U,d.o,f.zx,h.u,c.JL,c.sg,u.C0,u.Vq,s.rH,s.Od,m.rS]}),i})();var g=n(9014),V=n(9114);const k=function(){return["../"]};let E=(()=>{class i{constructor(t,r,o,a){this.prmConfirmationService=t,this.pricelevelService=r,this.router=o,this.route=a,this.title="Delete Pricelevel"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.pricelevelService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.fL),e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ae-delete-pricelevel"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,k)),e.xp6(2),e.hij(" ",r.title," "))},dependencies:[d.o,f.zx,h.u,V.Q,s.rH,s.Od]}),i})(),L=(()=>{class i{constructor(t,r,o,a){this.router=t,this.route=r,this.resourceService=o,this.prmMessageService=a}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","pricelevel"])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(p),e.Y36(g.sr))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ae-pricelevel"]],decls:1,vars:0,template:function(t,r){1&t&&e._UZ(0,"router-outlet")},dependencies:[s.lC]}),i})();var v=n(7919),x=n(9671),F=n(6882),Y=n(3905);function M(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e.qZA()()()()}if(2&i){const t=l.$implicit,r=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",r.formGroup)("fields",t[1])("submitLabel",!1)}}const O=function(){return["../"]};let S=(()=>{class i{constructor(t,r,o,a){this.pricelevelService=t,this.router=r,this.systemMessageService=o,this.route=a,this.title="Update Pricelevel",this.formGroup=new c.cw({name:new c.NI(void 0,[c.kI.required,c.kI.minLength(3),c.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Price Level",placeholder:"name",required:!0,minLength:3,maxLength:20}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){}ngAfterViewInit(){var t=this;return(0,x.Z)(function*(){const r=t.pricelevelService.getItemToBeUpdated();if(r)return t.itemToBeUpdated=yield(0,Y.z)(t.pricelevelService.getByKey(r.id)),void(0,F.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.pricelevelService.update({id:this.itemToBeUpdated.id,name:this.value("name")});else{const t=Object.entries(this.formGroup.controls).filter(r=>r[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var r;return null===(r=this.formGroup.get(t))||void 0===r?void 0:r.value}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p),e.Y36(s.F0),e.Y36(P.ez),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ae-update-pricelevel"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Pricelevel",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,M,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,O)),e.xp6(2),e.hij(" ",r.title," "),e.xp6(4),e.Q6J("ngForOf",r.groups))},dependencies:[m.sg,T.U,d.o,f.zx,h.u,c.JL,c.sg,u.C0,u.Vq,s.rH,s.Od,m.rS]}),i})();var D=n(2530);const _=["dataTable"];let I=(()=>{class i{constructor(t,r,o){this.pricelevelService=t,this.router=r,this.route=o,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.pricelevelService.allCount$,this.items$=this.pricelevelService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.pricelevelService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,r){this.router.navigate([t],{relativeTo:this.route,queryParams:r})}selectItems(t){this.pricelevelService.updateSelection([...t])}handleEvent(){this.pricelevelService.query(this.dataTable.table)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p),e.Y36(s.F0),e.Y36(s.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ae-view-pricelevel"]],viewQuery:function(t,r){if(1&t&&e.Gf(_,5),2&t){let o;e.iGM(o=e.CRH())&&(r.dataTable=o.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,r){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return r.handleEvent()})("sortEvent",function(){return r.handleEvent()})("pageEvent",function(){return r.handleEvent()})("selectEvent",function(a){return r.selectItems(a)})("newEvent",function(){return r.newItem()})("editEvent",function(){return r.editItems()})("deleteEvent",function(a){return r.deleteItems(a)})("clearEvent",function(){return r.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,r.items$))("columns",r.columns)("totalRecords",e.lcZ(3,5,r.totalRecords$))},dependencies:[D.a,m.Ov]}),i})(),J=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[p],imports:[m.ez,g.dT,u.T5,s.Bz.forChild([{path:"",component:L,children:[{title:"View Pricelevel",path:"",component:I,data:{permission:"READ:PRICELEVEL"},canActivate:[v.nG]},{title:"Create Pricelevel",path:"create",component:b,data:{permission:"WRITE:PRICELEVEL"},canActivate:[v.nG]},{title:"Update Pricelevel",path:"update",component:S,data:{permission:"WRITE:PRICELEVEL"},canActivate:[v.nG]},{title:"Delete Pricelevel",path:"delete",component:E,data:{permission:"WRITE:PRICELEVEL"},canActivate:[v.nG]}]}])]}),i})()}}]);