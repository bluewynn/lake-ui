<style lang="less" scoped>
	.expression-wrapper {
		position: fixed;
		width: 100%;
		height: 280px;
		left: 0;
		bottom: -280px;
		background-color: #eee;
		border-top: solid 1px #d8d8d8;
		transition: bottom .4s ease;
		overflow: hidden;
		z-index: 99;

		.expression-mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: transparent;
			z-index: 99;
		}

		.expression-container {
			position: absolute;
			left: 0;
			height: 240px;
			z-index: 999;

			&.transition {
				transition: left .2s ease;
			}

			.expression-page {
				float: left;

				.expression-list {
					display: flex;
					flex-wrap: wrap;
					padding: 0 10px;

					.expression-item {
						position: relative;
						height: 80px;
						flex: 0 0 14.2857%;

						.expression-image {
							position: absolute;
							top: 50%;
							left: 50%;
							width: 32px;
							height: 32px;
							margin-top: -16px;
							margin-left: -16px;
						}
					}
				}
			}
		}

		.page-dots {
			display: flex;
			position: absolute;
			width: 100%;
			height: 40px;
			margin-top: 240px;
			align-items: center;
			justify-content: center;

			.dot {
				width: 8px;
				height: 8px;
				background-color: #ccc;
				border-radius: 50%;
				margin: 0 5px;

				&.active {
					width: 10px;
					height: 10px;
					background-color: #999;
				}
			}
		}
	}
</style>

<template>
	<div class="expression-wrapper" 
		:style="{bottom: active ? '0px' : '-280px'}" 
		ref="container">
		<div class="expression-mask" @click="closeExpression" v-show="active"></div>
		<ul :class="['expression-container', isDragging ? '' : 'transition']" 
			:style="{width: pagesWidth + 'px', left: containerLeft + 'px'}" 
			@touchstart="pageDrag" @touchmove="pageDragging" @touchend="pageDrop">
			<li class="expression-page" 
				:style="{width: containerWidth + 'px'}" 
                :key="index"
				v-for="(page, index) in expressionPages">
				<ul class="expression-list">
					<li class="expression-item" @click="chooseExpression(item)" :key="item.id" v-for="item in page">
						<div class="expression-image bg-sprites-expression" 
							:style="{backgroundPosition: '0px -' + item.offset + 'px'}" :alt="item.alt"></div>
					</li>
				</ul>
			</li>
		</ul>
		<ul class="page-dots">
			<li :class="['dot', currentPage == index ? 'active' : '']" :key="index" v-for="(page, index) in expressionPages"></li>
		</ul>
	</div>
</template>

