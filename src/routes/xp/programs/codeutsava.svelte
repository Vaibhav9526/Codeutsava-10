<script>
    import Window from '../../../lib/components/xp/Window.svelte';
    import { runningPrograms, queueProgram } from '../../../lib/store';

    export let id;
    export let window;
    export let self;
    export let exec_path;

    export function destroy(){
        runningPrograms.update(programs => programs.filter(p => p != self));
        self.$destroy();
    }

    function open_about_us(){
        queueProgram.set({path: './programs/about_us.svelte'});
    }

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'CODEUTSAVA',
        min_width: 460,
        min_height: 380,
        width: Math.min(600, ws_size.width - 40),
        height: Math.min(460, ws_size.height - 40),
        icon: '/images/xp/icons/prize.png',
        id: id,
        exec_path
    };
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto cu-shell">
        <div class="cu-inner">

            <p class="welcome">Welcome to</p>
            <h1>Central India's Largest Hackathon</h1>
            <h2>CODEUTSAVA 10</h2>
            <p class="tagline">Code . Innovate . Celebrate</p>

            <div class="ticket">
                <span class="stub"></span>
                <button on:click={open_about_us}>About Us</button>
                <span class="stub"></span>
            </div>

        </div>
    </div>
</Window>

<style>
    .cu-shell {
        background:
            radial-gradient(circle at 88% 40%, #4a3520 0%, #241a13 35%, #140f0d 70%),
            #140f0d;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .cu-inner {
        min-height: 100%;
        padding: 34px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .welcome {
        margin: 0 0 10px 0;
        color: #f1efe9;
        font-size: 16px;
        letter-spacing: 1px;
    }

    h1 {
        margin: 0 0 18px 0;
        color: #ffffff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 27px;
        font-weight: 700;
        line-height: 1.3;
    }

    h2 {
        margin: 0 0 14px 0;
        color: #f0a830;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 30px;
        font-weight: 900;
        letter-spacing: 2px;
    }

    .tagline {
        margin: 0;
        color: #f1efe9;
        font-size: 14px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }

    /* ticket-style button, same treatment as Team Formation */
    .ticket {
        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 5px;
        margin-top: 34px;
    }

    .stub {
        width: 9px;
        border-radius: 2px;
        background: #f0913a;
    }

    .ticket button {
        padding: 13px 38px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        background: #f0913a;
        color: #ffffff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1.6px;
        text-transform: uppercase;
    }

    .ticket button:hover {
        background: #f5a052;
    }

    .ticket button:active {
        background: #dd7f28;
    }

    .ticket button:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
    }
</style>

<svelte:options accessors={true}></svelte:options>
