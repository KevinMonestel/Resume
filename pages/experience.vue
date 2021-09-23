<template>
  <div>
    <section class="resume-section">
      <div class="resume-section-content">
        <h2 class="mb-10 text-6xl">{{ $t("titulos.exp") }}</h2>
        <div class="mb-10">
          <div class="flex-grow-1">
            <h3 class="mb-0">Full Stack .Net Developer</h3>
            <div class="subheading mb-3">3Pillar Global</div>
            <p></p>
          </div>
          <div class="">
            <span class="text-primary">{{ $t("exp.fecha_exp_2") }}</span>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex-grow-1">
            <h3 class="mb-0">Full Stack .Net Developer</h3>
            <div class="subheading mb-3">Datasoft</div>
            <p>
              {{ $t("exp.desc_exp_1") }}
            </p>
          </div>
          <div class="">
            <span class="text-primary">{{ $t("exp.fecha_exp_1") }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="resume-section">
      <div class="resume-section-content">
        <h2 class="mb-10 text-6xl">{{ $t("titulos.pro") }}</h2>
        <section
          class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"
        >
          <article
            class="
              bg-gray-900
              hover:bg-gray-800
              group
              relative
              rounded-lg
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transform
              duration-200
            "
          >
            <div class="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="~/assets/img/ahorcado.PNG"
                alt="Ahorcado"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="px-3 py-4">
              <h3 class="text-sm text-gray-500 pb-2">
                <a
                  target="_blank"
                  class="bg-blue-600 py-1 px-2 text-white rounded-lg"
                  href="https://ahorcadovue.netlify.app/"
                >
                  <span class="absolute inset-0"></span>
                  {{ $t("exp.tit_pag_1") }}
                </a>
              </h3>
              <p class="text-base">
                {{ $t("exp.desc_pag_1") }}
              </p>
            </div>
          </article>

                    <article
            class="
              bg-gray-900
              hover:bg-gray-800
              group
              relative
              rounded-lg
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transform
              duration-200
            "
          >
            <div class="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="~/assets/img/chat.PNG"
                alt="Ahorcado"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="px-3 py-4">
              <h3 class="text-sm text-gray-500 pb-2">
                <a
                  target="_blank"
                  class="bg-blue-600 py-1 px-2 text-white rounded-lg"
                  href="https://chatdem0.netlify.app/"
                >
                  <span class="absolute inset-0"></span>
                  {{ $t("exp.tit_pag_2") }}
                </a>
              </h3>
              <p class="text-base">
                {{ $t("exp.desc_pag_2") }}
              </p>
            </div>
          </article>

                    <article
            class="
              bg-gray-900
              hover:bg-gray-800
              group
              relative
              rounded-lg
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transform
              duration-200
            "
          >
            <div class="relative w-full h-80 md:h-64 lg:h-44">
              <img
                src="~/assets/img/digitaldrums.PNG"
                alt="Ahorcado"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="px-3 py-4">
              <h3 class="text-sm text-gray-500 pb-2">
                <a
                  target="_blank"
                  class="bg-blue-600 py-1 px-2 text-white rounded-lg"
                  href="https://digitaldrums.netlify.app/"
                >
                  <span class="absolute inset-0"></span>
                  {{ $t("exp.tit_pag_3") }}
                </a>
              </h3>
              <p class="text-base">
                {{ $t("exp.desc_pag_3") }}
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Experience - KMA",
  },
  name: "Experience",
};
</script>

<style scoped></style>
