<template>
  <div class="modal-container" @click="$emit('toggleModal')">
    <div class="modal-background"></div>
    <div class="modal" @click.stop>
      <p class="modal__title"><slot></slot></p>
      <p class="modal__example"><slot name="example"></slot></p>
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Year"
        v-model="year"
        :class="{ 'wrong-number': yearWrongNumber }"
      />
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Month"
        v-model="month"
        :class="{ 'wrong-number': monthWrongNumber }"
      />
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Day"
        v-model="day"
        :class="{ 'wrong-number': dayWrongNumber }"
      />
      <div class="modal__button-area">
        <radius-button
          class="button"
          @click="$emit('confirmDate', year, month, day), checkWrongNumber()"
          >Confirm</radius-button
        >
        <radius-button
          class="button modal__cancel"
          @click="$emit('toggleModal')"
          >Cancel</radius-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

defineEmits(["toggleModal", "confirmDate"]);

const year = ref(null);
const month = ref(null);
const day = ref(null);
const yearWrongNumber = ref(false);
const monthWrongNumber = ref(false);
const dayWrongNumber = ref(false);

function checkWrongNumber() {
  if (year.value === "" || year.value === null || isNaN(year.value)) {
    yearWrongNumber.value = true;
  } else {
    yearWrongNumber.value = false;
  }

  if (month.value === "" || month.value === null || isNaN(month.value)) {
    monthWrongNumber.value = true;
  } else {
    monthWrongNumber.value = false;
  }

  if (day.value === "" || day.value === null || isNaN(day.value)) {
    dayWrongNumber.value = true;
  } else {
    dayWrongNumber.value = false;
  }
}
////////////
</script>

<style scoped lang="scss">
.modal-container {
  // display: none;
  // position: relative;
}
.modal-background {
  background-color: rgba(0, 0, 0, 0.297);
  position: fixed;
  // height: calc(100% - 145px);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  // margin-top: 80px;
  z-index: 9999;
}
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 800px;
  background-color: antiquewhite;
  position: absolute;
  border-radius: 1rem;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9999;

  &__title {
    margin-top: 50px;
    margin-bottom: 5rem;
    font-size: 4rem;
  }

  &__example {
    font-size: 3rem;
  }

  &__input {
    font-size: 2.5rem;
    width: 500px;
    height: 50px;
    margin: 20px;
    padding: 1.5rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 6px 1px rgb(71, 71, 71);
  }

  &__input:focus {
    background-color: aquamarine;
    padding-left: 1.5rem;
  }

  &__cancel {
    background-color: #ff8b8b;
  }

  &__cancel:hover {
    background-color: #ff3838;
  }

  &__button-area {
    display: flex;
    margin-top: 5rem;
    gap: 5rem;
  }
}

.wrong-number {
  border: 2px solid #ff6464;
  background-color: #ffb4b4;
}

.wrong-number:focus {
  background-color: #ff9191;
}

@media (max-width: 800px) {
  .modal {
    height: 600px;
    width: 550px;

    &__title {
      font-size: 3rem;
    }

    &__example {
      font-size: 2.5rem;
    }
  }
}

@media (max-width: 580px) {
  .modal {
    height: 600px;
    width: 450px;

    &__title {
      font-size: 2.5rem;
      margin-bottom: 3.5rem;
    }

    &__example {
      font-size: 2.3rem;
    }

    &__input {
      width: 350px;
    }

    &__input::placeholder {
      font-size: 2.3rem;
    }

    &__input:first-of-type {
      margin-top: 50px;
    }

    &__button-area {
      margin-bottom: 3.5rem;
    }
  }
}

@media (max-width: 480px) {
  .modal {
    height: 600px;
    width: 400px;

    &__title {
      font-size: 2.2rem;
    }

    &__example {
      font-size: 2rem;
    }

    &__input {
      width: 350px;
    }

    &__input::placeholder {
      font-size: 2rem;
    }

    &__input:first-of-type {
      // width: 350px;
      margin-top: 30px;
    }
    .button {
      font-size: 1.8rem;
    }
  }
}


@media (max-width: 430px) {
  .modal {
    height: 600px;
    width: 300px;

    &__title {
      font-size: 1.7rem;
    }

    &__example {
      font-size: 1.5rem;
    }

    &__input {
      width: 240px;
    }

    &__input::placeholder {
      font-size: 1.5rem;
    }

    &__input:first-of-type {
      // width: 350px;
      margin-top: 30px;
    }
    .button {
      font-size: 1.5rem;
    }
  }
}
</style>
