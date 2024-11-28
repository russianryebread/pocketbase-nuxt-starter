const safeRoutes = ["/logout", "/login"];

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to.fullPath, from.fullPath);
  if (safeRoutes.includes(to.fullPath)) {
    return true;
  }

  if (isAuthenticated()) {
    return true;
  }

  return navigateTo("/login");
});

const isAuthenticated = (): boolean => {
  const { $pb } = useNuxtApp();
  return $pb.authStore.isValid;
};
