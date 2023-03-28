<template>
  <div class="converter-containter" v-if="countriesArray">
    <div class="exchanger">
      <currency-card class="exchanger__card">
        <currency-detail
          :is-open="listOpenOne"
          :countries-array="countriesArray"
          :default-index="listOneInfo"
          @toggleIsOpen="toggleListOpenOne"
          @update-number="convertingNum"
          @changeCountryIndex="(index) => (listOneInfo = index)"
          :currencyValue="
            isNaN(listOneAmount) ||
            listOneAmount < 0 ||
            !isFinite(listOneAmount)
              ? 0
              : listOneAmount
          "
        ></currency-detail>
      </currency-card>
      <div
        class="exchanger__exchange-icon"
        :class="{ rotate: rotate }"
        @click="listInfoExchange"
      >
        &#x21cc;
      </div>
      <currency-card class="exchanger__card">
        <currency-detail
          :is-open="listOpenTwo"
          :countriesArray="countriesArray"
          :default-index="listTwoInfo"
          :is-disabled="true"
          @toggleIsOpen="toggleListOpenTwo"
          @changeCountryIndex="(index) => (listTwoInfo = index)"
          :currency-value="
            isNaN(convertedValue) ||
            convertedValue < 0 ||
            !isFinite(convertedValue)
              ? 0
              : convertedValue
          "
        ></currency-detail>
      </currency-card>
    </div>
    <div class="info-area">
      <p class="info-area__date">
        The following information is based on the data provided by the Currency
        API on
        {{ currentDate === "latest" ? "The Latest Date" : currentDate }}.
      </p>
      <radius-button
        class="info-area__button"
        :class="{ 'display-none': modalIsOpen }"
        @click="modalIsOpen = true"
        >Search for History Currencies</radius-button
      >
    </div>

    <currency-alert
      v-if="errorAlert"
      @alert-close="errorAlert = false"
    ></currency-alert>
    <currency-modal
      v-if="modalIsOpen"
      @toggle-modal="toggleModal"
      @confirm-date="confirmDate"
      >{{ checkHistorySearchNaN }}
      <template v-slot:example>Example: 2022 03 24</template></currency-modal
    >
  </div>
</template>

<script setup>
import { ref, computed, watch, provide } from "vue";
import CurrencyDetail from "./CurrencyDetail/CurrencyDetail.vue";
import CurrencyModal from "./CurrencyDetail/CurrencyModal.vue";
import CurrencyAlert from "./CurrencyDetail/CurrencyError.vue";
import axios from "axios";

const listOpenOne = ref(false);
const listOpenTwo = ref(false);
const modalIsOpen = ref(false);
const listOneInfo = ref(92);
const listTwoInfo = ref(36);
const listOneAmount = ref(1);
const listTwoAmount = ref(null);
const convertedValue = computed(() => {
  return listOneAmount.value * listTwoAmount.value;
});

// The Ref that make Icon Rotate
const rotate = ref(false);
// Check if the Number User Entered in History Search is NaN or Num
const checkHistorySearchNaN = ref(
  "Please Enter the Date in the Input Sections."
);

// The Variable of Date String Used in the Axios Fetch Method and the Date on Description
const defaultCurrenciesUpdateDate = ref("latest");
const updateDate = ref("");
const currentDate = computed(() => {
  return updateDate.value === ""
    ? defaultCurrenciesUpdateDate.value
    : updateDate.value;
});

// Error Alert
const errorAlert = ref(false);

provide("listOpenOne", listOpenOne);
provide("listOpenTwo", listOpenTwo);

//Currency API data of the Available Countries

const countriesArray = ref(null); //Initialize the Variable's Value as Empty Array

/////
function toggleListOpenOne() {
  if (listOpenOne.value == false) {
    listOpenOne.value = true;
    listOpenTwo.value = false;
  } else {
    listOpenOne.value = false;
  }
}

function toggleListOpenTwo() {
  if (listOpenTwo.value == false) {
    listOpenOne.value = false;
    listOpenTwo.value = true;
  } else {
    listOpenTwo.value = false;
  }
}

function toggleModal() {
  modalIsOpen.value = false;
  checkHistorySearchNaN.value = "Please Enter the Date in the Input Sections.";
}

function convertingNum(v) {
  listOneAmount.value = +v;
}

function listInfoExchange() {
  [listOneInfo.value, listTwoInfo.value] = [
    listTwoInfo.value,
    listOneInfo.value,
  ];
  rotate.value = !rotate.value;
}

// Check if The Input User Enter are Numbers
function confirmDate(year, month, day) {
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    checkHistorySearchNaN.value = "Invalid Value! Please Enter Numbers.";
  }

  if (year === null || month === null || day === null) {
    checkHistorySearchNaN.value = "Please Fill in All Three Sections Below.";
  }

  if (Number(year) && Number(month) && Number(day)) {
    checkHistorySearchNaN.value =
      "Please Enter the Date in the Input Sections.";
    updateDate.value = `${year.replace(/[^0-9.]/g, "")}-${month.replace(
      /[^0-9.]/g,
      ""
    )}-${day.replace(/[^0-9.]/g, "")}`;
    modalIsOpen.value = false;
    getCountriesCurrency();
  }
}

