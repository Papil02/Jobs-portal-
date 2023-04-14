<script setup>
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'tabler-users',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'tabler-lock',
    tab: 'security',
  },
  {
    title: 'Billing & Plans',
    icon: 'tabler-file-text',
    tab: 'billing-plans',
  },
  {
    title: 'Notifications',
    icon: 'tabler-bell',
    tab: 'notification',
  },
  {
    title: 'Connections',
    icon: 'tabler-link',
    tab: 'connection',
  },
]
</script>

<template>
  <div>
 
    <AccountSettingsAccount />

  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
