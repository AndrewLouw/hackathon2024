"use strict";(self.webpackChunkui_react=self.webpackChunkui_react||[]).push([[8561],{93519:(e,t,s)=>{var i=s(5976),r=s(16830);class o extends i.JT{constructor(e){super(),this._editor=e,this._register(this._editor.onMouseDown((e=>{const t=this._editor.getOption(117);t>=0&&6===e.target.type&&e.target.position.column>=t&&this._editor.updateOptions({stopRenderingLineAfter:-1})})))}}o.ID="editor.contrib.longLinesHelper",(0,r._K)(o.ID,o,2)},27753:(e,t,s)=>{s.d(t,{O:()=>C});var i,r=s(96250),o=s(85152),n=s(4669),a=s(59365),d=s(5976),l=s(16830),c=s(24314),h=s(72545),u=s(63580),g=s(93983),m=s(50988),p=s(65321),_=function(e,t,s,i){var r,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n},f=function(e,t){return function(s,i){t(s,i,e)}};let C=i=class{static get(e){return e.getContribution(i.ID)}constructor(e,t,s){this._openerService=s,this._messageWidget=new d.XK,this._messageListeners=new d.SL,this._mouseOverMessage=!1,this._editor=e,this._visible=i.MESSAGE_VISIBLE.bindTo(t)}dispose(){var e;null===(e=this._message)||void 0===e||e.dispose(),this._messageListeners.dispose(),this._messageWidget.dispose(),this._visible.reset()}showMessage(e,t){let s;(0,o.Z9)((0,a.Fr)(e)?e.value:e),this._visible.set(!0),this._messageWidget.clear(),this._messageListeners.clear(),this._message=(0,a.Fr)(e)?(0,r.ap)(e,{actionHandler:{callback:t=>{this.closeMessage(),(0,h.N)(this._openerService,t,(0,a.Fr)(e)?e.isTrusted:void 0)},disposables:this._messageListeners}}):void 0,this._messageWidget.value=new S(this._editor,t,"string"==typeof e?e:this._message.element),this._messageListeners.add(n.ju.debounce(this._editor.onDidBlurEditorText,((e,t)=>t),0)((()=>{this._mouseOverMessage||this._messageWidget.value&&p.jg(p.vY(),this._messageWidget.value.getDomNode())||this.closeMessage()}))),this._messageListeners.add(this._editor.onDidChangeCursorPosition((()=>this.closeMessage()))),this._messageListeners.add(this._editor.onDidDispose((()=>this.closeMessage()))),this._messageListeners.add(this._editor.onDidChangeModel((()=>this.closeMessage()))),this._messageListeners.add(p.nm(this._messageWidget.value.getDomNode(),p.tw.MOUSE_ENTER,(()=>this._mouseOverMessage=!0),!0)),this._messageListeners.add(p.nm(this._messageWidget.value.getDomNode(),p.tw.MOUSE_LEAVE,(()=>this._mouseOverMessage=!1),!0)),this._messageListeners.add(this._editor.onMouseMove((e=>{e.target.position&&(s?s.containsPosition(e.target.position)||this.closeMessage():s=new c.e(t.lineNumber-3,1,e.target.position.lineNumber+3,1))})))}closeMessage(){this._visible.reset(),this._messageListeners.clear(),this._messageWidget.value&&this._messageListeners.add(S.fadeOut(this._messageWidget.value))}};C.ID="editor.contrib.messageController",C.MESSAGE_VISIBLE=new g.uy("messageVisible",!1,u.NC("messageVisible","Whether the editor is currently showing an inline message")),C=i=_([f(1,g.i6),f(2,m.v)],C);const v=l._l.bindToContribution(C.get);(0,l.fK)(new v({id:"leaveEditorMessage",precondition:C.MESSAGE_VISIBLE,handler:e=>e.closeMessage(),kbOpts:{weight:130,primary:9}}));class S{static fadeOut(e){const t=()=>{e.dispose(),clearTimeout(s),e.getDomNode().removeEventListener("animationend",t)},s=setTimeout(t,110);return e.getDomNode().addEventListener("animationend",t),e.getDomNode().classList.add("fadeOut"),{dispose:t}}constructor(e,{lineNumber:t,column:s},i){this.allowEditorOverflow=!0,this.suppressMouseDown=!1,this._editor=e,this._editor.revealLinesInCenterIfOutsideViewport(t,t,0),this._position={lineNumber:t,column:s},this._domNode=document.createElement("div"),this._domNode.classList.add("monaco-editor-overlaymessage"),this._domNode.style.marginLeft="-6px";const r=document.createElement("div");r.classList.add("anchor","top"),this._domNode.appendChild(r);const o=document.createElement("div");"string"==typeof i?(o.classList.add("message"),o.textContent=i):(i.classList.add("message"),o.appendChild(i)),this._domNode.appendChild(o);const n=document.createElement("div");n.classList.add("anchor","below"),this._domNode.appendChild(n),this._editor.addContentWidget(this),this._domNode.classList.add("fadeIn")}dispose(){this._editor.removeContentWidget(this)}getId(){return"messageoverlay"}getDomNode(){return this._domNode}getPosition(){return{position:this._position,preference:[1,2],positionAffinity:1}}afterRender(e){this._domNode.classList.toggle("below",2===e)}}(0,l._K)(C.ID,C,4)},77061:(e,t,s)=>{var i,r=s(85152),o=s(15393),n=s(22258),a=s(5976),d=s(16830),l=s(28108),c=s(24314),h=s(3860),u=s(29102),g=s(78835),m=s(63580),p=s(84144),_=s(93983),f=s(71922),C=s(14495),v=s(72065),S=function(e,t,s,i){var r,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n},b=function(e,t){return function(s,i){t(s,i,e)}};function M(e,t){const s=t.filter((t=>!e.find((e=>e.equals(t)))));if(s.length>=1){const e=s.map((e=>`line ${e.viewState.position.lineNumber} column ${e.viewState.position.column}`)).join(", "),t=1===s.length?m.NC("cursorAdded","Cursor added: {0}",e):m.NC("cursorsAdded","Cursors added: {0}",e);(0,r.i7)(t)}}class w extends d.R6{constructor(){super({id:"editor.action.insertCursorAbove",label:m.NC("mutlicursor.insertAbove","Add Cursor Above"),alias:"Add Cursor Above",precondition:void 0,kbOpts:{kbExpr:u.u.editorTextFocus,primary:2576,linux:{primary:1552,secondary:[3088]},weight:100},menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miInsertCursorAbove",comment:["&& denotes a mnemonic"]},"&&Add Cursor Above"),order:2}})}run(e,t,s){if(!t.hasModel())return;let i=!0;s&&!1===s.logicalLine&&(i=!1);const r=t._getViewModel();if(r.cursorConfig.readOnly)return;r.model.pushStackElement();const o=r.getCursorStates();r.setCursorStates(s.source,3,l.P.addCursorUp(r,o,i)),r.revealTopMostCursor(s.source),M(o,r.getCursorStates())}}class y extends d.R6{constructor(){super({id:"editor.action.insertCursorBelow",label:m.NC("mutlicursor.insertBelow","Add Cursor Below"),alias:"Add Cursor Below",precondition:void 0,kbOpts:{kbExpr:u.u.editorTextFocus,primary:2578,linux:{primary:1554,secondary:[3090]},weight:100},menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miInsertCursorBelow",comment:["&& denotes a mnemonic"]},"A&&dd Cursor Below"),order:3}})}run(e,t,s){if(!t.hasModel())return;let i=!0;s&&!1===s.logicalLine&&(i=!1);const r=t._getViewModel();if(r.cursorConfig.readOnly)return;r.model.pushStackElement();const o=r.getCursorStates();r.setCursorStates(s.source,3,l.P.addCursorDown(r,o,i)),r.revealBottomMostCursor(s.source),M(o,r.getCursorStates())}}class N extends d.R6{constructor(){super({id:"editor.action.insertCursorAtEndOfEachLineSelected",label:m.NC("mutlicursor.insertAtEndOfEachLineSelected","Add Cursors to Line Ends"),alias:"Add Cursors to Line Ends",precondition:void 0,kbOpts:{kbExpr:u.u.editorTextFocus,primary:1575,weight:100},menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miInsertCursorAtEndOfEachLineSelected",comment:["&& denotes a mnemonic"]},"Add C&&ursors to Line Ends"),order:4}})}getCursorsForSelection(e,t,s){if(!e.isEmpty()){for(let i=e.startLineNumber;i<e.endLineNumber;i++){const e=t.getLineMaxColumn(i);s.push(new h.Y(i,e,i,e))}e.endColumn>1&&s.push(new h.Y(e.endLineNumber,e.endColumn,e.endLineNumber,e.endColumn))}}run(e,t){if(!t.hasModel())return;const s=t.getModel(),i=t.getSelections(),r=t._getViewModel(),o=r.getCursorStates(),n=[];i.forEach((e=>this.getCursorsForSelection(e,s,n))),n.length>0&&t.setSelections(n),M(o,r.getCursorStates())}}class x extends d.R6{constructor(){super({id:"editor.action.addCursorsToBottom",label:m.NC("mutlicursor.addCursorsToBottom","Add Cursors To Bottom"),alias:"Add Cursors To Bottom",precondition:void 0})}run(e,t){if(!t.hasModel())return;const s=t.getSelections(),i=t.getModel().getLineCount(),r=[];for(let e=s[0].startLineNumber;e<=i;e++)r.push(new h.Y(e,s[0].startColumn,e,s[0].endColumn));const o=t._getViewModel(),n=o.getCursorStates();r.length>0&&t.setSelections(r),M(n,o.getCursorStates())}}class T extends d.R6{constructor(){super({id:"editor.action.addCursorsToTop",label:m.NC("mutlicursor.addCursorsToTop","Add Cursors To Top"),alias:"Add Cursors To Top",precondition:void 0})}run(e,t){if(!t.hasModel())return;const s=t.getSelections(),i=[];for(let e=s[0].startLineNumber;e>=1;e--)i.push(new h.Y(e,s[0].startColumn,e,s[0].endColumn));const r=t._getViewModel(),o=r.getCursorStates();i.length>0&&t.setSelections(i),M(o,r.getCursorStates())}}class L{constructor(e,t,s){this.selections=e,this.revealRange=t,this.revealScrollType=s}}class O{static create(e,t){if(!e.hasModel())return null;const s=t.getState();if(!e.hasTextFocus()&&s.isRevealed&&s.searchString.length>0)return new O(e,t,!1,s.searchString,s.wholeWord,s.matchCase,null);let i,r,o=!1;const n=e.getSelections();1===n.length&&n[0].isEmpty()?(o=!0,i=!0,r=!0):(i=s.wholeWord,r=s.matchCase);const a=e.getSelection();let d,l=null;if(a.isEmpty()){const t=e.getConfiguredWordAtPosition(a.getStartPosition());if(!t)return null;d=t.word,l=new h.Y(a.startLineNumber,t.startColumn,a.startLineNumber,t.endColumn)}else d=e.getModel().getValueInRange(a).replace(/\r\n/g,"\n");return new O(e,t,o,d,i,r,l)}constructor(e,t,s,i,r,o,n){this._editor=e,this.findController=t,this.isDisconnectedFromFindController=s,this.searchText=i,this.wholeWord=r,this.matchCase=o,this.currentMatch=n}addSelectionToNextFindMatch(){if(!this._editor.hasModel())return null;const e=this._getNextMatch();if(!e)return null;const t=this._editor.getSelections();return new L(t.concat(e),e,0)}moveSelectionToNextFindMatch(){if(!this._editor.hasModel())return null;const e=this._getNextMatch();if(!e)return null;const t=this._editor.getSelections();return new L(t.slice(0,t.length-1).concat(e),e,0)}_getNextMatch(){if(!this._editor.hasModel())return null;if(this.currentMatch){const e=this.currentMatch;return this.currentMatch=null,e}this.findController.highlightFindOptions();const e=this._editor.getSelections(),t=e[e.length-1],s=this._editor.getModel().findNextMatch(this.searchText,t.getEndPosition(),!1,this.matchCase,this.wholeWord?this._editor.getOption(131):null,!1);return s?new h.Y(s.range.startLineNumber,s.range.startColumn,s.range.endLineNumber,s.range.endColumn):null}addSelectionToPreviousFindMatch(){if(!this._editor.hasModel())return null;const e=this._getPreviousMatch();if(!e)return null;const t=this._editor.getSelections();return new L(t.concat(e),e,0)}moveSelectionToPreviousFindMatch(){if(!this._editor.hasModel())return null;const e=this._getPreviousMatch();if(!e)return null;const t=this._editor.getSelections();return new L(t.slice(0,t.length-1).concat(e),e,0)}_getPreviousMatch(){if(!this._editor.hasModel())return null;if(this.currentMatch){const e=this.currentMatch;return this.currentMatch=null,e}this.findController.highlightFindOptions();const e=this._editor.getSelections(),t=e[e.length-1],s=this._editor.getModel().findPreviousMatch(this.searchText,t.getStartPosition(),!1,this.matchCase,this.wholeWord?this._editor.getOption(131):null,!1);return s?new h.Y(s.range.startLineNumber,s.range.startColumn,s.range.endLineNumber,s.range.endColumn):null}selectAll(e){if(!this._editor.hasModel())return[];this.findController.highlightFindOptions();const t=this._editor.getModel();return e?t.findMatches(this.searchText,e,!1,this.matchCase,this.wholeWord?this._editor.getOption(131):null,!1,1073741824):t.findMatches(this.searchText,!0,!1,this.matchCase,this.wholeWord?this._editor.getOption(131):null,!1,1073741824)}}class D extends a.JT{static get(e){return e.getContribution(D.ID)}constructor(e){super(),this._sessionDispose=this._register(new a.SL),this._editor=e,this._ignoreSelectionChange=!1,this._session=null}dispose(){this._endSession(),super.dispose()}_beginSessionIfNeeded(e){if(!this._session){const t=O.create(this._editor,e);if(!t)return;this._session=t;const s={searchString:this._session.searchText};this._session.isDisconnectedFromFindController&&(s.wholeWordOverride=1,s.matchCaseOverride=1,s.isRegexOverride=2),e.getState().change(s,!1),this._sessionDispose.add(this._editor.onDidChangeCursorSelection((e=>{this._ignoreSelectionChange||this._endSession()}))),this._sessionDispose.add(this._editor.onDidBlurEditorText((()=>{this._endSession()}))),this._sessionDispose.add(e.getState().onFindReplaceStateChange((e=>{(e.matchCase||e.wholeWord)&&this._endSession()})))}}_endSession(){if(this._sessionDispose.clear(),this._session&&this._session.isDisconnectedFromFindController){const e={wholeWordOverride:0,matchCaseOverride:0,isRegexOverride:0};this._session.findController.getState().change(e,!1)}this._session=null}_setSelections(e){this._ignoreSelectionChange=!0,this._editor.setSelections(e),this._ignoreSelectionChange=!1}_expandEmptyToWord(e,t){if(!t.isEmpty())return t;const s=this._editor.getConfiguredWordAtPosition(t.getStartPosition());return s?new h.Y(t.startLineNumber,s.startColumn,t.startLineNumber,s.endColumn):t}_applySessionResult(e){e&&(this._setSelections(e.selections),e.revealRange&&this._editor.revealRangeInCenterIfOutsideViewport(e.revealRange,e.revealScrollType))}getSession(e){return this._session}addSelectionToNextFindMatch(e){if(this._editor.hasModel()){if(!this._session){const t=this._editor.getSelections();if(t.length>1){const s=e.getState().matchCase;if(!P(this._editor.getModel(),t,s)){const e=this._editor.getModel(),s=[];for(let i=0,r=t.length;i<r;i++)s[i]=this._expandEmptyToWord(e,t[i]);return void this._editor.setSelections(s)}}}this._beginSessionIfNeeded(e),this._session&&this._applySessionResult(this._session.addSelectionToNextFindMatch())}}addSelectionToPreviousFindMatch(e){this._beginSessionIfNeeded(e),this._session&&this._applySessionResult(this._session.addSelectionToPreviousFindMatch())}moveSelectionToNextFindMatch(e){this._beginSessionIfNeeded(e),this._session&&this._applySessionResult(this._session.moveSelectionToNextFindMatch())}moveSelectionToPreviousFindMatch(e){this._beginSessionIfNeeded(e),this._session&&this._applySessionResult(this._session.moveSelectionToPreviousFindMatch())}selectAll(e){if(!this._editor.hasModel())return;let t=null;const s=e.getState();if(s.isRevealed&&s.searchString.length>0&&s.isRegex){const e=this._editor.getModel();t=s.searchScope?e.findMatches(s.searchString,s.searchScope,s.isRegex,s.matchCase,s.wholeWord?this._editor.getOption(131):null,!1,1073741824):e.findMatches(s.searchString,!0,s.isRegex,s.matchCase,s.wholeWord?this._editor.getOption(131):null,!1,1073741824)}else{if(this._beginSessionIfNeeded(e),!this._session)return;t=this._session.selectAll(s.searchScope)}if(t.length>0){const e=this._editor.getSelection();for(let s=0,i=t.length;s<i;s++){const i=t[s];if(i.range.intersectRanges(e)){t[s]=t[0],t[0]=i;break}}this._setSelections(t.map((e=>new h.Y(e.range.startLineNumber,e.range.startColumn,e.range.endLineNumber,e.range.endColumn))))}}}D.ID="editor.contrib.multiCursorController";class F extends d.R6{run(e,t){const s=D.get(t);if(!s)return;const i=t._getViewModel();if(i){const r=i.getCursorStates(),o=g.pR.get(t);if(o)this._run(s,o);else{const i=e.get(v.TG).createInstance(g.pR,t);this._run(s,i),i.dispose()}M(r,i.getCursorStates())}}}class A{constructor(e,t,s,i,r){this._model=e,this._searchText=t,this._matchCase=s,this._wordSeparators=i,this._modelVersionId=this._model.getVersionId(),this._cachedFindMatches=null,r&&this._model===r._model&&this._searchText===r._searchText&&this._matchCase===r._matchCase&&this._wordSeparators===r._wordSeparators&&this._modelVersionId===r._modelVersionId&&(this._cachedFindMatches=r._cachedFindMatches)}findMatches(){return null===this._cachedFindMatches&&(this._cachedFindMatches=this._model.findMatches(this._searchText,!0,!1,this._matchCase,this._wordSeparators,!1).map((e=>e.range)),this._cachedFindMatches.sort(c.e.compareRangesUsingStarts)),this._cachedFindMatches}}let E=i=class extends a.JT{constructor(e,t){super(),this._languageFeaturesService=t,this.editor=e,this._isEnabled=e.getOption(108),this._decorations=e.createDecorationsCollection(),this.updateSoon=this._register(new o.pY((()=>this._update()),300)),this.state=null,this._register(e.onDidChangeConfiguration((t=>{this._isEnabled=e.getOption(108)}))),this._register(e.onDidChangeCursorSelection((e=>{this._isEnabled&&(e.selection.isEmpty()?3===e.reason?(this.state&&this._setState(null),this.updateSoon.schedule()):this._setState(null):this._update())}))),this._register(e.onDidChangeModel((e=>{this._setState(null)}))),this._register(e.onDidChangeModelContent((e=>{this._isEnabled&&this.updateSoon.schedule()})));const s=g.pR.get(e);s&&this._register(s.getState().onFindReplaceStateChange((e=>{this._update()}))),this.updateSoon.schedule()}_update(){this._setState(i._createState(this.state,this._isEnabled,this.editor))}static _createState(e,t,s){if(!t)return null;if(!s.hasModel())return null;const i=s.getSelection();if(i.startLineNumber!==i.endLineNumber)return null;const r=D.get(s);if(!r)return null;const o=g.pR.get(s);if(!o)return null;let n=r.getSession(o);if(!n){const e=s.getSelections();if(e.length>1){const t=o.getState().matchCase;if(!P(s.getModel(),e,t))return null}n=O.create(s,o)}if(!n)return null;if(n.currentMatch)return null;if(/^[ \t]+$/.test(n.searchText))return null;if(n.searchText.length>200)return null;const a=o.getState(),d=a.matchCase;if(a.isRevealed){let e=a.searchString;d||(e=e.toLowerCase());let t=n.searchText;if(d||(t=t.toLowerCase()),e===t&&n.matchCase===a.matchCase&&n.wholeWord===a.wholeWord&&!a.isRegex)return null}return new A(s.getModel(),n.searchText,n.matchCase,n.wholeWord?s.getOption(131):null,e)}_setState(e){if(this.state=e,!this.state)return void this._decorations.clear();if(!this.editor.hasModel())return;const t=this.editor.getModel();if(t.isTooLargeForTokenization())return;const s=this.state.findMatches(),i=this.editor.getSelections();i.sort(c.e.compareRangesUsingStarts);const r=[];for(let e=0,t=0,o=s.length,n=i.length;e<o;){const o=s[e];if(t>=n)r.push(o),e++;else{const s=c.e.compareRangesUsingStarts(o,i[t]);s<0?(!i[t].isEmpty()&&c.e.areIntersecting(o,i[t])||r.push(o),e++):(s>0||e++,t++)}}const o="off"!==this.editor.getOption(81),n=this._languageFeaturesService.documentHighlightProvider.has(t)&&o,a=r.map((e=>({range:e,options:(0,C.w)(n)})));this._decorations.set(a)}dispose(){this._setState(null),super.dispose()}};function P(e,t,s){const i=R(e,t[0],!s);for(let r=1,o=t.length;r<o;r++){const o=t[r];if(o.isEmpty())return!1;if(i!==R(e,o,!s))return!1}return!0}function R(e,t,s){const i=e.getValueInRange(t);return s?i.toLowerCase():i}E.ID="editor.contrib.selectionHighlighter",E=i=S([b(1,f.p)],E);class I extends d.R6{constructor(){super({id:"editor.action.focusNextCursor",label:m.NC("mutlicursor.focusNextCursor","Focus Next Cursor"),metadata:{description:m.NC("mutlicursor.focusNextCursor.description","Focuses the next cursor"),args:[]},alias:"Focus Next Cursor",precondition:void 0})}run(e,t,s){if(!t.hasModel())return;const i=t._getViewModel();if(i.cursorConfig.readOnly)return;i.model.pushStackElement();const r=Array.from(i.getCursorStates()),o=r.shift();o&&(r.push(o),i.setCursorStates(s.source,3,r),i.revealPrimaryCursor(s.source,!0),M(r,i.getCursorStates()))}}class W extends d.R6{constructor(){super({id:"editor.action.focusPreviousCursor",label:m.NC("mutlicursor.focusPreviousCursor","Focus Previous Cursor"),metadata:{description:m.NC("mutlicursor.focusPreviousCursor.description","Focuses the previous cursor"),args:[]},alias:"Focus Previous Cursor",precondition:void 0})}run(e,t,s){if(!t.hasModel())return;const i=t._getViewModel();if(i.cursorConfig.readOnly)return;i.model.pushStackElement();const r=Array.from(i.getCursorStates()),o=r.pop();o&&(r.unshift(o),i.setCursorStates(s.source,3,r),i.revealPrimaryCursor(s.source,!0),M(r,i.getCursorStates()))}}(0,d._K)(D.ID,D,4),(0,d._K)(E.ID,E,1),(0,d.Qr)(w),(0,d.Qr)(y),(0,d.Qr)(N),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.addSelectionToNextFindMatch",label:m.NC("addSelectionToNextFindMatch","Add Selection To Next Find Match"),alias:"Add Selection To Next Find Match",precondition:void 0,kbOpts:{kbExpr:u.u.focus,primary:2082,weight:100},menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miAddSelectionToNextFindMatch",comment:["&& denotes a mnemonic"]},"Add &&Next Occurrence"),order:5}})}_run(e,t){e.addSelectionToNextFindMatch(t)}}),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.addSelectionToPreviousFindMatch",label:m.NC("addSelectionToPreviousFindMatch","Add Selection To Previous Find Match"),alias:"Add Selection To Previous Find Match",precondition:void 0,menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miAddSelectionToPreviousFindMatch",comment:["&& denotes a mnemonic"]},"Add P&&revious Occurrence"),order:6}})}_run(e,t){e.addSelectionToPreviousFindMatch(t)}}),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.moveSelectionToNextFindMatch",label:m.NC("moveSelectionToNextFindMatch","Move Last Selection To Next Find Match"),alias:"Move Last Selection To Next Find Match",precondition:void 0,kbOpts:{kbExpr:u.u.focus,primary:(0,n.gx)(2089,2082),weight:100}})}_run(e,t){e.moveSelectionToNextFindMatch(t)}}),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.moveSelectionToPreviousFindMatch",label:m.NC("moveSelectionToPreviousFindMatch","Move Last Selection To Previous Find Match"),alias:"Move Last Selection To Previous Find Match",precondition:void 0})}_run(e,t){e.moveSelectionToPreviousFindMatch(t)}}),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.selectHighlights",label:m.NC("selectAllOccurrencesOfFindMatch","Select All Occurrences of Find Match"),alias:"Select All Occurrences of Find Match",precondition:void 0,kbOpts:{kbExpr:u.u.focus,primary:3114,weight:100},menuOpts:{menuId:p.eH.MenubarSelectionMenu,group:"3_multi",title:m.NC({key:"miSelectHighlights",comment:["&& denotes a mnemonic"]},"Select All &&Occurrences"),order:7}})}_run(e,t){e.selectAll(t)}}),(0,d.Qr)(class extends F{constructor(){super({id:"editor.action.changeAll",label:m.NC("changeAll.label","Change All Occurrences"),alias:"Change All Occurrences",precondition:_.Ao.and(u.u.writable,u.u.editorTextFocus),kbOpts:{kbExpr:u.u.editorTextFocus,primary:2108,weight:100},contextMenuOpts:{group:"1_modification",order:1.2}})}_run(e,t){e.selectAll(t)}}),(0,d.Qr)(x),(0,d.Qr)(T),(0,d.Qr)(I),(0,d.Qr)(W)},95313:(e,t,s)=>{var i=s(79579),r=s(5976),o=s(16830),n=s(29102),a=s(71204),d=s(71922),l=s(15393),c=s(17301),h=s(4669),u=s(44906),g=s(71050),m=s(98401),p=s(70666),_=s(50187),f=s(88216),C=s(94565),v=s(93983);const S={Visible:new v.uy("parameterHintsVisible",!1),MultipleSignatures:new v.uy("parameterHintsMultipleSignatures",!1)};async function b(e,t,s,i,r){const o=e.ordered(t);for(const e of o)try{const o=await e.provideSignatureHelp(t,s,r,i);if(o)return o}catch(e){(0,c.Cp)(e)}}var M;C.P.registerCommand("_executeSignatureHelpProvider",(async(e,...t)=>{const[s,i,r]=t;(0,m.p_)(p.o.isUri(s)),(0,m.p_)(_.L.isIPosition(i)),(0,m.p_)("string"==typeof r||!r);const o=e.get(d.p),n=await e.get(f.S).createModelReference(s);try{const e=await b(o.signatureHelpProvider,n.object.textEditorModel,_.L.lift(i),{triggerKind:a.WW.Invoke,isRetrigger:!1,triggerCharacter:r},g.Ts.None);if(!e)return;return setTimeout((()=>e.dispose()),0),e.value}finally{n.dispose()}})),function(e){e.Default={type:0};e.Pending=class{constructor(e,t){this.request=e,this.previouslyActiveHints=t,this.type=2}};e.Active=class{constructor(e){this.hints=e,this.type=1}}}(M||(M={}));class w extends r.JT{constructor(e,t,s=w.DEFAULT_DELAY){super(),this._onChangedHints=this._register(new h.Q5),this.onChangedHints=this._onChangedHints.event,this.triggerOnType=!1,this._state=M.Default,this._pendingTriggers=[],this._lastSignatureHelpResult=this._register(new r.XK),this.triggerChars=new u.q,this.retriggerChars=new u.q,this.triggerId=0,this.editor=e,this.providers=t,this.throttledDelayer=new l.vp(s),this._register(this.editor.onDidBlurEditorWidget((()=>this.cancel()))),this._register(this.editor.onDidChangeConfiguration((()=>this.onEditorConfigurationChange()))),this._register(this.editor.onDidChangeModel((e=>this.onModelChanged()))),this._register(this.editor.onDidChangeModelLanguage((e=>this.onModelChanged()))),this._register(this.editor.onDidChangeCursorSelection((e=>this.onCursorChange(e)))),this._register(this.editor.onDidChangeModelContent((e=>this.onModelContentChange()))),this._register(this.providers.onDidChange(this.onModelChanged,this)),this._register(this.editor.onDidType((e=>this.onDidType(e)))),this.onEditorConfigurationChange(),this.onModelChanged()}get state(){return this._state}set state(e){2===this._state.type&&this._state.request.cancel(),this._state=e}cancel(e=!1){this.state=M.Default,this.throttledDelayer.cancel(),e||this._onChangedHints.fire(void 0)}trigger(e,t){const s=this.editor.getModel();if(!s||!this.providers.has(s))return;const i=++this.triggerId;this._pendingTriggers.push(e),this.throttledDelayer.trigger((()=>this.doTrigger(i)),t).catch(c.dL)}next(){if(1!==this.state.type)return;const e=this.state.hints.signatures.length,t=this.state.hints.activeSignature,s=t%e==e-1,i=this.editor.getOption(86).cycle;!(e<2||s)||i?this.updateActiveSignature(s&&i?0:t+1):this.cancel()}previous(){if(1!==this.state.type)return;const e=this.state.hints.signatures.length,t=this.state.hints.activeSignature,s=0===t,i=this.editor.getOption(86).cycle;!(e<2||s)||i?this.updateActiveSignature(s&&i?e-1:t-1):this.cancel()}updateActiveSignature(e){1===this.state.type&&(this.state=new M.Active({...this.state.hints,activeSignature:e}),this._onChangedHints.fire(this.state.hints))}async doTrigger(e){const t=1===this.state.type||2===this.state.type,s=this.getLastActiveHints();if(this.cancel(!0),0===this._pendingTriggers.length)return!1;const i=this._pendingTriggers.reduce(y);this._pendingTriggers=[];const r={triggerKind:i.triggerKind,triggerCharacter:i.triggerCharacter,isRetrigger:t,activeSignatureHelp:s};if(!this.editor.hasModel())return!1;const o=this.editor.getModel(),n=this.editor.getPosition();this.state=new M.Pending((0,l.PG)((e=>b(this.providers,o,n,r,e))),s);try{const t=await this.state.request;return e!==this.triggerId?(null==t||t.dispose(),!1):t&&t.value.signatures&&0!==t.value.signatures.length?(this.state=new M.Active(t.value),this._lastSignatureHelpResult.value=t,this._onChangedHints.fire(this.state.hints),!0):(null==t||t.dispose(),this._lastSignatureHelpResult.clear(),this.cancel(),!1)}catch(t){return e===this.triggerId&&(this.state=M.Default),(0,c.dL)(t),!1}}getLastActiveHints(){switch(this.state.type){case 1:return this.state.hints;case 2:return this.state.previouslyActiveHints;default:return}}get isTriggered(){return 1===this.state.type||2===this.state.type||this.throttledDelayer.isTriggered()}onModelChanged(){this.cancel(),this.triggerChars.clear(),this.retriggerChars.clear();const e=this.editor.getModel();if(e)for(const t of this.providers.ordered(e)){for(const e of t.signatureHelpTriggerCharacters||[])if(e.length){const t=e.charCodeAt(0);this.triggerChars.add(t),this.retriggerChars.add(t)}for(const e of t.signatureHelpRetriggerCharacters||[])e.length&&this.retriggerChars.add(e.charCodeAt(0))}}onDidType(e){if(!this.triggerOnType)return;const t=e.length-1,s=e.charCodeAt(t);(this.triggerChars.has(s)||this.isTriggered&&this.retriggerChars.has(s))&&this.trigger({triggerKind:a.WW.TriggerCharacter,triggerCharacter:e.charAt(t)})}onCursorChange(e){"mouse"===e.source?this.cancel():this.isTriggered&&this.trigger({triggerKind:a.WW.ContentChange})}onModelContentChange(){this.isTriggered&&this.trigger({triggerKind:a.WW.ContentChange})}onEditorConfigurationChange(){this.triggerOnType=this.editor.getOption(86).enabled,this.triggerOnType||this.cancel()}dispose(){this.cancel(!0),super.dispose()}}function y(e,t){switch(t.triggerKind){case a.WW.Invoke:return t;case a.WW.ContentChange:return e;case a.WW.TriggerCharacter:default:return t}}w.DEFAULT_DELAY=120;var N,x=s(63580),T=s(72065),L=s(65321),O=s(85152),D=s(59538),F=s(32429),A=s(97295),E=s(72042),P=s(72545),R=s(50988),I=s(82992),W=s(59554),k=s(25670),H=s(84013),V=s(10829),B=function(e,t,s,i){var r,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n},j=function(e,t){return function(s,i){t(s,i,e)}};const K=L.$,Q=(0,W.q5)("parameter-hints-next",F.l.chevronDown,x.NC("parameterHintsNextIcon","Icon for show next parameter hint.")),$=(0,W.q5)("parameter-hints-previous",F.l.chevronUp,x.NC("parameterHintsPreviousIcon","Icon for show previous parameter hint."));let Y=N=class extends r.JT{constructor(e,t,s,i,o,n){super(),this.editor=e,this.model=t,this.telemetryService=n,this.renderDisposeables=this._register(new r.SL),this.visible=!1,this.announcedLabel=null,this.allowEditorOverflow=!0,this.markdownRenderer=this._register(new P.$({editor:e},o,i)),this.keyVisible=S.Visible.bindTo(s),this.keyMultipleSignatures=S.MultipleSignatures.bindTo(s)}createParameterHintDOMNodes(){const e=K(".editor-widget.parameter-hints-widget"),t=L.R3(e,K(".phwrapper"));t.tabIndex=-1;const s=L.R3(t,K(".controls")),i=L.R3(s,K(".button"+k.k.asCSSSelector($))),r=L.R3(s,K(".overloads")),o=L.R3(s,K(".button"+k.k.asCSSSelector(Q)));this._register(L.nm(i,"click",(e=>{L.zB.stop(e),this.previous()}))),this._register(L.nm(o,"click",(e=>{L.zB.stop(e),this.next()})));const n=K(".body"),a=new D.s$(n,{alwaysConsumeMouseWheel:!0});this._register(a),t.appendChild(a.getDomNode());const d=L.R3(n,K(".signature")),l=L.R3(n,K(".docs"));e.style.userSelect="text",this.domNodes={element:e,signature:d,overloads:r,docs:l,scrollbar:a},this.editor.addContentWidget(this),this.hide(),this._register(this.editor.onDidChangeCursorSelection((e=>{this.visible&&this.editor.layoutContentWidget(this)})));const c=()=>{if(!this.domNodes)return;const e=this.editor.getOption(50);this.domNodes.element.style.fontSize=`${e.fontSize}px`,this.domNodes.element.style.lineHeight=""+e.lineHeight/e.fontSize};c(),this._register(h.ju.chain(this.editor.onDidChangeConfiguration.bind(this.editor),(e=>e.filter((e=>e.hasChanged(50)))))(c)),this._register(this.editor.onDidLayoutChange((e=>this.updateMaxHeight()))),this.updateMaxHeight()}show(){this.visible||(this.domNodes||this.createParameterHintDOMNodes(),this.keyVisible.set(!0),this.visible=!0,setTimeout((()=>{var e;null===(e=this.domNodes)||void 0===e||e.element.classList.add("visible")}),100),this.editor.layoutContentWidget(this))}hide(){var e;this.renderDisposeables.clear(),this.visible&&(this.keyVisible.reset(),this.visible=!1,this.announcedLabel=null,null===(e=this.domNodes)||void 0===e||e.element.classList.remove("visible"),this.editor.layoutContentWidget(this))}getPosition(){return this.visible?{position:this.editor.getPosition(),preference:[1,2]}:null}render(e){var t;if(this.renderDisposeables.clear(),!this.domNodes)return;const s=e.signatures.length>1;this.domNodes.element.classList.toggle("multiple",s),this.keyMultipleSignatures.set(s),this.domNodes.signature.innerText="",this.domNodes.docs.innerText="";const i=e.signatures[e.activeSignature];if(!i)return;const r=L.R3(this.domNodes.signature,K(".code")),o=this.editor.getOption(50);r.style.fontSize=`${o.fontSize}px`,r.style.fontFamily=o.fontFamily;const n=i.parameters.length>0,a=null!==(t=i.activeParameter)&&void 0!==t?t:e.activeParameter;if(n)this.renderParameters(r,i,a);else{L.R3(r,K("span")).textContent=i.label}const d=i.parameters[a];if(null==d?void 0:d.documentation){const e=K("span.documentation");if("string"==typeof d.documentation)e.textContent=d.documentation;else{const t=this.renderMarkdownDocs(d.documentation);e.appendChild(t.element)}L.R3(this.domNodes.docs,K("p",{},e))}if(void 0===i.documentation);else if("string"==typeof i.documentation)L.R3(this.domNodes.docs,K("p",{},i.documentation));else{const e=this.renderMarkdownDocs(i.documentation);L.R3(this.domNodes.docs,e.element)}const l=this.hasDocs(i,d);if(this.domNodes.signature.classList.toggle("has-docs",l),this.domNodes.docs.classList.toggle("empty",!l),this.domNodes.overloads.textContent=String(e.activeSignature+1).padStart(e.signatures.length.toString().length,"0")+"/"+e.signatures.length,d){let e="";const t=i.parameters[a];e=Array.isArray(t.label)?i.label.substring(t.label[0],t.label[1]):t.label,t.documentation&&(e+="string"==typeof t.documentation?`, ${t.documentation}`:`, ${t.documentation.value}`),i.documentation&&(e+="string"==typeof i.documentation?`, ${i.documentation}`:`, ${i.documentation.value}`),this.announcedLabel!==e&&(O.Z9(x.NC("hint","{0}, hint",e)),this.announcedLabel=e)}this.editor.layoutContentWidget(this),this.domNodes.scrollbar.scanDomNode()}renderMarkdownDocs(e){const t=new H.G,s=this.renderDisposeables.add(this.markdownRenderer.render(e,{asyncRenderCallback:()=>{var e;null===(e=this.domNodes)||void 0===e||e.scrollbar.scanDomNode()}}));s.element.classList.add("markdown-docs");const i=t.elapsed();return i>300&&this.telemetryService.publicLog2("parameterHints.parseMarkdown",{renderDuration:i}),s}hasDocs(e,t){return!!(t&&"string"==typeof t.documentation&&(0,m.cW)(t.documentation).length>0)||(!!(t&&"object"==typeof t.documentation&&(0,m.cW)(t.documentation).value.length>0)||(!!(e.documentation&&"string"==typeof e.documentation&&(0,m.cW)(e.documentation).length>0)||!!(e.documentation&&"object"==typeof e.documentation&&(0,m.cW)(e.documentation.value).length>0)))}renderParameters(e,t,s){const[i,r]=this.getParameterLabelOffsets(t,s),o=document.createElement("span");o.textContent=t.label.substring(0,i);const n=document.createElement("span");n.textContent=t.label.substring(i,r),n.className="parameter active";const a=document.createElement("span");a.textContent=t.label.substring(r),L.R3(e,o,n,a)}getParameterLabelOffsets(e,t){const s=e.parameters[t];if(s){if(Array.isArray(s.label))return s.label;if(s.label.length){const t=new RegExp(`(\\W|^)${(0,A.ec)(s.label)}(?=\\W|$)`,"g");t.test(e.label);const i=t.lastIndex-s.label.length;return i>=0?[i,t.lastIndex]:[0,0]}return[0,0]}return[0,0]}next(){this.editor.focus(),this.model.next()}previous(){this.editor.focus(),this.model.previous()}getDomNode(){return this.domNodes||this.createParameterHintDOMNodes(),this.domNodes.element}getId(){return N.ID}updateMaxHeight(){if(!this.domNodes)return;const e=`${Math.max(this.editor.getLayoutInfo().height/4,250)}px`;this.domNodes.element.style.maxHeight=e;const t=this.domNodes.element.getElementsByClassName("phwrapper");t.length&&(t[0].style.maxHeight=e)}};Y.ID="editor.widget.parameterHintsWidget",Y=N=B([j(2,v.i6),j(3,R.v),j(4,E.O),j(5,V.b)],Y),(0,I.P6G)("editorHoverWidget.highlightForeground",{dark:I.Gwp,light:I.Gwp,hcDark:I.Gwp,hcLight:I.Gwp},x.NC("editorHoverWidgetHighlightForeground","Foreground color of the active item in the parameter hint."));var G,U=function(e,t,s,i){var r,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,s,n):r(t,s))||n);return o>3&&n&&Object.defineProperty(t,s,n),n},q=function(e,t){return function(s,i){t(s,i,e)}};let z=G=class extends r.JT{static get(e){return e.getContribution(G.ID)}constructor(e,t,s){super(),this.editor=e,this.model=this._register(new w(e,s.signatureHelpProvider)),this._register(this.model.onChangedHints((e=>{var t;e?(this.widget.value.show(),this.widget.value.render(e)):null===(t=this.widget.rawValue)||void 0===t||t.hide()}))),this.widget=new i.o((()=>this._register(t.createInstance(Y,this.editor,this.model))))}cancel(){this.model.cancel()}previous(){var e;null===(e=this.widget.rawValue)||void 0===e||e.previous()}next(){var e;null===(e=this.widget.rawValue)||void 0===e||e.next()}trigger(e){this.model.trigger(e,0)}};z.ID="editor.controller.parameterHints",z=G=U([q(1,T.TG),q(2,d.p)],z);class J extends o.R6{constructor(){super({id:"editor.action.triggerParameterHints",label:x.NC("parameterHints.trigger.label","Trigger Parameter Hints"),alias:"Trigger Parameter Hints",precondition:n.u.hasSignatureHelpProvider,kbOpts:{kbExpr:n.u.editorTextFocus,primary:3082,weight:100}})}run(e,t){const s=z.get(t);null==s||s.trigger({triggerKind:a.WW.Invoke})}}(0,o._K)(z.ID,z,2),(0,o.Qr)(J);const X=o._l.bindToContribution(z.get);(0,o.fK)(new X({id:"closeParameterHints",precondition:S.Visible,handler:e=>e.cancel(),kbOpts:{weight:175,kbExpr:n.u.focus,primary:9,secondary:[1033]}})),(0,o.fK)(new X({id:"showPrevParameterHint",precondition:v.Ao.and(S.Visible,S.MultipleSignatures),handler:e=>e.previous(),kbOpts:{weight:175,kbExpr:n.u.focus,primary:16,secondary:[528],mac:{primary:16,secondary:[528,302]}}})),(0,o.fK)(new X({id:"showNextParameterHint",precondition:v.Ao.and(S.Visible,S.MultipleSignatures),handler:e=>e.next(),kbOpts:{weight:175,kbExpr:n.u.focus,primary:18,secondary:[530],mac:{primary:18,secondary:[530,300]}}}))}}]);