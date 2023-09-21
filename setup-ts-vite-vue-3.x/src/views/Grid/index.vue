<template>
  <div class="container">
    <h2 class="">grid rows colums</h2>
    <div class="grid w-full h-96 grid-cols-3 grid-rows-3 gap-px">
      <div v-for="it in 9" :key="it" class="bg-red-500"></div>
    </div>

    <h2>grid areas</h2>
    <div class="layout">
      <header>header</header>
      <aside>aside</aside>
      <main>main</main>
      <footer>footer</footer>
    </div>

    <h2>align-items justify-items</h2>
    <div class="box">
      <div class="item1"></div>
      <div class="item1"></div>
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item2"></div>
      <div class="item2"></div>
    </div>

    <h2>align-content justify-content</h2>
    <div class="wrapper">
      <div class="item1"></div>
      <div class="item1"></div>
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item2"></div>
      <div class="item2"></div>
    </div>


    <h2>demo1</h2>
    <div class="box1">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
      <div class="item5">5</div>
    </div>

    <h2>demo2</h2>
    <div class="box2">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
    </div>

    <h2>居中布局</h2>
    <div class="box3">
      <div class="item"></div>
    </div>

    <h2>auto-fill 关键字</h2>
    <div class="box4">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>


    <h2>grid-auto-flow 属性</h2>
    <h4>column</h4>
    <div class="box5">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
    <h4>column dense</h4>
    <div class="box6">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>

    <h2>grid-auto-columns、grid-auto-rows</h2>
    <div class="box7">
      <div v-for="i in 9" :key="i" class="item" >{{ i }}</div>
    </div>

    <h2>grid-column-start grid-column-end grid-row-start grid-row-end</h2>
    <h2>grid-column grid-row</h2>
    <div class="box8">
      <div v-for="i in 9" :key="i" class="item">{{ i }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.item {
  @apply flex justify-center items-center text-white;
}
.layout {
  display: grid;
  width: 100vw;
  height: 400px;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas: 
    "header header header header"
    "sidebar content content content"
    "footer footer footer footer";
  header {
    grid-area: header;
    background-color: green;
  }
  aside {
    grid-area: sidebar;
    background-color: blue;
  }
  main {
    grid-area: content;
    background-color: cyan;
  }
  footer {
    grid-area: footer;
    background-color: yellow;
  }
}

.box {
  display: grid;
  width: 100vw;
  height: 300px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
  align-items: center;
  justify-items: center;
  background: cyan;

  .item1 {
    background: green;
    width: 80%;
    height: 50%;
  }

  .item2 {
    background: blue;
    width: 80%;
    height: 50%;
  }
}

.wrapper {
  background: cyan;
  display: grid;
  height: 200px;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 80px);
  align-content: end;
  justify-content: space-between;

  .item1 {
    background: blue;
    // width: 80%;
    // height: 80%;
  }
  .item2 {
    background: green;
    // width: 80%;
    // height: 80%;
  }
}

.box1 {
  height: 150px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  grid-template-areas: 
    'a a b'
    'a a d'
    'c e d';

  .item1 {
    grid-area: a;
    background: blue;
  }
  .item2 {
    grid-area: b;
    background: red;
  }
  .item3 {
    grid-area: c;
    background: green;
  }
  .item4 {
    grid-area: d;
    background: yellow;
  }
  .item5 {
    grid-area: e;
    background: purple;
  }
}

.box2 {
  height: 150px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  
  div {
    background: blue;
  }
  .item5 {
    grid-area: 2 / 1 / span 2 / span 3;
  }
}

.box3 {
  height: 200px;
  background: cyan;
  display: grid;
  grid-template-rows: auto 100px auto;
  grid-template-columns: auto 200px auto;
  // grid-template-areas: 
  //     'auto auto auto'
  //     'auto a auto'
  //     'auto auto auto';

  .item {
    // width: 200px;
    // height: 100px;
    background: red;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    // grid-area: 2 / 2 / span 1 / span 1;
    // grid-area: a;
  }
}

.box4 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 1px;

  .item {
    background-color: red;
    height: 100px;
  }
}

.box5 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-auto-flow: column;
  gap: 1px;
  .item {
    background: blue;
  }
}

.box6 {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);
  gap: 1px;
  grid-auto-flow: column;

  .item {
    background: blue;
    height: 60px;
    grid-column: auto / span 1;
  }
  .item1 {
    grid-column: auto / span 2;
  }
  .item2 {
    grid-column: auto / span 2;
    // grid-column-start: 1;
    // grid-column-end: 3;
    // grid-column: span 2;
  }

}

.box7 {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 2px;
  grid-auto-columns: 50px;
  grid-auto-rows: 100px;
  .item {
    background-color: cyan;

    &:nth-child(8) {
      grid-column-start: 2;
      grid-row-start: 4;
    }

    &:nth-child(9) {
      grid-column-start: 3;
      grid-row-start: 5;
    }
  }
}

.box8 {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(4, 120px);
  grid-auto-rows: 120px;
  gap: 1px;
  // grid-auto-flow: column;

  .item {
    background-color: blue;

    &:nth-child(1) {
      grid-row: 2 / span 2;
      grid-column: 1 / span 2;
    }
  }
}
</style>