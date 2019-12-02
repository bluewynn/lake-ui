(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    /***/ 109: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/modal.vue?vue&type=template&id=60fe5e0a&scoped=true&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { title: 'Modal' } }, [
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Alert')]),
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
                        _vm.isShowAlertModal = !_vm.isShowAlertModal;
                      },
                    },
                  },
                  [_vm._v('Alert')],
                ),
                _vm._v(' '),
                _c('lake-modal', {
                  attrs: { title: 'Alert', msg: 'This is a danger operation', show: _vm.isShowAlertModal },
                  on: {
                    'update:show': function($event) {
                      _vm.isShowAlertModal = $event;
                    },
                    confirm: function($event) {
                      _vm.isShowAlertModal = false;
                    },
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Confirm')]),
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
                        _vm.isShowConfirmModal = !_vm.isShowConfirmModal;
                      },
                    },
                  },
                  [_vm._v('Confirm')],
                ),
                _vm._v(' '),
                _c('lake-modal', {
                  attrs: {
                    title: 'Confirm',
                    msg: 'This is your choose This is your choose This is your choose This is your choose',
                    show: _vm.isShowConfirmModal,
                    'show-cancel-btn': true,
                  },
                  on: {
                    'update:show': function($event) {
                      _vm.isShowConfirmModal = $event;
                    },
                    confirm: function($event) {
                      _vm.isShowConfirmModal = false;
                    },
                    cancel: function($event) {
                      _vm.isShowConfirmModal = false;
                    },
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Without Title')]),
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
                        _vm.isShowWithoutTitleModal = !_vm.isShowWithoutTitleModal;
                      },
                    },
                  },
                  [_vm._v('Without Title')],
                ),
                _vm._v(' '),
                _c('lake-modal', {
                  attrs: { msg: 'No Title', show: _vm.isShowWithoutTitleModal },
                  on: {
                    'update:show': function($event) {
                      _vm.isShowWithoutTitleModal = $event;
                    },
                    confirm: function($event) {
                      _vm.isShowWithoutTitleModal = false;
                    },
                    cancel: function($event) {
                      _vm.isShowWithoutTitleModal = false;
                    },
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Custom')]),
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
                        _vm.isShowCustomModal = !_vm.isShowCustomModal;
                      },
                    },
                  },
                  [_vm._v('Custom')],
                ),
                _vm._v(' '),
                _c(
                  'lake-modal',
                  {
                    attrs: { msg: 'No Title', show: _vm.isShowCustomModal },
                    on: {
                      'update:show': function($event) {
                        _vm.isShowCustomModal = $event;
                      },
                      confirm: function($event) {
                        _vm.isShowCustomModal = false;
                      },
                      cancel: function($event) {
                        _vm.isShowCustomModal = false;
                      },
                    },
                  },
                  [
                    _c(
                      'lake-list',
                      {
                        staticClass: 'item-list',
                        attrs: { slot: 'body', loading: _vm.isLoading, finished: _vm.isFinished },
                        on: { load: _vm.onLoad },
                        slot: 'body',
                      },
                      _vm._l(_vm.list, function(item) {
                        return _c('div', { key: item.id, staticClass: 'list-item' }, [_vm._v(_vm._s(item.title))]);
                      }),
                      0,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Function')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c('lake-button', { attrs: { inline: true }, on: { click: _vm.callAlert } }, [_vm._v('this.$alert()')]),
                _vm._v(' '),
                _c('lake-button', { attrs: { inline: true }, on: { click: _vm.callConfirm } }, [
                  _vm._v('this.$confirm()'),
                ]),
              ],
              1,
            ),
          ]),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/modal.vue?vue&type=template&id=60fe5e0a&scoped=true&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/modal.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var modalvue_type_script_lang_js_ = {
        name: 'page-modal',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            isShowAlertModal: false,
            isShowConfirmModal: false,
            isShowWithoutTitleModal: false,
            isShowCustomModal: false,
            isLoading: false,
            isFinished: false,
            list: [],
          };
        },

        methods: {
          onLoad() {
            this.isLoading = true;
            setTimeout(() => {
              const data = [];

              for (let index = 0; index < 20; index++) {
                data.push({
                  id: `key-${Math.random().toString()}`,
                  title: `I am Title ${Math.random().toString()}`,
                });
              }

              this.list = this.list.concat(data);
              this.isLoading = false;

              if (this.list.length >= 80) {
                this.isFinished = true;
              }
            }, 1000);
          },

          callAlert() {
            this.$alert({
              title: '确认',
              msg: '确认文字',
            }).then(() => {
              // this.$toast('resolve');
            });
          },

          callConfirm() {
            this.$confirm({
              title: '确认',
              msg: '确认文字',
            }).then(isConfirm => {
              // this.$toast(`resolve: ${isConfirm : 'true' : 'false'}`);
            });
          },
        },

        mounted() {
          this.onLoad();
        },
      };
      // CONCATENATED MODULE: ./demo/pages/modal.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_modalvue_type_script_lang_js_ = modalvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./demo/pages/modal.vue?vue&type=style&index=0&id=60fe5e0a&lang=less&scoped=true&
      var modalvue_type_style_index_0_id_60fe5e0a_lang_less_scoped_true_ = __webpack_require__(140);

      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/modal.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_modalvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        '60fe5e0a',
        null,
      );

      /* harmony default export */ var modal = (__webpack_exports__['default'] = component.exports);

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

    /***/ 129: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ 140: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_60fe5e0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        129,
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_60fe5e0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_60fe5e0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_vue_vue_type_style_index_0_id_60fe5e0a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },
  },
]);
//# sourceMappingURL=modal.3761c112.js.map
