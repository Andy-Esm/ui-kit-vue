<template>
  <div class="container">
    <h1 class="heading-h1">Buttons</h1>
    <div class="inner-grid">
      <div class="btn-wrapper">
        <h4 class="heading-h4">Small</h4>
        <Button label="Primary" color="prime" />
        <Button label="Primary" color="outline" />
        <Button label="Primary" color="hover" />
        <Button label="Primary" color="disabled" />
      </div>
      <div class="btn-wrapper">
        <h4 class="heading-h4">Medium</h4>
        <Button label="Primary" color="prime" size="md" />
        <Button label="Primary" color="outline" size="md"/>
        <Button label="Primary" color="hover" size="md"/>
        <Button label="Primary" color="disabled" size="md"/>
      </div>
      <div class="btn-wrapper">
        <h4 class="heading-h4">Large</h4>
        <Button label="Primary" color="prime" size="lg" />
        <Button label="Primary" color="outline" size="lg" />
        <Button label="Primary" color="hover" size="lg" />
        <Button label="Primary" color="disabled" size="lg"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style lang="scss" scoped>
.btn-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
