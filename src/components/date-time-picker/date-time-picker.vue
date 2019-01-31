<style lang="less" scoped>
    .weui-picker__action { 
        &.confirm {
            color: #1aad19;
        }
        &.cancel {
            color: #888888;
        }
    }
    .weui-picker__item {
        padding: 5px 0 4px;
        font-size: 15px;
        line-height: 24px;
        height: 24px;
    }
</style>

<template>
    <div class="date-time-picker-container" v-show="!hidden">
        <div class="max-screen-wrapper" :class="{'weui-mask': true, 'weui-animate-fade-out': true, 'weui-animate-fade-out': !visible}" @click.stop="cancel"></div>
        <div class="max-screen-wrapper" :class="{'weui-picker': true, 'weui-animate-slide-up': true, 'weui-animate-slide-down': !visible}">
            <div class="weui-picker__hd">
                <a href="javascript:;" class="weui-picker__action font-md cancel" @click="cancel">取消</a>
                <a href="javascript:;" class="weui-picker__action font-md confirm" @click="confirm">确定</a>
            </div>
            <div class="weui-picker__bd">
                <div class="weui-picker__group"
                    @touchstart="scroll('year', $event)" 
                    @mousedown="mouse_scroll('year', $event)" 
                    @touchmove.prevent="scrolling('year', $event)" 
                    @mousemove.prevent="mouse_scrolling('year', $event)" 
                    @mouseleave.prevent="mouse_leaving('year', $event)" 
                    @touchend="scrolled('year', $event)"
                    @mouseup="scrolled('year', $event)">
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                        :style="{transform: 'translate3d(0px, ' + year_shift + 'px, 0px)', transition: 'all ' + scroll_timing + 's'}">
                        <div class="weui-picker__item" v-for="year in year_range">{{ year }}年</div>
                    </div>
                </div>
                <div class="weui-picker__group"
                    @touchstart="scroll('month', $event)" 
                    @mousedown="mouse_scroll('month', $event)" 
                    @touchmove.prevent="scrolling('month', $event)" 
                    @mousemove.prevent="mouse_scrolling('month', $event)" 
                    @mouseleave.prevent="mouse_leaving('month', $event)" 
                    @touchend="scrolled('month', $event)" 
                    @mouseup="scrolled('month', $event)" >
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                        :style="{transform: 'translate3d(0px, ' + month_shift + 'px, 0px)', transition: 'all ' + scroll_timing + 's'}">
                        <div class="weui-picker__item" v-for="month in month_range">{{ month }}月</div>
                    </div>
                </div>
                <div class="weui-picker__group"
                    @touchstart="scroll('date', $event)" 
                    @mousedown="mouse_scroll('date', $event)" 
                    @touchmove.prevent="scrolling('date', $event)" 
                    @mousemove.prevent="mouse_scrolling('date', $event)" 
                    @mouseleave.prevent="mouse_leaving('date', $event)" 
                    @touchend="scrolled('date', $event)" 
                    @mouseup="scrolled('date', $event)" >
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                        :style="{transform: 'translate3d(0px, ' + date_shift + 'px, 0px)', transition: 'all ' + scroll_timing + 's'}">
                        <div class="weui-picker__item" v-for="date in date_range">{{ date }}日</div>
                    </div>
                </div>
                <div class="weui-picker__group"
                    @touchstart="scroll('hour', $event)" 
                    @mousedown="mouse_scroll('hour', $event)" 
                    @touchmove.prevent="scrolling('hour', $event)" 
                    @mousemove.prevent="mouse_scrolling('hour', $event)" 
                    @mouseleave.prevent="mouse_leaving('hour', $event)" 
                    @touchend="scrolled('hour', $event)" 
                    @mouseup="scrolled('hour', $event)" >
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                        :style="{transform: 'translate3d(0px, ' + hour_shift + 'px, 0px)', transition: 'all ' + scroll_timing + 's'}">
                        <div class="weui-picker__item" v-for="hour in hour_range">{{ hour }}时</div>
                    </div>
                </div>
                <div class="weui-picker__group"
                    @touchstart="scroll('minute', $event)" 
                    @mousedown="mouse_scroll('minute', $event)" 
                    @touchmove.prevent="scrolling('minute', $event)" 
                    @mousemove.prevent="mouse_scrolling('minute', $event)" 
                    @mouseleave.prevent="mouse_leaving('minute', $event)" 
                    @touchend="scrolled('minute', $event)" 
                    @mouseup="scrolled('minute', $event)" >
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content"
                        :style="{transform: 'translate3d(0px, ' + minute_shift + 'px, 0px)', transition: 'all ' + scroll_timing + 's'}">
                        <div class="weui-picker__item" v-for="minute in minute_range">{{ minute }}分</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let shift = 0;
    let origin = 0;
    let path = 0;
    let is_mouse_down = false;

    export default {
        name: 'date-time-picker',
        props: {
            datetime: {
                type: String
            },
            visible: {
                type: Boolean
            }
        },
        data () {
            const now = this.datetime ? new Date(this.datetime) : new Date();
            return {
                mode: 'datetime',
                year: now.getFullYear(),
                year_range: this.range(now.getFullYear(), now.getFullYear() + 4),
                year_shift: this.shift(1),
                month: now.getMonth() + 1,
                month_range: this.range(1, 12),
                month_shift: this.shift(now.getMonth() + 1),
                date: now.getDate(),
                date_shift: this.shift(now.getDate()),
                hour: now.getHours(),
                hour_range: this.range(0, 23),
                hour_shift: this.shift(now.getHours() + 1),
                minute: Math.floor(now.getMinutes() / 5) * 5,
                minute_range: this.range(0, 59, 5),
                minute_shift: this.shift(Math.floor(now.getMinutes() / 5) + 1),
                scroll_timing: 0,
                hidden: true
            };
        },
        computed: {
            date_range() {
                let days = new Date(this.year, this.month, 0).getDate();
                if (this.date > days) {
                    this.date_shift = this.shift(days);
                    this.date = days;
                }
                return this.range(1, days);
            }
        },
        watch: {
            // 等动画做完后隐藏mask
            visible: function(value) {
                if (value) {                
                    this.hidden = !value
                } else {
                    setTimeout(() => {
                        this.hidden = !value
                    }, 300);
                }
            },
            // 调整月份的天数
        },
        methods: {
            range(start, end, step) {
                let index = -1;
                let length = Math.max(Math.ceil((end - start + 1) / (step || 1)), 0);
                let result = new Array(length);
                while(length--) {
                    if (start < 10) {
                        result[++index] = '0' + start;
                    } else {
                        result[++index] = start;
                    }
                    start += (step || 1);
                }
                return result;
            },
            shift(n) {
                return 33 * (4 - n) + 3 ;
            },
            scroll(target, $event) {
                this.scroll_timing = 0;
                shift = this[target + '_shift'];
                origin = $event.changedTouches[0].pageY;
            },
            mouse_scroll(target, $event) {
                this.scroll_timing = 0;
                shift = this[target + '_shift'];
                origin = $event.screenY;
                is_mouse_down = true;
            },
            scrolling(target, $event) {
                path = $event.changedTouches[0].pageY;
                this[target + '_shift'] = shift + path - origin;
            },
            mouse_scrolling(target, $event) {
                if (is_mouse_down) {                
                    path = $event.screenY;
                    this[target + '_shift'] = shift + path - origin;
                }
            },
            mouse_leaving(target, $event) {
                this.scrolled(target, $event);
            },
            scrolled(target, $event) {
                let index = 4 - Math.round(this[target + '_shift'] / 33);
                let limit = this[target + '_range'].length;
                index = index > limit ? limit : (index < 1 ? 1 : index);
                is_mouse_down = false;
                this.scroll_timing = 0.3;
                this[target + '_shift'] = this.shift(index);
                this[target] = this[target + '_range'][index - 1];
            },
            confirm() {
                let currentDate = new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.date), parseInt(this.hour), parseInt(this.minute), 0);
                currentDate = new Date(currentDate).format('yyyy-MM-dd hh:mm');
                this.$emit('on-select', currentDate);
            },
            cancel() {
                this.$emit('on-cancel');
            }
        }
    }
</script>