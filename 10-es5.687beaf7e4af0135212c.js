(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GuOm:function(l,e,u){"use strict";u.r(e);var n=u("CcnG"),i=function(){return function(){}}(),t=u("pMnS"),s=u("Mr+X"),a=u("SMsm"),r=u("Rlre"),o=u("La40"),c=u("7iLc"),m=u("r43C"),d=u("Fzqc"),p=u("Ip0R"),b=u("lzlj"),g=u("FVSy"),f=u("n6gG"),v=u("bne5"),h=u("26FU"),q=u("Gi3i"),y=u("mrSG"),P=u("MGBS"),S=u("zotm"),C=function(){function l(l,e){this.observables=l,this.project=e}return l.prototype.call=function(l,e){return e.subscribe(new x(l,this.observables,this.project))},l}(),x=function(l){function e(e,u,n){var i=l.call(this,e)||this;i.observables=u,i.project=n,i.toRespond=[];var t=u.length;i.values=new Array(t);for(var s=0;s<t;s++)i.toRespond.push(s);for(s=0;s<t;s++){var a=u[s];i.add(Object(S.a)(i,a,a,s))}return i}return y.c(e,l),e.prototype.notifyNext=function(l,e,u,n,i){this.values[u]=e;var t=this.toRespond;if(t.length>0){var s=t.indexOf(u);-1!==s&&t.splice(s,1)}},e.prototype.notifyComplete=function(){},e.prototype._next=function(l){if(0===this.toRespond.length){var e=[l].concat(this.values);this.project?this._tryProject(e):this.destination.next(e)}},e.prototype._tryProject=function(l){var e;try{e=this.project.apply(this,l)}catch(u){return void this.destination.error(u)}this.destination.next(e)},e}(P.a),_=function(){function l(l){var e=this;this.window=l,this._fromClick=!1,this.data=[],this._scrollSub=Object(v.a)(l,"scroll").pipe(Object(q.a)(50),function(){for(var l=[],e=0;e<arguments.length;e++)l[e]=arguments[e];return function(e){var u;return"function"==typeof l[l.length-1]&&(u=l.pop()),e.lift(new C(l,u))}}(function(){return l.scrollY})).subscribe(function(l){e._fromClick||e._updateFocused(l),e._fromClick=!1})}return l.prototype.ngOnDestroy=function(){this._scrollSub&&!this._scrollSub.closed&&this._scrollSub.unsubscribe()},l.prototype._updateFocused=function(l){this.data.forEach(function(e){var u=[];e.items.getValue().forEach(function(e,n){e.focus=!1,e.top<=l&&(u[n-1]&&(u[n-1].focus=!1),e.focus=!0),u.push(e)}),e.items.next(u)})},l.prototype.create=function(l,e,u){var n=this.data.find(function(e){return e.name===l});return n?n.items.next(e||[]):(n={name:l,animation:u||"smooth",items:new h.a(e||[])},this.data.push(n)),n},l.prototype.group=function(l){var e=this.data.find(function(e){return e.name===l});return e||(e=this.create(l)),e.items.asObservable()},l.prototype.scrollTo=function(l,e){var u=this,n=this.data.find(function(e){return e.name===l});n.items.getValue().forEach(function(l){l.focus=!1,l.id===e&&(u._fromClick=!0,u._updateFocused(l.top),window.scrollTo({top:l.top,behavior:n.animation}))})},l}(),M=function(){function l(l,e){this.elementRef=l,this.renderer=e}return Object.defineProperty(l.prototype,"id",{get:function(){return this._id},set:function(l){l||(l=this._createId(),this.renderer.setProperty(this.elementRef.nativeElement,"id",l)),this._id=l},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"top",{get:function(){return this.elementRef.nativeElement.offsetTop},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"focus",{get:function(){return this._focused},set:function(l){this._focused=Object(f.b)(l)},enumerable:!0,configurable:!0}),l.prototype.ngAfterContentInit=function(){this.label||(this.label=this.elementRef.nativeElement.textContent),this.id=this.elementRef.nativeElement.id},l.prototype._createId=function(){return"mcc_scrollspy_"+this.label.toLowerCase().replace(/[ ]+/gi,"_")},l}(),G=function(){function l(l){this.mccScrollspyService=l}return Object.defineProperty(l.prototype,"name",{set:function(l){this._name=l},enumerable:!0,configurable:!0}),l.prototype.ngAfterContentInit=function(){var l=this.items.map(function(l){return l});this.mccScrollspyService.create(this._name,l)},l}(),D=(u("V6/q"),window),I=function(){return function(){}}(),O=(u("cj8b"),u("cXXw"),function(){function l(l,e){this.mccScrolspyService=l,this.changeDetectorRef=e}return l.prototype.ngOnInit=function(){var l=this;this._subscription=this.mccScrolspyService.group("My Scrollspy").subscribe(function(e){l.items=e,l.changeDetectorRef.detectChanges()})},l.prototype.ngOnDestroy=function(){this._subscription&&!this._subscription.closed&&this._subscription.unsubscribe()},l.prototype.scrollTo=function(l){this.mccScrolspyService.scrollTo("My Scrollspy",l)},l}()),E=n.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{font-size:13px;line-height:22px}.menu[_ngcontent-%COMP%]{width:200px;background:#fff;position:fixed}.menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative}.menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:block;text-align:center}.menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;font-weight:300;line-height:23px}.menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.menu[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.focused[_ngcontent-%COMP%]{font-weight:600;text-decoration:underline}mat-card[_ngcontent-%COMP%]{margin-left:230px}"]],data:{}});function w(l){return n.Ib(0,[(l()(),n.rb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),n.rb(1,0,null,null,4,"a",[],null,[[null,"click"]],function(l,e,u){var n=!0;return"click"===e&&(n=!1!==l.component.scrollTo(l.context.$implicit.id)&&n),n},null,null)),n.Db(512,null,p.v,p.w,[n.s,n.t,n.k,n.E]),n.qb(3,278528,null,0,p.i,[p.v],{ngClass:[0,"ngClass"]},null),n.Cb(4,{focused:0}),(l()(),n.Gb(5,null,[""," "]))],function(l,e){var u=l(e,4,0,e.context.$implicit.focus);l(e,3,0,u)},function(l,e){l(e,5,0,e.context.$implicit.label)})}function N(l){return n.Ib(2,[(l()(),n.rb(0,0,null,null,6,"div",[["class","menu mat-elevation-z3"]],null,null,null,null,null)),(l()(),n.rb(1,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(l()(),n.rb(2,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Menu"])),(l()(),n.rb(4,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),n.gb(16777216,null,null,1,null,w)),n.qb(6,278528,null,0,p.j,[n.P,n.M,n.s],{ngForOf:[0,"ngForOf"]},null),(l()(),n.rb(7,0,null,null,60,"mat-card",[["class","mat-card"]],null,null,null,b.d,b.a)),n.qb(8,49152,null,0,g.a,[],null,null),(l()(),n.rb(9,0,null,0,58,"mat-card-content",[["class","mat-card-content"],["mccScrollspyGroup","My Scrollspy"]],null,null,null,null,null)),n.qb(10,1064960,null,1,G,[_],{name:[0,"name"]},null),n.Eb(603979776,1,{items:1}),n.qb(12,16384,null,0,g.b,[],null,null),(l()(),n.rb(13,0,null,null,2,"h3",[["id","lorem-ipsum"],["mccScrollspyItem",""]],null,null,null,null,null)),n.qb(14,1064960,[[1,4]],0,M,[n.k,n.E],null,null),(l()(),n.Gb(-1,null,["Lorem Ipsum"])),(l()(),n.rb(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh ipsum. Suspendisse ut felis justo. Nunc ullamcorper est nec nisl blandit, quis feugiat risus pulvinar. Cras egestas viverra bibendum. Ut lobortis rutrum mollis. Donec commodo condimentum diam, sit amet mollis nisl ultricies id. Sed laoreet vel neque sed luctus. Donec molestie lacinia erat, vitae posuere arcu consectetur nec. Sed ornare, nibh vitae gravida auctor, metus purus ultrices metus, accumsan vulputate odio urna eu felis. Aliquam ultrices ornare felis quis sagittis. Pellentesque pretium, magna vitae varius interdum, quam ipsum sollicitudin ante, id facilisis sapien massa ut quam. Suspendisse sapien dolor, luctus a imperdiet quis, viverra in odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus iaculis tortor at egestas egestas. Sed lobortis lacus vel odio consectetur convallis sit amet ut orci."])),(l()(),n.rb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Vestibulum dolor justo, efficitur porttitor consequat vitae, ultrices non arcu. Morbi faucibus hendrerit mi sit amet placerat. Donec congue pellentesque est, eget tristique purus convallis in. Cras sodales libero ac lacus scelerisque aliquet. Duis non sodales ante. Nulla a quam erat. Aenean fermentum, elit vitae placerat fringilla, nibh magna egestas dolor, vel semper turpis sapien fringilla eros."])),(l()(),n.rb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Praesent lobortis in mauris a porttitor. Aliquam at neque at neque finibus pellentesque. Etiam eu aliquam lectus. Morbi euismod eros ac magna viverra sollicitudin. Donec eu dapibus tellus. Vivamus dignissim magna et dictum placerat. Duis sed erat feugiat, ultricies felis at, egestas metus. Suspendisse semper dictum pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim pulvinar lorem accumsan tristique. Maecenas a augue turpis. Etiam elit sapien, suscipit ut blandit et, hendrerit eget sapien. Fusce a odio suscipit, scelerisque odio sit amet, suscipit purus."])),(l()(),n.rb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Etiam sit amet arcu vel massa ultrices iaculis. Nullam ac neque at massa pulvinar pellentesque. Phasellus facilisis volutpat odio id elementum. Quisque dictum, leo quis viverra imperdiet, augue lectus euismod lacus, id aliquet velit purus id elit. Nunc facilisis est sit amet tempor tempor. Nulla vel velit pretium, congue nisi quis, consectetur erat. Fusce rhoncus, lectus in rhoncus rhoncus, arcu leo mollis nulla, et sollicitudin nisi risus sed urna. Etiam sed lacinia nisl. Phasellus at leo eget metus scelerisque hendrerit at et sapien. Vestibulum ut varius sem. Morbi interdum enim nec erat aliquam aliquet. Integer vel elit sed lorem elementum varius vel quis ante. Praesent fermentum dui non rutrum congue."])),(l()(),n.rb(24,0,null,null,2,"h3",[["mccScrollspyItem",""]],null,null,null,null,null)),n.qb(25,1064960,[[1,4]],0,M,[n.k,n.E],{label:[0,"label"]},null),(l()(),n.Gb(-1,null,["Duis Cursus"])),(l()(),n.rb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Duis cursus, urna venenatis euismod dignissim, orci turpis dignissim justo, quis consequat mauris nisi a nibh. In bibendum leo a velit consequat, quis pharetra enim rutrum. Pellentesque porttitor mi nisi, ac tempus massa scelerisque et. In scelerisque sem tristique odio euismod cursus. Vivamus a dolor in mauris eleifend tincidunt vel vel dolor. Nam dui ipsum, malesuada et sem eu, blandit vestibulum tortor. Pellentesque mollis, tellus quis rutrum viverra, diam lacus congue libero, et varius nulla orci at lectus. Pellentesque dignissim sodales posuere. Nam commodo, arcu et eleifend faucibus, nisi ligula mattis orci, quis rhoncus tellus turpis non purus. Praesent eget luctus leo, et pretium elit. Nullam in accumsan enim. Pellentesque mattis felis mi, vel aliquam augue fringilla ac. Praesent aliquet pretium posuere. Mauris pharetra risus eget nibh facilisis, quis tincidunt ligula pretium. Curabitur facilisis interdum commodo. Nullam nec molestie diam."])),(l()(),n.rb(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Nullam feugiat eros non egestas dapibus. Etiam consectetur tempor ligula vitae scelerisque. Nunc eget mi et magna rutrum vestibulum. Maecenas quis magna sagittis, aliquam tortor in, bibendum dui. Nunc et bibendum turpis, in congue sem. Suspendisse mattis tincidunt lorem. Nullam mattis turpis vitae dignissim commodo. Integer eleifend convallis ante, in placerat tellus bibendum in. Sed rutrum nisi odio, eget laoreet mauris consequat fringilla. Vivamus vitae augue sit amet nibh tincidunt viverra id nec dui. Nullam in auctor tortor. Proin accumsan elit vitae tellus tincidunt congue. Proin ultricies gravida sagittis. Donec mollis nec lectus et tristique. Curabitur vel metus vitae nisl fringilla tempor."])),(l()(),n.rb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Cras diam ligula, egestas non blandit vitae, elementum nec diam. Donec a finibus velit, vel dapibus turpis. Aliquam cursus gravida nisi, vehicula venenatis turpis tincidunt sit amet. Donec sit amet hendrerit magna. Aliquam sit amet tincidunt justo, sed molestie erat. Sed neque velit, convallis eu aliquam ac, pulvinar in augue. Fusce porta, dolor nec pretium fringilla, sapien velit faucibus tellus, nec euismod purus lectus ac risus. Sed interdum congue risus vel posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin tincidunt nunc at sagittis varius. Quisque consectetur tristique scelerisque. Nunc sed tortor et sem condimentum tempus. "])),(l()(),n.rb(33,0,null,null,2,"h3",[["mccScrollspyItem",""]],null,null,null,null,null)),n.qb(34,1064960,[[1,4]],0,M,[n.k,n.E],null,null),(l()(),n.Gb(-1,null,["Ut Et Hendrerit"])),(l()(),n.rb(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Ut et hendrerit purus. Donec at mi at mauris efficitur venenatis molestie ut neque. Donec dui sem, laoreet eget ipsum sit amet, cursus interdum dolor. Nulla mollis malesuada ex, nec lacinia neque imperdiet at. Etiam lobortis laoreet ligula sed cursus. Duis dignissim enim et quam vulputate molestie. Integer tempor risus nisi, non blandit ipsum ultrices vitae. Cras rhoncus pellentesque nulla, et dignissim sapien. Quisque iaculis gravida felis, sit amet varius nunc. Proin dolor enim, lobortis sit amet tempus eget, aliquet quis urna. Nam lacinia dui sit amet massa tincidunt, in mattis velit fermentum. Praesent dapibus dolor sit amet magna porta, vitae eleifend neque condimentum. Fusce vestibulum ex sed orci porta rutrum. Nunc nec imperdiet nibh, vel accumsan justo. Suspendisse laoreet tellus vitae massa pretium volutpat."])),(l()(),n.rb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Suspendisse elementum et lacus sollicitudin iaculis. Nunc blandit porta ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eleifend, metus et varius tristique, metus sapien tincidunt massa, at blandit odio ipsum eu mi. Mauris viverra lectus diam, quis aliquam quam pretium eget. Cras mattis finibus felis, non iaculis lacus placerat ultricies. Curabitur enim quam, luctus ut lacus at, sodales porttitor sem. Suspendisse potenti. Sed vel molestie enim. Fusce sollicitudin arcu ut ante gravida, quis ullamcorper urna fermentum. "])),(l()(),n.rb(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Morbi suscipit ullamcorper vehicula. In posuere urna vel ipsum porta tristique. Donec nulla massa, tincidunt at aliquet ac, pellentesque mattis odio. Ut nibh ligula, auctor non maximus vel, ullamcorper malesuada lectus. Curabitur consectetur velit quis magna dapibus, dignissim porta dolor tincidunt. Etiam gravida massa vitae ornare condimentum. In vitae augue sollicitudin, sodales justo eu, euismod sem. Suspendisse elementum porta dui, vitae pretium neque elementum in. Pellentesque metus sapien, efficitur ac metus non, aliquet sagittis libero. Praesent vitae magna est. Suspendisse blandit efficitur imperdiet. Aliquam pellentesque ex eu turpis finibus, vel ornare risus finibus. Aliquam at lacus sit amet metus blandit cursus. Aliquam fringilla nec massa non cursus. Nulla facilisi. Praesent gravida neque in sagittis mattis."])),(l()(),n.rb(42,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Nulla hendrerit efficitur purus, nec volutpat ipsum tristique mattis. Etiam tempus orci vitae pulvinar vulputate. Ut diam enim, suscipit at consequat non, suscipit sed lectus. Nunc sodales metus sem, non feugiat dui mollis eget. Donec pulvinar libero in urna faucibus, a pulvinar nulla blandit. Cras dapibus et lorem sed tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed lectus ac odio suscipit dictum at in lacus. Duis varius dui turpis, vel faucibus quam egestas non."])),(l()(),n.rb(44,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["In porta ante sit amet turpis ornare, vel lobortis est ultrices. Morbi maximus vulputate velit, ut condimentum elit dignissim id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in sollicitudin purus. Pellentesque ex velit, gravida euismod blandit non, placerat nec lectus. Fusce lobortis gravida purus in laoreet. Fusce eget tristique libero. Donec volutpat odio vitae diam dapibus varius. Donec finibus fringilla massa quis dapibus. Phasellus sed elit eget tellus fringilla tincidunt et sed dolor. In varius blandit congue. Donec suscipit pulvinar mi ut faucibus."])),(l()(),n.rb(46,0,null,null,2,"h3",[["mccScrollspyItem",""]],null,null,null,null,null)),n.qb(47,1064960,[[1,4]],0,M,[n.k,n.E],null,null),(l()(),n.Gb(-1,null,["Praesent"])),(l()(),n.rb(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Praesent vel interdum leo. Nulla non massa consequat, fringilla nisi aliquet, vehicula lectus. In ultricies felis in orci aliquet viverra. Curabitur accumsan sapien lacus, quis lacinia elit sollicitudin feugiat. Sed neque leo, auctor vel tempus sit amet, dictum id neque. Nunc quis est sed leo lobortis faucibus in et nulla. Mauris sapien magna, vulputate maximus arcu id, varius sagittis lacus."])),(l()(),n.rb(51,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Ut erat nibh, euismod eu sollicitudin elementum, bibendum eget ipsum. In bibendum urna a nisi placerat vulputate. Praesent hendrerit in urna maximus maximus. Mauris mattis odio non lorem sagittis mollis. Integer blandit, nisl hendrerit facilisis ornare, massa velit placerat libero, at venenatis lorem lorem fermentum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue ultricies quam a tempor. Pellentesque vulputate sit amet est nec imperdiet. Nam consequat feugiat ex, a iaculis dui finibus sed. Suspendisse vehicula vel nibh non iaculis. Duis non congue magna, eget aliquet arcu."])),(l()(),n.rb(53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Duis ut fermentum lectus, at volutpat tellus. Duis erat ex, vulputate tincidunt vehicula non, placerat nec dolor. Etiam rutrum, elit ac tristique ultricies, dui arcu auctor sapien, quis efficitur urna velit porta sapien. Vivamus nec venenatis nisl, nec faucibus augue. Morbi faucibus egestas congue. Vivamus convallis eu est quis cursus. Vivamus quam lectus, sodales sed egestas vel, blandit eu sem. Donec quam ex, scelerisque in arcu at, maximus pretium enim."])),(l()(),n.rb(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Mauris consequat leo ut metus commodo, eget sollicitudin sapien vulputate. Praesent sit amet ornare magna. Phasellus porta odio at volutpat efficitur. Suspendisse sodales faucibus ipsum, non suscipit diam euismod et. Sed interdum nisl quis erat lobortis ullamcorper. Proin sed molestie sapien, non pretium leo. Fusce at maximus velit. Fusce egestas eros quis lorem dapibus accumsan. Sed suscipit turpis nec eros dictum, id blandit turpis finibus. Praesent tempus eget ligula quis congue. Pellentesque id fermentum mi. Pellentesque bibendum mi enim, sit amet finibus quam rutrum quis. Vivamus fringilla, nisi sed auctor fringilla, quam massa varius sem, in suscipit nisi augue sed nisi."])),(l()(),n.rb(57,0,null,null,2,"h3",[["mccScrollspyItem",""]],null,null,null,null,null)),n.qb(58,1064960,[[1,4]],0,M,[n.k,n.E],null,null),(l()(),n.Gb(-1,null,["Curabitur"])),(l()(),n.rb(60,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Curabitur eu pellentesque augue. Vestibulum at magna vel mi egestas hendrerit. Sed maximus nunc massa, id eleifend neque fringilla eu. Sed vitae euismod ante, id feugiat tortor. Nunc risus ex, viverra dignissim dictum eget, mattis sit amet orci. Nam ullamcorper eros quis augue efficitur sollicitudin. Aliquam vitae fermentum leo. Integer eget diam lobortis nulla mollis faucibus quis at diam."])),(l()(),n.rb(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Nam est est, tincidunt et felis nec, porttitor feugiat massa. Donec pulvinar erat eget elit ullamcorper hendrerit. Donec tempor lorem augue, vitae mattis nisi auctor vel. Proin vel felis a dolor congue fringilla ut a dui. Nulla dignissim egestas velit. Maecenas ac turpis malesuada, malesuada justo ac, sagittis mauris. Curabitur commodo eget massa nec dapibus. Sed sed lectus id enim dictum lobortis. Cras interdum ipsum sem, non rutrum velit porta sit amet. Donec id nisi magna. Suspendisse vel arcu nec odio volutpat varius nec vel lacus. Curabitur molestie lectus ut congue dignissim. Quisque pharetra vel neque vel dapibus. Cras neque felis, consequat vitae fringilla ac, fringilla in ex. Nullam bibendum viverra lobortis. Morbi viverra in dolor eget fringilla."])),(l()(),n.rb(64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["In hac habitasse platea dictumst. Vestibulum finibus pellentesque magna et porta. Nam accumsan placerat erat sed vestibulum. In facilisis nisl id arcu sodales vestibulum. Quisque ullamcorper consequat odio eget viverra. Pellentesque mollis purus nec lectus efficitur, vitae laoreet dui dictum. Vestibulum mattis quam nec suscipit viverra. Praesent a odio ut arcu egestas porttitor. Nam vitae blandit diam. Proin scelerisque orci eu bibendum tincidunt. Praesent malesuada vitae ex ac scelerisque. Pellentesque nec rutrum velit. Sed ullamcorper diam vel urna cursus aliquam."])),(l()(),n.rb(66,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Vivamus id pharetra nisl. Sed maximus, neque faucibus malesuada venenatis, risus leo pellentesque velit, a venenatis augue leo ut augue. Sed ut blandit nisi, sed mattis massa. Cras sed gravida mauris. Duis blandit magna in arcu blandit venenatis. Ut eget euismod urna. Vestibulum a augue sed augue malesuada pretium. Aliquam sit amet orci eu diam dictum mattis. Duis vulputate velit et purus sodales tincidunt. Maecenas tristique sapien vitae luctus egestas. Sed nec molestie metus. Fusce sollicitudin auctor consequat. Praesent faucibus orci in urna fermentum, fermentum venenatis massa pellentesque. Mauris vestibulum vitae sem placerat euismod."]))],function(l,e){l(e,6,0,e.component.items),l(e,10,0,"My Scrollspy"),l(e,25,0,"Change Label")},null)}var j=function(){return function(){}}(),k=n.pb({encapsulation:0,styles:[[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"]],data:{}});function A(l){return n.Ib(0,[(l()(),n.Gb(-1,null,[" Overview "]))],null,null)}function V(l){return n.Ib(0,[(l()(),n.Gb(-1,null,[" API "]))],null,null)}function F(l){return n.Ib(0,[(l()(),n.Gb(-1,null,[" Examples "]))],null,null)}function L(l){return n.Ib(2,[(l()(),n.rb(0,0,null,null,4,"h1",[["class","page-title"]],null,null,null,null,null)),(l()(),n.rb(1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,s.b,s.a)),n.qb(2,9158656,null,0,a.b,[n.k,a.d,[8,null],[2,a.a]],null,null),(l()(),n.Gb(-1,0,["view_list"])),(l()(),n.Gb(-1,null,[" Scrollspy\n"])),(l()(),n.rb(5,0,null,null,4,"p",[["class","page-subtitle"]],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Example of how to use the "])),(l()(),n.rb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["mcc-scrollspy"])),(l()(),n.Gb(-1,null,[" component"])),(l()(),n.rb(10,0,null,null,36,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,r.c,r.b)),n.qb(11,3325952,null,1,o.f,[n.k,n.h,[2,o.a]],null,null),n.Eb(603979776,1,{_tabs:1}),(l()(),n.rb(13,16777216,null,null,19,"mat-tab",[],null,null,null,r.d,r.a)),n.qb(14,770048,[[1,4]],2,o.c,[n.P],null,null),n.Eb(603979776,2,{templateLabel:0}),n.Eb(335544320,3,{_explicitContent:0}),(l()(),n.gb(16777216,null,0,1,null,A)),n.qb(18,16384,[[2,4]],0,o.h,[n.M,n.P],null,null),(l()(),n.rb(19,0,null,0,11,"mat-grid-list",[["class","mat-grid-list"],["cols","4"],["rowHeight","70px"]],null,null,null,c.c,c.a)),n.qb(20,2211840,null,1,m.a,[n.k,[2,d.c]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),n.Eb(603979776,4,{_tiles:1}),n.Db(2048,null,m.e,null,[m.a]),(l()(),n.rb(23,0,null,0,3,"mat-grid-tile",[["class","mat-grid-tile"],["colspan","3"]],null,null,null,c.d,c.b)),n.qb(24,49152,[[4,4]],0,m.c,[n.k,[2,m.e]],{colspan:[0,"colspan"]},null),(l()(),n.rb(25,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["MccScrollspy"])),(l()(),n.rb(27,0,null,0,3,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,c.d,c.b)),n.qb(28,49152,[[4,4]],0,m.c,[n.k,[2,m.e]],null,null),(l()(),n.rb(29,0,null,0,1,"a",[["href","https://github.com/tiaguinho/material-community-components/tree/master/src/lib/scrollspy"],["target","_blank"]],null,null,null,null,null)),(l()(),n.rb(30,0,null,null,0,"img",[["alt","Source Code"],["class","source-code"],["src","https://tiaguinho.github.io/material-community-components/demo-app/assets/img/source-code.png"]],null,null,null,null,null)),(l()(),n.rb(31,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),n.Gb(-1,null,["Scrollspy was created to link any point of a document that you want and create a sidebar navigation for that."])),(l()(),n.rb(33,16777216,null,null,5,"mat-tab",[],null,null,null,r.d,r.a)),n.qb(34,770048,[[1,4]],2,o.c,[n.P],null,null),n.Eb(603979776,5,{templateLabel:0}),n.Eb(335544320,6,{_explicitContent:0}),(l()(),n.gb(16777216,null,0,1,null,V)),n.qb(38,16384,[[5,4]],0,o.h,[n.M,n.P],null,null),(l()(),n.rb(39,16777216,null,null,7,"mat-tab",[["label","Examples"]],null,null,null,r.d,r.a)),n.qb(40,770048,[[1,4]],2,o.c,[n.P],{textLabel:[0,"textLabel"]},null),n.Eb(603979776,7,{templateLabel:0}),n.Eb(335544320,8,{_explicitContent:0}),(l()(),n.gb(16777216,null,0,1,null,F)),n.qb(44,16384,[[7,4]],0,o.h,[n.M,n.P],null,null),(l()(),n.rb(45,0,null,0,1,"app-scrollspy-examples",[],null,null,null,N,E)),n.qb(46,245760,null,0,O,[_,n.h],null,null)],function(l,e){l(e,2,0),l(e,14,0),l(e,20,0,"4","70px"),l(e,24,0,"3"),l(e,34,0),l(e,40,0,"Examples"),l(e,46,0)},function(l,e){l(e,1,0,n.Ab(e,2).inline,"primary"!==n.Ab(e,2).color&&"accent"!==n.Ab(e,2).color&&"warn"!==n.Ab(e,2).color),l(e,10,0,n.Ab(e,11).dynamicHeight,"below"===n.Ab(e,11).headerPosition)})}function R(l){return n.Ib(0,[(l()(),n.rb(0,0,null,null,1,"app-scrollspy",[],null,null,null,L,k)),n.qb(1,49152,null,0,j,[],null,null)],null,null)}var U=n.nb("app-scrollspy",j,R,{},{},[]),Y=u("M2Lx"),z=u("ZYCi"),T=u("dWZg"),H=u("qAlS"),Q=u("Wf4p"),W=u("ZYjt");u("ihYY"),u("YSh2"),u("K9Ia"),u("p0ib"),u("VnD/"),u("ny24"),u("ad02"),u("67Y/"),u("t9fZ"),u("p0Sj");var Z=function(){return function(){}}(),X=u("4c35"),$=u("lLAP");u.d(e,"ScrollspyModuleNgFactory",function(){return J});var J=n.ob(i,[],function(l){return n.xb([n.yb(512,n.j,n.bb,[[8,[t.a,U]],[3,n.j],n.x]),n.yb(4608,p.m,p.l,[n.u,[2,p.A]]),n.yb(135680,_,_,["Window"]),n.yb(4608,Y.c,Y.c,[]),n.yb(1073742336,p.c,p.c,[]),n.yb(1073742336,z.m,z.m,[[2,z.r],[2,z.k]]),n.yb(1073742336,d.a,d.a,[]),n.yb(1073742336,T.b,T.b,[]),n.yb(1073742336,H.d,H.d,[]),n.yb(1073742336,H.b,H.b,[]),n.yb(1073742336,I,I,[]),n.yb(1073742336,Q.e,Q.e,[[2,Q.b],[2,W.f]]),n.yb(1073742336,g.d,g.d,[]),n.yb(1073742336,a.c,a.c,[]),n.yb(1073742336,Q.f,Q.f,[]),n.yb(1073742336,m.b,m.b,[]),n.yb(1073742336,Z,Z,[]),n.yb(1073742336,X.d,X.d,[]),n.yb(1073742336,Q.h,Q.h,[]),n.yb(1073742336,Y.d,Y.d,[]),n.yb(1073742336,$.a,$.a,[]),n.yb(1073742336,o.k,o.k,[]),n.yb(1073742336,i,i,[]),n.yb(256,"Window",D,[]),n.yb(1024,z.i,function(){return[[{path:"",component:j}]]},[])])})}}]);