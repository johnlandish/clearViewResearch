<template>
  <div class="rounded-card">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>
    <div class="pl-10 pr-8 pt-2 pb-2">
      <slot>
      </slot>
    </div>
  </div>

</template>

<script>

export default {
  props: ['title']
}

</script>

<style>

</style>
