"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[900],{1900:(G,h,o)=>{o.r(h),o.d(h,{CreatePricelevelComponent:()=>g,DeletePricelevelComponent:()=>P,PricelevelComponent:()=>y,PricelevelModule:()=>D,PricelevelService:()=>c._,UpdatePricelevelComponent:()=>b,ViewPricelevelComponent:()=>S});var a=o(2382),e=o(5e3),c=o(1070),l=o(6026),f=o(9358),p=o(4534),v=o(845),u=o(4119);const w=function(){return["../"]};let g=(()=>{class r{constructor(t,i,n){this.pricelevelService=t,this.router=i,this.route=n,this.submitted=!1,this.title="Create Pricelevel",this.formGroup=new a.cw({name:new a.NI("",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:3,maxLength:20}],this.pricelevelService.getAll()}submit(){!1===this.submitted&&this.formGroup.valid&&(this.submitted=!0,this.pricelevelService.add({name:this.value("name")}))}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c._),e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-create-pricelevel"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,w)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[f.U,p.o,v.zx,u.u,l.rH,l.Od]}),r})();var d=o(9783),C=o(9114);const U=function(){return["../"]};let P=(()=>{class r{constructor(t,i,n,m){this.confirmService=t,this.pricelevelService=i,this.router=n,this.route=m,this.title="Delete Pricelevel"}ngOnInit(){this.confirmService.confirm({message:"Are you sure to delete the item?",header:"Delete",icon:"pi pi-times",acceptButtonStyleClass:"p-button-danger",acceptLabel:"Yes, delete item.",accept:()=>{this.pricelevelService.deleteItem()},reject:()=>{this.router.navigate(["../"],{relativeTo:this.route})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.YP),e.Y36(c._),e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-delete-pricelevel"]],decls:5,vars:3,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e._UZ(4,"p-confirmDialog")),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,U)),e.xp6(2),e.hij(" ",i.title," "))},dependencies:[p.o,v.zx,u.u,C.Q,l.rH,l.Od]}),r})();var T=o(7773);let y=(()=>{class r{constructor(t,i,n,m){this.router=t,this.route=i,this.service=n,this.messageService=m}ngOnInit(){this.sub=this.service.entityActions$.subscribe(t=>{t.type.endsWith("add-one/success")&&(this.messageService.add({severity:"success",summary:"Created"}),this.goHome()),t.type.endsWith("delete-one/success")&&(this.messageService.add({severity:"success",summary:"Deleted"}),this.goHome()),t.type.endsWith("update-one/success")&&(this.messageService.add({severity:"success",summary:"Updated"}),this.goHome()),t.type.endsWith("add-one/error")&&(this.messageService.add({severity:"error",summary:"Not Created"}),this.goHome()),t.type.endsWith("delete-one/error")&&(this.messageService.add({severity:"error",summary:"Not Deleted"}),this.goHome()),t.type.endsWith("update-one/error")&&(this.messageService.add({severity:"error",summary:"Not Updated"}),this.goHome())})}ngOnDestroy(){this.sub.unsubscribe()}goHome(){this.router.navigate(["inventory","pricelevel"])}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(c._),e.Y36(d.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-pricelevel"]],decls:2,vars:0,consts:[["position","top-center"]],template:function(t,i){1&t&&e._UZ(0,"p-toast",0)(1,"router-outlet")},dependencies:[T.FN,l.lC]}),r})();var E=o(9808),A=o(4933),I=o(1565),L=o(3724),_=o(4453);const Z=function(){return["../"]};let b=(()=>{class r{constructor(t,i,n){this.pricelevelService=t,this.router=i,this.route=n,this.title="Update Pricelevel",this.formGroup=new a.cw({name:new a.NI("",[a.kI.required,a.kI.minLength(3),a.kI.maxLength(20)])}),this.fields=[{name:"name",type:"text",placeholder:"name",required:!0,minLength:3,maxLength:20}],this.pricelevelService.getAll()}ngAfterViewInit(){const t=this.pricelevelService.getItemToBeUpdated();t&&(this.itemToBeUpdated=t,(0,_.E)(this.formGroup,t))}submit(){this.formGroup.valid&&this.pricelevelService.update({id:this.itemToBeUpdated.id,name:this.value("name")})}getOptions(t){return JSON.parse(localStorage.getItem(t)||"[]")}value(t){var i;return null===(i=this.formGroup.get(t))||void 0===i?void 0:i.value}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c._),e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-update-pricelevel"]],decls:6,vars:5,consts:[["icon","pi pi-arrow-left","routerLinkActive","router-link-active","routerLinkActive","router-link-active","pTooltip","Go Back","tooltipPosition","bottom",3,"routerLink"],[1,"flex","flex-column","p-2","w-full"],[3,"formGroup","fields","submitEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"p-toolbar"),e._UZ(1,"p-button",0),e.TgZ(2,"strong"),e._uU(3),e.qZA()(),e.TgZ(4,"div",1)(5,"ae-form",2),e.NdJ("submitEvent",function(){return i.submit()}),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(4,Z)),e.xp6(2),e.hij(" ",i.title," "),e.xp6(2),e.Q6J("formGroup",i.formGroup)("fields",i.fields))},dependencies:[f.U,p.o,v.zx,u.u,l.rH,l.Od]}),r})();var Y=o(2530);const V=["dataTable"];let S=(()=>{class r{constructor(t,i,n){this.pricelevelService=t,this.router=i,this.route=n,this.rows=10,this.first=0,this.filters=[],this.sort=[],this.totalRecords$=this.pricelevelService.allCount$,this.items$=this.pricelevelService.entities$,this.columns=[{header:"#",field:"id"},{header:"UUID",field:"uuid"},{header:"name",field:"name"},{header:"Create Time",field:"createdAt"},{header:"Update Time",field:"updatedAt"},{header:"Delete Time",field:"deletedAt"}]}ngAfterViewInit(){this.pricelevelService.query(this.dataTable.table)}newItem(){this.goTo("create")}editItems(){this.goTo("update")}deleteItems(t){this.goTo("delete")}goTo(t,i){this.router.navigate([t],{relativeTo:this.route,queryParams:i})}selectItems(t){this.pricelevelService.updateSelection([...t])}handleEvent(){this.pricelevelService.query(this.dataTable.table)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(c._),e.Y36(l.F0),e.Y36(l.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ae-view-pricelevel"]],viewQuery:function(t,i){if(1&t&&e.Gf(V,5),2&t){let n;e.iGM(n=e.CRH())&&(i.dataTable=n.first)}},decls:4,vars:7,consts:[[3,"data","columns","totalRecords","filterEvent","sortEvent","pageEvent","selectEvent","newEvent","editEvent","deleteEvent","clearEvent"],["dataTable",""]],template:function(t,i){1&t&&(e.TgZ(0,"ae-table",0,1),e.NdJ("filterEvent",function(){return i.handleEvent()})("sortEvent",function(){return i.handleEvent()})("pageEvent",function(){return i.handleEvent()})("selectEvent",function(m){return i.selectItems(m)})("newEvent",function(){return i.newItem()})("editEvent",function(){return i.editItems()})("deleteEvent",function(m){return i.deleteItems(m)})("clearEvent",function(){return i.handleEvent()}),e.ALo(2,"async"),e.ALo(3,"async"),e.qZA()),2&t&&e.Q6J("data",e.lcZ(2,3,i.items$))("columns",i.columns)("totalRecords",e.lcZ(3,5,i.totalRecords$))},dependencies:[Y.a,E.Ov]}),r})(),D=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[c._,d.YP,d.ez],imports:[E.ez,I.U,A.e,p.V,v.hJ,u.z,C.D,L.O,T.EV,l.Bz.forChild([{path:"",component:y,children:[{title:"View Pricelevel",path:"",component:S},{title:"Create Pricelevel",path:"create",component:g},{title:"Update Pricelevel",path:"update",component:b},{title:"Delete Pricelevel",path:"delete",component:P}]}])]}),r})()}}]);