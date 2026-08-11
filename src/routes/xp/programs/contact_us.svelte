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

    //`window` above shadows the global, so go through globalThis
    function open_link(url){
        globalThis.open(url, '_blank', 'noopener,noreferrer');
    }

    let socials = [
        {
            name: 'X',
            handle: '@codeutsavanitrr',
            url: 'https://x.com/codeutsavanitrr?lang=en',
            color: '#000000',
            svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'
        },
        {
            name: 'Instagram',
            handle: '@codeutsavanitrr',
            url: 'https://www.instagram.com/codeutsavanitrr/',
            color: '#E1306C',
            svg: '<rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.4"/>'
        },
        {
            name: 'GitHub',
            handle: 'TCP-Tech',
            url: 'https://github.com/TCP-Tech',
            color: '#24292F',
            svg: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
        },
        {
            name: 'Discord',
            handle: 'Join the server',
            url: 'https://discord.gg/sxfvDKhEgQ',
            color: '#5865F2',
            svg: '<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>'
        },
        {
            name: 'LinkedIn',
            handle: 'company/codeutsava',
            url: 'https://www.linkedin.com/company/codeutsava/',
            color: '#0A66C2',
            svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
        }
    ];

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'Contact Us',
        min_width: 380,
        min_height: 440,
        width: Math.min(420, ws_size.width - 40),
        height: Math.min(650, ws_size.height - 40),
        icon: '/images/xp/icons/AddressBook.png',
        id: id,
        exec_path
    };
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto cn-shell">
        <div class="cn-inner">

            <div class="phone">
                <div class="screen">

                    <div class="status">
                        <span>CODEUTSAVA</span>
                        <span class="dots">●●●</span>
                    </div>

                    <h1>Contact Us</h1>
                    <p class="sub">Reach the Turing Club of Programmers</p>

                    <div class="list">
                        {#each socials as s}
                            <button class="row" on:click={() => open_link(s.url)}>
                                <span class="badge" style:background={s.color}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        {@html s.svg}
                                    </svg>
                                </span>
                                <span class="txt">
                                    <span class="name">{s.name}</span>
                                    <span class="handle">{s.handle}</span>
                                </span>
                                <span class="chev">&rsaquo;</span>
                            </button>
                        {/each}
                    </div>

                </div>

                <div class="home-bar"></div>
            </div>

        </div>
    </div>
</Window>

<style>
    .cn-shell {
        background:
            radial-gradient(circle at 85% 25%, #4a3520 0%, #241a13 38%, #140f0d 72%),
            #140f0d;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .cn-inner {
        min-height: 100%;
        padding: 22px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* phone body */
    .phone {
        width: 300px;
        padding: 11px 11px 7px 11px;
        border-radius: 40px;
        background: #17171d;
        box-shadow:
            inset 0 0 0 2px #34343f,
            0 10px 26px rgba(0, 0, 0, 0.55);
    }

    .screen {
        border-radius: 32px;
        padding: 16px 15px 20px 15px;
        background: linear-gradient(180deg, #fdf3e3, #f6e6cc);
    }

    .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        color: #8a6a45;
        font-size: 9px;
        font-weight: 700;
        letter-spacing: 1.2px;
    }

    .status .dots {
        letter-spacing: 1px;
        font-size: 7px;
    }

    h1 {
        margin: 0 0 4px 0;
        color: #241a13;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 23px;
        font-weight: 700;
    }

    .sub {
        margin: 0 0 18px 0;
        color: #7a6a55;
        font-size: 11px;
        font-weight: 600;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    /* each social row acts like a phone contact entry */
    .row {
        display: flex;
        align-items: center;
        gap: 11px;
        width: 100%;
        padding: 9px 11px;
        border: 1px solid #e6d3b3;
        border-radius: 13px;
        background: #fffaf0;
        cursor: pointer;
        text-align: left;
        font-family: inherit;
    }

    .row:hover {
        border-color: #f0913a;
        background: #fff4e2;
    }

    .row:active {
        background: #fbe8cd;
    }

    .row:focus-visible {
        outline: 2px solid #f0913a;
        outline-offset: 1px;
    }

    .badge {
        flex-shrink: 0;
        width: 33px;
        height: 33px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
    }

    .badge svg {
        width: 18px;
        height: 18px;
    }

    .txt {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        min-width: 0;
    }

    .name {
        color: #241a13;
        font-size: 13px;
        font-weight: 700;
        line-height: 1.3;
    }

    .handle {
        color: #8a7660;
        font-size: 10.5px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .chev {
        flex-shrink: 0;
        color: #c8ab82;
        font-size: 19px;
        line-height: 1;
    }

    .home-bar {
        width: 92px;
        height: 4px;
        margin: 9px auto 0 auto;
        border-radius: 3px;
        background: #3a3a45;
    }
</style>

<svelte:options accessors={true}></svelte:options>
