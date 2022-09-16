<template>
  <div>
    <button :class="['btn', `btn--${size}`, `btn--${color}`]">
      {{ label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  size: {
    type: String,
    default: "sm",
  },
  color: {
    type: String,
    default: "prime",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: grid;
  align-items: center;
  border-radius: 8px;
  background-color: var(--btn-clr);
  color: var(--light-clr);
  &--prime{
    background-color: var(--btn-clr);
  }
  &--outline{
    background-color: transparent;
    border: 1px solid var(--primary-clr);
    color: var(--primary-clr);
  }
  &--hover{
    background-color: var(--btn-hover);
    border: 1px solid var(--primary-clr);
  }
  &--disabled{
    background-color: var(--btn-disable);
    cursor: auto;
  }
  &--sm {
    padding: 8px 40px;
    font-size: var(--fs-btn-reg);
    font-weight: var(--fw-btn-sm);
  }
  &--md {
    padding: 14px 40px;
    font-size: var(--fs-btn-reg);
    font-weight: var(--fw-btn-reg);
  }
  &--lg {
    padding: 17px 55px;
    font-size: var(--fs-btn-reg);
    font-weight: var(--fw-btn-lg);
  }


}

</style>
