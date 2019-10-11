<template>
  <div>
    <!-- Fullscreen Introduction -->
    <div id="home" class="home dark-bg fullscreen video vh-100 ">
      <b-container
        class="d-flex flex-column position-relative h-100 align-items-center justify-content-center"
      >
        <!-- To get rid of the video, remove the video class from the intro class div and remove this video tag -->
        <video autoplay muted loop>
          <source src="../assets/video.mp4" type="video/mp4" />
        </video>
        <b-jumbotron
          class="text-center bg-transparent slide-entrance"
          text-variant="white"
          header="Simple Landing Page"
          lead="A simple landing page for your business requirements"
        >
          <a
            class="btn-primary d-inline-block px-4 py-2 text-decoration-none"
            href="#"
            variant="primary"
            size="md"
            squared
          >
            GET STARTED
          </a>
        </b-jumbotron>
      </b-container>
    </div>
    <!-- Recent Posts -->
    <div id="recent-posts" class="recent-posts pb-5 bg-white">
      <b-container>
        <b-jumbotron
          class="text-center bg-transparent"
          header="Recent Posts"
          lead="We have a lot of work, so we must take care of out employees"
        />
        <b-card-group class="recent-posts-cards" deck>
          <b-card
            class="text-center border-0 bg-transparent"
            v-for="i in 4"
            :key="i"
            title="Simple blog post"
            :img-src="`https://picsum.photos/500/300/?image=${i}`"
            :img-alt="`Image ${i}`"
          >
            <b-card-text class="text-muted">
              {{ lipsum }}
            </b-card-text>
            <a class="text-muted mt-4" href="#" slot="footer">
              See More >
            </a>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
    <!-- Best Features -->
    <div id="best-features" class="best-features bg-light">
      <b-container class="pb-5">
        <b-jumbotron
          class="text-center bg-transparent"
          header="The best features"
          lead="With features engineered from best practices used by leading property management companies worldwide"
        />
        <b-card-group class="best-features-cards" deck>
          <b-card
            class="best-features-card text-center border-0 bg-transparent"
            v-for="(feature, index) in features"
            :key="index"
          >
            <b-card-body>
              <i
                :class="`ion-md-${feature.icon}`"
                class="text-primary d-block mb-3 h1 icon"
              />
              <b-card-title>
                {{ feature.title }}
              </b-card-title>
              <b-card-text class="text-muted">
                {{ lipsum }}
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
    <!-- Feature Cards -->
    <div class="feature-cards bg-white">
      <b-container class="mt-5 mb-5 overflow-hidden">
        <b-card
          v-for="i in 2"
          :key="i"
          class="mb-5 border-0 bg-transparent"
          no-body
        >
          <b-row :class="{ 'flex-row-reverse': i % 2 === 0 }" no-gutters>
            <b-col md="12" lg="6">
              <b-card-img
                :src="`https://picsum.photos/800/400/?image=${5 + i}`"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col class="d-flex">
              <b-card-body class="mt-auto">
                <b-card-title>
                  <h1 class="font-weight-light mb-4">
                    Responsiveness - you bet
                  </h1>
                </b-card-title>
                <b-card-text class="text-muted pt-3">
                  {{ `${lipsum} ${lipsum}` }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
    </div>
    <!-- Simple Pricing -->
    <div id="pricing-cards" class="pricing-cards">
      <b-container class="mt-5 mb-5">
        <b-jumbotron
          class="text-center bg-transparent"
          header="Simple Pricing"
          lead="Choose what fits you best"
        />
        <b-card-group class="pricing-cards">
          <b-card
            class="text-center pt-4 pb-4"
            v-for="i in 4"
            :key="i"
            md="2"
            no-body
          >
            <b-card-body class="mt-auto">
              <i class="text-muted icon ion-md-person" />
              <p class="text-muted text-uppercase">personal</p>
              <b-card-title>
                <h1 class="mb-5 font-weight-light">
                  <span class="h5 align-top">$</span>{{ `${i}9` }}
                </h1>
              </b-card-title>
              <p class="text-muted" v-for="item in 4" :key="item">
                No minimum or setup fees
              </p>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
    <!-- Testimonials -->
    <div id="testimonials" class="testimonials">
      <b-container class="pt-5 pb-5">
        <b-card class="border-0" no-body>
          <b-tabs align="center" card end>
            <b-tab v-for="i in 3" :key="i">
              <div class="d-flex flex-column align-items-center w-75 mx-auto">
                <img
                  class="testimonial-logo mx-auto mb-5"
                  src="../assets/treehouse-logo.svg"
                />
                <h3 class="text-center mb-5">{{ lipsum }}</h3>
                <img
                  class="testimonial-thumb mx-auto mb-3"
                  :src="`https://i.pravatar.cc/150?img=${i}`"
                />
                <p class="text-muted font-weight-bold">Random Name, Role</p>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-container>
    </div>
    <div id="buy-it" class="buy-it dark-bg">
      <b-container
        class="d-flex flex-column position-relative h-100 align-items-center justify-content-center"
      >
        <b-jumbotron
          class="text-center bg-transparent"
          text-variant="light"
          header="Simple and effective landing page"
          lead="See how this template can become your perfect website."
        >
          <a
            class="btn-primary d-inline-block px-4 py-2 text-decoration-none"
            href="#"
            variant="primary"
            size="md"
            squared
          >
            Buy for $10
          </a>
        </b-jumbotron>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      features: [
        {
          title: "Design with psd files",
          icon: "brush"
        },
        {
          title: "Support & coffee",
          icon: "cafe"
        },
        {
          title: "Clean code",
          icon: "code"
        }
      ],
      lipsum:
        "Fusce ut mattis quam. Nullam auctor, justo sed maximus cursus, ex erat vestibulum mauris, eu euismod lorem lectus ac nisi. Nullam a scelerisque sapien. Aenean commodo eget nunc eget maximus."
    }
  }
}
</script>
