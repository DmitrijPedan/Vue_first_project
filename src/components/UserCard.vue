<template>
    <div>
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{user.name.first}} {{user.name.last}}</div>
            <div class="md-subhead">{{user.name.title}}</div>
          </md-card-header-text>

          <md-card-media>
            <img :src = "user.picture.large">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <h3>Info:</h3>
            <p><strong>age:</strong> {{user.dob.age}}</p>
            <p><strong>gender:</strong> {{user.gender}}</p>
            <p><strong>birth date:</strong> {{user.dob.date}}</p>
          <h3>Contacts:</h3>
            <p><strong>email:</strong> {{user.email}}</p>
            <p><strong>phone:</strong> {{user.phone}}</p>
          <h3>Address:</h3>
            <p><strong>Country:</strong> {{user.location.country}}</p> 
            <p><strong>City:</strong> {{user.location.city}}</p>  
            <p><strong>Street:</strong> {{user.location.street.name}}, {{user.location.street.number}}</p> 
            <p><strong>Post code:</strong> {{user.location.postcode}}</p>
        </md-card-content>
        <md-card-actions>
          <md-button 
            class="md-primary"
            v-on:click="$emit('closeCard')"
          >
          Close
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ['user'],
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-title {
    color: #01579B;
  }
  h3 {
    margin: 5px 0 0 0;
    color: #00B0FF;
  }
  p {
    margin: 0;
  }
</style>