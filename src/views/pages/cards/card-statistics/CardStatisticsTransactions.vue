
<template>
  <VCard :title="jobDetails.jobName">
    <template #append>
      <span class="text-sm text-disabled">{{jobDetails.postingDate}}</span>
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
</template>


<script>

  export default{
    // props : [stats],
    data(){
      return{
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
