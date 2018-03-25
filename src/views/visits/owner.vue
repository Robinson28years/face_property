<template>
  <timeline>
    <timeline-title>title</timeline-title>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
  </timeline>
</template>
 
<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
 
export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>