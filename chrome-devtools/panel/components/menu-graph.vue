<template>
    <section>
        <div v-if="$state.perf.navigator">
            <div>
                浏览器尺寸：{{ $state.perf.navigator.clientWidth }} x {{ $state.perf.navigator.clientHeight }}，设备像素比{{ $state.perf.navigator.devicePixelRatio }}
            </div>
            <div v-for="canvas in $state.perf.canvas">
                <p>[{{ canvas.name }}]</p>
                <div v-if="canvas.fps">
                    像素尺寸{{ canvas.size.canvasWidth }} x {{ canvas.size.canvasHeight }}
                    渲染尺寸{{ canvas.size.styleWidth }} x {{ canvas.size.styleHeight }}
                    <p>
                        FPS：{{ canvas.fps }}
                        绘制API调用次数：{{ canvas.perf.paintTimes }}/s
                    </p>
                    <p>
                        每帧读取图片：{{ (canvas.perf.loadArea / canvas.fps / ($state.perf.navigator.clientWidth * $state.perf.navigator.clientHeight)).toFixed(2) }}倍屏幕尺寸
                        每帧绘制面积：{{ (canvas.perf.paintArea / canvas.fps / ($state.perf.navigator.clientWidth * $state.perf.navigator.clientHeight)).toFixed(2) }}倍屏幕尺寸
                        easycanvas每帧跳过绘制面积：{{ (canvas.perf.jumpArea / canvas.fps / ($state.perf.navigator.clientWidth * $state.perf.navigator.clientHeight)).toFixed(2) }}倍屏幕尺寸
                    </p>
                    <p>
                        HTML5渲染API性能消耗{{ canvas.perf.paintTimeSpend / 10 }}%
                        easycanvas渲染预处理性能消耗{{ canvas.perf.preprocessTimeSpend / 10 }}%
                    </p>
                </div>
                <div v-else>
                    未渲染
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import constants from 'constants';
import Bus from '../bus.js';

export default {
    data () {
        return {
        };
    },
    computed: {
        perf () {
            return this.$state.perf;
        }
    },
    watch: {
    },
    components: {
    },
    methods: {
    }
};
</script>


<style lang="scss" scoped>
@import '../variables.scss';


</style>
