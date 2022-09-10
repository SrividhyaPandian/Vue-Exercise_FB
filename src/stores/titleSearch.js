import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import _ from 'lodash'

export const useTitleStore = defineStore({
  id: 'titleSearch',
  state: () => ({
    enteredTitle : ref(''),
    filteredObjects: ref([]),
    listToDisplay: ref([])
  }),
  actions: {
    async onSubmit() {
      let apiResult = [];
      try {
          if(this.enteredTitle) {
            const res = await axios
                            .get(`http://openlibrary.org/search.json`,{params: {title: this.enteredTitle}});
            apiResult = res.data.docs;
            this.filteredObjects = _.take(apiResult,10); /* Lodash to get the first 10 Objects from the API result*/
            this.router.push({ path: '/titleList'})
            // path: `/titleList/${this.enteredTitle}` /* To add dynamic routing */
          }
          else {
            return
          }
        } catch (error) {
          console.log(error);
        }
    },
    returnToHome() {
      if(this.enteredTitle !== '') {
        this.enteredTitle = ''
      }
      this.router.push({ path: '/' })
    }
  },
  getters: {
    /* To filter the title fields from the first 10 Objects*/
    listToDisplay(state) { 
      return _.map(state.filteredObjects, 'title')
    }
  },
})
