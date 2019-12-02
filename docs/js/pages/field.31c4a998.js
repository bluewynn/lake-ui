(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    /***/ 105: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/field.vue?vue&type=template&id=4a878c8f&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { title: 'Field & Textarea' } }, [
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-field', {
                  attrs: { placeholder: '请输入文本' },
                  model: {
                    value: _vm.basicField,
                    callback: function($$v) {
                      _vm.basicField = $$v;
                    },
                    expression: 'basicField',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('With Label')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-field', {
                  attrs: { placeholder: '请输入文本', label: '标题' },
                  model: {
                    value: _vm.withLabelField,
                    callback: function($$v) {
                      _vm.withLabelField = $$v;
                    },
                    expression: 'withLabelField',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Readonly and Disabled')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-field', {
                  attrs: { placeholder: '控制只读', label: '标题' },
                  model: {
                    value: _vm.readonlyField,
                    callback: function($$v) {
                      _vm.readonlyField = $$v;
                    },
                    expression: 'readonlyField',
                  },
                }),
                _vm._v(' '),
                _c('lake-field', {
                  attrs: { placeholder: '请输入文本（只读）', label: '标题', readonly: true },
                  model: {
                    value: _vm.readonlyField,
                    callback: function($$v) {
                      _vm.readonlyField = $$v;
                    },
                    expression: 'readonlyField',
                  },
                }),
                _vm._v(' '),
                _c('lake-field', {
                  attrs: { placeholder: '请输入文本（禁用）', label: '标题', disabled: true },
                  model: {
                    value: _vm.disabledField,
                    callback: function($$v) {
                      _vm.disabledField = $$v;
                    },
                    expression: 'disabledField',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Field with error text')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-field', {
                  attrs: { placeholder: '请输入文本', label: '标题', error: true, 'error-text': '标题不能为空' },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Textarea')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-textarea', {
                  attrs: { placeholder: '请输入文本' },
                  model: {
                    value: _vm.textarea,
                    callback: function($$v) {
                      _vm.textarea = $$v;
                    },
                    expression: 'textarea',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Textarea with Label')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-textarea', {
                  attrs: { label: '文本', placeholder: '请输入文本' },
                  model: {
                    value: _vm.textarea,
                    callback: function($$v) {
                      _vm.textarea = $$v;
                    },
                    expression: 'textarea',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Textarea custom count parser')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-textarea', {
                  attrs: { placeholder: '请输入文本（计数器）', count: 100 },
                  model: {
                    value: _vm.textareaCount,
                    callback: function($$v) {
                      _vm.textareaCount = $$v;
                    },
                    expression: 'textareaCount',
                  },
                }),
                _vm._v(' '),
                _c('br'),
                _vm._v(' '),
                _c('lake-textarea', {
                  attrs: {
                    placeholder: '请输入文本（自定义计数器）',
                    count: 140,
                    'word-length-parser': _vm.wordLengthParser,
                  },
                  model: {
                    value: _vm.textareaCustomCount,
                    callback: function($$v) {
                      _vm.textareaCustomCount = $$v;
                    },
                    expression: 'textareaCustomCount',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Textarea with autosize')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-textarea', {
                  attrs: { autosize: true, placeholder: '请输入文本（高度自适应）' },
                  model: {
                    value: _vm.textareaAutosize,
                    callback: function($$v) {
                      _vm.textareaAutosize = $$v;
                    },
                    expression: 'textareaAutosize',
                  },
                }),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Textarea with error tips')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body no-side-padding' },
              [
                _c('lake-textarea', {
                  attrs: { placeholder: '请输入文本', label: '标题', error: true, 'error-text': '标题不能为空' },
                }),
              ],
              1,
            ),
          ]),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/field.vue?vue&type=template&id=4a878c8f&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/field.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var fieldvue_type_script_lang_js_ = {
        name: 'page-field',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            basicField: '',
            withLabelField: '',
            readonlyField: '',
            disabledField: '',
            textarea: '',
            textareaCount: '',
            textareaCustomCount: '',
            textareaAutosize: '',
            wordLengthParser: value => {
              if (value) {
                const len = value.replace(/[^\x00-\xff]/g, 'aa').length;

                if (this.limit - Math.ceil(len / 2) <= 0) {
                  for (let i = this.limit; i < len; i++) {
                    if (value.substr(0, i).replace(/[^\x00-\xff]/g, 'aa').length >= this.limit * 2) {
                      value = value.substr(0, i);
                      return this.limit;
                    }
                  }
                }

                return Math.ceil(len / 2);
              }

              return 0;
            },
          };
        },
      };
      // CONCATENATED MODULE: ./demo/pages/field.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_fieldvue_type_script_lang_js_ = fieldvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/field.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_fieldvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var field = (__webpack_exports__['default'] = component.exports);

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
//# sourceMappingURL=field.31c4a998.js.map
