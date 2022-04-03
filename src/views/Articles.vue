<template>
  <div class="container">
      <div class="feed-body">
        <div class="feed">
          <div class="feed-title">
            <div class="content-title">
              Все статьи
            </div>
            <div class="search-field">
                <button class="search-button" type="submit">
                    <svg class="search-svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8292 14.0045L11.1684 10.3438C12.0784 9.24958 12.6266 7.84447 12.6266 6.31348C12.6266 2.83221 9.79443 0 6.31332 0C2.83213 0 0 2.83221 0 6.31348C0 9.79451 2.83213 12.6265 6.31332 12.6265C7.84424 12.6265 9.24942 12.0784 10.3436 11.1684L14.0045 14.8292C14.1183 14.9431 14.2676 15 14.4168 15C14.566 15 14.7153 14.9431 14.8292 14.8292C15.057 14.6014 15.057 14.2322 14.8292 14.0045ZM1.16638 6.31348C1.16638 3.47536 3.47528 1.16638 6.31332 1.16638C9.15129 1.16638 11.4601 3.47536 11.4601 6.31348C11.4601 9.15137 9.15129 11.4601 6.31332 11.4601C3.47528 11.4601 1.16638 9.15137 1.16638 6.31348Z" fill="#D5444C"/>
                    </svg>
                </button>
                <input v-model="request.searchText" class="input-search" placeholder="НАЙТИ..." type="search">
            </div>
          </div>

          <div class="articles-feed">
            <div v-if="loading" class="loading">
              <img src="../assets/img/loader.svg" alt="Загрузка данных">
            </div>
            <div v-else>
              <div v-if="this.articles.length === 0">
                <p class="page-error">Ничего не найдено</p>
              </div>
              <div v-else>
                <div class="articles-content-settings">
                  <details class="filter" @click="openCloseFilterSort()">
                      <summary>
                          <div class="filter_block">
                              <p>Фильтровать</p>
                          </div>
                      </summary>
                      <div class="filter_box">
                      <details class="filter-part">
                          <summary class="filter-title">По категории</summary>
                          <p v-if="this.categories.length === 0" class="filter-error">Нет доступных категорий</p>
                          <ul v-else class="filter_list">
                              <li class="filter_item"
                                  v-for="category in this.categories"
                                  :key='category.id'>
                                  <div class="checkbox">
                                      <input v-model='category.value' type="checkbox" :id='category.id' :name='category.name'>
                                      <label :for='category.id'>{{ category.name }}</label>
                                  </div>
                              </li>
                          </ul>
                      </details>
                      <div class="filter-buttons">
                        <button type="submit" id="submit-filter" @click="submitFilter()">
                            <svg width="30" height="30" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M226.872 106.664L142.018 191.517L103.128 152.626C97.271 146.769 87.773 146.768 81.915 152.625C76.057 158.483 76.057 167.98 81.915 173.838L131.411 223.336C134.224 226.149 138.039 227.73 142.017 227.73C142.018 227.73 142.017 227.73 142.018 227.73C145.996 227.73 149.811 226.149 152.624 223.337L248.085 127.878C253.943 122.02 253.943 112.523 248.085 106.665C242.227 100.807 232.73 100.806 226.872 106.664Z" fill="#A4A4A5"/>
                            </svg>
                        </button>
                        <button type="submit" id="close-filter">
                          <svg id="close-filter" width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M33.9286 35.7143C33.4716 35.7143 33.0146 35.54 32.6659 35.191L14.8089 17.334C14.1112 16.6363 14.1112 15.5064 14.8089 14.809C15.5063 14.1117 16.6365 14.1113 17.3339 14.809L35.1909 32.666C35.8886 33.3637 35.8886 34.4936 35.1909 35.191C34.8422 35.54 34.3856 35.7143 33.9286 35.7143Z" fill="#A4A4A5"/>
                              <path d="M16.0712 35.7144C15.6142 35.7144 15.1576 35.54 14.8089 35.191C14.1112 34.4936 14.1112 33.3634 14.8089 32.666L32.6659 14.809C33.3636 14.1113 34.4935 14.1113 35.1909 14.809C35.8882 15.5064 35.8886 16.6367 35.1909 17.334L17.3339 35.191C16.9852 35.54 16.5282 35.7144 16.0712 35.7144Z" fill="#A4A4A5"/>
                          </svg>
                        </button>
                      </div>
                      </div>
                  </details>
                  <details class="sort" @click="openCloseFilterSort()">
                      <summary>
                          <div class="sort_block">
                              <p>Сортировать</p>
                          </div>
                      </summary>
                      <div class="sort_box">
                        <div class="sort-part">
                          <p class="sort-label">Выберите один параметр</p>
                        </div>
                        <div class="sort-part">
                          <label class="sort-label" for="date">По дате</label>
                          <select v-model="request.sort.date" id="date" placeholder="Выберите">
                            <option value="" label="-">-
                            </option>
                            <option value="desc" label="От новых к старым">От новых к старым
                            </option>
                            <option value="asc" label="От старых к новым">От старых к новым
                            </option>
                          </select>
                        </div>
                        <div class="sort-part">
                          <label class="sort-label" for="views">По просмотрам</label>
                          <select v-model="request.sort.views" id="views" placeholder="Выберите">
                            <option value="" label="-">-
                            </option>
                            <option value="desc" label="От наибольших к наименьшим">От наибольших к наименьшим
                            </option>
                            <option value="asc" label="От наименьших к наибольшим">От наименьших к наибольшим
                            </option>
                          </select>
                        </div>
                        <div class="filter-buttons">
                            <button type="submit" id="submit-sort" @click="submitSort()">
                                <svg width="30" height="30" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M226.872 106.664L142.018 191.517L103.128 152.626C97.271 146.769 87.773 146.768 81.915 152.625C76.057 158.483 76.057 167.98 81.915 173.838L131.411 223.336C134.224 226.149 138.039 227.73 142.017 227.73C142.018 227.73 142.017 227.73 142.018 227.73C145.996 227.73 149.811 226.149 152.624 223.337L248.085 127.878C253.943 122.02 253.943 112.523 248.085 106.665C242.227 100.807 232.73 100.806 226.872 106.664Z" fill="#A4A4A5"/>
                                </svg>
                            </button>
                            <button type="submit" id="close-sort">
                              <svg id="close-filter" width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M33.9286 35.7143C33.4716 35.7143 33.0146 35.54 32.6659 35.191L14.8089 17.334C14.1112 16.6363 14.1112 15.5064 14.8089 14.809C15.5063 14.1117 16.6365 14.1113 17.3339 14.809L35.1909 32.666C35.8886 33.3637 35.8886 34.4936 35.1909 35.191C34.8422 35.54 34.3856 35.7143 33.9286 35.7143Z" fill="#A4A4A5"/>
                                  <path d="M16.0712 35.7144C15.6142 35.7144 15.1576 35.54 14.8089 35.191C14.1112 34.4936 14.1112 33.3634 14.8089 32.666L32.6659 14.809C33.3636 14.1113 34.4935 14.1113 35.1909 14.809C35.8882 15.5064 35.8886 16.6367 35.1909 17.334L17.3339 35.191C16.9852 35.54 16.5282 35.7144 16.0712 35.7144Z" fill="#A4A4A5"/>
                              </svg>
                            </button>
                        </div>
                      </div>
                  </details>
                </div>
                <ArticlePreview
                  v-for="(article, index) in this.articles"
                  :key='index'
                  v-bind:article="article"
                  v-bind:index="index"
                />
              </div>
            </div>
          </div>
        </div>
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
      </div>
  </div>
