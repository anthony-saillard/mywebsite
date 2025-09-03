<template>
  <section id="contact" class="bg-body1 text-white">
    <img src="../svg/wave/WaveProjectsBottom.svg" class="w-full" alt="Wave decoration"/>

    <div class="container mx-auto px-4 py-32">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-28">
        Contact
      </h1>

      <div class="flex flex-col md:flex-row justify-evenly gap-10 mb-10 md:mb-0">
        <div
            v-for="contact in contactInfo"
            :key="contact.type"
        >
          <div class="flex flex-col items-center md:items-start space-y-2">
            <div class="flex items-center space-x-3">
              <img :src="contact.icon" :alt="contact.label" class="w-10 h-10">
              <h3 class="text-xl font-bold">{{ contact.label }}</h3>
            </div>
            <a
                :href="contact.href"
                :target="contact.target || '_self'"
                v-html="contact.value"
                class="md:ml-2"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'ContactSection'
})

const contactInfo = [
  {
    type: 'email',
    label: 'Email',
    value: 'contact@anthonysaillard.fr',
    href: 'mailto:contact@anthonysaillard.fr',
    icon: 'src/svg/icon/Email.svg'
  },
  {
    type: 'phone',
    label: 'Téléphone',
    value: '+33 6 15 74 62 56',
    href: 'tel:0615746256',
    icon: 'src/svg/icon/Phone.svg'
  },
  {
    type: 'address',
    label: 'Adresse',
    value: '3 rue Louis Aragon<br>26000, Valence',
    href: 'https://maps.app.goo.gl/v284mMoM45dGGBwQ7',
    target: '_blank',
    icon: 'src/svg/icon/Location Point.svg'
  }
]
</script>