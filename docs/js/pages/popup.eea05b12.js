(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    /***/ 101: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/popup.vue?vue&type=template&id=342fdc9c&scoped=true&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { height: 900 } }, [
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-button',
                  {
                    on: {
                      click: function($event) {
                        _vm.isShowPopup = !_vm.isShowPopup;
                      },
                    },
                  },
                  [_vm._v('Basic')],
                ),
                _vm._v(' '),
                _c(
                  'lake-popup',
                  {
                    attrs: { show: _vm.isShowPopup },
                    on: {
                      'click-mask': function($event) {
                        _vm.isShowPopup = false;
                      },
                    },
                  },
                  [
                    _c('div', { staticClass: 'popup-content' }, [
                      _vm._v('\n          云想衣裳花想容，\n          '),
                      _c('br'),
                      _vm._v('春风拂槛露华浓。 '),
                      _c('br'),
                      _vm._v('若非群玉山头见， '),
                      _c('br'),
                      _vm._v('会向瑶台月下逢。\n        '),
                    ]),
                  ],
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Define Position')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-button',
                  {
                    on: {
                      click: function($event) {
                        _vm.isShowPopupBottom = !_vm.isShowPopupBottom;
                      },
                    },
                  },
                  [_vm._v('Popup bottom')],
                ),
                _vm._v(' '),
                _c(
                  'lake-popup',
                  {
                    attrs: { show: _vm.isShowPopupBottom, position: 'bottom' },
                    on: {
                      'click-mask': function($event) {
                        _vm.isShowPopupBottom = false;
                      },
                    },
                  },
                  [
                    _c('div', { staticClass: 'popup-content popup-content-bottom' }, [
                      _vm._v(
                        '\n          古时有关云长全神贯注下象棋刮骨疗毒，今日有我凌凌漆聚精会神看A片挖骨取弹头。\n        ',
                      ),
                    ]),
                  ],
                ),
                _vm._v(' '),
                _c('br'),
                _vm._v(' '),
                _c(
                  'lake-button',
                  {
                    on: {
                      click: function($event) {
                        _vm.isShowPopupTop = !_vm.isShowPopupTop;
                      },
                    },
                  },
                  [_vm._v('Popup top')],
                ),
                _vm._v(' '),
                _c(
                  'lake-popup',
                  {
                    attrs: { show: _vm.isShowPopupTop, position: 'top' },
                    on: {
                      'click-mask': function($event) {
                        _vm.isShowPopupTop = false;
                      },
                    },
                  },
                  [
                    _c('div', { staticClass: 'popup-content popup-content-message' }, [
                      _vm._v('你可以说我是跑龙套的，但是你不可以说我是“臭跑龙套”的！'),
                    ]),
                  ],
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Full Screen')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-button',
                  {
                    on: {
                      click: function($event) {
                        _vm.isShowFullScreen = !_vm.isShowFullScreen;
                      },
                    },
                  },
                  [_vm._v('Popup Full Screen')],
                ),
                _vm._v(' '),
                _c(
                  'lake-popup',
                  {
                    attrs: { show: _vm.isShowFullScreen, position: 'full-screen', 'lock-scroll': true },
                    on: {
                      'click-mask': function($event) {
                        _vm.isShowFullScreen = false;
                      },
                    },
                  },
                  [
                    _c(
                      'div',
                      { staticClass: 'popup-content popup-full-screen' },
                      [
                        _c(
                          'lake-button',
                          {
                            attrs: { type: 'primary' },
                            on: {
                              click: function($event) {
                                _vm.isShowFullScreen = false;
                              },
                            },
                          },
                          [_vm._v('close')],
                        ),
                        _vm._v(' '),
                        _c('br'),
                        _vm._v('古时有关云长全神贯注下象棋刮骨疗毒，今日有我凌凌漆聚精会神看A片挖骨取弹头。\n        '),
                      ],
                      1,
                    ),
                  ],
                ),
                _vm._v(' '),
                _c('br'),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Lock Scroll')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-button',
                  {
                    on: {
                      click: function($event) {
                        _vm.isShowLockScroll = !_vm.isShowLockScroll;
                      },
                    },
                  },
                  [_vm._v('Lock Scroll')],
                ),
                _vm._v(' '),
                _c(
                  'lake-popup',
                  {
                    attrs: { show: _vm.isShowLockScroll, 'lock-scroll': true },
                    on: {
                      'click-mask': function($event) {
                        _vm.isShowLockScroll = false;
                      },
                    },
                  },
                  [
                    _c('div', { staticClass: 'popup-content popup-lock-scroll' }, [
                      _vm._v(
                        '\n          你以为躲在这里就找不到你吗？没用的，你那样出色的男人无论在哪，都像黑夜星仔里的莹火虫那样的鲜明、那样的出众，你那忧郁的眼神，稀嘘的胡渣子，神乎其技的刀法，还有那杯Drymartine，都深深的迷住了我。\n          ',
                      ),
                      _c('br'),
                      _vm._v(
                        '\n          他高傲，但是宅心仁厚，他低调，但是受万人景仰，他可以把神赐给人类的火，运用的出神入化，烧出堪称火之艺术的超级菜式，他究竟是神仙的化身？还是地狱的使者？没人知道，但是可以肯定，每个人都给他一个称号——食神！\n        ',
                      ),
                    ]),
                  ],
                ),
                _vm._v(' '),
                _c('br'),
              ],
              1,
            ),
          ]),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/popup.vue?vue&type=template&id=342fdc9c&scoped=true&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/popup.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var popupvue_type_script_lang_js_ = {
        name: 'page-popup',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            isShowPopup: false,
            isShowPopupBottom: false,
            isShowPopupTop: false,
            isShowFullScreen: false,
            isShowLockScroll: false,
          };
        },
      };
      // CONCATENATED MODULE: ./demo/pages/popup.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_popupvue_type_script_lang_js_ = popupvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./demo/pages/popup.vue?vue&type=style&index=0&id=342fdc9c&lang=less&scoped=true&
      var popupvue_type_style_index_0_id_342fdc9c_lang_less_scoped_true_ = __webpack_require__(134);

      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/popup.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_popupvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        '342fdc9c',
        null,
      );

      /* harmony default export */ var popup = (__webpack_exports__['default'] = component.exports);

      /***/
    },

    /***/ 117: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ 118: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_view_vue_vue_type_style_index_0_id_5019d374_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        117,
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_view_vue_vue_type_style_index_0_id_5019d374_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_view_vue_vue_type_style_index_0_id_5019d374_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_view_vue_vue_type_style_index_0_id_5019d374_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ 119: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/components/page-view.vue?vue&type=template&id=5019d374&scoped=true&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          'main',
          { staticClass: 'page-view', style: { height: '' + (_vm.height === 0 ? 'auto' : _vm.height + 'px') } },
          [
            _c('header', { staticClass: 'page-view-header' }, [_vm._v(_vm._s(_vm.computedTitle))]),
            _vm._v(' '),
            _c('section', { staticClass: 'page-view-body' }, [_vm._t('default')], 2),
          ],
        );
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/components/page-view.vue?vue&type=template&id=5019d374&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/components/page-view.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /* harmony default export */ var page_viewvue_type_script_lang_js_ = {
        name: 'page-view',
        props: {
          title: {
            type: String,
            default: 'UI',
          },
          height: {
            type: Number,
            default: 0,
          },
        },
        computed: {
          computedTitle() {
            return this.$route.meta.title || this.title;
          },
        },
      };
      // CONCATENATED MODULE: ./demo/components/page-view.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_page_viewvue_type_script_lang_js_ = page_viewvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./demo/components/page-view.vue?vue&type=style&index=0&id=5019d374&lang=less&scoped=true&
      var page_viewvue_type_style_index_0_id_5019d374_lang_less_scoped_true_ = __webpack_require__(118);

      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/components/page-view.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        components_page_viewvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        '5019d374',
        null,
      );

      /* harmony default export */ var page_view = (__webpack_exports__['a'] = component.exports);

      /***/
    },

    /***/ 123: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ 134: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_342fdc9c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        123,
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_342fdc9c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_342fdc9c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_342fdc9c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },
  },
]);
//# sourceMappingURL=popup.eea05b12.js.map
