<template>
  <div class="modal-container" @click="$emit('toggleModal')">
    <div class="modal-background"></div>
    <div class="modal" @click.stop>
      <p class="modal__title">Please Enter the Date in the Bar Below</p>
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Year"
      />
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Month"
      />
      <input
        class="modal__input"
        type="text"
        placeholder="Please enter the Date"
      />
      <div class="modal__button-area">
        <radius-button>Confirm</radius-button>
        <radius-button class="modal__cancel" @click="$emit('toggleModal')"
          >Cancel</radius-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

defineEmits(["toggleModal"]);

////////////
</script>

<style scoped lang="scss">
.modal-container {
  // display: none;
}
.modal-background {
  background-color: rgba(0, 0, 0, 0.297);
  position: fixed;
  // height: calc(100% - 145px);
  height: 100vh;
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
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9999;

  &__title {
    margin-top: 50px;
    margin-bottom: 5rem;
    font-size: 4rem;
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
</style>
