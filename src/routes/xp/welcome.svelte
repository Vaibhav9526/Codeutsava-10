<script>
    import {onMount} from 'svelte';
    import * as utils from '../../lib/utils';
    import { play_sound } from '../../lib/audio';
    import { audio_ready } from '../../lib/audio_ready';

    export let self;
    export let on_destroyed = () => {};

    let fallback_timer;
    let prompt_timer;
    let destroyed = false;
    let welcome_audio;
    let show_sound_prompt = false;
    let sound_started = false;

    onMount(() => {

        prompt_timer = setTimeout(() => {
            if(!sound_started && !destroyed){
                show_sound_prompt = true;
            }
        }, 1200);

        welcome_audio = play_sound("/audio/xp_startup.mp3");

        //once the sound actually starts, 'ended' owns teardown
        welcome_audio.addEventListener("playing", (e) => {
            sound_started = true;
            show_sound_prompt = false;
            clearTimeout(fallback_timer);
            clearTimeout(prompt_timer);
        });

        welcome_audio.addEventListener("ended", (e) => {
            console.log("xp_startup audio ended");
            clearTimeout(fallback_timer);
            clearTimeout(prompt_timer);
            self.destroy();
        });

        //audio blocked or missing - don't strand the user on the welcome screen
        fallback_timer = setTimeout(() => {
            self.destroy();
        }, 7000)

    })

    export function destroy(){
        if(destroyed) return;
        destroyed = true;
        clearTimeout(fallback_timer);
        clearTimeout(prompt_timer);
        self.$destroy();
        on_destroyed();
    }
    
</script>


<div class="absolute inset-0 z-50 overflow-hidden flex flex-col bg-[#5a7edc] font-sans">
    <div class="h-[70px] bg-[#00309c] flex flex-row items-center shrink-0">
      
    </div>
    <div class="h-[2px] bg-[linear-gradient(45deg,#466dcd,#c7ddff,#b0c9f7,#5a7edc)] shrink-0"></div>
    <div class="grow bg-[radial-gradient(circle_at_5%_5%,#91b1ef_0,#7698e6_6%,#5a7edc_12%)] relative overflow-hidden">
        <span class="absolute top-[40%] left-[50%] text-[42px] text-slate-50 italic font-bold">Welcome</span>
        {#if show_sound_prompt}
            <div class="absolute inset-x-0 bottom-8 flex justify-center px-4">
                <div class="rounded-md border border-white/30 bg-[#0b2c86]/70 px-4 py-2 text-center text-[12px] text-white shadow-lg backdrop-blur-sm">
                    Hover or click anywhere to enable sound
                </div>
            </div>
        {/if}
    </div>
  
    <div class="h-[2px] bg-[linear-gradient(45deg,#003399,#f99736,#c2814d,#00309c)] shrink-0"></div>
    <div class="h-[70px] w-full bg-[linear-gradient(90deg,#3833ac,#00309c)] shrink-0 relative">
    </div>

</div>
  
<svelte:options accessors={true}></svelte:options>