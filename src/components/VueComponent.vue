<template>
    <div class="vue-wrapper">
        <strong>Vue-generated input: </strong>
        <input type="text" :value="value" @input="updateValue($event.target.value)" />
    </div>
</template>

<script>
export default {
  name: 'vue-component',
  props: [ 'value', 'config' ],
  methods: {
      updateValue (newValue) {
          this.$emit('update:value', newValue)
      }
  }
}
</script>

<style lang="scss" scoped>
    .vue-wrapper {
        border: solid 1px rgba(black, .05);
        background-color: rgba(black, .025);
        padding: 10px;
        margin: 5px 0;

        input {
            vertical-align: middle;
        }
    }
</style>
