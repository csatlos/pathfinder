define(["module/base","app/map/util","app/util"],(e,t,a)=>{"use strict";let s=class TagsModule extends e{constructor(e={}){super(Object.assign({},new.target.defaultConfig,e))}render(t){this._mapId=t,this._bodyEl=Object.assign(document.createElement("div"),{className:this._config.bodyClassName}),this.moduleElement.append(this._bodyEl);let s="nope";e.Util.getMapModule().getActiveMap()&&(s=a.getCurrentMapData(t).config.name);return this._bodyEl.append(s),this.initTagModule(),this.moduleElement}initTagModule(){super.init()}beforeHide(){super.beforeHide()}beforeDestroy(){super.beforeDestroy()}onSortableEvent(e,t){super.onSortableEvent(e,t)}getNextBookmarksData(e){}};return s.isPlugin=!0,s.scope="global",s.sortArea="b",s.position=15,s.label="Bookmark Tags",s.defaultConfig={className:"pf-system-tag-module",sortTargetAreas:["a","b","c"],headline:"Bookmark Tags"},s});
//# sourceMappingURL=tags.js.map
