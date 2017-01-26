<template>
  <div class="test">
    <h1>People</h1>
 <!--    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name"> <br>
      <input type="text" v-model="newUser.email" placeholder="Enter Email"><br />
      <input type="submit" value="submit">
    </form> -->
    
    <ul>
      <li v-for="(person,index) in people">
        <!-- <input type="checkbox" class="toggle" v-model="user.contacted"> -->
        <h1>{{person.name}}</h1>
        <h2>Traits:</h2>
        <ul>
          <li>Born: {{person.birth_year}}</li>
          <li>Films: {{person.films}}</li>
          {{getFilms(person.films)}}
         <!--  <li v-for="item in items" :key="person.films">
            {{item}}
          </li> -->
    

        </ul>
       
          <!-- {{user.name}}: {{user.email}} 
          <button v-on:click="deleteUser(user)">X</button> -->
        
      </li>
    </ul>



  </div>
</template>

<script>
  export default {
    name: 'people',
    data () {
      return {
        newPerson: {},
        people: [],
        films: []

      }
    },
    methods: {
      getFilms: function (filmArray) {
        // this.$http.get('http://swapi.co/api/films/')
        // .then(function (response) {
        //   console.log(response.data.results)
        // })
        for (var i = 0; i < filmArray.length; i++) {
          if (i === 0) { console.log('new person') }
          console.log('film is ' + filmArray[i])
        }
      }
      // addUser: function (e) {
      //   e.preventDefault()
      //   this.users.push({
      //     name: this.newUser.name,
      //     email: this.newUser.email,
      //     contacted: false
      //   })
      // }
      // deleteUser: function (user) {
      //   this.users.splice(this.users.indexOf(user), 1)
      // }
    },
    created: function () {
      this.$http.get('http://swapi.co/api/people/')
        .then(function (response) {
          this.people = response.data.results

          return this.$http.get('http://swapi.co/api/films/')
        })
        .then(function (response) {
          this.films = response.data.results
        })
      // getFilms: function () {
      // }
    // }

    // function () {
      // this.$http.get('http://swapi.co/api/people/')
      // .then(function (response) {
        // console.log(response.data.results)
        // console.log(response.data.results[0].birth_year)
        // this.people = response.data.results
      // })
        // this.$http.get('http://swapi.co/api/films/')
        // .then(function (response) {
        //   this.films = response.data.results
        // })
    }
  }
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>