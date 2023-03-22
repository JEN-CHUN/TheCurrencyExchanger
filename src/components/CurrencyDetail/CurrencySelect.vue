<template>
  <div class="currency">
    <input type="text" class="currency__input" :disabled="isDisabled" />
    <!-- <select name="currencies" class="currency__options" id=""> -->
    <div
      class="currency__options"
      @click.stop="toogleSelect()"
      @click="$emit('toggleIsOpen')"
    >
      <p class="currency__options__nation">awef</p>
      <p class="currency__options__arrow" v-html="OpenIcon"></p>
    </div>
    <div class="currency__list" @click.stop v-if="OptionListOpen && isOpen">
      <input
        class="currency__list__search"
        type="text"
        name=""
        id=""
        placeholder="Type to Search"
      />
      <ul class="national-list">
        <li class="national-list__list-item" v-for="index in 10" :key="index">
          <!-- <img
            class="national-list__list-item__pic"
            src="https://placehold.jp/50x30.png"
            alt=""
          /> -->
          <p class="national-list__list-item__name">america</p>
          <p class="national-list__list-item__currency">- USD</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  watchEffect,
  onMounted,
  defineProps,
  defineEmits,
  inject,
} from "vue";

defineEmits(["toggleIsOpen"]);
const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
});
const OptionListOpen = ref(false);
const outsideClick = ref(false);
const openIcon = ref(false);
const listOpenOne = inject("listOpenOne");
const listOpenTwo = inject("listOpenTwo");

function toogleSelect() {
  // 關閉其他的 currency__list
  OptionListOpen.value = true;
}

// function changeOpenIcon() {
//   openIcon.value === "&#x25BC;" && props.isOpen === false
//     ? (openIcon.value = "&#x25B2;")
//     : (openIcon.value = "&#x25BC;");
//   console.log(openIcon.value);
//   console.log(props.isOpen);
// }

const OpenIcon = computed(() => {
  return openIcon.value === false && props.isOpen === false
    ? "&#x25BC;"
    : "&#x25B2;";
});

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
  z-index: 9999;
  border-radius: 1rem;

  &__input {
    width: calc(100% - #{$currency-option});
    font-size: 2rem;
    height: 4.5rem;
    outline: none;
    border: none;
    border-radius: 1rem;
  }

  &__input:disabled {
    cursor: no-drop;
  }
  &__options {
    position: relative;
    width: $currency-option;
    height: 4.5rem;
    font-size: 2rem;
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
      height: 3.5rem;
      font-size: 1.5rem;
      border: 0;
      outline: none;
    }

    &__search::placeholder {
      font-size: 1.5rem;
    }

    &__search:focus {
      background-color: rgb(209, 255, 255);
    }
  }
}

.national-list {
  text-align: left;

  &__list-item {
    display: flex;
    align-items: center;
    font-size: 3.5rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;

    &__name {
      font-size: 2.5rem;
      padding: 0;
      margin-left: 1rem;
    }

    &__currency {
      color: rgb(65, 65, 65);
      font-size: 1.5rem;
      margin-left: 2rem;
    }
  }

  &__list-item:hover {
    background-color: rgb(18, 255, 176);
    cursor: pointer;
  }
}
</style>