// Fetch the Info of All Available Countries
async function getCountriesData() {
  try {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/country.json"
      )
      .then((res) => {
        const datas = Object.keys(res.data).map((key) => ({
          code: key,
          name: res.data[key],
        }));

        countriesArray.value = datas.map((data) => ({
          country_iso3: data.name.country_iso3,
          currency_number: data.name.currency_number,
          country_iso_numeric: data.name.country_iso_numeric,
        }));

        return axios.get("https://restcountries.com/v3.1/all");
      })
      .then((countriesInfoResponse) => {
        const countriesInfo = countriesInfoResponse.data;

        /*
    The Info inside Currency API is a mess.
    What I do here is to make sure the Currency Code
    aka the Currency ISO Number is correct
    At the same time filter out all the not-well organized JSON object
    */
        for (let i = 0; i < countriesArray.value.length; i++) {
          const countriesMatches = countriesInfo.find(
            (obj) =>
              obj.ccn3 === countriesArray.value[i].currency_number &&
              obj.ccn3 === countriesArray.value[i].country_iso_numeric
          );

          if (countriesMatches) {
            countriesArray.value[i].full_name = countriesMatches.name.common;
            countriesArray.value[i].currency_name = Object.keys(
              countriesMatches.currencies
            )[0];
            countriesArray.value[i].country_flag = countriesMatches.flags.svg;
          } else {
            countriesArray.value[i].full_name = null;
            countriesArray.value[i].currency_name = null;
          }
        }

        countriesArray.value = countriesArray.value.filter(
          (country) =>
            country.full_name !== null && country.currency_name !== null
        );
      })
      .then(() => {
        return getCountriesCurrency();
      });
  } catch (error) {
    console.log(
      "可能有東西設定錯誤了，或是api延遲了，請重新再試或是查看程式碼",
      error
    );
  }
}

async function getCountriesCurrency() {
  axios
    .get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${
        currentDate.value
      }/currencies/${countriesArray.value[
        listOneInfo.value
      ].currency_name.toLowerCase()}/${countriesArray.value[
        listTwoInfo.value
      ].currency_name.toLowerCase()}.json`
    )
    .then((res) => {
      listTwoAmount.value =
        res.data[
          countriesArray.value[listTwoInfo.value].currency_name.toLowerCase()
        ];
    })
    .catch(() => {
      updateDate.value = "";
      console.log(updateDate.value);
      console.log(currentDate.value);
      errorAlert.value = true;
      axios
        .get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${
            currentDate.value
          }/currencies/${countriesArray.value[
            listOneInfo.value
          ].currency_name.toLowerCase()}/${countriesArray.value[
            listTwoInfo.value
          ].currency_name.toLowerCase()}.json`
        )
        .then((res) => {
          console.log(res.data);
          listTwoAmount.value =
            res.data[
              countriesArray.value[
                listTwoInfo.value
              ].currency_name.toLowerCase()
            ];
        })
        .catch((error) => {
          console.log(error);
          console.log("May contain some inner error");
        });
    });
}

// Watch if the Values Change and Do something to them :)
watch(listOneInfo, (newDefaultlistOneInfo) => {
  console.log(`New Default List One Info  is ${newDefaultlistOneInfo}`);
  console.log(
    `New Default List One Info  is ${countriesArray.value[newDefaultlistOneInfo].currency_name}`
  );
  getCountriesCurrency();
});

watch(listTwoInfo, (newDefaultlistTwoInfo) => {
  console.log(`New Default List Two Info  is ${newDefaultlistTwoInfo}`);
  console.log(
    `New Default List One Info  is ${countriesArray.value[newDefaultlistTwoInfo].currency_name}`
  );
  getCountriesCurrency();
});

getCountriesData();
</script>

<style scoped lang="scss">
.converter-containter {
  max-width: 1280px;
  margin: auto;
  margin-top: 25rem;
  // position: relative;
}

.exchanger {

  display: flex;
  justify-content: space-between;

  &__exchange-icon {
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 10rem;
    align-self: center;
    cursor: pointer;
    user-select: none;
  }
}

.info-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 0 30px;
  font-size: 3rem;

  &__date {
    font-size: 2.25rem;
    width: 750px;
  }
}

.rotate {
  transform: rotate(360deg);
}
.display-none {
  display: none;
}
.clear-all {
  background-color: rgb(255, 129, 129);
}

.clear-all:hover {
  background-color: rgb(253, 77, 77);
}

@media (max-width: 1280px) {
  .info-area {
    &__date {
      width: 650px;
    }
    padding: 0 10px;
  }
}

@media (max-width: 980px) {
  .converter-containter {
    margin-top: 16rem;
    margin-bottom: 10rem;
  }
  .exchanger {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3.5rem;
    margin-bottom: 10rem;

    &__exchange-icon {
      transform: rotate(90deg);
    }

    &__card {
      margin: auto;
    }
  }

  .info-area {
    flex-wrap: wrap;
    gap: 3rem;
    &__date {
      order: 2;
      width: 100%;
    }

    &__button {
      position: fixed;
      bottom: 4rem;
      right: 1rem;
      z-index: 100;
    }
  }

  .rotate {
    transform: rotate(270deg);
  }
}

@media (min-width: 981px) {
  .exchanger {
    margin-bottom: 10rem;
  }
  .info-area {
    margin-bottom: 5rem;
  }
}
</style>
