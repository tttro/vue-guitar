<template>
  <div class="app-wrapper">
    <site-heading title="Get Fender" logo="../assets/logo.svg"></site-heading>
    <transition name="fade" mode="out-in">
      <loading-spinner v-if="isLoading"></loading-spinner>
      <div v-else>
        <span>{{guitars.count}}</span>
        <searchbox v-model="searchPhrase"></searchbox>
        <ul>
          <guitar-item
            v-for="guitar in filteredGuitars"
            class="list-item"
            :key="guitar.id"
            :guitar="guitar"
            :is-processing="isBeingProcessed(guitar)">
          </guitar-item>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import * as api from '../api/guitars';
import GuitarItem from './guitar-item';
import LoadingSpinner from './loading-spinner';
import Searchbox from './searchbox';
import SiteHeading from './site-heading';

export default {
  name: 'App',
  components: {
    GuitarItem,
    LoadingSpinner,
    Searchbox,
    SiteHeading
  },
  data: () => ({
    guitars: null,
    guitarsBeingProcessed: [],
    searchPhrase: ''
  }),
  computed: {
    isLoading() {
      return this.guitars == null;
    },
    filteredGuitars() {
      if (this.searchPhrase.length === 0) {
        return this.guitars.data;
      }
      const search = this.searchPhrase.toLowerCase();
      return this.guitars.data.filter(guitar => guitar.text.toLowerCase().indexOf(search) > -1);
    }
  },
  methods: {
    isBeingProcessed(guitar) {
        return this.guitarsBeingProcessed.includes(guitar);
    },

  },
  mounted() {
    api.getAll().then(guitars => {
      this.guitars = guitars.data;
    });
  }
};

</script>

<style lang="scss">
@import 'assets/style';

.app-wrapper {
  margin: 50px auto;
  max-width: 700px;
}
</style>