</template>



<script>
import ArticlePreview from '../components/ArticlePreview'
import Articles from '../db/articles'

export default {
  components: {
    ArticlePreview
  },

  data: () => ({
    loading: true,
    request: {
      sort: {
        date: null,
        views: null,
      },
      filter: {
        categories: {},
      },
      searchText: '',
      paginate: Number(3),
    },
    articles: [],
    categories: [],
    current_page: null,
    total: null,
    per_page: null,
  }),

  beforeMount() {
    this.articles = Articles;
    this.loading = false;
  }
}

</script>

<style lang="scss">
.container{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    max-width: 1366px;
}

.feed-body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0 0 0;
}

.feed{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.feed-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 45px 0;
}

.content-title {
    font-size: 35px;
    font-weight: 400;
}

.articles-feed{
    min-height: 250px;
}

.articles-content-settings, .vacancies-content-settings{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
}


.not-main{
    color: #B3B3B3;
}

.advisory{
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 40px;
}

.advisory-block{
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

.button-favourite{
    background-color: transparent !important;
    border: none !important;
    color: #B3B3B3;
    border-radius: 5px;
    border: none;
    padding: 7px 0px !important;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
}

.button-favourite:hover{
    color:#D5444C;
}

.button-favourite::before{
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    content: ' ';
    margin-right: 10px;
    background-image: url('/img/star.svg');
    height: 20px;
    width: 20px;
}
.button-favourite:hover::before{
    background-image: url('/img/star-hover.svg');
}

.card-text{
    margin-top: 25px;
    margin-bottom: 25px;
}

.edit-block{
    margin-bottom: 10px;
}

.filter, .sort{
    display: flex;
    flex-direction: row;
    /* font-weight: 600; */
    /* font-size: 14px; */
    line-height: 17px;
    /* color: #6F6E6E; */
    /* position: absolute; */
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 99;
    background-color: transparent;
    padding-bottom: 18px;
    /* margin-right: 288.67px; */
    padding: 13px 0 16px 0;
}

.filter_block, .sort_block{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.filter-title{
    font-size: 14px;
    line-height: 17px;
    padding: 11px;
    padding-bottom: 11px;
    border-left: 2px solid #FBECED;
    margin-left: 5px;
    margin-bottom: 10px;
}


.filter-title:hover{
    color: black;
    border-left: 2px solid #D5444C;
    cursor: pointer;
}

.filter-part{
    margin-top: 10px;
    border-bottom: 1px solid #EBEBEB;
    /* position: absolute; */
}

.sort-part{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 0 11px 21px 11px;
    border-bottom: 1px solid #EBEBEB;
}

.sort-part:first-child{
    padding: 0 11px 10px 11px;
}

.sort-label{
    font-size: 14px;
    padding: 11px 0;
}

.filter_box, .sort_box{
    position: absolute;
    background-color: white;
    width: 300px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    margin-top: 10px;
    border-radius: 5px;
}

.filter_list{
    list-style: none;
    margin-top: 20px;
    /* margin: 20px 0; */
    padding: 0 0 20px 11px;
    border-bottom: 1px solid #EBEBEB;
}

.filter-error{
    margin-top: 20px;
    padding: 0 0 20px 11px;
    font-size: 14px;
}

.filter_item:not(:last-child){
    margin-bottom: 10px;
}

.filter_link{
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;
}

summary {
  display: block;
  outline: none;
}

summary::-webkit-details-marker {
  display: none;
}

.checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.checkbox label{
    padding-left: 10px;
    color: black;
    font-size: 14px;
}

.filter-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
}

.filter-buttons button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.article-photo{
    margin-top: 30px;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
}

.pagination{
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    justify-content: center;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #D5444C !important;
    color: #FFF !important;
}

.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    color: #FFF !important;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
     color: #D5444C !important;
}

