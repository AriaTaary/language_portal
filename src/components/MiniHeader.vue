<template>
    <div class="miniHeaderContainer">
        <div class="miniHeaderContent">
            <router-link 
                to="/words"
                class="miniMenuItem"
            >Слова</router-link>
            <router-link 
                to="/speaking" 
                class="miniMenuItem"
            >Разговорник</router-link>
            <router-link 
                to="/music" 
                class="miniMenuItem"
            >Музыка</router-link>
            <router-link 
                to="/videos" 
                class="miniMenuItem"
            >Фильмы И Видео</router-link>
            <router-link 
                to="/testing" 
                class="miniMenuItem"
            >Тестирование</router-link>
            <router-link 
                to="/translateintime" 
                class="miniMenuItem"
            >Перевод на время</router-link>
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