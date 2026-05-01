<script setup lang="ts">
import { recentUpdates } from '../recent-updates.generated';
</script>

<template>
  <ul class="recent-updates">
    <li v-for="update in recentUpdates" :key="update.hash">
      <span class="recent-updates-date">{{ update.date }}</span>
      <a
        class="recent-updates-message"
        :href="`https://github.com/scut-wiki/scut-wiki/commit/${update.hash}`"
        target="_blank"
        rel="noreferrer"
      >
        {{ update.message }}
      </a>
    </li>
  </ul>
</template>
