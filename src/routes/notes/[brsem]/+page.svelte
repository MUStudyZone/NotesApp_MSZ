<script>
    export let data;
    console.log(data);
    let color = () => {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        return `rgba(${a},${b},${c},0.3)`;
    };
</script>

{data.text}
<div class="w-[100%] flex flex-row flex-wrap m-auto mt-20 ">
    {#each data.text as item}
        <div
            class="border w-56 text-center hover:shadow-2xl rounded-3xl h-32 m-10 p-4"
            style="background-color:{color()};"
        >
            <a href="/{item.name}" class="m-auto">
                <h1 class="text-2xl hover:text-3xl">{item.name}</h1>
            </a>
        </div>
    {/each}
</div>
