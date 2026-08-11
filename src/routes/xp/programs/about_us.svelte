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

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'About Us',
        min_width: 480,
        min_height: 420,
        width: Math.min(620, ws_size.width - 40),
        height: Math.min(600, ws_size.height - 40),
        icon: '/images/xp/icons/HelpandSupport.png',
        id: id,
        exec_path
    };

    let highlights = [
        '28-hour hackathon',
        'Workshops, MIC sessions & mentorship',
        'Gaming battles & community showcases',
        'Big prize pool & industry partners'
    ];
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto about-shell">
        <div class="p-4 flex flex-col gap-4">

            <div class="card">
                <p>
                    <span class="wordmark">CODEUTSAVA</span> is an annual event organized by
                    the Turing Club of Programmers. It brings together like-minded coders
                    from across the nation to foster a thriving coding culture with
                    workshops, hackathons, gaming battles, MIC sessions, and more.
                </p>
            </div>

            <div class="card">
                <p>
                    The heart of <span class="accent">CODEUTSAVA</span> is the
                    <span class="accent">28-hour hackathon</span>, where participants build
                    ambitious ideas at speed and scale. This year's edition features a
                    <span class="accent">33&nbsp;L+</span> prize pool including
                    <span class="accent">1.5&ndash;2&nbsp;L</span> cash prizes.
                </p>

                <ul>
                    {#each highlights as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>

        </div>
    </div>
</Window>

<style>
    .about-shell {
        background: #0b0a12;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .card {
        background: #16141f;
        border: 1px solid #262336;
        border-radius: 10px;
        padding: 22px 26px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
    }

    .card p {
        margin: 0;
        color: #e9e8ef;
        font-size: 15px;
        line-height: 1.75;
    }

    /* orange wordmark, wide and heavy like the reference */
    .wordmark {
        color: #f5a524;
        font-family: 'Trebuchet', 'Trebuchet MS', Georgia, serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1.5px;
    }

    .accent {
        color: #f5a524;
        font-weight: 700;
    }

    ul {
        margin: 20px 0 0 0;
        padding: 0;
        list-style: none;
    }

    li {
        position: relative;
        padding-left: 22px;
        margin-bottom: 14px;
        color: #e9e8ef;
        font-size: 15px;
        line-height: 1.5;
    }

    li:last-child {
        margin-bottom: 0;
    }

    li::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 7px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #f5a524;
    }
</style>

<svelte:options accessors={true}></svelte:options>
