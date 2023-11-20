<template>
    <div class="page">
        <header>
            <a href="#" class="logo">Andy's Blog</a>
            <ul>
                <li><a href="#" class="active">主页</a></li>
                <li><RouterLink to="/article">文章</RouterLink></li>
                <li><a href="#">关于</a></li>
                <li><a href="#">联系我</a></li>
            </ul>
        </header>
        <section>
            <img src="../assets/images/gE0rK6M.png" id="stars">
            <img src="../assets/images/vXnEvOx.png" id="moon">
            <img src="../assets/images/D7gDlYx.png" id="mountains-behind">
            <h2 id="text">Welcome</h2>
            <a href="#spot" id="btn">开始</a>
            <img src="../assets/images/V0jN7KL.png" id="mountains-front">
        </section>
          <div id="spot">
            <RouterView/>
          </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch} from 'vue';
import router from '../router';

export default {
  setup() {
    const handleScroll = () => {
      let value = window.scrollY;
      stars.value.style.left = value * 0.25 + 'px';
      moon.value.style.top = value * 1.05 + 'px';
      mountains_behind.value.style.top = value * 0.5 + 'px';
      mountains_front.value.style.top = value * 0 + 'px';
      text.value.style.marginRight = value * 4 + 'px';
      text.value.style.marginTop = value + 'px';
      btn.value.style.marginTop = value * 1.5 + 'px';
      header.value.style.top = value * 0.5 + 'px';
    };

    const stars = ref(null);
    const moon = ref(null);
    const mountains_behind = ref(null);
    const text = ref(null);
    const btn = ref(null);
    const mountains_front = ref(null);
    const header = ref(null);

    onMounted(() => {
      stars.value = document.getElementById('stars');
      moon.value = document.getElementById('moon');
      mountains_behind.value = document.getElementById('mountains-behind');
      text.value = document.getElementById('text');
      btn.value = document.getElementById('btn');
      mountains_front.value = document.getElementById('mountains-front');
      header.value = document.querySelector('header');

      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      stars,
      moon,
      mountains_behind,
      text,
      btn,
      mountains_front,
      header,
      router
    };
  },
};
</script>

<style scoped>
    @import "../assets/css/style.css"
</style>
