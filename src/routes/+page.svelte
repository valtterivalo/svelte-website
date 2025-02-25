<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    let isVisible = false;
    
    onMount(() => {
      // Add a small delay for the animation to look better
      setTimeout(() => {
        isVisible = true;
      }, 100);
    });
  </script>
  
  <!-- Hero Section -->
  <section class="min-h-screen flex flex-col justify-center items-center px-4 py-16 relative overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/10 opacity-50"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
    </div>
  
    {#if isVisible}
      <div in:fade={{ duration: 1000, delay: 300 }} class="text-center">
        <h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          <span class="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-gradient-x">VALTTERI VALO</span>
        </h1>
        
        <p in:fade={{ duration: 1000, delay: 800 }} class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer & AI Enthusiast
        </p>
        
        <div in:fade={{ duration: 1000, delay: 1200 }} class="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#about" class="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl">About Me</a>
          <a href="#projects" class="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl">View Projects</a>
        </div>
      </div>
    {/if}
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
  
  <!-- About Section -->
  <section id="about" class="py-20 px-4">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">About Me</h2>
      
      <div class="grid md:grid-cols-5 gap-8 items-center">
        <div class="md:col-span-2">
          <div class="relative">
            <div class="w-full h-full rounded-lg bg-gradient-to-tr from-secondary to-accent absolute -top-3 -left-3 opacity-30"></div>
            <div class="w-full aspect-square rounded-lg bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
              <!-- Placeholder for profile photo -->
              <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="md:col-span-3 space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            I am an enthusiastic software developer and engineer currently finishing up my computer science degree at Aalto University
            and working as a frontend dev at <a href="https://www.creocenter.fi/" target="_blank" class="text-secondary hover:underline">Creo Center</a>.
          </p>
          
          <p>
            I initially majored in mechanical engineering, but fell in love with programming very early on. Towards the later
            stages of my engineering studies I decided to make the switch to a computer science degree.
          </p>
          
          <p>
            The programming language I was first exposed to was Python, which I still regard as my strongest technique to this day.
            I am also big into ML, data science, and AI, which is the master's programme I am currently partaking.
          </p>
          
          <p>
            In my web dev career I have mostly grown accustomed to <span class="font-semibold">React, Tailwind CSS and Typescript</span> in the front, and <span class="font-semibold">Deno and PSQL</span> in the back.
            For my own projects, I recently find myself gravitating towards <span class="font-semibold">Svelte</span> and learning all kinds of new and exciting frameworks and runtimes.
          </p>
          
          <p>
            In my free time I am an avid gym-goer and spend whatever time remains learning new sports, and currently the beautiful Swedish language.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Skills Section -->
  <section id="skills" class="py-20 px-4 bg-base-200 dark:bg-gray-900">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Skills</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="space-y-8">
          <h3 class="text-xl font-medium mb-6 text-gray-800 dark:text-white">Frontend & Backend</h3>
          
          <!-- TypeScript -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">TypeScript</span>
              <span class="text-gray-500 dark:text-gray-400">85%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 85%"></div>
            </div>
          </div>
          
          <!-- Svelte -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">Svelte</span>
              <span class="text-gray-500 dark:text-gray-400">85%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 85%"></div>
            </div>
          </div>
          
          <!-- CSS -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">CSS</span>
              <span class="text-gray-500 dark:text-gray-400">80%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 80%"></div>
            </div>
          </div>
          
          <!-- React.js -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">React.js</span>
              <span class="text-gray-500 dark:text-gray-400">80%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 80%"></div>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <h3 class="text-xl font-medium mb-6 text-gray-800 dark:text-white">Backend & DevOps</h3>
          
          <!-- Deno -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">Deno</span>
              <span class="text-gray-500 dark:text-gray-400">80%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 80%"></div>
            </div>
          </div>
          
          <!-- Node.js -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">Node.js</span>
              <span class="text-gray-500 dark:text-gray-400">75%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 75%"></div>
            </div>
          </div>
          
          <!-- Python -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">Python</span>
              <span class="text-gray-500 dark:text-gray-400">95%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 95%"></div>
            </div>
          </div>
          
          <!-- PostgreSQL -->
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700 dark:text-gray-300">PostgreSQL</span>
              <span class="text-gray-500 dark:text-gray-400">70%</span>
            </div>
            <div class="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-secondary to-accent rounded-full" style="width: 70%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Personal Portfolio</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Modern personal portfolio website built with SvelteKit and Tailwind CSS.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Svelte</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Tailwind</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">TypeScript</span>
            </div>
            
            <div class="flex justify-between">
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">Live Demo</a>
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">GitHub</a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 2 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">AI Project Dashboard</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Dashboard for monitoring and visualizing AI experiments and metrics.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Python</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">ML</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">React</span>
            </div>
            
            <div class="flex justify-between">
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">Live Demo</a>
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">GitHub</a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 3 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Language Learning App</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">App to help users learn Swedish using spaced repetition algorithms.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">TypeScript</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">Deno</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">PostgreSQL</span>
            </div>
            
            <div class="flex justify-between">
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">Live Demo</a>
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section id="contact" class="py-20 px-4 bg-base-200 dark:bg-gray-900">
    <div class="container mx-auto max-w-3xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Get In Touch</h2>
      
      <div class="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Your name" />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="your@email.com" />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
            <input type="text" id="subject" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Subject" />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea id="message" rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Your message here..."></textarea>
          </div>
          
          <button type="submit" class="w-full py-3 bg-gradient-to-r from-secondary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity">Send Message</button>
        </form>
        
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p class="text-center text-gray-600 dark:text-gray-400">Prefer email? Reach me directly at <a href="mailto:valtteri.valo@example.com" class="text-secondary hover:underline">valtteri.valo@example.com</a></p>
        </div>
      </div>
    </div>
  </section>