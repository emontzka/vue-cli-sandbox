<template>
  <div class="test">

    <h1>{{title}}</h1>
    <ol>
      <li v-for="item in items">{{item.title}}</li>
    </ol>
    <p v-text="user.lastName"></p>
    <p v-if="showName">{{user.firstName}}</p>
    <input type="text" v-model="title"><br />
    <button v-on:click="greet('Hello World')">Say Greeting</button><br>
    <input type="text" v-on:keyup="pressKey">
    <hr>
    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br>
    <label>Last Name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>   
    <h2>{{msg}}</h2> 

  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data () {
      return {
        title: 'Woo hoo!',
        items: [
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'}
        ],
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: false
      }
    },
    methods: {
      greet: function (greeting) {
        console.log(greeting)
      },
      pressKey: function (e) {
        console.log(e.target.value)
      }
    },
    computed: {
      fullName: function () {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style scoped>
</style>