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
    let hh = () => {
        alert("YOPE");
    };
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
    <input type="radio" name="sem" id="" value="${sems}" />{sems.sem || "nulla"}
    <input type="text" name="tel" id="" value="sdjg " />
    <a href="/notes/{sems.branch}{sems.sem}">Submit</a>
</div>
