<template>
  <Window :uuid='uuid' :startpos_x="startpos_x" :startpos_y="startpos_y" :zindex="zindex" :minimized="minimized">

    <template v-slot:header>
      <div class="tw-flex tw-items-center tw-select-none" style="pointer-events:none;">
        <img src="../../assets/images/icons/settings.png" alt="" style="pointer-events:auto;"
             class=" tw-w-7 tw-h-7 tw-ml-4">
        <div class=" tw-ml-4 tw-font-bold tw-tracking-wider" style="pointer-events:auto;"> About WEN</div>
      </div>
    </template>

    <template v-slot:content>
      <div class=" tw-w-full  tw-h-full tw-rounded-b-2xl tw-overflow-hidden tw-flex
       tw-select-none" @contextmenu.prevent="mr_clicked">
        <div class=" tw-w-52 tw-bg-white tw-h-full tw-flex tw-flex-col tw-px-3 tw-py-2 tw-flex-none">
          <WindowSettingIcon :tag="'Profile'" :img="'profile'" :selected_tag="selected_tag"
                             @click.native="{selected_tag = 'Profile';selected_tag_2 = 'About Me'}"/>
          <WindowSettingIcon :tag="'Skills'" :img="'skills'" :selected_tag="selected_tag"
                             @click.native="{selected_tag = 'Skills';selected_tag_2 = 'Badges'}"/>
          <WindowSettingIcon :tag="'Resume'" :img="'paint'" :selected_tag="selected_tag"
                             @click.native="selected_tag = 'Resume'"/>
        </div>
        <div class=" tw-flex-grow tw-h-full  tw-p-2">
          <div class="tw-w-full tw-h-full  tw-flex">
            <div class="tw-w-48 tw-flex-none tw-rounded-xl tw-bg-white tw-p-2">
              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Profile'">
                <WindowSettingIcon :tag="'About Me'" :mdi="'beaker-question'" :selected_tag="selected_tag_2"
                                   @click.native="selected_tag_2 = 'About Me'"/>
                <WindowSettingIcon :tag="'Github Stats'" :mdi="'card-account-details-star'"
                                   :selected_tag="selected_tag_2" @click.native="selected_tag_2 = 'Github Stats'"/>

              </div>
              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Skills'">
                <WindowSettingIcon :tag="'Badges'" :mdi="'shield-half-full'" :selected_tag="selected_tag_2"
                                   @click.native="selected_tag_2 = 'Badges'"/>
                <WindowSettingIcon :tag="'And Some Else'" :mdi="'card-account-details-star'"
                                   :selected_tag="selected_tag_2" @click.native="selected_tag_2 = 'And Some Else'"/>
              </div>
            </div>
            <div class="vl"></div>
            <div class="tw-flex-grow tw-bg-white tw-h-full">

              <div class=" tw-w-full tw-h-full" v-if="selected_tag === 'Profile'">
                <div ref="overall_page" class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col"
                     style="text-align:center" v-if="selected_tag_2 ==='About Me'">
                  <div class=" tw-w-20 tw-h-20 tw-rounded-full tw-overflow-hidden tw-mt-16">
                    <img src="../../assets/images/avatar.jpg" alt="" class="tw-bg-red-500">
                  </div>
                  <div class="tw-mt-3 tw-text-gray-400">GoodManWEN</div>
                  <div class="tw-text-xl tw-mt-2 tw-tracking-wide"> Hi👋, this is FangDaniu</div>
                  <div class="tw-text-lg tw-mt-2 tw-tracking-wide">
                    I am a versatile developer skilled in multiple programming languages,
                    capable of handling various development tasks. My primary focus is on Java, extensive experience in
                    back-end development.
                  </div>
                </div>
                <div ref="github_page" class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center"
                     style="text-align:center" v-if="selected_tag_2 ==='Github Stats'">
                  <img
                      src="https://github-readme-stats.vercel.app/api?username=FangDaniu666&show_icons=true&line_height=24"
                      alt="" class="tw-w-140 tw-h-40">
                  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=FangDaniu666" alt=""
                       class="tw-mt-6  tw-w-120 tw-h-72">
                </div>

              </div>

              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Skills'">
                <div ref="overall_page"
                     class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center"
                     style="text-align:center" v-if="selected_tag_2 ==='Badges'">
                  <div class="tw-text-xl tw-mt-2 tw-tracking-wide"> Frameworks</div>
                  <div class="tw-flex tw-flex-wrap tw-px-4 tw-py-2 tw-items-center">

                    <img
                        src="https://img.shields.io/badge/spring%20-%236DB33F.svg?&style=flat&logo=spring&logoColor=white"
                        alt="" class="tw-ml-3 tw-mt-2">
                    <img
                        src="https://img.shields.io/badge/vuejs%20-%2335495e.svg?&style=flat&logo=vue.js&logoColor=%234FC08D"
                        alt="" class="tw-ml-3 tw-mt-2">

                  </div>
                  <div class="tw-text-xl tw-mt-2 tw-tracking-wide"> Tools</div>
                  <div class="tw-flex tw-flex-wrap tw-px-4 tw-py-2  tw-items-center">
                    <img src="https://img.shields.io/badge/-Redis-black?style=flat-square&logo=Redis" alt=""
                         class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img src="https://img.shields.io/badge/mysql-%2300f.svg?&style=flat&logo=mysql&logoColor=white"
                         alt="" class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img src="https://img.shields.io/badge/-ElasticSearch-005571?style=flat&logo=elasticsearch" alt=""
                         class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img
                        src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=flat&logo=docker&logoColor=white"
                        alt="" class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img
                        src="https://img.shields.io/badge/nginx%20-%23009639.svg?&style=flate&logo=nginx&logoColor=white"
                        alt="" class="tw-ml-3 tw-mt-2 tw-h-5">

                    <img src="" alt="" class="tw-ml-3 tw-mt-2">
                    <img src="" alt="" class="tw-ml-3 tw-mt-2">
                  </div>
                  <div class="tw-text-xl tw-mt-2 tw-tracking-wide"> Others</div>
                  <div class="tw-flex tw-flex-wrap tw-px-4 tw-py-2 tw-mb-16  tw-items-center">
                    <img src="https://img.shields.io/badge/-Linux-black?style=flat-square&logo=Linux" alt=""
                         class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img src="https://img.shields.io/badge/-Debian-007CFF?style=flat-square&logo=debian" alt=""
                         class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img src="https://img.shields.io/badge/-Centos-262577?style=flat-square&logo=Centos" alt=""
                         class="tw-ml-3 tw-mt-2 tw-h-5">
                    <img
                        src="https://img.shields.io/badge/ubuntu%20-%23E95420.svg?&style=flat&logo=ubuntu&logoColor=white"
                        alt=""
                        class="tw-ml-3 tw-mt-2 tw-h-5">

                  </div>
                </div>
                <div ref="github_page"
                     class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center tw-mb-16"
                     style="text-align:center" v-if="selected_tag_2 ==='And Some Else'">
                  <div class="tw-text-lg tw-mt-2 tw-tracking-wide tw-mb-10"> Thanks for watching this demo, hope you
                    enjoy it.
                  </div>
                </div>
              </div>

              <div class="tw-w-full tw-h-full" v-if="selected_tag === 'Resume'">
                <div ref="overall_page"
                     class="tw-w-full tw-h-full tw-items-center tw-flex tw-flex-col tw-justify-center"
                     style="text-align:center">
                  <div class="tw-text-4xl tw-mt-2 tw-tracking-wider"> Coming Soon</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </template>

  </Window>
</template>

<script>
import Window from '../WindowBasic/Window.vue'
import WindowSettingIcon from './WindowSettingIcon.vue'

export default {
  name: 'WindowSettings',
  components: {
    Window,
    WindowSettingIcon,
  },
  data() {
    return {
      selected_tag: "Profile",
      selected_tag_2: "About Me",
    }
  },
  props: {
    uuid: String,
    startpos_x: {
      default: 60,
    },
    startpos_y: {
      default: 60
    },
    zindex: {
      type: Number,
      default: 999,
    },
    minimized: {
      type: Boolean,
      default: false,
    },
    default_width: {
      type: Number,
      default: 680
    }
  },
  created() {
  },
  mounted() {

  },
  watch: {},
  computed: {},
  methods: {
    mr_clicked() {
      this.$store.commit('show_context_menu')
    }
  }
}
</script>

<style scoped>
.vl {
  border-left: 1.5px solid rgba(244, 244, 244);
  height: 100%;
  left: 50%;
}
</style>
