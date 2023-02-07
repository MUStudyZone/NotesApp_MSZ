<script>
    import { each } from "svelte/internal";

    let branches = [
        {
            name: "B.tech CSE",
            branch: "btech_cs",
            sem: 8,
        },
        {
            name: "B.tech ME",
            branch: "btech_me",
            sem: 8,
        },
        {
            name: "B.tech EE",
            branch: "btech_ee",
            sem: 8,
        },
    ];
    let sems = {};
</script>

<div class="m-auto w-40 border-black border-2">
    <select
        name="branch"
        id=""
        bind:value={sems}
        class="w-full border-black border-2"
    >
        {#each branches as branch}
            <option value={branch}>
                {branch.name}
            </option>
        {/each}
    </select>
    <input type="radio" name="1" id="" value="${sems}" />{sems.name || "null"}
</div>
