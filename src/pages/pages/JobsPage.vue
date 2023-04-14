

<template>
  <div class="jobsPage">
    <CardStatisticsTransactions @click="navigateToJob()" class="job" />
  </div>
</template>



<script setup>
import CardStatisticsTransactions from '@/views/pages/cards/card-statistics/CardStatisticsTransactions.vue'
import axios from '@axios'
const router = useRouter()
const faqSearchQuery = ref('')
const faqs = ref([])

const fetchFaqs = () => {
  return axios.get('/pages/faqs', { params: { q: faqSearchQuery.value } }).then(response => {
    faqs.value = response.data
  }).catch(error => {
    console.error(error)
  })
}

const activeTab = ref('Payment')
const activeQuestion = ref(0)

watch(activeTab, () => activeQuestion.value = 0)
watch(faqSearchQuery, fetchFaqs, { immediate: true })

const contactUs = [
  {
    icon: 'tabler-phone',
    via: '+ (810) 2548 2568',
    tagLine: 'We are always happy to help!',
  },
  {
    icon: 'tabler-mail',
    via: 'hello@help.com',
    tagLine: 'Best way to get answer faster!',
  },
]

function navigateToJob(){
  router.push('/jobs/123')
}
</script>


<style lang="scss">
.faq-v-window {
  .v-window__container {
    z-index: 0;
  }
}

.job{
  cursor: pointer;
}
</style>
