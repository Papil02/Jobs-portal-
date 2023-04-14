<template>
   <VCard>
        <VCardItem> <VCardTitle> {{ data.name }} </VCardTitle> </VCardItem>
        <VCardText> <strong>{{ data.title }}</strong>   <br> {{ data.location }} <br> {{ data.appliedOn }}  </VCardText>
        <v-card-actions>
            <v-btn color="primary" variant="text">View Profile</v-btn>
          </v-card-actions>
      </VCard>
</template>

<script>

  export default{
    props: ['data']
  }
</script>