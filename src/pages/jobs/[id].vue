<template>
  <div class="jobDetails">
    <VCard :title="jobDetails.jobName">
    <template #append>
      <span class="text-sm text-disabled">{{ jobDetails.jobLocation }} - {{jobDetails.postingDate}}</span>
    </template>

      <VCardText>
        <VRow>
          <VCol cols="6" md="3">
            <div class="d-flex">
              <VAvatar color="primary" variant="tonal" size="42" class="me-3"
              >
                <VIcon size="24" icon="tabler-chart-pie-2"
                />
              </VAvatar>

              <div class="d-flex flex-column">
                <span class="text-h6 font-weight-medium">{{ jobDetails.totalApplications }}</span>
                <span class="text-caption">
                  Total Applicants
                </span>
              </div>
            </div>
          </VCol>
          <VCol cols="6" md="3">
            <div class="d-flex">
              <VAvatar color="primary" variant="tonal" size="42" class="me-3"
              >
                <VIcon size="24" icon="tabler-chart-pie-2"
                />
              </VAvatar>

              <div class="d-flex flex-column">
                <span class="text-h6 font-weight-medium">{{ jobDetails.newApplications }}</span>
                <span class="text-caption">
                  New Applications
                </span>
              </div>
            </div>
          </VCol>
          <VCol cols="6" md="3">
            <div class="d-flex">
              <VAvatar color="primary" variant="tonal" size="42" class="me-3"
              >
                <VIcon size="24" icon="tabler-chart-pie-2"
                />
              </VAvatar>

              <div class="d-flex flex-column">
                <span class="text-h6 font-weight-medium">{{ jobDetails.inReview }}</span>
                <span class="text-caption">
                  In Review
                </span>
              </div>
            </div>
          </VCol>
          <VCol cols="6" md="3">
            <div class="d-flex">
              <VAvatar color="primary" variant="tonal" size="42" class="me-3"
              >
                <VIcon size="24" icon="tabler-chart-pie-2"
                />
              </VAvatar>

              <div class="d-flex flex-column">
                <span class="text-h6 font-weight-medium">{{ jobDetails.rejectedApplications }}</span>
                <span class="text-caption">
                  Rejected
                </span>
              </div>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <br>

    <VRow>
      <VCol cols="3" class="hidden-sm applicantsCorner">
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
     </VCol>
     <VCol cols="9">
      <VCard>
        <VImg :src="pages2" />

        <VCardText class="position-relative">
          <!-- User Avatar -->

          <VRow>
            <VCol cols="2">
              <VAvatar size="75" class="avatar-center" image="https://randomuser.me/api/portraits/men/41.jpg" />
            </VCol>
            <VCol>
              <VRow>
                <VCol cols="5">
                  <p>cynohubApplicant@gmail.com</p>
                  <p>+91 89999999</p>
                </VCol>
                <VCol>
                  <p>https://portfolio.web.app</p>
                  <p>https://linkedin.com/Applicant</p>
                </VCol>
              </VRow>
              
              
            </VCol>
            
          </VRow>


          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap pt-8">
            <div class="me-2 mb-2">
              <VCardTitle class="pa-0">
                Cynohub Applicant
              </VCardTitle>
              <VCardSubtitle class="text-caption pa-0">
                Hyderabad, India
              </VCardSubtitle>
            </div>
            <div>
              <VIcon size="2rem" icon="tabler-help" />
              <VIcon size="2rem" icon="tabler-help" />
              <VIcon size="2rem" icon="tabler-help" />
            </div>
          </div>
        </VCardText>
      </VCard>


      <br>

    </VCol>







    </VRow>

     

     <VRow cols="12" class="hidden-lg hidden-md hidden-xl" >
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
         <Applicant class="application" :data="applicantSampleData"/>
     </VRow>


     
  </div>
</template>

<script>
import Applicant from '@/pages/components/Applicant.vue';
import CardStatisticsTransactions from '@/views/pages/cards/card-statistics/CardStatisticsTransactions.vue';


export default{
  components : { Applicant, CardStatisticsTransactions },
  data(){
    return {
      tabItems : [ 'Resume', "Profile" ],
      applicantSampleData : {
        name : 'Cynohub Applicant',
        applicationId : '',
        title : 'Front End Developer',
        location : 'Hyderabad',
        appliedOn : '1/4/2023'
      },
      jobDetails : {
          jobName : 'Front End Developer',
          jobLocation : 'Hyderabad',
          postingDate : '12/4/2023',
          totalApplications : '124',
          newApplications : '104',
          inReview : 0,
          rejectedApplications : 12
        },
    }
  }
}

</script>

<style>

.application{
  margin-bottom: 1rem;
}

.applicantsCorner{
  height: 80vh;
  overflow: scroll;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
}

.applicantsCorner::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

</style>