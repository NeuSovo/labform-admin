(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21060b"],{b843:function(e,t,n){"use strict";n.r(t);var a=n("9bd2");var o={data:function(){return{columns:[{title:"#",key:"id",width:"50"},{title:"微信id",key:"openid",width:"180"},{title:"加入时间",key:"created_at",width:"200"},{title:"最后访问",key:"updated_at",width:"200"},{title:"角色",key:"role",width:"180",formatter:this.role2text,filters:[{text:"用户",value:0},{text:"管理员",value:1}],filterMethod:function(e,t){return t.role===e},filterPlacement:"bottom-end",component:{name:"el-select",options:[{value:0,label:"用户"},{value:1,label:"管理员"}]}}],data:[],rowHandle:{columnHeader:"操作",remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0}}}},created:function(){},mounted:function(){var t=this;Object(a.a)({url:"admin/user/list",method:"get"}).then(function(e){t.data=e})},methods:{role2text:function(e,t,n,o){return 0==n?"用户":"管理员"},handleCellDataChange:function(e,t){var n=this,o=(e.rowIndex,e.key,e.value,e.row);setTimeout(function(){(function(e,t){return Object(a.a)({url:"admin/user/update/"+e,method:"post",data:t})})(o.id,o).then(function(e){n.$message({message:"更新成功",type:"success"}),t()})},300)},handleRowRemove:function(e,t){var n=this,o=(e.index,e.row);setTimeout(function(){(function(e){return Object(a.a)({url:"admin/user/delete/"+e,method:"post"})})(o.id).then(function(e){n.$message({message:"删除成功",type:"success"}),t()})},300)}}},l=n("2877"),i=function(e){e.options.__source="src/views/user/user.vue"},r=Object(l.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[e._v("用户列表")]),n("span",[e._v("注意删除用户会删除所有包括审核通过和未审核的所有预约记录")]),n("div",[n("d2-crud",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,rowHandle:e.rowHandle},on:{"cell-data-change":e.handleCellDataChange,"row-remove":e.handleRowRemove}})],1),n("template",{slot:"footer"})],2)},[],!1,null,null,null);"function"==typeof i&&i(r);t.default=r.exports}}]);