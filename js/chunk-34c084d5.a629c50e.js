(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34c084d5"],{b843:function(e,t,n){"use strict";n.r(t);var i=n("c24f"),a={data:function(){return{columns:[{title:"#",key:"id",width:"50"},{title:"微信id",key:"openid",width:"180"},{title:"加入时间",key:"created_at",width:"200"},{title:"最后访问",key:"updated_at",width:"200"},{title:"角色",key:"role",width:"180",formatter:this.role2text,filters:[{text:"用户",value:0},{text:"管理员",value:1}],filterMethod:function(e,t){return t.role===e},filterPlacement:"bottom-end",component:{name:"el-select",options:[{value:0,label:"用户"},{value:1,label:"管理员"}]}}],data:[],rowHandle:{columnHeader:"操作",remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0},custom:[{text:"加入开门白名单",type:"info",size:"small",emit:"custom-emit-1"}]},page:1,pageCount:0,pageSize:50}},created:function(){},mounted:function(){var t=this;Object(i.d)(this.page,this.pageSize).then(function(e){t.data=e.data,t.pageCount=e.count})},methods:{role2text:function(e,t,n,a){return 0==n?"用户":"管理员"},handleCellDataChange:function(e,t){var n=this,a=(e.rowIndex,e.key,e.value,e.row);setTimeout(function(){Object(i.f)(a.id,a).then(function(e){n.$message({message:"更新成功",type:"success"}),t()})},300)},handleRowRemove:function(e,t){var n=this,a=(e.index,e.row);setTimeout(function(){Object(i.b)(a.id).then(function(e){n.$message({message:"删除成功",type:"success"}),t()})},300)},handleSizeChange:function(e){this.pageSize=e,this.refreshData()},handleCurrentChange:function(e){this.page=e,this.refreshData()},refreshData:function(){var t=this;Object(i.d)(this.page,this.pageSize).then(function(e){t.data=e.data,t.pageCount=e.count})},handleCustomEvent:function(e){var t=this,n=(e.index,e.row);Object(i.a)(n.id).then(function(e){t.$message({message:"添加成功",type:"success"})})}}},o=n("2877"),u=function(e){e.options.__source="src/views/user/user.vue"},r=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[e._v("用户列表")]),n("span",[e._v("注意删除用户会删除所有包括审核通过和未审核的所有预约记录")]),n("div",[n("d2-crud",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,rowHandle:e.rowHandle},on:{"cell-data-change":e.handleCellDataChange,"custom-emit-1":e.handleCustomEvent,"row-remove":e.handleRowRemove}})],1),n("template",{slot:"footer"},[n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-size":e.pageSize,"page-sizes":[50,100,200,300],total:e.pageCount,layout:"sizes, prev, pager, next"},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)])],2)},[],!1,null,null,null);"function"==typeof u&&u(r);t.default=r.exports},c24f:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return c});var a=n("9bd2");function i(e,t){return Object(a.a)({url:"admin/user/list?page=".concat(e,"&limit=").concat(t),method:"get"})}function o(e,t){return Object(a.a)({url:"admin/user/update/"+e,method:"post",data:t})}function u(e){return Object(a.a)({url:"admin/user/delete/"+e,method:"post"})}function r(e){return Object(a.a)({url:"admin/user/white/delete/"+e,method:"post"})}function s(e){return Object(a.a)({url:"admin/user/white/add/"+e,method:"post"})}function c(){return Object(a.a)({url:"admin/user/white/list",method:"get"})}}}]);