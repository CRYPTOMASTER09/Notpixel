const _0x30e765=_0x4f8e;function _0x31e5(){const _0x1068c4=['30qAfKeM','Request\x20Header\x20:\x20','46248ClPkKP','randomUserAgent','1671048Lahpxp','stringify','1007682WgonpE','error','status','Error\x20:\x20','generateHeaders','data','\x20-\x20','Authorization','json','191HhJUUS','GET','message','Request\x20Body\x20:\x20','9022PLGLiP','4471407dBQbxh','418362ISrfkS','url','info','text','\x20:\x20','11niVZaC','application/json','statusText','initData\x20','9682910peneVn','proxy','httpsAgent','headers','get','651znuIRq','body','application/json,\x20text/plain,\x20*/*','Detect\x20API\x20change\x20Stopping\x20BOT..'];_0x31e5=function(){return _0x1068c4;};return _0x31e5();}(function(_0xc5bf89,_0x2d6756){const _0x42dcb1=_0x4f8e,_0x123e8d=_0xc5bf89();while(!![]){try{const _0x3ea756=-parseInt(_0x42dcb1(0xf8))/0x1*(parseInt(_0x42dcb1(0xd5))/0x2)+-parseInt(_0x42dcb1(0xd7))/0x3+-parseInt(_0x42dcb1(0xed))/0x4+parseInt(_0x42dcb1(0xe9))/0x5*(parseInt(_0x42dcb1(0xef))/0x6)+parseInt(_0x42dcb1(0xe5))/0x7*(-parseInt(_0x42dcb1(0xeb))/0x8)+parseInt(_0x42dcb1(0xd6))/0x9+-parseInt(_0x42dcb1(0xe0))/0xa*(-parseInt(_0x42dcb1(0xdc))/0xb);if(_0x3ea756===_0x2d6756)break;else _0x123e8d['push'](_0x123e8d['shift']());}catch(_0x187404){_0x123e8d['push'](_0x123e8d['shift']());}}}(_0x31e5,0x7e0fa));import _0x5199f4 from'node-fetch';import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import _0x281d91 from'../utils/logger.js';function _0x4f8e(_0x370d2c,_0x3bb6f3){const _0x31e5ff=_0x31e5();return _0x4f8e=function(_0x4f8eb7,_0x2633e9){_0x4f8eb7=_0x4f8eb7-0xd3;let _0x32f956=_0x31e5ff[_0x4f8eb7];return _0x32f956;},_0x4f8e(_0x370d2c,_0x3bb6f3);}export class API{constructor(_0x23a95c,_0x15f0f8,_0x10687c){const _0x3811ce=_0x4f8e;this[_0x3811ce(0xd8)]=_0x10687c,this['ua']=Helper[_0x3811ce(0xec)](),this['query']=_0x23a95c,this[_0x3811ce(0xe1)]=_0x15f0f8;}[_0x30e765(0xf3)](_0x6719d5=this['query']){const _0x282c80=_0x30e765,_0x6f55a6={'Accept':_0x282c80(0xe7),'Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':_0x282c80(0xdd),'User-Agent':this['ua']};return _0x6719d5&&(_0x6f55a6[_0x282c80(0xf6)]=_0x282c80(0xdf)+_0x6719d5),_0x6f55a6;}async['fetch'](_0x5b8138,_0x16e7b9='GET',_0x50b1bb,_0x5cef44={},_0x275491={}){const _0x1cac09=_0x30e765;try{const _0x36beaa=''+this['url']+_0x5b8138,_0x449547={..._0x275491,...this[_0x1cac09(0xf3)](_0x50b1bb)};_0x281d91[_0x1cac09(0xd9)](_0x16e7b9+_0x1cac09(0xdb)+_0x36beaa+'\x20'+(this[_0x1cac09(0xe1)]?this[_0x1cac09(0xe1)]:'')),_0x281d91['info'](_0x1cac09(0xea)+JSON[_0x1cac09(0xee)](_0x449547));const _0x22a49a={'method':_0x16e7b9,'headers':_0x449547,'referrer':'https://app.notpx.app/'};this[_0x1cac09(0xe1)]&&(_0x22a49a[_0x1cac09(0xe2)]=new HttpsProxyAgent(this[_0x1cac09(0xe1)]));_0x16e7b9!==_0x1cac09(0xf9)&&(_0x22a49a[_0x1cac09(0xe6)]=JSON['stringify'](_0x5cef44),_0x281d91['info'](_0x1cac09(0xd4)+JSON[_0x1cac09(0xee)](_0x5cef44)));const _0x50f1bd=await _0x5199f4(_0x36beaa,_0x22a49a);if(_0x50f1bd['ok']){const _0x11019d=_0x50f1bd[_0x1cac09(0xe3)][_0x1cac09(0xe4)]('content-type');let _0x2dd75b;return _0x11019d&&_0x11019d['includes']('application/json')?(_0x2dd75b=await _0x50f1bd[_0x1cac09(0xf7)](),_0x2dd75b[_0x1cac09(0xf1)]=_0x50f1bd['status']):_0x2dd75b={'status':_0x50f1bd[_0x1cac09(0xf1)],'message':await _0x50f1bd[_0x1cac09(0xda)]()},_0x50f1bd['ok']&&(_0x2dd75b[_0x1cac09(0xf1)]=0xc8),_0x281d91['info']('Response\x20Data\x20:\x20'+JSON[_0x1cac09(0xee)](_0x2dd75b)),_0x2dd75b;}else throw _0x50f1bd;}catch(_0x57d241){_0x281d91[_0x1cac09(0xf0)](_0x1cac09(0xf2)+_0x57d241[_0x1cac09(0xd3)]);if(_0x57d241['status']==0x193)return{'status':0x193,..._0x57d241['response'][_0x1cac09(0xf4)]};if(_0x57d241[_0x1cac09(0xf1)]==0x1f7||_0x57d241[_0x1cac09(0xf1)]==0x194)throw Error(_0x1cac09(0xe8));else throw Error(_0x57d241[_0x1cac09(0xf1)]+_0x1cac09(0xf5)+_0x57d241[_0x1cac09(0xde)]);}}}