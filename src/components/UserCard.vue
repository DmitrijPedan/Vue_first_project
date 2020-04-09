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
            <p>age: {{user.dob.age}}</p>
            <p>gender: {{user.gender}}</p>
            <p>birth date: {{user.dob.date}}</p>
          <h3>Contacts:</h3>
            <p>email: {{user.email}}</p>
            <p>phone: {{user.phone}}</p>
          <h3>Address:</h3>
            <p>Country: {{user.location.country}}</p> 
            <p>City: {{user.location.city}}</p>  
            <p>Street: {{user.location.street.name}}, {{user.location.street.number}}</p> 
            <p>Post code: {{user.location.postcode}}</p>
        </md-card-content>
        <md-card-actions>
          <md-button>Close</md-button>
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

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
  h3 {
    margin: 5px 0 0 0;
    color: 900;
  }
  p {
    margin: 0;
  }
</style>