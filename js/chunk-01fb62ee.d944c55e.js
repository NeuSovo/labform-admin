(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01fb62ee"],{3499:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"e",function(){return a}),r.d(t,"j",function(){return l}),r.d(t,"f",function(){return i}),r.d(t,"a",function(){return u}),r.d(t,"i",function(){return c}),r.d(t,"b",function(){return m}),r.d(t,"c",function(){return s}),r.d(t,"g",function(){return d}),r.d(t,"k",function(){return f}),r.d(t,"h",function(){return b});var o=r("9bd2");function n(){return Object(o.a)({url:"lab",method:"get"})}function a(e){return Object(o.a)({url:"lab/detail/"+e,method:"get"})}function l(e,t){return Object(o.a)({url:"admin/lab/detail/update/"+e,method:"post",data:t})}function i(){return Object(o.a)({url:"lab/gettype",method:"get"})}function u(e){return Object(o.a)({url:"admin/lab/add",method:"post",data:e})}function c(e,t){return Object(o.a)({url:"admin/lab/update/"+e,method:"post",data:t})}function m(e){return Object(o.a)({url:"admin/lab/delete/"+e,method:"post"})}function s(){return Object(o.a)({url:"admin/reserve/list",method:"get"})}function d(e){return Object(o.a)({url:"admin/reserve/detail/"+e,method:"get"})}function f(e,t){return Object(o.a)({url:"admin/reserve/update/"+e,method:"post",data:t})}function b(e,t){return Object(o.a)({url:"admin/reserve/review/"+e+"/"+t,method:"post"})}},feda:function(e,t,r){"use strict";r.r(t);r("ac6a");var o=r("3499"),n={data:function(){return{data:{},form:[],records:[],columns:[{title:"日期",key:"day",component:{name:"el-date-picker",size:"small"}},{title:"时间",key:"time",width:"580",component:{name:"el-checkbox",options:[{value:1,label:"1-2"},{value:2,label:"3-4"},{value:3,label:"5-6"},{value:4,label:"7-8"},{value:5,label:"9-10"},{value:6,label:"11-12"}]}}],rowHandle:{columnHeader:"操作",remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0}}}},created:function(){var r=this;Object(o.g)(this.$route.params.recordid).then(function(e){for(var t in(r.form=e).records)r.records.push({day:t,time:e.records[t]})})},methods:{handleCellDataChange:function(e){this.records[e.rowIndex]=e.row},onSubmit:function(){var t=this;this.form.records={},this.records.forEach(function(e){t.form.records[e.day]=e.time}),setTimeout(function(){Object(o.k)(t.form.id,t.form).then(function(e){t.$message({message:"更新成功",type:"success"})})},300)},onCancel:function(){this.$router.go(-1)},handleRowRemove:function(e){var t=e.index;e.row;this.records.splice(t,1)}}},a=r("2877"),l=function(e){e.options.__source="src/views/lab/reservedetail.vue"},i=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("d2-container",[r("template",{slot:"header"},[t._v("记录详情")]),r("div",[r("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"120px"}},[r("el-form-item",{attrs:{label:"预约人"}},[r("el-input",{attrs:{readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),r("el-form-item",{attrs:{label:"预约实验室"}},[r("el-input",{attrs:{readonly:""},model:{value:t.form.lab_id,callback:function(e){t.$set(t.form,"lab_id",e)},expression:"form.lab_id"}})],1),r("el-form-item",{attrs:{label:"创建时间"}},[r("el-input",{attrs:{readonly:""},model:{value:t.form.created_at,callback:function(e){t.$set(t.form,"created_at",e)},expression:"form.created_at"}})],1),r("el-form-item",{attrs:{label:"联系方式"}},[r("el-input",{attrs:{readonly:""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),r("el-form-item",{attrs:{label:"人数"}},[r("el-input",{attrs:{readonly:""},model:{value:t.form.user_num,callback:function(e){t.$set(t.form,"user_num",e)},expression:"form.user_num"}})],1),r("el-form-item",{attrs:{label:"项目名称"}},[r("el-input",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("el-form-item",{attrs:{label:"项目说明"}},[r("el-input",{model:{value:t.form.explain,callback:function(e){t.$set(t.form,"explain",e)},expression:"form.explain"}})],1),r("el-form-item",{attrs:{label:"项目类型"}},[r("el-input",{model:{value:t.form.opentype_id,callback:function(e){t.$set(t.form,"opentype_id",e)},expression:"form.opentype_id"}})],1),r("el-form-item",{attrs:{label:"指导教师"}},[r("el-input",{model:{value:t.form.guide_teacher,callback:function(e){t.$set(t.form,"guide_teacher",e)},expression:"form.guide_teacher"}})],1),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),r("el-form-item",{attrs:{label:"是否需要消耗品"}},[r("el-select",{attrs:{placeholder:"是否需要消耗品"},model:{value:t.form.expend,callback:function(e){t.$set(t.form,"expend",e)},expression:"form.expend"}},[r("el-option",{attrs:{label:"需要",value:"1"}}),r("el-option",{attrs:{label:"不需要",value:"0"}})],1)],1),r("span",[t._v("预约记录")]),r("d2-crud",{attrs:{columns:t.columns,data:t.records,rowHandle:t.rowHandle},on:{"cell-data-change":t.handleCellDataChange,"row-remove":t.handleRowRemove}}),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("更新")]),r("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1)],1)],1),r("template",{slot:"footer"})],2)},[],!1,null,null,null);"function"==typeof l&&l(i);t.default=i.exports}}]);