<template>
  <div>
    <div :id="el"></div>

    <pre>{{ content }}</pre>
  </div> 
</template>

<script>
import * as ace from 'brace';
import 'brace/mode/html';
import 'brace/theme/vibrant_ink';


export default {
  name: 'editor',
  props:{
    el: {
      type: String,
      default: 'editor',
    }
  },
  mounted () {
     let vm = this
    const editor = ace.edit(this.el);
    editor.setTheme("ace/theme/vibrant_ink");
    editor.getSession().setMode('ace/mode/html');
    editor.setValue(
      `
      <html>
        <head><\/head>
        <body>
          <h1>Hello vuejs!<\/h1>
          <script>
            const routes = [
              { path: '/day0', component: Day0, title: 'D-00 - Home' },
              { path: '/day1', component: Day1, title: 'D-01 - Modal' },
              { path: '/day2', component: Day2, title: 'D-02 - Passowrd Strength' },
              { path: '/day3', component: Day3, title: 'D-03 - ScrollTop' },
              { path: '/day4', component: Day4, title: 'D-04 - Activity' },
              { path: '/day5', component: Day5, title: 'D-05 - Clock' },
              { path: '/day6', component: Day6, title: 'D-06 - DataTable' },
              { path: '/day7', component: Day7, title: 'D-07 - Editor' }
            ];
          <\/script>
        <\/body>
      <\/html>
    `);

    vm.content = editor.getValue();

    editor.on('change', function () {
      vm.content = editor.getValue();
    });


  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>

#editor {
  height: 500px;
  width: 800px;
  margin: 0 auto;
}
/*
#editor .ace_keyword,
#editor .ace_meta,
#editor .ace_fold,
#editor .ace_entity.ace_name.ace_function,
#editor .ace_support.ace_function,
#editor .ace_variable {
  color: #00FF79;
}
#editor .ace_comment {
  color: #0DFDFF;
  display: inline-block;
}
#editor .ace_gutter {
  background: rgba(0, 0, 0, 0.5);
}
#editor .ace_constant,
#editor .ace_constant.ace_character,
#editor .ace_constant.ace_character.ace_escape,
#editor .ace_constant.ace_other,
#editor .ace_string {
  color: #F9FF00;
}*/



</style>
