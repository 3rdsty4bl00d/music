<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    chips
    clearable
    hide-details
    hide-selected
    item-text="name"
    item-value="symbol"
    label="Search for a coin..."
    solo
  >
    <template slot="no-data">
      <v-list-tile>
        <v-list-tile-title>
          Search for your favorite
          <strong>Song</strong>
        </v-list-tile-title>
      </v-list-tile>
    </template>

    <template
      slot="item"
      slot-scope="{ musicName }"
    >
      <v-list-tile-avatar
        color="indigo"
        class="headline font-weight-light white--text"
      >
        {{ musicName.name.charAt(0) }}
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-text="musicName.name"></v-list-tile-title>
        <v-list-tile-sub-title v-text="musicName.symbol"></v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>mdi-coin</v-icon>
      </v-list-tile-action>
    </template>
  </v-autocomplete>
</template>

<script>
export default {

}
</script>

<style>
</style>
