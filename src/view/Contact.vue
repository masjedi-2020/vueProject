<script setup>

</script>

<template>
    <section class="bg-gray-50 py-12">
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800">
          Contact Us
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work with us? Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      <!-- Contact Form & Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Contact Form -->
        <form class="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <!-- Contact Information -->
        <div class="flex flex-col justify-center space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-800">Get in touch</h2>
            <p class="mt-2 text-gray-600">
              You can also reach us via email or phone. We’re here to help!
            </p>
          </div>

          <div class="space-y-4 text-gray-700">
            <p><span class="font-semibold">📍 Address:</span> 123 Vue Street, San Francisco, CA</p>
            <p><span class="font-semibold">📞 Phone:</span> (123) 456-7890</p>
            <p><span class="font-semibold">✉️ Email:</span> support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>