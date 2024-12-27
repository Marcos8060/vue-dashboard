<template>
  <main>
    <section
      class="bg-[#015864] w-full rounded p-4 flex items-center justify-between"
    >
      <div class="text-white">
        <p class="font-thin">Total Balance</p>
        <h3 class="text-3xl font-bold">ksh 320,000</h3>
      </div>
      <div class="flex gap-4 items-center">
        <button
          class="bg-[#01D47E] px-4 py-2 rounded text-xs flex items-center gap-1"
        >
          <i class="pi pi-plus"></i>
          Add
        </button>
        <button class="bg-[#29737D] px-4 py-2 rounded text-xs">Send</button>
        <button class="bg-[#29737D] px-4 py-2 rounded text-xs">Request</button>
      </div>
    </section>
    <section>
      <Button class="!bg-blue-500" label="Verify" />
    </section>
  </main>
</template>
