<script>
    import {overlayOpen} from "./overlayOpen.ts";
    import {fade} from 'svelte/transition';
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-start items-center bg-primary/0 z-10"
on:click={() => overlayOpen.set(false)}
transition:fade>
    <div class="h-screen w-3/6 bg-base-200 px-8 py-10 max-w-lg relative rounded" on:click|stopPropagation>
        <button class="absolute top-2 right-3 text-4xl text-secondary hover:-translate-y-0.5 transition-transform z-20"
        on:click={() => overlayOpen.set(false)}>&times;</button>
        <h2 class="text-xl font-semibold">Hey! My name is Valtteri Valo.</h2>
        <br>
        <p>
            I am an enthusiastic software developer and engineer currently finishing up my computer science degree at Aalto University
            and working as a frontend dev at <a href="https://www.creocenter.fi/" target="_blank" class="link">Creo Center.</a>
        </p>
        <br>
        <p>
            I initially majored
            in mechanical engineering, but fell in love with programming very early on. Towards the later
            stages of my engineering studies I decided to make the switch to a computer science degree.
        </p>
        <br>
        <p>
            The programming language I was first exposed to was Python, which I still regard as my strongest technique to this day
            from all the hours I've spent over-engineering my schoolwork instead of actually solving
            them like the lecturer intended. I am also big into ML, data science, and AI, which is the master's programme I am currently partaking.
        </p>
        <br>
        <p>
            In my web dev career I have mostly grown accustomed to <span class="font-semibold">React, Tailwind CSS and Typescript</span> in the front, and <span class="font-semibold">Deno and PSQL</span> in the back.
            For my own projects, I recently find myself gravitating towards <span class="font-semibold">Svelte</span> and learning all kinds of new and exciting frameworks and runtimes.
        </p>
        <br>
        <p>
            In my free time I am an avid gym-goer and spend whatever time remains learning new sports, and currently the beautiful Swedish language.
        </p>

    </div>
</div>