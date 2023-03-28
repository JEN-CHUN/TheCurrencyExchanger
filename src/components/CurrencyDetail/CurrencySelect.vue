<template>
  <div class="currency" v-if="countriesArray">
    <input
      type="text"
      class="currency__input"
      :disabled="isDisabled"
      @input="$emit('updateData', $event.target.value)"
      :value="isNaN(currencyValue) ? 0 : currencyValue"
    />
    <div
      class="currency__options"
      @click.stop="toogleSelect()"
      @click="$emit('toggleIsOpen')"
    >
      <p class="currency__options__nation">
        {{ countriesArray[currenciesNameShown].currency_name }}
      </p>
      <p class="currency__options__arrow" v-html="arrowIcon"></p>
    </div>
    <div class="currency__list" @click.stop v-if="OptionListOpen && isOpen">
      <input
        class="currency__list__search"
        type="text"
        name=""
        id=""
        placeholder="Type to Search"
        v-model="countriesSearch"
      />
      <ul class="national-list" v-if="countriesArray">
        <li
          class="national-list__list-item"
          v-for="countries in filteredCountries"
          :key="countries.full_name"
          @click="
            changeCurrencyName(countriesArray, countries),
              $emit('changeCountryInfo', currencyShown),
              $emit('changeCountryIndex')
          "
        >
          <img
            class="national-list__list-item__pic"
            :src="countries.country_flag"
            width="30"
            alt="15"
          />
          <p class="national-list__list-item__name">
            {{ countries.full_name }}
          </p>
          <p class="national-list__list-item__currency">
            - {{ countries.currency_name }}
          </p>
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

const props = defineProps({
  isOpen: Boolean,
  isDisabled: Boolean,
  countriesArray: Array,
  defaultIndex: Number,
  currencyValue: Number,
});
defineEmits([
  "toggleIsOpen",
  "changeCountryInfo",
  "updateData",
  "changeCountryIndex",
]);

// These Section is for V-Model Binding

const countriesSearch = ref("");
const OptionListOpen = ref(false);
const outsideClick = ref(false);
const openIcon = ref(false);
const currencyShown = ref(null);
const listOpenOne = inject("listOpenOne");
const listOpenTwo = inject("listOpenTwo");

const arrowIcon = computed(() => {
  return openIcon.value === false && props.isOpen === false
    ? "&#x25BC;"
    : "&#x25B2;";
});

// Filter the Currency Data by the Info which Enter by User
const filteredCountries = computed(() => {
  return props.countriesArray.filter((country) => {
    return (
      country.full_name
        .toLowerCase()
        .includes(countriesSearch.value.toLowerCase()) ||
      country.currency_name
        .toLowerCase()
        .includes(countriesSearch.value.toLowerCase())
    );
  });
});

const currenciesNameShown = computed(() => {
  return currencyShown.value === null
    ? props.defaultIndex
    : currencyShown.value;
});

function toogleSelect() {
  // 關閉其他的 currency__list
  OptionListOpen.value = true;
}

// This Fuction Basically Change the Name of Currency Shown on the List
function changeCurrencyName(countriesArray, countries) {
  currencyShown.value = countriesArray.indexOf(countries);
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
  // z-index: 9999;
  border-radius: 1rem;

  &__input {
    width: calc(100% - #{$currency-option});
    font-size: 2rem;
    height: 4.5rem;
    outline: none;
    border: none;
    appearance: none !important;
    border-radius: 1rem;
  }

  &__input:disabled {
    cursor: no-drop;
    background-color: rgb(255, 255, 255);
    color: black;
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
    z-index: 9000;


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
      font-size: 1.8rem;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  appearance: textfield; /* Firefox */
}

@media (max-width: 450px) {
  .picture {
    width: 245px;
    height: 147px;
  }

  .currency {

  &__list {
    position: absolute;
    height: 25rem;
    width: 27rem;
    background-color: aqua;
    top: calc(100% + 0.1rem);
    overflow-y: scroll;
    right: 0;
    box-shadow: 2px 5px 6px 1px rgb(71, 71, 71);
    z-index: 9000;


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
}
</style>
