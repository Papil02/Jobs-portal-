<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12" md="6" >
        <VTextField v-model="jobPosting.title" label="Job Title" placeholder="Job Title" />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol cols="12" md="6" >
        <VTextField v-model="jobPosting.location" label="Job Location" placeholder="Job Location" />
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="6" md="3"
      >
        <VTextField v-model="jobPosting.minSalary" label="Min Salary" placeholder="Min Salary" />
      </VCol>
      <VCol cols="6" md="3"
      >
        <VTextField v-model="jobPosting.maxSalary" label="Max Salary" placeholder="Max Salary" />
      </VCol>

      <!-- 👉 City -->
      <VCol cols="12" md="6"
      >
        <VTextField v-model="jobPosting.openings" label="Openings" placeholder="Openings" />
      </VCol>

      <!-- 👉 Country -->
      <VCol cols="12" md="6" >
        <VTextField v-model="jobPosting.expRequired" label="Experience Required" placeholder="Experience Required" />
      </VCol>
      <VCol cols="12" md="6" >
        <VTextField v-model="jobPosting.expRequired" label="Experience Required" placeholder="Experience Required" />
      </VCol>
      <VCol cols="8" md="4">
        <VTextField v-model="skillSelected" label="Enter Skill" placeholder="Enter Skill" />
      </VCol>
      <VCol cols="4" md="2">
        <VBtn type="submit">
          Add Skill
        </VBtn>
      </VCol>

      <!-- 👉 Company -->
      <VCol cols="12" md="6" >
        <VTextField v-model="jobPosting.type" label="Type" placeholder="Type" />
      </VCol>
      <VCol cols="12" md="12" >
        <VTextarea placeholder="Enter Job Description" rows="5" /> </VCol>

      <VCol cols="12" class="d-flex gap-4" >
        <VBtn type="submit">
          Submit
        </VBtn>
      </VCol>

      


    </VRow>
  </VForm>
</template>

<script>

  export default {
    data(){
      return {
        jobPosting : {
          title : '',
          location : '',
          minSalary : '',
          maxSalary : '',
          openings : '',
          expRequired : '',
          type : '',
          jobDescription : '',
          skills : []
        },
        skillSelected : '',
        skills : [
            'Algorithms',
            'Analytical Skills',
            'Big Data',
            'Calculating',
            'Compiling Statistics',
            'Data Analytics',
            'Data Mining',
            'Database Design',
            'Database Management',
            'Documentation',
            'Modeling',
            'Modification',
            'Needs Analysis',
            'Quantitative Research',
            'Quantitative Reports',
            'Statistical Analysis',
            'Applications',
            'Certifications',
            'Coding',
            'Computing',
            'Configuration',
            'Customer Support',
            'Debugging',
            'Design',
            'Development',
            'Hardware',
            'Implementation',
            'Information Technology',
            'Infrastructure',
            'Languages',
            'Maintenance',
            'Network Architecture',
            'Network Security',
            'Networking',
            'New Technologies',
            'Operating Systems',
            'Programming',
            'Restoration',
            'Security',
            'Servers',
            'Software',
            'Solution Delivery',
            'Storage',
            'Structures',
            'Systems Analysis',
            'Technical Support',
            'Technology',
            'Testing',
            'Tools',
            'Training',
            'Troubleshooting',
            'Usability',
            'Benchmarking',
            'Budget Planning',
            'Engineering',
            'Fabrication',
            'Following Specifications',
            'Operations',
            'Performance Review',
            'Project Planning',
            'Quality Assurance',
            'Quality Control',
            'Scheduling',
            'Task Delegation',
            'Task Management',
            'Blogging',
            'Digital Photography',
            'Digital Media',
            'Facebook',
            'Instagram',
            'Networking',
            'Pinterest',
            'SEO',
            'Social Media Platforms',
            'Twitter',
            'Web Analytics',
            'Client Relations',
            'Email',
            'Requirements Gathering',
            'Research',
            'Subject Matter Experts (SMEs)',
            'Technical Documentation',
            "Web Developer", "Front End Developer", 
            "Full Stack Developer", "React", "Angular",
            "Vue", "Vite", "Webpack", "Communication Skills",
            "English", "Email Writing", "Content Writing",
            "Public Speaker", "Speaking", "Sales", "Inside Sales"
          ]
      }
    }
  }

</script>