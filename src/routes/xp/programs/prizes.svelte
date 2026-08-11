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

    const perks = [
        'A Wolfram | Alpha PRO subscription for one year absolutely FREE.',
        "An O'Reilly Ebook for FREE.",
        'One month FREE Echo-3D Premium.'
    ];

    let prizes = [
        {
            place: "Winner's",
            money: 'A monetary prize of Rs. 35,000 and Rs. 2 lakhs worth of prizes will be presented to the winning team.'
        },
        {
            place: "Runner - Up's",
            money: 'A monetary prize of Rs. 25,000 and Rs. 1.9 lakhs worth of prizes will be presented to the runner ups.'
        },
        {
            place: "2nd Runner - Up's",
            money: 'The second runner-up team will be awarded Rs. 2.3 Lakhs, with Rs. 15,000 in cash.'
        },
        {
            place: "Problem Domain Winner's",
            money: 'The category wise winning teams will be awarded Rs. 1.5 lakhs in total, with Rs. 10,000 in cash to each team.'
        }
    ];

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'Prizes',
        min_width: 540,
        min_height: 420,
        width: Math.min(880, ws_size.width - 40),
        height: Math.min(650, ws_size.height - 40),
        icon: '/images/xp/icons/prize.png',
        id: id,
        exec_path
    };
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto pz-shell">
        <div class="pz-inner">

            <h1>
                Win Exciting Prizes Worth Upto <span class="amt">36 Lakhs!</span>
                <img src="/images/xp/icons/prize.png" alt="" />
            </h1>

            <div class="grid">
                {#each prizes as prize}
                    <div class="tent">
                        <div class="roof"></div>
                        <div class="panel">
                            <h2>{prize.place}</h2>
                            <ul>
                                <li>{prize.money}</li>
                                {#each perks as perk}
                                    <li>{perk}</li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                {/each}
            </div>

        </div>
    </div>
</Window>

<style>
    .pz-shell {
        background:
            radial-gradient(circle at 95% 78%, #4a3520 0%, #241a13 36%, #12100f 70%),
            #12100f;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .pz-inner {
        padding: 22px 26px 30px 26px;
    }

    h1 {
        margin: 0 0 26px 0;
        text-align: center;
        color: #ffffff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 20px;
        font-weight: 700;
    }

    h1 .amt {
        color: #f0a830;
    }

    h1 img {
        display: inline-block;
        width: 21px;
        height: 21px;
        vertical-align: -4px;
        image-rendering: pixelated;
    }

    .grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .tent {
        width: 330px;
    }

    /* striped circus roof */
    .roof {
        height: 26px;
        border-radius: 7px 7px 0 0;
        background: repeating-linear-gradient(
            90deg,
            #c62828 0px, #c62828 15px,
            #fdf1dc 15px, #fdf1dc 30px
        );
    }

    .panel {
        padding: 15px 18px 18px 18px;
        border: 3px solid #c62828;
        border-top: none;
        border-radius: 0 0 7px 7px;
        background: #fbdfb4;
    }

    h2 {
        margin: 0 0 11px 0;
        text-align: center;
        color: #2e8b84;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 16px;
        font-weight: 700;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        position: relative;
        margin: 0 0 8px 0;
        padding-left: 15px;
        color: #1f3a63;
        font-size: 12.5px;
        font-weight: 600;
        line-height: 1.5;
    }

    li:last-child {
        margin-bottom: 0;
    }

    li::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 3px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #c62828;
    }
</style>

<svelte:options accessors={true}></svelte:options>
