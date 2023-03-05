<script>
    import { branches } from "$lib/data.js";

    let sems = {};
</script>

<main class=" bg-green-300 h-screen">
    <div
        class=" top-32 rounded-xl bg-slate-100 m-auto h-[60%] w-[50%]  border-black border-[1px] relative"
    >
        <div class="w-[80%] m-auto mt-5 p-5 border-black border-[1px] ">
            <p class="text-xl">Branch:</p>
            <select
                name="branch"
                id=""
                bind:value={sems}
                class="w-full m-auto border-black rounded-2xl border-[1px] text-xl p-2 mb-10"
            >
                {#each branches as branch}
                    <option value={branch}>
                        {branch.name}
                    </option>
                {/each}
            </select><br />
            <p class="text-xl">Semester:</p>
            <div class="flex ">
                {#each Array(sems.sem) as _, index (index)}
                    <div class="border border-black h-10 w-10 p-2 flex">
                        <label>
                            {index + 1}
                        </label>
                        <input
                            type="radio"
                            name="Sem"
                            id=""
                            value={index + 1}
                            class="mb-10 m-3 w-10"
                        />
                    </div>
                {/each}
            </div>
            <br />
            <p class="text-xl">Subject:</p>
            <input
                type="text"
                name="tel"
                id=""
                placeholder=""
                class="w-full m-auto p-2 border-black rounded-2xl border-[1px] text-xl"
            />
        </div>

        <a
            href="/notes/{sems.branch}"
            class="py-3 rounded-full px-10 text-2xl border-2 bottom-5 right-5 absolute border-black"
            >Submit</a
        >
    </div>
</main>