.post-button{
    border: none;
    background-color: transparent;
    outline: none;
}

.post-button:hover{
    cursor: pointer;
}

.post-button:hover .likes svg path{
    fill: #D5444C;
    fill-opacity: 1;
}

.post-button:hover .bookmarks svg path{
    fill: #D5444C;
    fill-opacity: 1;
}

.post-button:hover span{
    color: #D5444C;
}

.post-button-active .likes span{
    color: #D5444C;
}


.post-button-active .bookmarks span{
    color: #D5444C;
}

.back-to{
    margin-top: 30px;
}

.page-error{
    color: rgba(0, 0, 0, 0.3);
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

.source-link{
    color: rgba(0, 0, 0, 0.3);
}

.button-main{
    background-color: #D5444C !important;
    border: none !important;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 5px 10px !important;
    cursor: pointer;
    outline: none;
    height: 30px;
    box-sizing: border-box;
}

.search-field{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.search-button{
    display: flex;
    align-items: center;
    top: 0;
    right: 0px;
    padding: 5px 10px;
    height: 30px;
    border:none;
    background-color: #FBECED;
    border-radius: 5px 0px 0px 5px;
    outline: none;
    cursor: pointer;
    margin-left: 20px;
}

.input-search{
    height: 30px;
    line-height: 30px;
    border: none;
    border-radius:0px 5px 5px 0px;
    outline: none;
    background-color: #FBECED;
    color: #D5444C;
    font-size: 16px;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    width: 25vw;
}

input::-webkit-input-placeholder {
    vertical-align: middle;
    color: #D5444C;
    font-size: 12px;
}

.loading{
    display: flex;
    width: 100%;
    min-height: 100%;
    justify-content: center;
    /* margin-top: 15vh; */
    /* margin-bottom: 100px; */
}

.filter, .sort{
    color: rgba(0, 0, 0, 0.3);
    font-size: 17px;
}

.sort{
    margin-left: 30px;
}

.filter-main, .sort-main{
    color: rgba(0, 0, 0, 0.3);
    font-size: 17px;
    position: relative;
}

.sort-main{
    margin-left: 30px;
}

.filter_box_main, .sort_box_main{
    position: absolute;
    right: 0;
    background-color: white;
    width: 300px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    margin-top: 10px;
    border-radius: 5px;
    z-index: 99;
}

.filter_block:hover, .sort_block:hover{
    color: rgba(0, 0, 0);
    cursor: pointer;
}

.filter_block::before{
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    content: " ";
    margin-right: 5px;
    background-image: url(../assets/img/filter.svg);
    height: 15px;
    width: 15px;
}

.filter_block:hover::before{
    background-image: url(../assets/img/filter-hover.svg);
}

.sort_block::before{
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    content: " ";
    margin-right: 5px;
    background-image: url(../assets/img/sort.svg);
    height: 15px;
    width: 15px;
}

.sort_block:hover::before{
    background-image: url(../assets/img/sort-hover.svg);
}
</style>