<template>
    <div class="advisory">
        <div class="advisory-block">
            <div class="title">
                ПОПУЛЯРНЫЕ СТАТЬИ
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
            <div class="title">
                ПОДБОРКА ДЛЯ ВАС
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
            <div class="article">
                <p class="article-title">PRESENT SIMPLE</p>
                <p class="article-count"><span class="pink">35</span></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.advisory{
    margin-left: 50px;
    margin-bottom: 40px;
}

.advisory-block{
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.05);
    width: 25vw;
    box-sizing: border-box;
    border-radius: 5px;

    & .title {
        color: rgb(0, 0, 0, 0.3);
        padding: 15px;
        border-bottom: 2px solid white; 
    }

    & .article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        height: 19px;
    }

    & .article-title{
        color: black;
    }

    & .article-count {
        display: inline-flex;
        color: #D5444C;
    }

    & .article-count::after{
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        content: " ";
        margin-left: 10px;
        background-image: url(../assets/img/bookmark-active.svg);
        height: 17px;
        width: 17px;
    }
}
</style>