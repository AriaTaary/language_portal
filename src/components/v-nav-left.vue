<template>
     <div class="nav-left">
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
    margin: 25px 25px;
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    height: max-content;
    align-items: center;
    border-radius: 20px;
    background-color: #abb5d0;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.menuItem{
    padding: 15px;
    font-weight: bold;
}
a{
    text-decoration: none;
    width: 200px;
    text-align: center;
    color: white;
}
.nav-left:hover{
    background-color: white;
}
.nav-left:hover a{
    color: black;
}
</style>