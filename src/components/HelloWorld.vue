<template>
  <v-container>
    <v-card>
      <v-card-title>Pravachan Table</v-card-title>
      <v-data-table
        :headers="headers"
        :items="pravachans"
        :search="search"
        :loading="loading"
      >
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.pravachanName="{ item }">
          {{ item.pravachanName }}
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.topic="{ item }">
          {{ item.topic }}
        </template>
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template v-slot:item.sequenceNumber="{ item }">
          {{ item.sequenceNumber }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      pravachans: [],
      loading: false
    };
  },
  async created() {
    //TODO - call window.api.getpravachan function 

    // this.loading = true;
    // await this.fetchData();
    // this.loading = false;
  },
  methods: {
    // async fetchData() {
    //   try {
    //     const db = await require('../api/mongoConnection')(); // Import MongoDB connection
    //     const collection = db.collection('allPravachans'); // Replace 'pravachans' with your actual collection name
    //     const pravachans = await collection.find().toArray();
    //     this.pravachans = pravachans;
    //     console.log(pravachans)
    //   } catch (error) {
    //     console.error('Error fetching data from MongoDB', error);
    //   }
    // }
  }
};
</script>


<!-- <script>
export default {
  data() {
    return {
      headers: [
        { text: 'Pravachan Name', value: 'pravachanName' },
        { text: 'Topic', value: 'topic' },
        { text: 'Sequence Number', value: 'sequenceNumber' }
      ],
      pravachans: [
        { pravachanName: 'Pravachan 1', topic: 'Topic 1', sequenceNumber: 1 },
        { pravachanName: 'Pravachan 2', topic: 'Topic 2', sequenceNumber: 2 },
        { pravachanName: 'Pravachan 3', topic: 'Topic 3', sequenceNumber: 3 }
        // Add more pravachans as needed
      ],
      search: '',
      loading: false
    };
  },
  async created() {
    // require("mongodb")
      // Fetch data from MongoDB when the component is created
      // this.loading = true;
      // await this.fetchData();
      // this.loading = false;
  }
};
</script> -->

<style scoped>
/* Add your component-specific styles here */
</style>
