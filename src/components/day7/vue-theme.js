ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-vue-theme";
exports.cssText = `.ace-vue-theme .ace_gutter {
  background: #2F3129;
  color: #2c3e50
}
.ace-vue-theme .ace_print-margin {
  width: 1px;
  background: #555651
}
.ace-vue-theme {
  background-color: #42b983;
  color: #F8F8F2
}
.ace-vue-theme .ace_cursor {
color: #F8F8F0
}
.ace-vue-theme .ace_marker-layer .ace_selection {
background: #49483E
}
.ace-vue-theme.ace_multiselect .ace_selection.ace_start {
box-shadow: 0 0 3px 0px #272822;
}
.ace-vue-theme .ace_marker-layer .ace_step {
background: rgb(102, 82, 0)
}
.ace-vue-theme .ace_marker-layer .ace_bracket {
margin: -1px 0 0 -1px;
border: 1px solid #49483E
}
.ace-vue-theme .ace_marker-layer .ace_active-line {
background: #202020
}
.ace-vue-theme .ace_gutter-active-line {
background-color: #272727
}
.ace-vue-theme .ace_marker-layer .ace_selected-word {
border: 1px solid #49483E
}
.ace-vue-theme .ace_invisible {
color: #52524d
}
.ace-vue-theme .ace_entity.ace_name.ace_tag,
.ace-vue-theme .ace_keyword,
.ace-vue-theme .ace_meta.ace_tag,
.ace-vue-theme .ace_storage {
color: #F92672
}
.ace-vue-theme .ace_punctuation,
.ace-vue-theme .ace_punctuation.ace_tag {
color: #fff
}
.ace-vue-theme .ace_constant.ace_character,
.ace-vue-theme .ace_constant.ace_language,
.ace-vue-theme .ace_constant.ace_numeric,
.ace-vue-theme .ace_constant.ace_other {
color: #AE81FF
}
.ace-vue-theme .ace_invalid {
color: #F8F8F0;
background-color: #F92672
}
.ace-vue-theme .ace_invalid.ace_deprecated {
color: #F8F8F0;
background-color: #AE81FF
}
.ace-vue-theme .ace_support.ace_constant,
.ace-vue-theme .ace_support.ace_function {
color: #66D9EF
}
.ace-vue-theme .ace_fold {
background-color: #A6E22E;
border-color: #F8F8F2
}
.ace-vue-theme .ace_storage.ace_type,
.ace-vue-theme .ace_support.ace_class,
.ace-vue-theme .ace_support.ace_type {
font-style: italic;
color: #66D9EF
}
.ace-vue-theme .ace_entity.ace_name.ace_function,
.ace-vue-theme .ace_entity.ace_other,
.ace-vue-theme .ace_entity.ace_other.ace_attribute-name,
.ace-vue-theme .ace_variable {
  color: #2c3e50
}
.ace-vue-theme .ace_variable.ace_parameter {
  font-style: italic;
  color: #FD971F
}
.ace-vue-theme .ace_string {
  color: #E6DB74
}
.ace-vue-theme .ace_comment {
  color: #75715E
}
.ace-vue-theme .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}`;

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
