<script>
    import '../app.css';
    import { onMount } from 'svelte';
    
    // Theme handling
    let theme = 'light';
    
    onMount(() => {
      // Check for saved theme preference or use system preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        theme = savedTheme;
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
        document.documentElement.classList.add('dark');
      }
    });
    
    function toggleTheme() {
      theme = theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', theme);
    }
  </script>
  
  <div class="flex flex-col min-h-screen bg-base-100 dark:bg-primary dark:text-white transition-colors duration-300">
    <header class="fixed w-full top-0 z-50 bg-base-100/80 dark:bg-primary/80 backdrop-blur-sm border-b border-base-300/20 dark:border-gray-700/20">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between py-4">
          <a href="/" class="text-xl font-semibold tracking-tight bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">VV</a>
          
          <div class="flex items-center space-x-6">
            <button on:click={toggleTheme} class="p-2 rounded-full hover:bg-base-200 dark:hover:bg-gray-800 transition-colors">
              {#if theme === 'light'}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                </svg>
              {/if}
            </button>
            
            <a href="#about" class="text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors">About</a>
            <a href="#skills" class="text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors">Skills</a>
            <a href="#projects" class="text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors">Projects</a>
            <a href="#contact" class="text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  
    <main class="flex-grow pt-16">
      <slot />
    </main>
  
    <footer class="bg-base-200 dark:bg-gray-900 py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Valtteri Valo</p>
          
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/valtteri-valo/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>