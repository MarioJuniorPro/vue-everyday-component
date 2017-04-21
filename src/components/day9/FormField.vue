<template>
    <div class="user-form__controls">
      <div class="user-form__controls-label">
        <slot name="label"></slot>
      </div>
      <div class="user-form__controls-field">
        <slot name="field"></slot>
      </div>
    </div>
</template>
<script>
  export default {
  }
</script>