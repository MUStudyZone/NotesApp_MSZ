<script>
    import { branches } from "$lib/data.js";
    let what = "subject";
    let sems;
    let pswd;
</script>

<input
    type="text"
    name=""
    id=""
    bind:value={pswd}
    class="border border-black m-10"
/><br />
<!-- {#if pswd == "kkj"} -->
<select name="" id="" bind:value={what}>
    <option value="subject">Subject</option>
    <option value="topic">Topic</option>
</select>
{#if what == "subject"}
    <form
        method="POST"
        class="border-black border-2 w-[40%] h-96 m-10"
        action="?/insert"
    >
        <input
            type="text"
            name="subject"
            id=""
            class="border-2 border-black w-56 m-3 mb-5"
        />
        <br />

        <select
            name="branch"
            id=""
            bind:value={sems}
            class="w-2/3 m-auto border-black rounded-2xl border-[1px] text-xl p-2 mb-10"
        >
            {#each branches as branch}
                <option value={branch.name}>
                    {branch.name}
                </option>
            {/each}
        </select><br />
        <br />
        <!-- content here -->

        <select name="sem" id="">
            {#each Array(8) as _, index (index)}
                <option value={index + 1}>{index + 1}</option>
            {/each}
        </select>
        <input type="Submit" name="Submit" />
    </form>
{:else}
    <form
        method="POST"
        class="border-black border-2 w-[40%] h-96 m-10"
        action="?/insert"
    >
        <h1 class="text-3xl">Topic</h1>
        <input
            type="text"
            name="topic"
            id=""
            class="border-2 border-black w-56 m-3 mb-5"
        />
        <br />

        <select
            name="branch"
            id=""
            bind:value={sems}
            class="w-full m-auto border-black rounded-2xl border-[1px] text-xl p-2 mb-10"
        >
            {#each branches as branch}
                <option value={branch.name}>
                    {branch.name}
                </option>
            {/each}
        </select><br />
        <br />
        <!-- content here -->

        <select name="sem" id="">
            {#each Array(8) as _, index (index)}
                <option value={index + 1}>{index + 1}</option>
            {/each}
        </select>
        <input type="Submit" name="Submit" />
    </form>
{/if}
<!-- {/if} -->
