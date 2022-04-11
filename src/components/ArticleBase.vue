<template>
    <div class="card-view-info">
        <div class="card-about-info">
            <p class="author mini-hover">{{ this.article.title }}</p>
            <p>{{ this.formattedDate }}</p>
        </div>
        <div class="card-categories">
            <p
            v-for="category in this.article.categories"
            :key='category.id'
            class="mini-hover"
            >
                {{ category.name }}
            </p>
        </div>
        <div class="card-main-info">
            <h2>{{ this.article.title }}</h2>
            <img
                class="article-photo"
                :src="this.article.image"
                alt="article-photo"
            >
            <p class="card-description">{{ this.article.text }}</p>
            <div class="ratings">
            <div class="views">
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3849 7.04225C23.1747 6.75464 18.1652 0 11.7671 0C5.36909 0 0.359361 6.75464 0.149343 7.04197C-0.049781 7.31483 -0.049781 7.6849 0.149343 7.95775C0.359361 8.24536 5.36909 15 11.7671 15C18.1652 15 23.1747 8.24531 23.3849 7.95798C23.5843 7.68517 23.5843 7.31483 23.3849 7.04225ZM11.7671 13.4483C7.05429 13.4483 2.97248 8.96509 1.76417 7.49947C2.97091 6.03256 7.04418 1.55172 11.7671 1.55172C16.4797 1.55172 20.5613 6.03412 21.7701 7.50053C20.5633 8.96739 16.4901 13.4483 11.7671 13.4483Z" fill="black" fill-opacity="0.3"/>
                <path d="M11.7671 2.84482C9.20031 2.84482 7.11194 4.93319 7.11194 7.50001C7.11194 10.0668 9.20031 12.1552 11.7671 12.1552C14.334 12.1552 16.4223 10.0668 16.4223 7.50001C16.4223 4.93319 14.334 2.84482 11.7671 2.84482ZM11.7671 10.6034C10.0558 10.6034 8.6637 9.21128 8.6637 7.50001C8.6637 5.78875 10.0559 4.39658 11.7671 4.39658C13.4784 4.39658 14.8706 5.78875 14.8706 7.50001C14.8706 9.21128 13.4784 10.6034 11.7671 10.6034Z" fill="black" fill-opacity="0.3"/>
                </svg>
                <span>{{ this.article.views }}</span>
            </div>
            <button class="post-button">
                <div class="bookmarks">
                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.87912 0H0.94459C0.42375 0 0 0.42375 0 0.94459V14.4333C0 14.6388 0.111269 14.8281 0.290742 14.9282C0.376699 14.9762 0.471738 15 0.566748 15C0.670283 15 0.773438 14.9718 0.864668 14.9156L4.91297 12.4162L8.96071 14.8974C9.13564 15.0049 9.35499 15.0093 9.53388 14.9088C9.71279 14.8086 9.82368 14.6196 9.82368 14.4144V0.94459C9.82368 0.42375 9.39996 0 8.87912 0ZM8.69019 13.4019L5.20825 11.2674C5.02576 11.1555 4.79604 11.1561 4.61411 11.2683L1.1335 13.4172V1.1335H8.69019V13.4019Z" fill="black" fill-opacity="0.3"/>
                    </svg>
                    <span>{{ this.article.saves }}</span>
                </div>
            </button>
            </div>
            <div class="back-to">
            <router-link
                class="button-not-main"
                :to="{ name: 'Articles' }">
                Назад
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Articles from '../db/articles'

export default {
    props: {
        article: Object,
        index: Number,
    },
    data: () => ({
        rating: null,
        formattedDate: null
    }),
    beforeMount() {
        if (Object.keys(this.article).length == 0) {
            const articleId = this.$route.params.id;
            this.article = Articles.find(article => article.id === articleId);
        }

        const dateFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric', year: "numeric"});
        this.formattedDate = dateFormatter.format(new Date(this.article.created_at));
    }
}

</script>

<style lang="scss">
.card-info{
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.card-view-info {
    margin-bottom: 50px;
}
</style>