<script>
    import Window from '../../../lib/components/xp/Window.svelte';
    import { runningPrograms } from '../../../lib/store';

    export let id;
    export let window;
    export let self;
    export let exec_path;

    export function destroy(){
        runningPrograms.update(programs => programs.filter(p => p != self));
        self.$destroy();
    }

    let faqs = [
        {
            q: 'How do I register for the hackathon?',
            a: "Visit our registration page and fill out the required details. You'll receive a confirmation email once you're registered.",
            open: true
        },
        {
            q: 'What is the participation fee?',
            a: 'Participation is <strong>completely free</strong>! There are no charges at any stage of the hackathon.',
            open: true
        },
        {
            q: 'Who can participate?',
            a: 'Anyone who is a student (undergraduate or postgraduate) can participate, regardless of experience level.',
            open: true
        },
        {
            q: 'What is the ideal team size?',
            a: 'Teams should consist of 2-4 Members.',
            open: true
        }
    ];

    function toggle(index){
        faqs[index].open = !faqs[index].open;
    }

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'FAQs',
        min_width: 480,
        min_height: 380,
        width: Math.min(700, ws_size.width - 40),
        height: Math.min(560, ws_size.height - 40),
        icon: '/images/xp/icons/Information.png',
        id: id,
        exec_path
    };
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto fq-shell">
        <div class="fq-inner">

            <h1>Frequently Asked Questions</h1>

            <div class="list">
                {#each faqs as faq, i}
                    <div class="card">
                        <button class="head" on:click={() => toggle(i)} aria-expanded={faq.open}>
                            <span class="q">{faq.q}</span>
                            <span class="sign">{faq.open ? '−' : '+'}</span>
                        </button>

                        {#if faq.open}
                            <div class="ans">{@html faq.a}</div>
                        {/if}
                    </div>
                {/each}
            </div>

        </div>
    </div>
</Window>

<style>
    .fq-shell {
        background:
            radial-gradient(circle at 90% 20%, #4a3520 0%, #241a13 38%, #14100e 72%),
            #14100e;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .fq-inner {
        padding: 24px 30px 32px 30px;
    }

    h1 {
        margin: 0 0 24px 0;
        text-align: center;
        color: #ffffff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        font-weight: 700;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    /* peach -> cream card, as in the reference */
    .card {
        border-radius: 8px;
        overflow: hidden;
        background: linear-gradient(100deg, #fce4dd 0%, #fdeeda 45%, #fdf3d8 100%);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        width: 100%;
        padding: 13px 18px 11px 18px;
        border: none;
        background: transparent;
        cursor: pointer;
        text-align: left;
        font-family: inherit;
    }

    .q {
        color: #c4161c;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        line-height: 1.35;
    }

    .sign {
        flex-shrink: 0;
        color: #c4161c;
        font-size: 19px;
        font-weight: 700;
        line-height: 1;
    }

    .head:hover .q,
    .head:hover .sign {
        color: #9d1015;
    }

    .head:focus-visible {
        outline: 2px solid #f0913a;
        outline-offset: -3px;
    }

    .ans {
        padding: 0 18px 15px 18px;
        color: #ef6b26;
        font-size: 13px;
        font-weight: 600;
        line-height: 1.6;
    }

    .ans :global(strong) {
        color: #c4161c;
        font-weight: 700;
    }
</style>

<svelte:options accessors={true}></svelte:options>
