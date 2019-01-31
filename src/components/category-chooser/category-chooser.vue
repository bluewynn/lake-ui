<style lang="less" scoped>
    @import '~assets/less/common/mixin.less';

    .category-chooser-container {
        .chooser-wrapper {
            width: 100%;
            height: 238px;
            background-color: white;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
        .category-content-list {
            position: absolute;
            top: 38px;
            left: 0;
            right: 0;
        }

        .weui-picker {
            height: 276px;
            overflow: hidden;
        }
        .back {
            position: relative;
            display: block;
            height: 44px;
            padding: 0 15px;
            line-height: 44px;

            &:after {
                .border-variant-bottom();
            }
        }
        .categories {
            width: 100%;

            &:before,
            &:after {
                border: none;
            }
        }
        .category {
            .weui-cells {
                &:before,
                &:after {
                    border: none;
                }
            }
            .category-child {
                padding-left: 17px;
            }
        }
    }
</style>

<template>
    <div class="category-chooser-container" v-show="visible">
        <div class="weui-mask max-screen-wrapper"
            :class="{'weui-animate-fade-out': !visible}" @click.stop="cancel">
        </div>

        <div class="weui-picker weui-animate-slide-up max-screen-wrapper"
            :class="{'weui-animate-slide-down': !visible}">
            <div class="weui-picker__hd">
                <a class="weui-picker__action font-md cancel" @click="cancel">取消</a>
            </div>
            <div class="weui-picker__bd category-content-list">
                <div class="chooser-wrapper" ref="wrapper">
                    <div class="pointer back" @click="backToParentCategory" v-show="!isRoot">返回上一级</div>
                    <div class="categories weui-cells no-margin">
                        <div class="weui-cell weui-cell_access category pointer"
                            @click.stop="chooseCategory(currentCategory)">
                            <div class="weui-cell__hd"></div>
                            <div class="weui-cell__bd">
                                <p class="category-parent">{{ currentCategory.name }}</p>
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_access category pointer"
                             v-for="category in currentCategory.children" :key="category.id"
                             @click.stop="selectCategory(category)">
                            <div class="weui-cell__hd"></div>
                            <div class="weui-cell__bd">
                                <p class="category-child">{{ category.name }}</p>
                            </div>
                            <div class="weui-cell__ft" v-if="category.children && category.children.length"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'category-chooser',
        props: {
            categoryId: {
                type: String,
                default: '',
            },
            categories: {
                type: Array,
                default () {
                    return [];
                },
            },
            rootName: {
                type: String,
                default: '全部分类',
            },
            visible: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            isRoot () {
                return !this.currentCategory.parent_id;
            },
        },
        watch: {
            visible (newVal) {
                if (newVal) {
                    document.body.classList.add('modal-open');
                } else {
                    document.body.classList.remove('modal-open');
                }
            },
            categories (newVal) {
                this.currentCategory = {
                    parent_id: '',
                    id: '',
                    name: this.rootName,
                    children: newVal,
                };
            },
        },
        data () {
            return {
                currentCategory: {},
                categoryStack: [],
                tempStack: [],
            };
        },
        mounted () {
            if (this.categoryId) { // 有 id，做初始化
                this.currentCategory = this.getCategory(this.categoryId, this.currentCategory) || this.currentCategory;
            }
        },
        beforeDestroy () {
            document.body.classList.remove('modal-open');
        },
        methods: {
            cancel () {
                this.$emit('update:visible', false);
                this.$emit('on-cancel');
            },
            chooseCategory (category) {
                this.$emit('update:visible', false);
                this.$emit('on-select', category);
            },
            selectCategory (category) {
                if (!category.children || !category.children.length) { // 选择分类
                    this.chooseCategory(category);
                } else { // 进入分类子级
                    this.categoryStack.push(this.currentCategory);
                    this.currentCategory = category;
                    this.$nextTick().then(() => this.$refs.wrapper.scrollTo(0, 0));
                }
            },
            backToParentCategory () {
                if (!this.categoryStack.length) return;

                this.currentCategory = this.categoryStack.pop();
                this.$nextTick().then(() => this.$refs.wrapper.scrollTo(0, 0));
            },

            /**
             * 根据 id 递归查找 && 堆栈历史记录
             * @param categoryId
             * @param category
             * @returns {*}
             */
            getCategory (categoryId, category) {
                this.tempStack.push(category);

                if (category.id === categoryId) {
                    this.tempStack.pop();
                    this.categoryStack = [].concat(this.tempStack);

                    return category;
                }

                if (category.children && category.children.length) {
                    let i = 0;
                    let target = null;

                    for (i; target === null && i < category.children.length; i++) {
                        target = this.getCategory(categoryId, category.children[i]);
                        this.tempStack.pop();
                    }
                    return target;
                }

                return null;
            },
        },
    };
</script>
