<template>
  <section class="resume-section">
    <div class="resume-section-content">
      <h2 class="mb-10 text-6xl">{{$t('titulos.exp')}}</h2>
      <div class="mb-10">
        <div class="flex-grow-1">
          <h3 class="mb-0">Full Stack .Net Developer</h3>
          <div class="subheading mb-3">3Pillar Global</div>
          <p></p>
        </div>
        <div class="">
          <span class="text-primary">{{$t('exp.fecha_exp_2')}}</span>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex-grow-1">
          <h3 class="mb-0">Full Stack .Net Developer</h3>
          <div class="subheading mb-3">Datasoft</div>
          <p>
            {{$t('exp.desc_exp_1')}}
          </p>
        </div>
        <div class="">
          <span class="text-primary">{{$t('exp.fecha_exp_1')}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "Experience - KMA"
  },
  name: "Experience"
};
</script>

<style scoped></style>
