<script setup lang="ts">
import BaseAccordion from '../../../remote-editor/src/components/base/BaseAccordion.vue'

</script>

<template>
    <BaseAccordion>
        <template #head>
            <div>
                <span>Truck</span>
            </div>
        </template>
        <template #default>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima totam harum molestias eaque. Perspiciatis nulla repellendus facere hic sunt sit magnam voluptate at autem dignissimos! Nemo incidunt consectetur facere? </div>
        </template>
    </BaseAccordion>



</template>

<style lang="scss" scoped>
.accordion {
	@apply flex flex-col bg-white shadow-dark-gray-tiny rounded items-center relative;

	&.colored {
		@apply before:absolute before:w-0.5 before:h-[calc(100%-0.1875rem)] before:rounded-l before:transition-all before:top-0.5;
	}

	&.opened {
		@apply before:left-0 before:opacity-100 before:bg-current;
	}

	&.closed {
		@apply before:left-0 before:opacity-0;
	}

	&__header {
		@apply flex w-full transition;
		// media
		@apply leading-normal text-px hd+:text-base fhd:text-base;
		@apply px-3 py-3 hd:px-4 hd:py-[10px] mac:p-[12px] 2k:p-3;
	}

	&__body {
		@apply w-full relative transition-all text-gray-dark;
		@apply before:h-px before:absolute before:top-0 before:left-3 before:w-[calc(100%-1.5rem)] before:bg-gray-light-1 before:transition-all;
	}

	&.device {
		.accordion__header {
			@apply p-[12px] 2k:p-3;
		}
	}
}
</style>
