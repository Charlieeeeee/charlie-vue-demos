<template>
  <div class="text-center">
    <CButton class="mt-10 active:bg-blue-900 motion-safe:hover:scale-110 transition-all duration-500">click me</CButton>

    <div class="mt-10 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./../../assets/vue.svg" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>

    <button class="mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Hover me
    </button>

    <br>
    <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-light-blue-50 to-light-blue-100 p-10">
      <div class="max-w-xs w-full mx-auto">
        <input class="py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600">
      </div>
    </div>

    <div class="flex justify-center mt-10">
      <div v-for="item in 4" class="hover:rounded w-10 h-10 flex justify-center items-center bg-red-500 mr-10 transform first:rotate-45 last:rotate-135 even:bg-cyan-500">
        {{ item }}
      </div>
    </div>

    <div class="mt-10 dark:bg-gray-800 h-20">
    </div>

    <div class="bg-cyan-100 p-10">
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://www.tailwindcss.cn/img/erin-lindford.jpg" alt="Woman's Face" />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p class="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
      </div>

      <div class="bg-blue-50 p-10">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </div>

    </div>
    <div class="my-hover:my-hover-bg-blue p-10">hover blue</div>

    <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div class="flex items-center space-x-3">
        <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
        <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
      </div>
      <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
    </a>

    <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
      </span>
      <input class="placeholder:italic placeholder:text-blue-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
    </label>

    <form class="flex justify-center items-center space-x-6 p-10">
      <div class="shrink-0">
        <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input type="file" class="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "/>
      </label>
    </form>
    
    <div class="p-20 text-left">
      <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
    </div>

    <div class="p-20 selection:bg-fuchsia-300 selection:text-fuchsia-900 selection:text-white">
      <p>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers
        a strange calm came over me. I don't know if it was divine intervention
        or the kinship of all living things but I tell you Jerry at that moment,
        I <em>was</em> a marine biologist.
      </p>
    </div>

    <div class="p-20 w-1/2">
      <p class="first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
        first-letter:mr-3 first-letter:float-left
      ">
        Well, let me tell you something, funny boy. Y'know that little stamp, the one
        that says "New York Public Library"? Well that may not mean anything to you,
        but that means a lot to me. One whole hell of a lot.
      </p>
    </div>

    <div class="p-px text-center text-primary/80">
      some primary colored texts
    </div>

    <article class="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </p>
      <!-- ... -->
    </article>

    <div class="bg-cyan-700 w-screen aspect-rect"></div>
  
    <div class="container aspect-rect bg-cyan-400"></div>

    <div class="columns-2">
      <p>Well, let me tell you something, check this out, and see what will happen.</p>
      <p>Sure, go ahead, laugh, what is going on?</p>
      <p>Maybe we can live without...</p>
      <p>Look. If you think this is...</p>
    </div>

    <p class="ordinal">
      1st
    </p>
    <p class="tracking-wider">The quick brown fox ...</p>
  </div>
  
</template>

<script setup lang="ts">
import CButton from './components/CButton.vue'

</script>

<style scoped>
.my-hover\:my-hover-bg-blue:hover {
  background-color: blue;
  color: #fff;
  cursor: pointer;
}
</style>