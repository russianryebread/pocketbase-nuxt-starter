<script setup>
const { $pb } = useNuxtApp();
$pb.authStore.clear();
await navigateTo("/login");
</script>
