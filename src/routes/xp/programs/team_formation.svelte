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

    //opens the PDF in the built-in browser; get_url() in work_space.svelte
    //reads .url off the fs_item for anything not stored locally
    function open_judgement_criteria(){
        queueProgram.set({
            path: './programs/internet_explorer.svelte',
            fs_item: {
                url: '/docs/judgement_criteria.pdf',
                storage_type: 'fake'
            }
        });
    }

    let ws_size = {
        width: document.querySelector('#work-space').offsetWidth,
        height: document.querySelector('#work-space').offsetHeight
    };

    export let options = {
        title: 'Team Formation',
        min_width: 520,
        min_height: 440,
        width: Math.min(760, ws_size.width - 40),
        height: Math.min(620, ws_size.height - 40),
        icon: '/images/xp/icons/HelpandSupport.png',
        id: id,
        exec_path
    };
</script>

<Window options={options} bind:this={window} on_click_close={destroy}>

    <div slot="content" class="absolute inset-1 top-0 overflow-y-auto tf-shell">
        <div class="tf-inner">

            <h1>Team Formation</h1>

            <p>
                1. All <span class="hl">team members</span> should be from the same
                college; <span class="hl">no inter-college</span> teams are allowed.
                However, members from <span class="hl">different branches</span> of the
                same college/institute are encouraged to form a team.
            </p>

            <p>
                2. Each team would comprise <span class="hl">2&ndash;4</span> members,
                including the <span class="hl">team leader</span>.
            </p>

            <p>
                3. As the <span class="hl">software edition</span> of the hackathon is a
                digital product development competition, the majority of the team members
                must be well versed with <span class="hl">programming skills</span>. For
                the <span class="hl">hardware edition,</span> we encourage
                multidisciplinary teams &ndash; which means your team should have a good
                mix of Mechanical Engineers, Electronics Engineers, Product Designers, and
                Programmers, etc.
            </p>

            <p>
                Please Note: NIT Raipur will be providing
                <span class="hl">meals, travel</span> and
                <span class="hl">accommodation free of cost</span>. Travel charges up to
                <span class="hl">Rs. 1500</span> per person to and fro will be reimbursed
                when presented with a valid ticket/booking receipt.
            </p>

            <div class="ticket">
                <span class="stub"></span>
                <button on:click={open_judgement_criteria}>Judgement Criteria</button>
                <span class="stub"></span>
            </div>

        </div>
    </div>
</Window>

<style>
    .tf-shell {
        background:
            radial-gradient(circle at 88% 45%, #4a3520 0%, #241a13 35%, #140f0d 70%),
            #140f0d;
        font-family: 'Trebuchet', 'Trebuchet MS', 'Segoe UI', Tahoma, sans-serif;
    }

    .tf-inner {
        padding: 26px 40px 34px 40px;
    }

    h1 {
        margin: 0 0 26px 0;
        text-align: center;
        color: #ffffff;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.5px;
    }

    p {
        margin: 0 0 20px 0;
        color: #f1efe9;
        font-size: 15px;
        font-weight: 600;
        line-height: 1.75;
    }

    .hl {
        color: #f08a24;
        font-weight: 700;
    }

    /* ticket-style button: two detached stubs either side */
    .ticket {
        display: flex;
        align-items: stretch;
        justify-content: center;
        gap: 5px;
        margin-top: 30px;
    }

    .stub {
        width: 9px;
        border-radius: 2px;
        background: #f0913a;
    }

    .ticket button {
        padding: 14px 40px;
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
