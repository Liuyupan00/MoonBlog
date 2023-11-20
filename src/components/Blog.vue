<template>
    <div class="page">
        <header>
            <a href="#" class="logo">Andy's Blog</a>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        <section>
            <img src="../assets/images/gE0rK6M.png" id="stars">
            <img src="../assets/images/vXnEvOx.png" id="moon">
            <img src="../assets/images/D7gDlYx.png" id="mountains-behind">
            <h2 id="text">Andy's Blog</h2>
            <a href="#sec" id="btn">Explore</a>
            <img src="../assets/images/V0jN7KL.png" id="mountains-front">
        </section>
        <div class="sec" id="sec">
            <h2>Parallax Scrolling Effects</h2>
            <p>
                        Et et laborum aliquip duis duis do excepteur. Eu velit aute commodo excepteur esse reprehenderit velit amet
                do. Deserunt velit eiusmod ad amet aliqua aliqua ut. In sunt consequat sunt nulla consectetur Lorem in enim
                nulla sint qui sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore odio est
                laudantium soluta amet unde? Optio veniam rerum placeat error iste laboriosam. Fugiat enim excepturi a
                magnam autem nihil. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugit dicta
                quod inventore nobis, quisquam repudiandae sapiente doloribus saepe placeat ratione perspiciatis aliquam
                commodi facilis eos ipsum sed! Quod, voluptatem? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae neque, similique reprehenderit quibusdam sit necessitatibus et nostrum doloremque ratione
                consequuntur tenetur architecto maiores magni vel debitis provident cumque recusandae repellat.
                <br><br>
                Et et laborum aliquip duis duis do excepteur. Eu velit aute commodo excepteur esse reprehenderit velit amet
                do. Deserunt velit eiusmod ad amet aliqua aliqua ut. In sunt consequat sunt nulla consectetur Lorem in enim
                nulla sint qui sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore odio est
                laudantium soluta amet unde?Et et laborum aliquip duis duis do excepteur. Eu velit aute commodo excepteur
                esse reprehenderit velit amet do. Deserunt velit eiusmod ad amet aliqua aliqua ut. In sunt consequat sunt
                nulla consectetur Lorem in enim nulla sint qui sint. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Adipisci tempore odio est laudantium soluta amet unde? Optio veniam rerum placeat error iste
                laboriosam. Fugiat enim excepturi a magnam autem nihil. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit.
                <br><br>
                Et et laborum aliquip duis duis do excepteur. Eu velit aute commodo excepteur esse
                reprehenderit velit amet do. Deserunt velit eiusmod ad amet aliqua aliqua ut. In sunt consequat sunt nulla
                consectetur Lorem in enim nulla sint qui sint. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci tempore odio est laudantium soluta amet unde? Optio veniam rerum placeat error iste laboriosam.
                Fugiat enim excepturi a magnam autem nihil. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus fugit dicta quod inventore nobis, quisquam repudiandae sapiente doloribus saepe placeat
                ratione perspiciatis aliquam commodi facilis eos ipsum sed! Quod, voluptatem? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Repudiandae neque, similique reprehenderit quibusdam sit necessitatibus et
                nostrum doloremque ratione consequuntur tenetur architecto maiores magni vel debitis provident cumque
                recusandae repellat.
            </p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch} from 'vue';

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
    };
  },
};
</script>

<style scoped>
    @import "../assets/css/style.css"
</style>
