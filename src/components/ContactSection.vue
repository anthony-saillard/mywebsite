<template>
  <section id="contact" class="bg-body1 text-white">
    <img src="../svg/wave/WaveProjetsBottom.svg" class="w-full" alt="Wave decoration"/>

    <div class="container mx-auto px-4 py-32">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-28">
        Contact
      </h1>

      <div class="flex justify-evenly mb-10 md:mb-0">
        <div
            v-for="contact in contactInfo"
            :key="contact.type"
        >
          <div class="flex items-start space-x-6">
            <img :src="contact.icon" :alt="contact.label" class="w-10 h-10">
            <div>
              <h3 class="text-xl font-bold mb-1">{{ contact.label }}</h3>
              <a
                  :href="contact.href"
                  :target="contact.target || '_self'"
                  v-html="contact.value"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <!--      <div class="grid md:grid-cols-2 max-w-6xl mx-auto">-->
      <!--        -->
      <!--      <div class="flex flex-col justify-center gap-16 mb-10 md:mb-0">-->
      <!--        <div-->
      <!--            v-for="contact in contactInfo"-->
      <!--            :key="contact.type"-->
      <!--        >-->
      <!--          <div class="flex items-start space-x-6">-->
      <!--            <img :src="contact.icon" :alt="contact.label" class="w-10 h-10">-->
      <!--            <div>-->
      <!--              <h3 class="text-xl font-bold mb-1">{{ contact.label }}</h3>-->
      <!--              <a-->
      <!--                  :href="contact.href"-->
      <!--                  :target="contact.target || '_self'"-->
      <!--                  v-html="contact.value"-->
      <!--              ></a>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--        <div>-->
      <!--          <h2 class="text-2xl font-bold mb-6">Envoyez-moi un message</h2>-->

      <!--          <form @submit.prevent="sendMessage" class="space-y-6">-->
      <!--            <div>-->
      <!--              <label for="name" class="block text-sm font-medium text-gray-400 mb-2">-->
      <!--                Votre nom-->
      <!--              </label>-->
      <!--              <input-->
      <!--                  id="name"-->
      <!--                  v-model="form.name"-->
      <!--                  type="text"-->
      <!--                  required-->
      <!--                  class="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-black"-->
      <!--                  placeholder="Votre nom complet"-->
      <!--              >-->
      <!--            </div>-->

      <!--            <div>-->
      <!--              <label for="email" class="block text-sm font-medium text-gray-400 mb-2">-->
      <!--                Votre email-->
      <!--              </label>-->
      <!--              <input-->
      <!--                  id="email"-->
      <!--                  v-model="form.email"-->
      <!--                  type="email"-->
      <!--                  required-->
      <!--                  class="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-black"-->
      <!--                  placeholder="votre@email.com"-->
      <!--              >-->
      <!--            </div>-->

      <!--            <div>-->
      <!--              <label for="message" class="block text-sm font-medium text-gray-400 mb-2">-->
      <!--                Votre message-->
      <!--              </label>-->
      <!--              <textarea-->
      <!--                  id="message"-->
      <!--                  v-model="form.message"-->
      <!--                  rows="6"-->
      <!--                  required-->
      <!--                  class="w-full px-4 py-3 border border-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-black"-->
      <!--                  placeholder="Votre message..."-->
      <!--              ></textarea>-->
      <!--            </div>-->

      <!--            <button-->
      <!--                type="submit"-->
      <!--                :disabled="isSubmitting"-->
      <!--                class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-70 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"-->
      <!--            >-->
      <!--              <img src="../svg/icon/Send.svg" alt="Send" class="w-5 h-5">-->
      <!--              <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer votre message' }}</span>-->
      <!--            </button>-->
      <!--          </form>-->

      <!--          &lt;!&ndash; Message de statut &ndash;&gt;-->
      <!--          <div v-if="statusMessage" :class="[-->
      <!--            'mt-4 p-4 rounded-lg flex items-center space-x-2',-->
      <!--            statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'-->
      <!--          ]">-->
      <!--            <img src="../svg/icon/Info.svg" alt="Info" class="w-5 h-5">-->
      <!--            <span>{{ statusMessage.text }}</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script setup>
import {ref, reactive} from 'vue'

defineOptions({
  name: 'ContactSection'
})

const isSubmitting = ref(false)
const statusMessage = ref(null)

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

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const sendMessage = async () => {
  isSubmitting.value = true
  statusMessage.value = null

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    form.name = ''
    form.email = ''
    form.message = ''

    statusMessage.value = {
      type: 'success',
      text: 'Votre message a été envoyé avec succès !'
    }
  } catch (error) {
    statusMessage.value = {
      type: 'error',
      text: 'Une erreur s\'est produite lors de l\'envoi du message.'
    }
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      statusMessage.value = null
    }, 5000)
  }
}
</script>