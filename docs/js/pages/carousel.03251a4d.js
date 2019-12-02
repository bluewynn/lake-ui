(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    /***/ 111: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/carousel.vue?vue&type=template&id=9c29b92a&scoped=true&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { title: 'Carousel' } }, [
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Basic')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-carousel',
                  { staticClass: 'fake-carousel' },
                  _vm._l(_vm.items, function(item, index) {
                    return _c('lake-carousel-item', { key: index, staticClass: 'fake-carousel-item' }, [
                      _c('div', { style: { backgroundColor: item.bgColor } }, [_vm._v(_vm._s(index))]),
                    ]);
                  }),
                  1,
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('With dot')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-carousel',
                  { staticClass: 'fake-carousel', attrs: { indicate: true } },
                  _vm._l(_vm.items, function(item, index) {
                    return _c('lake-carousel-item', { key: index, staticClass: 'fake-carousel-item' }, [
                      _c('div', { style: { backgroundColor: item.bgColor } }, [_vm._v(_vm._s(index))]),
                    ]);
                  }),
                  1,
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Auto')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-carousel',
                  { staticClass: 'fake-carousel', attrs: { auto: true } },
                  _vm._l(_vm.items, function(item, index) {
                    return _c('lake-carousel-item', { key: index, staticClass: 'fake-carousel-item' }, [
                      _c('div', { style: { backgroundColor: item.bgColor } }, [_vm._v(_vm._s(index))]),
                    ]);
                  }),
                  1,
                ),
              ],
              1,
            ),
          ]),
          _vm._v(' '),
          _c('div', { staticClass: 'demo-section' }, [
            _c('header', { staticClass: 'header' }, [_vm._v('Loop')]),
            _vm._v(' '),
            _c(
              'div',
              { staticClass: 'body' },
              [
                _c(
                  'lake-carousel',
                  { staticClass: 'fake-carousel', attrs: { loop: true } },
                  _vm._l(_vm.items, function(item, index) {
                    return _c('lake-carousel-item', { key: index, staticClass: 'fake-carousel-item' }, [
                      _c('div', { style: { backgroundColor: item.bgColor } }, [_vm._v(_vm._s(index))]),
                    ]);
                  }),
                  1,
                ),
              ],
              1,
            ),
          ]),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/carousel.vue?vue&type=template&id=9c29b92a&scoped=true&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/carousel.vue?vue&type=script&lang=js&
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

      /* harmony default export */ var carouselvue_type_script_lang_js_ = {
        name: 'page-carousel',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            items: [
              {
                bgColor: '#FFEB3B',
              },
              {
                bgColor: '#4CAF50',
              },
              {
                bgColor: '#FF9800',
              },
              {
                bgColor: '#00BCD4',
              },
            ],
          };
        },
      };
      // CONCATENATED MODULE: ./demo/pages/carousel.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_carouselvue_type_script_lang_js_ = carouselvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./demo/pages/carousel.vue?vue&type=style&index=0&id=9c29b92a&lang=less&scoped=true&
      var carouselvue_type_style_index_0_id_9c29b92a_lang_less_scoped_true_ = __webpack_require__(136);

      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/carousel.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_carouselvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        '9c29b92a',
        null,
      );

      /* harmony default export */ var carousel = (__webpack_exports__['default'] = component.exports);

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

    /***/ 125: /***/ function(module, exports, __webpack_require__) {
      // extracted by mini-css-extract-plugin
      /***/
    },

    /***/ 136: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_9c29b92a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        125,
      );
      /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_9c29b92a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_9c29b92a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__,
      );
      /* unused harmony reexport * */
      /* unused harmony default export */ var _unused_webpack_default_export =
        _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_9c29b92a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },
  },
]);
//# sourceMappingURL=carousel.03251a4d.js.map
