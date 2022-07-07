<script>
    import {overlayOpen} from "../components/overlayOpen.ts";
    import {skillsOverlayOpen} from "../components/skillsOverlayOpen.ts";
    import Overlay from "../components/Overlay.svelte";
    import SkillsOverlay from "../components/SkillsOverlay.svelte";
</script>

{#if $overlayOpen}
    <Overlay>
    </Overlay>
    {/if}
{#if $skillsOverlayOpen}
    <SkillsOverlay>
    </SkillsOverlay>
{/if}



<main class="h-screen">
    <div class="flex place-content-between">
        <button class="text-3xl tracking-widest pt-10 mx-10 bg-gradient-to-r bg-clip-text text-transparent from-secondary to-accent" on:click={() => {overlayOpen.set(true)}}>ABOUT</button>
        <button class="text-3xl tracking-widest pt-10 mx-10 bg-gradient-to-r bg-clip-text text-transparent from-secondary to-accent" on:click={() => {skillsOverlayOpen.set(true)}}>SKILLS</button>
    </div>
    <div class="flex justify-center h-full items-center -mt-10">
        <h1 class="tracking-widest text-5xl text-bold text-center pb-1 bg-gradient-to-r bg-clip-text text-transparent from-secondary to-accent">VALTTERI VALO</h1>
    </div>

</main>

<footer class="p-4 sm:p-6">
    <div class="flex justify-center">
        <a href="https://www.linkedin.com/in/valtteri-valo/" target='_blank' class="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-accent hover:stroke-secondary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
    </div>
</footer>
