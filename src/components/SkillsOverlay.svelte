<script>

    import {skillsOverlayOpen} from "./skillsOverlayOpen.ts";
    import {fade} from 'svelte/transition';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-end items-center bg-primary/0 z-10"
     on:click={() => skillsOverlayOpen.set(false)}
     transition:fade>
    <div class="grid grid-cols-1 grid-rows-8 h-screen w-2/6 bg-base-200 px-8 py-10 relative max-w-lg rounded" on:click|stopPropagation>
        <button class="absolute top-2 right-3 text-4xl text-secondary hover:-translate-y-0.5 transition-transform z-20"
                on:click={() => skillsOverlayOpen.set(false)}>&times;</button>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >TypeScript</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 85%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >Svelte</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 85%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >CSS</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 80%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >React.js</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 80%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >Deno</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 80%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >Node.js</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 75%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >Python</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 95%"></div>
            </div>
        </div>
        <div class="flex flex-col justify-center text-center">
            <span class="tracking-wider text-transparent text-lg bg-clip-text bg-gradient-to-r from-secondary to-accent"
            >PostgreSQL</span>
            <div class="flex w-full bg-base-300 rounded-full">
                <div class="bg-gradient-to-r h-4 from-secondary to-accent text-lg font-bold text-white p-0.5 leading-none rounded-full" style="width: 70%"></div>
            </div>
        </div>

    </div>
</div>