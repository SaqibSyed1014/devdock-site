<script setup lang="ts">
defineProps<{
  userImage: string;
  userName: string;
  role: string;
  bgColor: string;
}>()
</script>

<template>
  <div class="user-avatar group w-32 h-44 xss:w-36 xss:h-48 rounded-full overflow-hidden" :style="{ backgroundColor: bgColor }">
    <figure>
      <img class="user-avatar-image group-hover:scale-125 transition duration-500" :src="userImage" :alt="userName">
      <figcaption class="user-avatar-details text-white text-sm w-full mx-auto group-hover:!bottom-4 group-hover:!opacity-10 transition-all duration-500">
        <strong>
          <span class="bg-primary">{{ userName }}</span><br>
          <span class="bg-primary">{{ role }}</span>
        </strong>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.user-avatar {
  position: relative;
  flex-shrink: 0;
  .user-avatar-image {
    position: absolute;
    bottom: -30px;
    left: 0;
  }
  .user-avatar-details{
    position: absolute;
    bottom: -50px;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    span{
      padding: .2rem .5rem;
      border-radius: 5px;
    }
  }
}
</style>