<script>
	const EXPRESSIONS = [
		{ id: 14, alt: '微笑' },  { id: 1, alt: '撇嘴' }, { id: 2, alt: '色' },  { id: 3, alt: '发呆' }, { id: 4, alt: '得意' }, { id: 5, alt: '流泪' }, 
		{ id: 6, alt: '害羞' }, { id: 7, alt: '闭嘴' }, { id: 8, alt: '睡' }, { id: 9, alt: '大哭' }, { id: 10, alt: '尴尬' },  { id: 11, alt: '发怒' }, 
		{ id: 12, alt: '调皮' }, { id: 13, alt: '呲牙' },  { id: 0, alt: '惊讶' }, { id: 15, alt: '难过' }, { id: 16, alt: '酷' }, { id: 96, alt: '冷汗' }, 
		{ id: 18, alt: '抓狂' }, { id: 19, alt: '吐' }, { id: 20, alt: '偷笑' },  { id: 21, alt: '可爱' },  { id: 22, alt: '白眼' }, { id: 23, alt: '傲慢' }, 
		{ id: 24, alt: '饥饿' }, { id: 25, alt: '困' }, { id: 26, alt: '惊恐' }, { id: 27, alt: '流汗' }, { id: 28, alt: '憨笑' }, { id: 29, alt: '大兵' }, 
		{ id: 30, alt: '奋斗' },  { id: 31, alt: '咒骂' },  { id: 32, alt: '疑问' }, { id: 33, alt:  '嘘' }, { id: 34, alt:  '晕' }, { id: 35, alt: '折磨' }, 
		{ id: 36, alt: '衰' }, { id: 37, alt: '骷髅' }, { id: 38, alt: '敲打' }, { id: 39, alt: '再见' }, { id: 97, alt: '擦汗' },  { id: 98, alt: '抠鼻' }, 
		{ id: 99, alt: '鼓掌' }, { id: 100, alt: '糗大了' },  { id: 101, alt: '坏笑' }, { id: 102, alt: '左哼哼' }, { id: 103, alt: '右哼哼' }, { id: 104, alt: '哈欠' }, 
		{ id: 105, alt: '鄙视' }, { id: 106, alt: '委屈' },  { id: 107, alt: '快哭了' },  { id: 108, alt: '阴险' }, { id: 109, alt: '亲亲' },  { id: 110, alt: '吓' }, 
		{ id: 111, alt: '可怜' }, { id: 112, alt: '菜刀' }, { id: 89, alt: '西瓜' }, { id: 113, alt: '啤酒' }, { id: 114, alt: '篮球' }, { id: 115, alt: '乒乓' }, 
		{ id: 60, alt: '咖啡' }, { id: 61, alt: '饭' }, { id: 46, alt: '猪头' }, { id: 63, alt: '玫瑰' }, { id: 64, alt: '凋谢' }, { id: 116, alt: '示爱' }, 
		{ id: 66, alt: '爱心' }, { id: 67, alt: '心碎' },  { id: 53, alt: '蛋糕' },  { id: 54, alt: '闪电' }, { id: 55, alt: '炸弹' },  { id: 56, alt: '刀' }, 
		{ id: 57, alt: '足球' }, { id: 117, alt: '瓢虫' }, { id: 59, alt: '便便' }, { id: 75, alt: '月亮' }, { id: 74, alt: '太阳' },  { id: 69, alt: '礼物' }, 
		{ id: 49, alt: '拥抱' }, { id: 76, alt: '强' }, { id: 77, alt: '弱' }, { id: 78, alt: '握手' }, { id: 79, alt: '胜利' }, { id: 118, alt: '抱拳' }, 
		{ id: 119, alt: '勾引' }, { id: 120, alt: '拳头' }, { id: 121, alt: '差劲' },  { id: 122, alt: '爱你' },  { id: 123, alt: 'NO' }, { id: 124, alt: 'OK' }, 
		{ id: 42, alt: '爱情' }, { id: 85, alt: '飞吻' }, { id: 43, alt: '跳跳' }, { id: 41, alt: '发抖' }, { id: 86, alt: '怄火' }, { id: 125, alt: '转圈' }, 
		{ id: 126, alt: '磕头' },  { id: 127, alt: '回头' },  { id: 128, alt: '跳绳' }, { id: 129, alt: '挥手' },  { id: 130, alt: '激动' }, { id: 131, alt: '街舞' }, 
		{ id: 132, alt: '献吻' }, { id: 133, alt: '左太极' }, { id: 134, alt: '右太极' }, { id: 135, alt: '嘿哈' },  { id: 136, alt: '捂脸' }, { id: 137, alt: '奸笑' }, 
		{ id: 138, alt: '机智' }, { id: 139, alt: '皱眉' }, { id: 140, alt: '耶' }, { id: 141, alt: '茶' }, { id: 142, alt: '红包' }, { id: 143, alt: '蜡烛' }
	];
	export default {
		props: {
		    active: {
		    	type: Boolean,
		    	default: false,
		    },
			closeOnChoose: {
		        type: Boolean,
				default: false,
			}
		},
		data () {
			return {
				containerWidth: 0,
				pagesWidth: 0,
				expressionPages: [],
				isDragging: false,
				dragStart: {},
				dragDistant: 0,
				pageLeft: 0,
				containerLeft: 0,
				currentPage: 0,
			}
		},
		mounted () {
			let pageList = [];
			let tmpPages = [];
			const toalAmount = EXPRESSIONS.length;
			const unitWidth = 32;

			EXPRESSIONS.map((item, index) => {
				item.offset = item.id * unitWidth;
				pageList.push(item);

				if (pageList.length == 20) {
					pageList.push({ id: null, alt: 'DELETE', offset: 17 * unitWidth });
					tmpPages.push(pageList);
					pageList = [];
				}
				if (index == toalAmount - 1) {
					const emptyCount = 20 - pageList.length;
					for (let i = 0; i < emptyCount; i++) {
						pageList.push({ id: null, alt: 'EMPTY', offset: 9999 });
					}
					pageList.push({ id: null, alt: 'DELETE', offset: 17 * unitWidth });
					tmpPages.push(pageList);
					pageList = [];
				}
			});

			this.expressionPages = tmpPages;
			this.containerWidth = window.innerWidth;
			this.pagesWidth = this.containerWidth * this.expressionPages.length;
		},
		methods: {
			pageDrag(e) {
				this.isDragging = true;
				this.dragStart = {
					clientX: e.touches[0].clientX,
					timeStamp: e.timeStamp
				};
			},
			pageDragging(e) {
				if (this.isDragging) {
					e.preventDefault();
					// todo if requestAnimeFrame
					this.dragDistant = e.touches[0].clientX - this.dragStart.clientX;
					const tmpLeft = this.pageLeft + this.dragDistant;

					if (tmpLeft <= 0 && tmpLeft >= -(this.pagesWidth - this.containerWidth)) {
						this.containerLeft = this.pageLeft + this.dragDistant;
					}
				}
			},
			pageDrop(e) {
				const distant = Math.abs(this.dragDistant / this.containerWidth);
				const gap = e.timeStamp - this.dragStart.timeStamp;

				if (distant >= 0.3 || (distant > 0.1 && gap < 500)) {
					if (this.dragDistant < 0) {
						this.currentPage += 1;
					} else {
						this.currentPage -= 1;
					}
				}
				if (this.currentPage < 0) { this.currentPage = 0; }
				if (this.currentPage > this.expressionPages.length - 1) { this.currentPage = this.expressionPages.length - 1; }

				this.pageLeft = -this.currentPage * this.containerWidth;
				this.containerLeft = this.pageLeft;
				this.dragDistant = 0;
				this.isDragging = false;
			},
			chooseExpression(item) {
				this.$emit('choose', item);
				if (this.closeOnChoose) {
                    this.closeExpression();
				}
			},
			closeExpression() {
				this.$emit('close');
			}
		}
	}
</script>