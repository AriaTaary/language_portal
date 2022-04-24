<template>
     <div class="nav-left advisory-block">
        <router-link class="menuItem" to="/interactivecart" >Слова</router-link>
        <router-link class="menuItem" to="/speaking" >Разговорник</router-link>
        <router-link class="menuItem" to="/music" >Музыка</router-link>
        <router-link class="menuItem" to="/videos" >Фильмы И Видео</router-link>
        <router-link class="menuItem" to="/testing" >Тестирование</router-link>
    </div>
</template>

<script>
export default {
    name: 'VNavLeft',
};
</script>

<style lang="scss" scoped>
.nav-left{
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: max-content;
}
.menuItem{
    padding: 15px;
    font-weight: bold;
}
a{
    text-decoration: none;
    text-align: center;
}
.nav-left:hover a{
    color: black;
}
</style>