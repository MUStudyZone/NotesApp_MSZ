<script>
    let subject;
    let brsem;
</script>

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

    <input
        type="text"
        name="branch"
        id=""
        class="border-2 border-black w-56 m-3 mb-5"
    />
    <br />
    <!-- content here -->

    <select name="sem" id="">
        {#each Array(8) as _, index (index)}
            <option value={index + 1}>{index + 1}</option>
        {/each}
    </select>
    <input type="Submit" name="Submit" />
</form>
