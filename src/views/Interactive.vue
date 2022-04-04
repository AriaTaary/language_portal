<template>
        <div class="interactive-block">
           <router-link class="interactive-item" to="/interactivecart" >Слова</router-link>
           <router-link class="interactive-item" to="/interactivespeaking" >Разговорник</router-link>
          <div class="interactive-item"></div>
          <div class="interactive-item"></div>
          <div class="interactive-item"></div>
        
        </div>
</template>

<script>
export default {
    name: 'Interactive'
};
</script>

<style lang="scss" scoped>
.interactive-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
}
.interactive-item{
  width: 250px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: rgb(202, 245, 139);
  text-decoration: none;
}
.interactive-item:hover{
  opacity: 0.7;
  font-weight: bold;
}
</style>