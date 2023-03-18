<template>
  <div class="currency">
    <input type="text" class="currency__input" />
    <!-- <select name="currencies" class="currency__options" id=""> -->
    <div
      class="currency__options"
      @click.stop="toogleSelect"
      @click="$emit('toggleIsOpen')"
    >
      <p class="currency__options__nation">awef</p>
      <p class="currency__options__arrow">&#x25BC;</p>
    </div>
    <div class="currency__list" @click.stop v-if="OptionListOpen && isOpen">
      <input class="currency__list__search" type="text" name="" id="" />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  watchEffect,
  onMounted,
  defineProps,
  defineEmits,
  inject,
} from "vue";

defineEmits(["toggleIsOpen"]);
const props = defineProps({
  isOpen: Boolean,
});
const OptionListOpen = ref(false);
const outsideClick = ref(false);

const listOpenOne = inject("listOpenOne");
const listOpenTwo = inject("listOpenTwo");

function toogleSelect() {
  // 關閉其他的 currency__list
  OptionListOpen.value = true;
}

onMounted(() => {
  window.addEventListener("click", () => {
    outsideClick.value = true;
  });
});

watchEffect(() => {
  if (outsideClick.value) {
    outsideClick.value = false;
    OptionListOpen.value = false;
    listOpenOne.value = false;
    listOpenTwo.value = false;
  }
});

///
props;
</script>

<style scoped lang="scss">
$currency-option: 120px;

.currency {
  display: flex;
  border: 1px solid black;
  position: relative;

  &__input {
    width: calc(100% - #{$currency-option});
    font-size: 2rem;
    height: 4.5rem;
    outline: none;
    border: none;
  }
  &__options {
    position: relative;
    width: $currency-option;
    height: 4.5rem;
    font-size: 2rem;
    text-align: center;
    // background-color: blue;
    border: none;
    outline: none;
    border-left: 1px solid black;
    user-select: none;
    cursor: pointer;

    &__nation {
      font-size: 2.5rem;
      line-height: 4.5rem;
    }

    &__arrow {
      position: absolute;
      font-size: 2rem;
      top: 30%;
      right: 0.5rem;
    }
  }

  &__list {
    position: absolute;
    height: 25rem;
    width: 30rem;
    background-color: aqua;
    top: calc(100% + 0.1rem);
    overflow-y: scroll;
    right: 0;
    box-shadow: 2px 5px 6px 1px rgb(71, 71, 71);

    &__search {
      width: 100%;
      height: 2.5rem;
      font-size: 2rem;
      border: 0;
      outline: none;
    }

    &__search:focus {
      background-color: rgb(209, 255, 255);
    }
  }
}
</style>
