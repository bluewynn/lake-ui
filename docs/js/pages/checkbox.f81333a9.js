(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    /***/ 110: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/checkbox.vue?vue&type=template&id=327ea434&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { title: 'Button' } }, [
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic Checkbox')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-checkbox',
                  {
                    model: {
                      value: _vm.isBasicCheck,
                      callback: function($$v) {
                        _vm.isBasicCheck = $$v;
                      },
                      expression: 'isBasicCheck',
                    },
                  },
                  [_vm._v('同意')],
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Checkbox Group')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-checkbox-group',
                  {
                    model: {
                      value: _vm.cxkCheck,
                      callback: function($$v) {
                        _vm.cxkCheck = $$v;
                      },
                      expression: 'cxkCheck',
                    },
                  },
                  [
                    _c('lake-checkbox', { attrs: { label: '唱' } }),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { label: '跳' } }),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { disabled: true, label: 'Rap' } }, [_vm._v('Rap[readonly]')]),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { disabled: true, label: '篮球' } }, [_vm._v('篮球[disabled]')]),
                  ],
                  1,
                ),
                _vm._v(' '),
                _c('div', [_vm._v('选中：' + _vm._s(_vm.cxkCheck.join(',')))]),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Max and min')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-checkbox-group',
                  {
                    attrs: { min: 1, max: 3 },
                    model: {
                      value: _vm.cxkCheckAgain,
                      callback: function($$v) {
                        _vm.cxkCheckAgain = $$v;
                      },
                      expression: 'cxkCheckAgain',
                    },
                  },
                  [
                    _c('lake-checkbox', { attrs: { label: '唱' } }),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { label: '跳' } }),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { label: 'Rap' } }),
                    _vm._v(' '),
                    _c('lake-checkbox', { attrs: { label: '篮球' } }),
                  ],
                  1,
                ),
                _vm._v(' '),
                _c('div', [_vm._v('max 3 min 1：' + _vm._s(_vm.cxkCheckAgain.join(',')))]),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic Radio')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-radio',
                  {
                    model: {
                      value: _vm.isBasicRadio,
                      callback: function($$v) {
                        _vm.isBasicRadio = $$v;
                      },
                      expression: 'isBasicRadio',
                    },
                  },
                  [_vm._v('同意')],
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic Radio')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-radio',
                  {
                    attrs: { disabled: true },
                    model: {
                      value: _vm.isBasicCheckOnly,
                      callback: function($$v) {
                        _vm.isBasicCheckOnly = $$v;
                      },
                      expression: 'isBasicCheckOnly',
                    },
                  },
                  [_vm._v('同意')],
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Radio Group')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-radio-group',
                  {
                    model: {
                      value: _vm.cxkRadio,
                      callback: function($$v) {
                        _vm.cxkRadio = $$v;
                      },
                      expression: 'cxkRadio',
                    },
                  },
                  [
                    _c('lake-radio', { attrs: { label: '唱', disabled: true } }, [_vm._v('我会唱[readonly]')]),
                    _vm._v(' '),
                    _c('lake-radio', { attrs: { label: '跳' } }, [_vm._v('我会跳')]),
                    _vm._v(' '),
                    _c('lake-radio', { attrs: { label: 'Rap', disabled: true } }, [_vm._v('我会rap[disabled]')]),
                    _vm._v(' '),
                    _c('lake-radio', { attrs: { label: '篮球' } }, [_vm._v('我会篮球')]),
                  ],
                  1,
                ),
                _vm._v(' '),
                _c('div', [_vm._v('选中：' + _vm._s(_vm.cxkRadio))]),
              ],
              1,
            ),
          ]),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/checkbox.vue?vue&type=template&id=327ea434&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/checkbox.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var checkboxvue_type_script_lang_js_ = {
        name: 'page-checkbox-radio',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            isBasicCheck: true,
            isBasicCheckOnly: true,
            cxkCheck: ['Rap'],
            cxkCheckAgain: [],
            isBasicRadio: false,
            cxkRadio: '跳',
          };
        },
      };
      // CONCATENATED MODULE: ./demo/pages/checkbox.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_checkboxvue_type_script_lang_js_ = checkboxvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/checkbox.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_checkboxvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var pages_checkbox = (__webpack_exports__['default'] = component.exports);

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
  },
]);
//# sourceMappingURL=checkbox.f81333a9.js.map
