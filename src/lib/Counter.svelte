<script>
  export let count = 42;
</script>

<button
  class="bg-green-500 hover:bg-green-600 rounded px-4 py-1 my-4 text-white"
  on:click={() => count++}>Count: {count}</button
>
