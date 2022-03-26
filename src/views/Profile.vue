<template>
  <div class="profile">
    <div class="profile-wrapper container">
      <h1>Мой профиль</h1>
      <div class="profile-info-wrapper">
        <div class="profile-info">
          <div
          class="profile-info-img"
          >
            <img src="../assets/img/Layer_5.png" alt="img" class="">
          </div>
          <div class="profile-info-account">
            <h1 class="profile-info-username">
              <span class="fs-exclude">{{userName}} {{userSurname}}</span>
            </h1>
          </div>
        </div>
        <div class="block-edit">
          <a class="btn-edit" href="">
              <span class="material-icons"> edit </span>
          <div class="div-edit">Редактировать</div>
          </a>
        </div>
      </div>
      <div class="profile-info-statistics">
        <h1>Достижения</h1>
        <div class="progress-bar">
          <VProgressBar></VProgressBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VProgressBar from '../components/v-progress-bar'
export default {
  components: { VProgressBar },
  name: 'Profile',

  data () {
    return {
      userName: 'Ira',
      userSurname: 'Petrova'
    }
  },

  mounted () {
  },

  methods: {
  }
}
</script>

<style lang="scss" >
img{
  border-radius: 50%;
  border: 1px solid rgb(170, 167, 167);
  width: 150px;
}
.profile-info-account{
  margin-left: 25px;
  text-align: left;
}
.progress-bar{
  padding: 25px 10px;
  display: flex;
  justify-content: center;
}
.container {
    width: 900px;
    margin: 0 auto;
}
.profile-info-wrapper{
  padding: 25px 0;
  display: flex;
  border-bottom: 2px solid #e5e5e5;
  justify-content: space-between;
}
.profile-info{
  display: flex;
}
.profile-info-img{
  display: flex;

}
.btn-edit{
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
  background: blue;
  cursor: pointer;
  text-decoration: none;
}
.div-edit{
  padding-left: 10px;
}
.block-edit{
  align-items: center;
  display: flex;
}
.profile-info-statistics{
  padding: 25px 10px;
}

</style>
