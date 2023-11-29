<script setup lang="ts">
defineProps<{
  userImage: string;
  userName: string;
  role: string;
  bgColor: string;
  size: string;
  hoverDisabled: boolean
}>()
</script>

<template>
  <div class="user-avatar group w-36 h-48 rounded-full overflow-hidden"
       :class="{ 'md:w-32 md:h-44': size === 'md', 'lg:w-44 lg:h-60': size === 'lg' }"
       :style="{ backgroundColor: bgColor }"
  >
    <figure>
      <img
          class="user-avatar-image transition duration-500"
          :class="[ hoverDisabled ? 'scale-125' : 'group-hover:scale-125' ]"
          :src="userImage"
          :alt="userName"
          loading="lazy"
      >
      <figcaption
          class="user-avatar-details text-white text-sm w-full mx-auto transition-all duration-500"
          :class="[ hoverDisabled ? '!bottom-4 !opacity-10' : 'group-hover:!bottom-4 group-hover:!opacity-10' ]"
      >
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