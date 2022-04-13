<template>
     <div class="nav-left advisory-block">
        <router-link to="/music" class="menuItem">Музыка</router-link>
        <router-link to="/interactivecart" class="menuItem">Слова</router-link>
        <router-link to="/speaking" class="menuItem">Разговорник</router-link>
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