<template>
    <div class="miniHeaderContainer">
        <div class="miniHeaderContent">
            <router-link class="miniMenuItem" to="/words" >Слова</router-link>
            <router-link class="miniMenuItem" to="/speaking" >Разговорник</router-link>
            <router-link class="miniMenuItem" to="/music" >Музыка</router-link>
            <router-link class="miniMenuItem" to="/videos" >Фильмы И Видео</router-link>
            <router-link class="miniMenuItem" to="/testing" >Тестирование</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniHeader',
};
</script>

<style lang="scss" scoped>
.miniHeaderContainer {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
}

.miniHeaderContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1366px;
}

.miniMenuItem {
    color: black;
    text-transform: uppercase;

    &:hover {
        color: #abb5d0;
    }
}

.router-link-active {
    color: #abb5d0;
}
</style>