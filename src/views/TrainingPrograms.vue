<template>
    <div class="programContainer">
        <div class="programWrapper">
            <h1>Наши программы</h1>
            <div class="progress-list">
                <div class="progress-block">
                    <p>Прогресс</p>
                </div>
                <div class="programm-list">
                    <div class="type-item">
                        <div class="level">Начальный
                            <div class="level-type">
                                <div class="type-programm">
                                    <p>Грамматика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Лексика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Тесты</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-progress">
                            <span class="material-icons icon icon-txt">turned_in_not</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
                        </div>
                    </div>
                    <div class="type-item">
                        <div class="text-progress">
                            <span class="material-icons icon icon-txt">turned_in_not</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
                        </div>
                        <div class="level">Средний
                            <div class="level-type">
                                <div class="type-programm">
                                    <p>Грамматика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Лексика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Тесты</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="type-item">
                        <div class="level">Продвинутый
                            <div class="level-type">
                                <div class="type-programm">
                                    <p>Грамматика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Лексика</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                                <div class="type-programm">
                                    <p>Тесты</p>
                                    <span class="material-icons icon center">push_pin</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-progress">
                            <span class="material-icons icon icon-txt">turned_in_not</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos doloribus, reprehenderit incidunt illum quisquam pariatur officiis sunt, debitis, deleniti enim sit quas facilis repudiandae. Est aliquid magni et aliquam.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Trainingprograms',
};
</script>

<style lang="scss" scoped>
.programContainer {
    display: flex;
    justify-content: center;
}

.programWrapper {
    padding: 40px 0 60px 0;
    text-align: center;
    text-transform: none;
    max-width: 1366px;

    & h1 {
        font-size: 35px;
        font-weight: 400;
        margin-bottom: 40px;
        text-align: center;
    }
}

.progress-list {
    display: flex;
    justify-content: space-around;
}

.progress-block {
    margin: 0 50px;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.programm-list {
    width: 100%;
}

.type-item {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 200px;
}

.text-progress {
    position: relative;
    padding: 30px 0;
    border: 1px solid black;
    width: 300px;
    height: 250px;
}

.level {
    position: relative;
    font-size: 20px;
    padding-top: 50px;
    width: 300px;
    height: 150px;
    background-color: rgb(232, 232, 232);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.icon {
    position: absolute;
    left: -5px;
    top: -8px;
    color:  #ABB5D0;
    transform: rotate(-45deg) scale(1.5);
}

.center {
    color: black;
    left: 30px;
    transform: rotate(25deg) scale(1);
}

.icon-txt {
    color: red;
    transform: rotate(0deg) scale(1.7);
    top: 0;
    left: 18px;
}

.type-programm {
    cursor: pointer;
    position: relative;
    font-size: 18px;
    writing-mode: vertical-lr; 
    text-orientation: upright; 
    margin: 0 10px;
    width: 80px;
    height: 250px;
    padding-bottom: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-color: rgb(232, 232, 232);
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.level-type {
    display: flex;
    padding-top: 50px;
}

.type-programm:hover {
    background-color: #666e83;
    color: white;
    background: 
		linear-gradient(rgba(135, 60, 255, 0.4), rgba(135, 60, 255, 0.0) 80%),
		linear-gradient(-45deg, rgba(120, 155, 255, 0.9) 25%, rgba(255, 160, 65, 0.9) 75%);
    font-weight: 700;
}


</style>