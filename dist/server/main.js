(()=>{"use strict";var e={785:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AppController=void 0;const c=r(481),i=r(672);let l=class{constructor(e){this.appService=e}getHello(){return this.appService.getHello()}};o([(0,c.Get)(),n("design:type",Function),n("design:paramtypes",[]),n("design:returntype",String)],l.prototype,"getHello",null),l=o([(0,c.Controller)(),n("design:paramtypes",[i.AppService])],l),t.AppController=l},499:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.AppModule=void 0;const n=r(481),c=r(785),i=r(672);let l=class{};l=o([(0,n.Module)({imports:[],controllers:[c.AppController],providers:[i.AppService]})],l),t.AppModule=l},672:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.AppService=void 0;const n=r(481);let c=class{getHello(){return"Salut tout le monde!"}};c=o([(0,n.Injectable)()],c),t.AppService=c},245:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,c){function i(e){try{p(o.next(e))}catch(e){c(e)}}function l(e){try{p(o.throw(e))}catch(e){c(e)}}function p(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}p((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=r(143),c=r(890),i=r(499);!function(){o(this,void 0,void 0,(function*(){const e=yield n.NestFactory.create(i.AppModule,new c.FastifyAdapter);yield e.listen(3e3)}))}()},481:e=>{e.exports=require("@nestjs/common")},143:e=>{e.exports=require("@nestjs/core")},890:e=>{e.exports=require("@nestjs/platform-fastify")}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,r),c.exports}(245)})();