"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[951],{951:(B,h,i)=>{i.r(h),i.d(h,{CategoryComponent:()=>A,CategoryModule:()=>z,CategoryService:()=>m,CreateCategoryComponent:()=>E,DeleteCategoryComponent:()=>S,UpdateCategoryComponent:()=>L,ViewCategoryComponent:()=>G});var l=i(3075),C=i(7489),Z=i(9728),e=i(5e3),w=i(1924),I=i(520);let m=(()=>{class r extends Z.T{constructor(t,o){super("Category",t,o)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(w.yV),e.LFG(I.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var T=i(9783),s=i(7783),p=i(9808),b=i(9358),g=i(4534),y=i(845),v=i(4119),u=i(2567);function U(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e.qZA()()()()}if(2&r){const t=a.$implicit,o=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",o.formGroup)("fields",t[1])("submitLabel",!1)}}const Y=function(){return["../"]};let E=(()=>{class r{constructor(t,o,n,c){this.categoryService=t,this.systemMessageService=o,this.router=n,this.route=c,this.submitted=!1,this.title="Create Category",this.formGroup=new l.cw({name:new l.NI(void 0,[l.kI.required,l.kI.minLength(0),l.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Category",placeholder:"name",required:!0,minLength:0,maxLength:20}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){}submit(){if(!1===this.submitted)if(this.formGroup.valid)this.submitted=!0,this.categoryService.add({name:this.value("name")});else{const t=Object.entries(this.formGroup.controls).filter(o=>o[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}value(t){var o;return null===(o=this.formGroup.get(t))||void 0===o?void 0:o.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m),e.Y36(T.ez),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-create-category"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Save Category",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,U,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,Y)),e.xp6(2),e.hij(" ",o.title," "),e.xp6(4),e.Q6J("ngForOf",o.groups))},dependencies:[p.sg,b.U,g.o,y.zx,v.u,l.JL,l.sg,u.C0,u.Vq,s.rH,s.Od,p.rS]}),r})();var f=i(9014),O=i(9114);const k=function(){return["../"]};let S=(()=>{class r{constructor(t,o,n,c){this.prmConfirmationService=t,this.categoryService=o,this.router=n,this.route=c,this.title="Delete Category"}ngOnInit(){this.prmConfirmationService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.categoryService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.fL),e.Y36(m),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-delete-category"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,k)),e.xp6(2),e.hij(" ",o.title," "))},dependencies:[g.o,y.zx,v.u,O.Q,s.rH,s.Od]}),r})(),A=(()=>{class r{constructor(t,o,n,c){this.router=t,this.route=o,this.resourceService=n,this.prmMessageService=c}ngOnInit(){this.sub=this.resourceService.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.prmMessageService.add({key:"resource",severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.prmMessageService.add({key:"resource",severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","category"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.F0),e.Y36(s.gz),e.Y36(m),e.Y36(f.sr))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-category"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},dependencies:[s.lC]}),r})();var d=i(5418),x=i(9671),F=i(6882),M=i(3905);function V(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"mat-step",5),e.ALo(1,"titlecase"),e.TgZ(2,"ae-form",6)(3,"div",7)(4,"p-button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e.qZA()()()()}if(2&r){const t=a.$implicit,o=e.oxw();e.Q6J("label",e.lcZ(1,4,"undefined"===t[0]?"Others":t[0])),e.xp6(2),e.Q6J("formGroup",o.formGroup)("fields",t[1])("submitLabel",!1)}}const D=function(){return["../"]};let L=(()=>{class r{constructor(t,o,n,c){this.categoryService=t,this.router=o,this.systemMessageService=n,this.route=c,this.title="Update Category",this.formGroup=new l.cw({name:new l.NI(void 0,[l.kI.required,l.kI.minLength(0),l.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",group:"Category",placeholder:"name",required:!0,minLength:0,maxLength:20}],this.groups=Object.entries((0,C.groupBy)(this.fields,"group"))}ngOnInit(){}ngAfterViewInit(){var t=this;return(0,x.Z)(function*(){const o=t.categoryService.getItemToBeUpdated();if(o)return t.itemToBeUpdated=yield(0,M.z)(t.categoryService.getByKey(o.id)),void(0,F.EE)(t.formGroup,t.itemToBeUpdated);t.router.navigate(["../"],{relativeTo:t.route})})()}submit(){if(this.formGroup.valid)this.categoryService.update({id:this.itemToBeUpdated.id,name:this.value("name")});else{const t=Object.entries(this.formGroup.controls).filter(o=>o[1].errors)[0];this.systemMessageService.add({key:"resource",severity:"error",summary:`${t[0]} field is not valid!`})}}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var o;return null===(o=this.formGroup.get(t))||void 0===o?void 0:o.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m),e.Y36(s.F0),e.Y36(T.ez),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-update-category"]],decls:8,vars:4,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],["labelPosition","bottom"],["stepper",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[3,"formGroup","fields","submitLabel"],[1,"flex","justify-content-end"],["type","submit","label","Update Category",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"mat-stepper",2,3),e.YNc(7,V,5,6,"mat-step",4),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,D)),e.xp6(2),e.hij(" ",o.title," "),e.xp6(4),e.Q6J("ngForOf",o.groups))},dependencies:[p.sg,b.U,g.o,y.zx,v.u,l.JL,l.sg,u.C0,u.Vq,s.rH,s.Od,p.rS]}),r})();var _=i(2530);const J=["dataTable"];let G=(()=>{class r{constructor(t,o,n){this.categoryService=t,this.router=o,this.route=n,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.categoryService.allCount$,this.items$=this.categoryService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.categoryService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,o){this.router.navigate([t],{relativeTo:this.route,queryParams:o})}selectItems(t){this.categoryService.updateSelection([...t])}handleEvent(){this.categoryService.query(this.dataTable.table)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m),e.Y36(s.F0),e.Y36(s.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-view-category"]],viewQuery:function(t,o){if(1&t&&e.Gf(J,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,o){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return o.handleEvent()})("sortEvent",function(){return o.handleEvent()})("pageEvent",function(){return o.handleEvent()})("selectEvent",function(c){return o.selectItems(c)})("newEvent",function(){return o.newItem()})("editEvent",function(){return o.editItems()})("deleteEvent",function(c){return o.deleteItems(c)})("clearEvent",function(){return o.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,o.items$))("columns",o.columns)("totalRecords",e.lcZ(3,5,o.totalRecords$))},dependencies:[_.a,p.Ov]}),r})(),z=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[m],imports:[p.ez,f.dT,u.T5,s.Bz.forChild([{path:"",component:A,children:[{title:"View Category",path:"",component:G,data:{permission:"READ:CATEGORY"},canActivate:[d.nG]},{title:"Create Category",path:"create",component:E,data:{permission:"WRITE:CATEGORY"},canActivate:[d.nG]},{title:"Update Category",path:"update",component:L,data:{permission:"WRITE:CATEGORY"},canActivate:[d.nG]},{title:"Delete Category",path:"delete",component:S,data:{permission:"WRITE:CATEGORY"},canActivate:[d.nG]}]}])]}),r})()}}]);