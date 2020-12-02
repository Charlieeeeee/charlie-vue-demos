<template>
<div class="interface">
    interface
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

@Component
export default class Interface extends Vue{

}

</script>

<style>

</style>