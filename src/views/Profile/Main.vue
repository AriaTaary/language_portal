<template>
  <div class="container">
    <div class="wrapper">
      <h1>Мой профиль</h1>
      <div class="profileInfo">
        <img class="profileImage" src="../../assets/img/Layer_5.png" alt="img" />
        <span class="profileUsername">{{userName}} {{userSurname}}</span>
        <button class="purpleButton buttonAutoMarginLeft">
          <span class="material-icons">edit</span>
          Редактировать
        </button>
      </div>
      <div class="profileStatistics">
        <h1>Мои достижения</h1>
        <ProgressBar />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '../../components/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },

  name: 'Profile',

  data() {
    return {
      userName: 'Ira',
      userSurname: 'Petrova',
    };
  },
};
</script>

<style lang="scss" scoped >
.profileInfo {
  padding-bottom: 40px;
  display: flex;
  border-bottom: 2px solid #abb5d067;
  align-items: center;
}

.profileImage {
  border-radius: 50%;
  width: 150px;
}

.profileUsername {
  color: #8892ad;
  font-size: 30px;
  margin-left: 50px;
}

.profileStatistics {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}
</style>
