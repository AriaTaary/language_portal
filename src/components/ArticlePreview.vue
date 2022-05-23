<template>
  <div class="card-info">
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
      <p class="card-description-base">{{ this.article.text }}</p>
      <router-link class="button-not-main"
        :to="{ name: 'ArticleView',
        params: { id: this.article.id } }
        ">Подробнее >>
      </router-link>
      <div class="ratings">
        <div class="views">
          <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3849 7.04225C23.1747 6.75464 18.1652 0 11.7671 0C5.36909 0 0.359361 6.75464 0.149343 7.04197C-0.049781 7.31483 -0.049781 7.6849 0.149343 7.95775C0.359361 8.24536 5.36909 15 11.7671 15C18.1652 15 23.1747 8.24531 23.3849 7.95798C23.5843 7.68517 23.5843 7.31483 23.3849 7.04225ZM11.7671 13.4483C7.05429 13.4483 2.97248 8.96509 1.76417 7.49947C2.97091 6.03256 7.04418 1.55172 11.7671 1.55172C16.4797 1.55172 20.5613 6.03412 21.7701 7.50053C20.5633 8.96739 16.4901 13.4483 11.7671 13.4483Z" fill="black" fill-opacity="0.3"/>
            <path d="M11.7671 2.84482C9.20031 2.84482 7.11194 4.93319 7.11194 7.50001C7.11194 10.0668 9.20031 12.1552 11.7671 12.1552C14.334 12.1552 16.4223 10.0668 16.4223 7.50001C16.4223 4.93319 14.334 2.84482 11.7671 2.84482ZM11.7671 10.6034C10.0558 10.6034 8.6637 9.21128 8.6637 7.50001C8.6637 5.78875 10.0559 4.39658 11.7671 4.39658C13.4784 4.39658 14.8706 5.78875 14.8706 7.50001C14.8706 9.21128 13.4784 10.6034 11.7671 10.6034Z" fill="black" fill-opacity="0.3"/>
          </svg>
          <span>{{ this.article.views }}</span>
        </div>
        <button class="post-button" @click="likeArticle()">
          <div class="likes">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8222 1.41007C13.9873 0.512622 12.8173 0.00198696 11.5915 9.39718e-05C10.3647 0.00151372 9.19355 0.511878 8.35732 1.40949L8.07233 1.71065L7.78733 1.40949C6.12802 -0.376375 3.33511 -0.478935 1.54928 1.18037C1.47014 1.25393 1.39372 1.33033 1.32016 1.40949C-0.440053 3.3081 -0.440053 6.2423 1.32016 8.14091L7.6535 14.8198C7.87262 15.0511 8.23776 15.061 8.46908 14.8419C8.47665 14.8348 8.48402 14.8274 8.49118 14.8198L14.8222 8.14091C16.5823 6.24251 16.5823 3.30847 14.8222 1.41007ZM13.9874 7.34649H13.9868L8.07233 13.5846L2.15727 7.34649C0.812567 5.89578 0.812567 3.65404 2.15727 2.20333C3.37842 0.879795 5.44134 0.796807 6.76488 2.01796C6.82914 2.07725 6.89096 2.13907 6.95026 2.20333L7.6535 2.94525C7.88526 3.17552 8.25943 3.17552 8.49118 2.94525L9.19443 2.20391C10.4156 0.880369 12.4785 0.797382 13.802 2.01853C13.8663 2.07782 13.9281 2.13965 13.9874 2.20391C15.3438 3.65692 15.3538 5.90275 13.9874 7.34649Z" fill="black" fill-opacity="0.3"/>
            </svg>
            <span>{{ this.article.likes }}</span>
          </div>
        </button>
        <button class="post-button" @click="saveArticle()">
          <div class="bookmarks">
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.87912 0H0.94459C0.42375 0 0 0.42375 0 0.94459V14.4333C0 14.6388 0.111269 14.8281 0.290742 14.9282C0.376699 14.9762 0.471738 15 0.566748 15C0.670283 15 0.773438 14.9718 0.864668 14.9156L4.91297 12.4162L8.96071 14.8974C9.13564 15.0049 9.35499 15.0093 9.53388 14.9088C9.71279 14.8086 9.82368 14.6196 9.82368 14.4144V0.94459C9.82368 0.42375 9.39996 0 8.87912 0ZM8.69019 13.4019L5.20825 11.2674C5.02576 11.1555 4.79604 11.1561 4.61411 11.2683L1.1335 13.4172V1.1335H8.69019V13.4019Z" fill="black" fill-opacity="0.3"/>
            </svg>
            <span>{{ this.article.saves }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    article: Object,
    index: Number,
  },
  data: () => ({
    formattedDate: null
  }),

  beforeMount() {
      const dateFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric', year: "numeric"});
      this.formattedDate = dateFormatter.format(new Date(this.article.created_at));
  },

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

.card-info-view{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

.card-about-info{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.card-about-main-info{
    display: flex;
    flex-direction: row;
}

.card-categories{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
}

.card-categories-main{
    margin-top: 15px !important;
}

.card-about-info .author{
    color: #D5444C;
}

.card-about-info p, .card-categories p{
    color: rgba(0, 0, 0, 0.3);
    margin-right: 20px;
}

.card-main-info {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & h2, p {
      color: black;
      text-align: left;
    }
}

.card-main-info-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    color: black;
}

.card-main-info-title p{
    margin-right: 20px;
}

.card-description{
    margin-top: 25px;
    margin-bottom: 25px;
    color: black;
}


.card-description-base{
    margin-top: 25px;
    margin-bottom: 17px;
    color: black;
}


.card-main-info-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ratings{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.views, .likes, .bookmarks{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
}

.views svg, .likes svg, .bookmarks svg{
    margin-right: 5px;
}

.views span, .likes span, .bookmarks span{
    color: rgb(0, 0, 0, 0.3);
}


.categories{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.category{
    background-color: transparent !important;
    color: #D5444C;
    border-radius: 5px;
    border: 1px solid #D5444C ;
    padding: 7px 10px !important;
    cursor: pointer;
     margin-bottom: 20px;
}

.category:hover{
    background-color: #D5444C !important; 
    color: white;
    border-radius: 5px;
}

.category:not(:last-child){
    margin-right: 10px;
}

.button-not-main{
    background-color: transparent;
    color: #D5444C ;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
}

.button-not-main:hover{
    color: #d5444bc5;
    border-radius: 5px;
}
</style>