<template>
  <div class="container">
      <div class="wrapper">
        <div class="rowContent">
            <div class="feed">
            <div class="feed-title">
                <div class="contentTitle">
                Все статьи
                </div>
                <Search 
                    @clickEvent="searchArticle"
                    @enterEvent="searchArticle"
                />
            </div>

            <div class="articles-feed">
                <div v-if="loading" class="loading">
                <img src="../../assets/img/loader.svg" alt="Загрузка данных">
                </div>
                <template v-else>
                <template v-if="this.articles.length === 0">
                    <p class="page-error">Ничего не найдено</p>
                </template>
                <template v-else>
                    <div class="articles-content-settings">
                    <details class="filter">
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
                    <details class="sort">
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
                                <button type="submit" id="submit-sort">
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
                </template>
                </template>
            </div>
            </div>
            <RecommendationBlock />
        </div>
      </div>
  </div>
</template>



<script>
import Articles from '../../db/articles'
import ArticlePreview from '../../components/ArticlePreview.vue'
import RecommendationBlock from '../../components/RecommendationBlock.vue'
import Search from '../../components/Search.vue';

export default {
  components: {
    ArticlePreview,
    RecommendationBlock,
    Search
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
  },

  methods: {
    searchArticle(searchText) {
        this.request.searchText = searchText;
    },

    openCloseFilterSort () {
        const filter = document.querySelector(".filter");
        const sort = document.querySelector(".sort");
        const closeFilter = document.querySelector("#close-filter");
        const submitFilter = document.querySelector("#submit-filter");
        const closeSort = document.querySelector("#close-sort");
        const submitSort = document.querySelector("#submit-sort");

        if (filter !== null) {
            filter.addEventListener("click", () => {
                if (sort.hasAttribute('open')) {
                    sort.removeAttribute('open');
                }
            });
            closeFilter.addEventListener("click", () => {
                filter.removeAttribute("open");
            });
            submitFilter.addEventListener("click", () => {
                filter.removeAttribute("open");
            });
        }

        if (sort !== null) {
            sort.addEventListener("click", () => {
                if (filter.hasAttribute('open')) {
                    filter.removeAttribute('open');
                }
            });
            closeSort.addEventListener("click", () => {
                sort.removeAttribute("open");
            });

            submitSort.addEventListener("click", () => {
                sort.removeAttribute("open");
            });
        }
    }
  }
}

</script>

<style lang="scss">
.feed {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.feed-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 40px 0;
}

.contentTitle {
    font-size: 35px;
    font-weight: 400;
}

.articles-feed {
    min-height: 250px;
}

.articles-content-settings, .vacancies-content-settings {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
}

.not-main {
    color: #B3B3B3;
}

.card-text {
    margin-top: 25px;
    margin-bottom: 25px;
}

.edit-block {
    margin-bottom: 10px;
}

.filter, 
.sort {
    display: flex;
    flex-direction: row;
    line-height: 17px;
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 99;
    background-color: transparent;
    padding-bottom: 18px;
    padding: 13px 0 16px 0;
}

.filter_block,
.sort_block {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.filter-title {
    font-size: 14px;
    line-height: 17px;
    padding: 11px;
    padding-bottom: 11px;
    border-left: 2px solid #FBECED;
    margin-left: 5px;
    margin-bottom: 10px;
}


.filter-title:hover {
    color: black;
    border-left: 2px solid #D5444C;
    cursor: pointer;
}

.filter-part {
    margin-top: 10px;
    border-bottom: 1px solid #EBEBEB;
}

.sort-part {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 0 11px 21px 11px;
    border-bottom: 1px solid #EBEBEB;

    & select {
        cursor: pointer;
        padding: 0 5px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.21);
        -webkit-appearance: auto !important;
    }
}

.sort-part:first-child {
    padding: 0 11px 10px 11px;
}

.sort-label {
    font-size: 14px;
    padding: 11px 0;
}

.filter_box,
.sort_box {
    position: absolute;
    background-color: white;
    width: 300px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    margin-top: 10px;
    border-radius: 5px;
}

.filter_list {
    list-style: none;
    margin-top: 20px;
    padding: 0 0 20px 11px;
    border-bottom: 1px solid #EBEBEB;
}

.filter-error {
    margin-top: 20px;
    padding: 0 0 20px 11px;
    font-size: 14px;
}

.filter_item:not(:last-child) {
    margin-bottom: 10px;
}

.filter_link {
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;
}

summary {
  display: block !important;
  outline: none;
}

.checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.checkbox label {
    padding-left: 10px;
    color: black;
    font-size: 14px;
}

.filter-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
}

.filter-buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.article-photo {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
}

.back-to {
    margin-top: 30px;
}

.page-error {
    color: rgba(0, 0, 0, 0.3);
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
}

.source-link {
    color: rgba(0, 0, 0, 0.3);
}

.button-main {
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

.loading {
    display: flex;
    width: 100%;
    min-height: 100%;
    justify-content: center;
}

.filter,
.sort {
    color: rgba(0, 0, 0, 0.3);
    font-size: 17px;
}

.sort {
    margin-left: 30px;
}

.filter-main,
.sort-main {
    color: rgba(0, 0, 0, 0.3);
    font-size: 17px;
    position: relative;
}

.sort-main {
    margin-left: 30px;
}

.filter_box_main,
.sort_box_main {
    position: absolute;
    right: 0;
    background-color: white;
    width: 300px;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    margin-top: 10px;
    border-radius: 5px;
    z-index: 99;
}

.filter_block:hover,
.sort_block:hover {
    color: rgba(0, 0, 0);
    cursor: pointer;
}

.filter_block::before {
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    content: " ";
    margin-right: 5px;
    background-image: url(../../assets/img/filter.svg);
    height: 15px;
    width: 15px;
}

.filter_block:hover::before {
    background-image: url(../../assets/img/filter-hover.svg);
}

.sort_block::before {
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    content: " ";
    margin-right: 5px;
    background-image: url(../../assets/img/sort.svg);
    height: 15px;
    width: 15px;
}

.sort_block:hover::before {
    background-image: url(../../assets/img/sort-hover.svg);
}
</style>