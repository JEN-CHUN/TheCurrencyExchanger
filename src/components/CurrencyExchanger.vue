<template>
  <div class="converter-containter">
    <div class="exchanger">
      <currency-card>
        <currency-detail
          :is-open="listOpenOne"
          @toggleIsOpen="toggleListOpenOne"
        ></currency-detail>
      </currency-card>
      <div class="exchanger__exchange-icon">&#x21cc;</div>
      <currency-card>
        <currency-detail
          :is-open="listOpenTwo"
          @toggleIsOpen="toggleListOpenTwo"
          :isDisabled="true"
        ></currency-detail>
      </currency-card>
    </div>
    <div class="info-area">
      <p class="info-area__date">
        The following information is based on the data provided by the Currency
        API on January 3, 2023.
      </p>
      <radius-button @click="modalIsOpen = true"
        >Search for History Currencies</radius-button
      >
    </div>
  </div>
  <currency-modal
    v-if="modalIsOpen"
    @toggleModal="toggleModal"
  ></currency-modal>
</template>

<script setup>
import { ref, provide } from "vue";
import CurrencyDetail from "./CurrencyDetail/CurrencyDetail.vue";
import CurrencyModal from "./CurrencyDetail/CurrencyModal.vue";
import axios from "axios";

const listOpenOne = ref(false);
const listOpenTwo = ref(false);
const modalIsOpen = ref(false);
provide("listOpenOne", listOpenOne);
provide("listOpenTwo", listOpenTwo);

//Currency API data of the Available Countries

const countriesArray = ref([]); //Initialize the Variable's Value as Empty Array

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
}

// console.log(axios.isCancel(true))
axios
  .get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/country.json")
  .then((res) => {
    const datas = Object.keys(res.data).map((key) => ({
      code: key,
      name: res.data[key],
    }));

    // for (let i = 0; i < datas.length; i++) {
    //   const name = datas[i]["name"]["country_iso3"];
    //   console.log(name)
    //   countriesArray.value.push({ name });
    // }
    // countriesArray.value = datas.map((data) => ({
    //   name: data.name.country_iso3,
    // }));
    countriesArray.value = datas.map((data) => ({
      country_iso3: data.name.country_iso3,
      currency_number: data.name.currency_number,
      country_iso_numeric: data.name.country_iso_numeric,
    }));

    // console.log(countriesArray.value);
    // console.log(countriesArray.value.find((obj) => obj.name === "twn"));
    return axios.get("https://restcountries.com/v3.1/all");
  })
  .then((countriesInfoResponse) => {
    const countriesInfo = countriesInfoResponse.data;
    // console.log(
    //   rc_res.data[0].name.common,
    //   Object.keys(rc_res.data[0].currencies)[0],
    //   rc_res.data[0].cca3
    // );
    // console.log(countriesInfo.find((obj) => obj.cca3 === "CHN"));
    // console.log(countriesArray.value[0].name.toUpperCase());

    /* The Info inside Currency API is a mess. 
    What I do here is to make sure the Currency Code 
    aka the Currency ISO Number is correct
    At the same time filter out all the not-well organized JSON object
    */
    let num = 0;
    let error = 0;
    for (let i = 0; i < countriesArray.value.length; i++) {
      const countriesMatches = countriesInfo.find(
        (obj) =>
          obj.ccn3 === countriesArray.value[i].currency_number &&
          obj.ccn3 === countriesArray.value[i].country_iso_numeric
      );

      if (countriesMatches) {
        console.log(`${countriesMatches.name.common} with ${countriesArray.value[i].country_iso3}`);
        num++;
      } else {
        error++;
      }
    }
    console.log(num, error);
  }).catch(
    console.log('可能有東西設定錯誤了，或是api延遲了，請重新再試或是查看程式碼')
  );
</script>

<style scoped lang="scss">
.converter-containter {
  max-width: 1280px;
  margin: auto;
  margin-top: 25rem;
  position: relative;
}
.exchanger {
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  &__exchange-icon {
    font-size: 10rem;
    align-self: center;
    cursor: pointer;
  }
}

.info-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  font-size: 3rem;
  &__date {
    font-size: 2.25rem;
  }
}

.clear-all {
  background-color: rgb(255, 129, 129);
}

.clear-all:hover {
  background-color: rgb(253, 77, 77);
}
</style>
