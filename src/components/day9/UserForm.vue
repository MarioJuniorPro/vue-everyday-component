<template>
  <div class="container">
    <form class="user-form">
      <div class="row">
        <h2>User Form</h2>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Name</label>
          </template>
          <template slot="field">
            <input type="text" placeholder="Name" v-model.lazy="user.name" />
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Birthday</label>
          </template>
          <template slot="field">
            <input type="date"  v-model.lazy="user.birthday"/>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Age</label>
          </template>
          <template slot="field">
            <input type="number"  v-model.lazy="user.age" min="0" max="130"/>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Email</label>
          </template>
          <template slot="field">
            <input type="email"  v-model.lazy="user.email"/>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Gender</label>
          </template>
          <template slot="field">
              <label>Male
                <input type="radio" v-model.lazy="user.gender" value="male"/>
              </label>
              <label>Female
                <input type="radio" v-model.lazy="user.gender" value="female"/>
              </label>
              <label>Other
                <input type="radio" v-model.lazy="user.gender" value="other"/>
              </label>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Title</label>
          </template>
          <template slot="field">
              <select v-model.lazy="user.title"> 
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
              </select>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Pets</label>
          </template>
          <template slot="field">
            <label>Dog
              <input type="checkbox"  v-model.lazy="user.pets" value="dog" />
            </label>
            <label>Cat
              <input type="checkbox"  v-model.lazy="user.pets" value="cat" />
            </label>
            <label>Turtle
              <input type="checkbox"  v-model.lazy="user.pets" value="turtle" />
            </label>
          </template>
        </form-field>
      </div>
      <div class="row">
        <form-field>
          <template slot="label">
            <label>Brothers</label>
          </template>
          <template slot="field">
            <input type="range" v-model.lazy="user.brothers" min="0" max="20" />[{{user.brothers}}]
          </template>
        </form-field>
      </div>
      <div class="row">
        BUTONS!
      </div>
      <div class="row">
        <pre v-text="userPrettyPrint">

        </pre>
      </div>
    </form>
  </div>
</template>
<script>
  import FormField from './FormField.vue'

  export default {
    components:{
      'form-field' : FormField
    },
    data(){
      return {
        user: {
          name: '',
          email: '',
          age: 0,
          title: '',
          gender: null,
          birthday: null,
          pets: [],
          brothers: 0
        }
      }
    },
    computed: {
      userPrettyPrint(){
        return JSON.stringify(this.user, null, 2);
      }
    }
  }
</script>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}


.container {
  width: 960px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.row {
  display: flex;

}

.user-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #d6f0e5;
  width: 800px;
  padding: 40px;
  box-shadow: 0 20px 15px #bbb;
}

.user-form__controls {
  display: flex;
  border-bottom: 1px solid #42b983;
  flex: 1;
  padding: 10px 15px;
}

.user-form__controls-label {
  text-align: left;
  flex-basis: 20%;
  vertical-align: middle;
  line-height: 28px;
}

.user-form__controls-field {
  flex: 1;
  display: flex;
  line-height: 28px;
}
/*
.user-form__controls-field input[type=text],
.user-form__controls-field input[type=number],
.user-form__controls-field input[type=date],
.user-form__controls-field input[type=email],
.user-form__controls-field input[type=range] {
  flex: 1;
  padding: 10px 20px;
  border: 1px solid #42b983;
  border-radius: 3px;
  display: block;
  outline: none;
}
*/

.user-form__controls-field > input,
.user-form__controls-field > select 
 {
  flex: 1;
  padding: 5px 20px;
  border: 1px solid #42b983;
  border-radius: 3px;
  display: block;
  outline: none;
}



</style>