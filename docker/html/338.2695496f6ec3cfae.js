"use strict";(self.webpackChunkhw=self.webpackChunkhw||[]).push([[338],{5338:(q,_,r)=>{r.r(_),r.d(_,{TitanModule:()=>H});var E=r(8751),l=r(177),o=r(9417),j=r(1626),m=r(5882),y=r(1146),c=r(5601),C=r(4558),u=r(1635),t=r(4438),f=r(4412),g=r(8359),M=r(4744),x=r(8953),v=function(n){return n.KLASSE="klasse",n.TIER="tier",n}(v||{});let k=(()=>{class n{constructor(){this.http=(0,t.WQX)(j.Qq),this.env=(0,t.WQX)(x.M),this.loginService=(0,t.WQX)(M.H),this.tierlist=["-","S+","S","A+","A","B","C","D"],this.classes=["-","Magier","Scharfsch\xfctze","Unterst\xfctzer","Tank"],this.titanlistFilter=new f.t({filtertier:null,filterklasse:null})}setTitanFilter(i,s){if(i===v.KLASSE&&this.classes.includes(s)){let a=this.titanlistFilter.value;a.filterklasse=s,this.titanlistFilter.next(a)}if(i===v.TIER&&this.tierlist.includes(s)){let a=this.titanlistFilter.value;a.filtertier=s,this.titanlistFilter.next(a)}}setTitanFilters(i){this.titanlistFilter.next(i)}getTitanFilter(){return this.titanlistFilter}getTitanNames(){return this.http.get(this.env.apiUrl+"/titans.php?titannames=1")}getTitanByName(i,s){return this.http.get(this.env.apiUrl+"/titans.php?titanByName="+i+(s?"&edit=1":""))}sendTitan(i){return this.http.post(this.env.apiUrl+"/titans.php?titan_id="+i.titan_id,i)}deleteTitan(i){return this.http.get(this.env.apiUrl+"/titans.php?deletetitan="+encodeURI(i))}getTitanNamesFiltered(i,s){i="-"===i?"":i,s="-"===s?"":s;let a=this.env.apiUrl+"/titans.php?filtertier="+encodeURIComponent(i)+"&filterklasse="+encodeURIComponent(s);return this.http.get(a)}getTitanTeams(){return this.http.get(this.env.apiUrl+"/titans.php?teams=1")}getTitanTeam(i){return this.http.get(this.env.apiUrl+"/titans.php?team="+i)}saveTitanTeam(i){return this.http.post(this.env.apiUrl+"/titans.php?saveteam=1",i)}deleteTeam(i){return this.http.get(this.env.apiUrl+"/titans.php?deleteteam="+i)}static#t=this.\u0275fac=function(s){return new(s||n)};static#i=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const N=n=>["/titan/titan/",n],I=()=>["/titan/titanedit/"];function $(n,e){1&n&&t.nrm(0,"option")}function R(n,e){1&n&&t.nrm(0,"option")}function S(n,e){if(1&n&&(t.j41(0,"div",10)(1,"div",11),t.EFF(2),t.k0s()()),2&n){const i=e.$implicit;t.muq("background-image: url(/assets/titans/",i,".png);"),t.Y8G("routerLink",t.eq3(5,N,i)),t.R7$(2),t.JRh(i)}}function w(n,e){if(1&n&&(t.j41(0,"div"),t.DNE(1,S,3,7,"div",9),t.k0s()),2&n){const i=e.ngIf;t.R7$(),t.Y8G("ngForOf",i)}}function G(n,e){1&n&&(t.j41(0,"div")(1,"button",12),t.EFF(2,"Titan hinzuf\xfcgen"),t.k0s()()),2&n&&(t.R7$(),t.Y8G("routerLink",t.lJ4(1,I)))}class p{constructor(){this.service=(0,t.WQX)(k),this.filtered$=new f.t([]),this.filter$=new f.t({filtertier:null,filterklasse:null}),this.form=new o.gE({filterTier:new o.MJ("-"),filterKlasse:new o.MJ("-")}),this.subscriptions=new g.yU}ngOnInit(){this.filter$=this.service.getTitanFilter();const e=this.filter$.value;this.form.get("filterTier")?.setValue(e.filtertier),this.form.get("filterKlasse")?.setValue(e.filterklasse),this.subscriptions.add(this.form.valueChanges.subscribe(i=>{this.service.setTitanFilters({filtertier:i.filterTier?i.filterTier:"-",filterklasse:i.filterKlasse?i.filterKlasse:"-"})})),this.subscriptions.add(this.filter$.subscribe(i=>{this.service.getTitanNamesFiltered(i.filtertier?i.filtertier:"-",i.filterklasse?i.filterklasse:"-").subscribe(Z=>{this.filtered$.next(Z)})}))}ngOnDestroy(){this.subscriptions.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||p)};static#i=this.\u0275cmp=t.VBU({type:p,selectors:[["app-heroes"]],decls:19,vars:10,consts:[[1,"content"],[3,"definedRoute"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],["formControlName","filterTier"],[4,"ngFor","ngForOf"],["formControlName","filterKlasse"],[4,"ngIf"],["class","hero",3,"routerLink","style",4,"ngFor","ngForOf"],[1,"hero",3,"routerLink"],[1,"hname"],["type","button",3,"routerLink"]],template:function(i,s){1&i&&(t.j41(0,"div")(1,"div",0),t.nrm(2,"app-subnav",1),t.j41(3,"h1"),t.EFF(4,"Titanen Liste"),t.k0s(),t.j41(5,"form",2)(6,"div",3)(7,"div",4),t.EFF(8," Filter Tier "),t.j41(9,"select",5),t.DNE(10,$,1,0,"option",6),t.k0s()(),t.j41(11,"div",4),t.EFF(12," Filter Klasse "),t.j41(13,"select",7),t.DNE(14,R,1,0,"option",6),t.k0s()()()(),t.DNE(15,w,2,1,"div",8),t.nI1(16,"async"),t.DNE(17,G,3,2,"div",8),t.nI1(18,"async"),t.k0s()()),2&i&&(t.R7$(2),t.Y8G("definedRoute","titan"),t.R7$(3),t.Y8G("formGroup",s.form),t.R7$(5),t.Y8G("ngForOf",s.service.tierlist),t.R7$(4),t.Y8G("ngForOf",s.service.classes),t.R7$(),t.Y8G("ngIf",t.bMT(16,6,s.filtered$)),t.R7$(2),t.Y8G("ngIf",t.bMT(18,8,s.auth$)))},dependencies:[c.Wk,l.Sq,l.bT,o.qT,o.xH,o.y7,o.wz,o.BC,o.cb,o.j4,o.JD,C.z,l.Jj],styles:["[_nghost-%COMP%]{display:block}.hero[_ngcontent-%COMP%]{display:inline-flex;border:3px solid black;color:gray;width:100px;height:100px;background-position:center;background-repeat:no-repeat;background-size:contain;margin:.5em;justify-content:center;align-items:flex-end;align-content:flex-end;cursor:pointer}.hname[_ngcontent-%COMP%]{background-color:#00000080;color:#fff;width:100%;text-align:center;padding:.2em 0 0}"],changeDetection:0})}(0,u.Cg)([(0,m.l6)(n=>n.auth.sessionId)],p.prototype,"auth$",void 0);var T=r(8141),b=r(9437),F=r(7673);function J(n,e){1&n&&t.nrm(0,"option")}function O(n,e){1&n&&t.nrm(0,"option")}function D(n,e){1&n&&t.nrm(0,"option")}function V(n,e){1&n&&t.nrm(0,"option")}function X(n,e){if(1&n){const i=t.RV6();t.j41(0,"div",1)(1,"h1"),t.EFF(2,"Neuen Titan anlegen"),t.k0s(),t.j41(3,"form",2)(4,"div",3)(5,"div",4)(6,"div",4),t.EFF(7," Name des Titan "),t.nrm(8,"input",5),t.k0s()()(),t.j41(9,"div",3)(10,"div",4),t.EFF(11," Kampfposition "),t.j41(12,"select",6),t.DNE(13,J,1,0,"option",7),t.k0s()(),t.j41(14,"div",4),t.EFF(15," Tier List "),t.j41(16,"select",8),t.DNE(17,O,1,0,"option",7),t.k0s()()(),t.j41(18,"div",3)(19,"div",4),t.EFF(20," Klasse "),t.j41(21,"select",9),t.DNE(22,D,1,0,"option",7),t.k0s()(),t.j41(23,"div",4),t.EFF(24," Sekund\xe4re Klasse "),t.j41(25,"select",10),t.DNE(26,V,1,0,"option",7),t.k0s()()(),t.j41(27,"p")(28,"textarea",11),t.EFF(29,"                Hinweise "),t.EFF(30,"&"),t.EFF(31," Tips\n            "),t.k0s()(),t.j41(32,"p")(33,"button",12),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.sendData())}),t.EFF(34,"Abschicken"),t.k0s(),t.j41(35,"button",13),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.abbrechen())}),t.EFF(36,"Abbrechen"),t.k0s()()()()}if(2&n){const i=t.XpG();t.R7$(3),t.Y8G("formGroup",i.form),t.R7$(10),t.Y8G("ngForOf",i.positions),t.R7$(4),t.Y8G("ngForOf",i.service.tierlist),t.R7$(5),t.Y8G("ngForOf",i.service.classes),t.R7$(4),t.Y8G("ngForOf",i.service.classes)}}class h{constructor(){this.service=(0,t.WQX)(k),this.activeRoute=(0,t.WQX)(c.nX),this.router=(0,t.WQX)(c.Ix),this.subscription=new g.yU,this.titanId=null,this.titanName=null,this.positions=["Vorne","Hinten","Mitte"],this.skins=[],this.glyphs=[],this.form=new o.gE({titan_id:new o.MJ(""),name:new o.MJ(""),position:new o.MJ(""),tierlist:new o.MJ(""),funktion:new o.MJ(""),funktion2:new o.MJ(""),description:new o.MJ(""),skin1:new o.MJ(""),skin2:new o.MJ(""),skin3:new o.MJ(""),skin4:new o.MJ(""),skin5:new o.MJ(""),skin6:new o.MJ(""),glyph1:new o.MJ(""),glyph2:new o.MJ(""),glyph3:new o.MJ(""),glyph4:new o.MJ(""),glyph5:new o.MJ(""),artefact1:new o.MJ(""),artefact2:new o.MJ(""),artefact3:new o.MJ("")})}ngOnInit(){this.subscription.add(this.activeRoute.params.pipe((0,T.M)(e=>{this.titanName=e.id,this.titanName&&this.service.getTitanByName(e.id,!0).subscribe(i=>{this.titanId=i.titan_id?i.titan_id:null,this.form.get("name")?.setValue(i.name),this.form.get("position")?.setValue(i.position),this.form.get("tierlist")?.setValue(i.tierlist),this.form.get("description")?.setValue(i.description);const s=i.funktion.split(",");s[0]&&this.form.get("funktion")?.setValue(s[0]),s[1]&&this.form.get("funktion2")?.setValue(s[1])})})).subscribe())}sendData(){let e=this.form.value,i={titan_id:this.titanId,name:e.name,position:e.position,tierlist:e.tierlist,funktion:e.funktion+(e.funktion2?", "+e.funktion2:""),description:e.description};this.service.sendTitan(i).pipe((0,b.W)(s=>(0,F.of)(s))).subscribe(s=>{this.router.navigate(["titan/titan/"+i.name])})}abbrechen(){this.router.navigate(["/titan/titan/"+this.titanName])}static#t=this.\u0275fac=function(i){return new(i||h)};static#i=this.\u0275cmp=t.VBU({type:h,selectors:[["app-titan-edit"]],decls:2,vars:3,consts:[["class","content",4,"ngIf"],[1,"content"],[1,"b-form",3,"formGroup"],[1,"row"],[1,"col"],["formControlName","name","type","text"],["formControlName","position"],[4,"ngFor","ngForOf"],["placeholder","Rang in der Tierlist","formControlName","tierlist"],["placeholder","Klasse des Titan","formControlName","funktion"],["placeholder","Sekund\xe4re Klasse des Titan","formControlName","funktion2"],["formControlName","description"],["type","button",1,"mr10",3,"click"],["type","button",3,"click"]],template:function(i,s){1&i&&(t.DNE(0,X,37,5,"div",0),t.nI1(1,"async")),2&i&&t.Y8G("ngIf",t.bMT(1,1,s.auth$))},dependencies:[l.Sq,l.bT,o.qT,o.xH,o.y7,o.me,o.wz,o.BC,o.cb,o.j4,o.JD,l.Jj],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}(0,u.Cg)([(0,m.l6)(n=>n.auth.sessionId)],h.prototype,"auth$",void 0);var B=r(1413),U=r(6354),Y=r(980),W=r(11);function K(n,e){if(1&n){const i=t.RV6();t.j41(0,"div",8)(1,"button",9),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.prevSkin())}),t.k0s(),t.j41(2,"span"),t.EFF(3),t.k0s(),t.j41(4,"button",9),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.nextSkin())}),t.k0s()()}if(2&n){const i=t.XpG(2);t.R7$(3),t.JRh(i.getSkinName())}}function P(n,e){if(1&n){const i=t.RV6();t.j41(0,"p",10)(1,"button",9),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.navEdit())}),t.EFF(2,"Bearbeiten"),t.k0s(),t.j41(3,"button",9),t.bIt("click",function(){t.eBV(i);const a=t.XpG(2);return t.Njj(a.deleteTitan())}),t.EFF(4,"L\xf6schen"),t.k0s()()}}function L(n,e){if(1&n&&(t.qex(0),t.j41(1,"div",3),t.nrm(2,"img",4),t.DNE(3,K,5,1,"div",5),t.k0s(),t.j41(4,"h1"),t.EFF(5),t.k0s(),t.j41(6,"p")(7,"strong"),t.EFF(8,"Position:"),t.k0s(),t.EFF(9),t.nrm(10,"br"),t.j41(11,"strong"),t.EFF(12,"Tier-List:"),t.k0s(),t.EFF(13),t.nrm(14,"br"),t.j41(15,"strong"),t.EFF(16,"Funktion:"),t.k0s(),t.EFF(17),t.k0s(),t.nrm(18,"p",6),t.DNE(19,P,5,0,"p",7),t.nI1(20,"async"),t.bVm()),2&n){const i=e.ngIf,s=t.XpG();t.R7$(2),t.FS9("src",s.getSkinUrl(),t.B4B),t.R7$(),t.Y8G("ngIf",i.skins.length),t.R7$(2),t.JRh(i.name),t.R7$(4),t.SpI(" ",i.position,""),t.R7$(4),t.SpI(" ",i.tierlist,""),t.R7$(4),t.SpI(" ",i.funktion," "),t.R7$(),t.Y8G("innerHTML",i.description,t.npT),t.R7$(),t.Y8G("ngIf",t.bMT(20,8,s.auth$))}}function Q(n,e){if(1&n){const i=t.RV6();t.j41(0,"p"),t.EFF(1,"Wirklich l\xf6schen?"),t.k0s(),t.j41(2,"button",9),t.bIt("click",function(){t.eBV(i);const a=t.XpG();return t.Njj(a.withdraw())}),t.EFF(3,"L\xf6schen"),t.k0s(),t.j41(4,"button",9),t.bIt("click",function(){const a=t.eBV(i).$implicit;return t.Njj(a.complete())}),t.EFF(5,"Abbrechen"),t.k0s()}}class d{constructor(){this.route=(0,t.WQX)(c.nX),this.subscription=new g.yU,this.service=(0,t.WQX)(W.O),this.titanService=(0,t.WQX)(k),this.selectedSkin=0,this.skins=[],this.titanName="",this.close$=new B.B,this.store=(0,t.WQX)(m.il),this.router=(0,t.WQX)(c.Ix)}ngOnInit(){this.subscription.add(this.route.params.pipe((0,T.M)(e=>{this.titan$=this.titanService.getTitanByName(e.id,!1).pipe((0,T.M)(i=>{this.skins=[e.id,e.id+"_Champion"],this.titanName=i.name}),(0,U.T)(i=>({...i,skins:this.skins})))})).subscribe(e=>{this.service.backgroundImage="/assets/poster/"+e.id+".png"}))}ngOnDestroy(){this.subscription.unsubscribe()}deleteTitan(){}withdraw(){this.subscription.add(this.titanService.deleteTitan(this.titanName).pipe((0,b.W)(e=>(0,F.of)(e)),(0,Y.j)(()=>this.close$.next(!1))).subscribe(e=>{this.router.navigate(["/titan/titans"])}))}nextSkin(){let e=this.selectedSkin+1;this.selectedSkin=e>=this.skins.length?0:e}prevSkin(){let e=this.selectedSkin-1;this.selectedSkin=e<0?this.skins.length-1:e}getSkinName(){return this.skins[this.selectedSkin]}getSkinUrl(){return"/assets/titans/"+this.skins[this.selectedSkin]+".png"}selectSkin(e){this.selectedSkin=this.skins.indexOf(e)}deleteTitan2(){this.titanService.deleteTitan(this.titanName).pipe((0,b.W)(e=>(0,F.of)(e))).subscribe(e=>{this.router.navigate(["/titan/titans"])})}navEdit(){this.router.navigate(["/titan/edittitan/"+this.titanName])}static#t=this.\u0275fac=function(i){return new(i||d)};static#i=this.\u0275cmp=t.VBU({type:d,selectors:[["app-titan"]],decls:5,vars:3,consts:[["deleteModal",""],[1,"content"],[4,"ngIf"],[1,"titanimage"],[1,"titanimg",3,"src"],["class","scrolltitan",4,"ngIf"],[3,"innerHTML"],["style","margin-top:2em",4,"ngIf"],[1,"scrolltitan"],["type","button",3,"click"],[2,"margin-top","2em"]],template:function(i,s){1&i&&(t.j41(0,"div",1),t.DNE(1,L,21,10,"ng-container",2),t.nI1(2,"async"),t.k0s(),t.DNE(3,Q,6,0,"ng-template",null,0,t.C5r)),2&i&&(t.R7$(),t.Y8G("ngIf",t.bMT(2,1,s.titan$)))},dependencies:[l.bT,l.Jj],styles:["[_nghost-%COMP%]{display:block}.titanimage[_ngcontent-%COMP%]{padding:.5em;float:right;max-width:50%}.titanimg[_ngcontent-%COMP%]{max-height:300px;max-width:100%;border-radius:.8em .8em 0 0;border:2px solid black}h2[_ngcontent-%COMP%]{font-family:Protest Strike,sans-serif;font-weight:400;font-style:normal;color:#d6ab08}.chip[_ngcontent-%COMP%]{display:inline-block;padding:.3em .5em;border:1px solid #D6AB08;border-radius:.4em;background-color:#000;margin-right:.5em;margin-bottom:.5em}.scrolltitan[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.3em;background-color:#000;border-radius:0 0 .8em .8em}.skinchip[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 575.98px){.titanimage[_ngcontent-%COMP%]{float:none;padding:.5em;width:auto;max-width:100%;display:block}.titanimg[_ngcontent-%COMP%]{max-height:100%}}"],changeDetection:0})}(0,u.Cg)([(0,m.l6)(n=>n.auth.sessionId)],d.prototype,"auth$",void 0);const z=[{path:"titans",component:p},{path:"edittitan/:id",component:h,data:{title:"Titan bearbeiten"}},{path:"titanedit",component:h},{path:"titan/:id",component:d,data:{title:"Titan"}},{path:"**",component:p}];let A=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#i=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({providers:[{provide:l.hb,useClass:l.fw}],imports:[c.iI.forChild(z),c.iI]})}return n})(),H=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#i=this.\u0275mod=t.$C({type:n,bootstrap:[p]});static#n=this.\u0275inj=t.G2t({imports:[A,l.MD,o.YN,j.q1,m.rK.forRoot([E.k]),y.z0.forRoot(),o.X1,c.iI,C.z]})}return n})()}}]);