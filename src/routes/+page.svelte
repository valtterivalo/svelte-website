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
          Founder & CEO, Data Professional & Software Engineer
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
            I am the Founder & CEO of <a href="#" target="_blank" class="text-secondary hover:underline">Sola Technologies</a>, where we build video game SaaS and develop custom LLM-based solutions.
          </p>
          
          <p>
            Previously, I worked as a Data Scientist at Metsä Group. Before then, I've held various positions in software and engineering.
          </p>
          
          <p>
            Lately, I'm getting deeper into ML engineering and AI.
          </p>
          
          <p>
            In my free time, I'm a dad and a husband. I compete in badminton with poor results. I also love running, cycling, calisthenics, and reading.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Skills Section -->
  <section id="skills" class="py-20 px-4 bg-base-200 dark:bg-gray-900">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Experience</h2>
      
      <div class="space-y-12">
        <!-- Sola Technologies -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Founder & CEO</h3>
            <div class="flex items-center mt-2 md:mt-0">
              <span class="text-gray-500 dark:text-gray-400">Jan 2024 – Present</span>
            </div>
          </div>
          <h4 class="text-lg font-medium text-secondary mb-4">Sola Technologies</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Built and scaled video game SaaS products to hundreds of monthly subscribers</li>
            <li>Developed custom LLM-based customer service solution integrating multiple APIs</li>
            <li>Provided consulting in software engineering, sales strategy, and technical leadership</li>
          </ul>
        </div>
        
        <!-- Metsä Group -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Data Scientist</h3>
            <div class="flex items-center mt-2 md:mt-0">
              <span class="text-gray-500 dark:text-gray-400">Jan 2023 – Nov 2024</span>
            </div>
          </div>
          <h4 class="text-lg font-medium text-secondary mb-4">Metsä Group</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Managed company-wide data infrastructure projects and developed DataOps standards</li>
            <li>Supervised graduate work and implemented LLM solution for business process automation</li>
            <li>Delivered energy optimization and predictive maintenance solutions</li>
            <li>Used data visualization tools for C-suite decision making</li>
          </ul>
        </div>
        
        <!-- Creo Center -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Software Engineer</h3>
            <div class="flex items-center mt-2 md:mt-0">
              <span class="text-gray-500 dark:text-gray-400">Jun 2022 – Jan 2023</span>
            </div>
          </div>
          <h4 class="text-lg font-medium text-secondary mb-4">Creo Center Oy</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Built a computer vision application for tracking object positions and speeds</li>
            <li>Built a full-stack PDM system with React and implemented computer vision solutions</li>
            <li>Developed CAD plugins using Java to optimize designer workflows</li>
            <li>Modernized legacy React codebase to current standards</li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-12">
        <h3 class="text-xl font-medium mb-6 text-gray-800 dark:text-white">Certifications</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 shadow">DP-203 Azure Data Engineering Associate</span>
          <span class="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 shadow">Databricks Certified Data Engineer Associate</span>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project Card 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">AI-Leveraged Reading App</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Built reading acceleration app using individual data patterns and LLM-based recall testing with adaptive learning algorithms to match reader characteristics.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">TypeScript</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Python</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">LLMs</span>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Service Scheduling System</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Created end-to-end scheduling system with integrated payments and recommendation engine. Implemented behavior-based optimization for appointment suggestions.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">TypeScript</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Node.js</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">SQL</span>
            </div>
            
            <div class="flex justify-between">
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">Live Demo</a>
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">GitHub</a>
            </div>
          </div>
        </div>
        
        <!-- Project Card 3 - Video Game SaaS -->
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group md:col-span-2">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            <!-- Project Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Video Game SaaS Platform</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">We build video game SaaS products and offer custom LLM-based solutions.</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">Cloud</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">LLMs</span>
              <span class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Lua</span>
            </div>
            
            <div class="flex justify-between">
              <a href="#" class="text-secondary hover:text-secondary/90 font-medium">Learn More</a>
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
          <p class="text-center text-gray-600 dark:text-gray-400">Prefer email? Reach me directly at <a href="mailto:valtterimiikovalo@gmail.com" class="text-secondary hover:underline">valtterimiikovalo@gmail.com</a></p>
        </div>
      </div>
    </div>
  </section>