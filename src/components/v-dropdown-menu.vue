<template>
    <div>
<div  class="topItem menuItem">
    Интерактив      
    <div class="wrpList">
        <ul class="list">
            <li class="list-item">
              <slot></slot>
            </li>
        </ul>
    </div>
</div>
    </div>
</template>

<script>
export default {
  name: "VMenuInteractive",
};
</script>
<style lang="scss">
.topItem {
  position: relative;
}
.topItem:hover .wrpList {
  display: block;
}
.wrpList {
  display: none;
  position: absolute;
}
.list {
  top: 50px;
  right: 130px;
  justify-content: space-around;
  flex-direction: column;
  background: #abb5d0;
  padding: 10px 20px 10px 0;
  border-radius: 10px;
}
.list-item {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>