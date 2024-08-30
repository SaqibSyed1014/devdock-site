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
  <div
      class="user-avatar group w-36 h-48 rounded-full overflow-hidden bg-pink"
      :class="{ 'md:w-32 md:h-48': size === 'md', 'lg:w-44 lg:h-64': size === 'lg' }"
  >
    <figure>
      <img
          class="user-avatar-image transition duration-500 object-cover w-full h-full pt-6"
          :class="[ hoverDisabled ? 'scale-110' : 'group-hover:scale-125' ]"
          :src="userImage"
          :alt="userName"
      >
      <figcaption
          class="user-avatar-details text-white 2xl:text-base mx-auto transition-all duration-500"
          :class="[
              { 'w-full text-xs': size === 'md' },
              { 'w-3/4 text-sm': size === 'lg' },
              hoverDisabled ? '!bottom-6 !opacity-10' : 'group-hover:!bottom-7 group-hover:!opacity-10'
          ]"
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
    bottom: 0;
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
