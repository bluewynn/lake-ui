(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
  {
    /***/ 104: /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/tabs.vue?vue&type=template&id=1d3a11ae&
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('page-view', { attrs: { title: 'Tabs' } }, [
          _c(
            'div',
            { staticClass: 'demo-section' },
            [
              _c('header', { staticClass: 'header' }, [_vm._v('Basic')]),
              _vm._v(' '),
              _c('lake-tabs', {
                attrs: { tabs: _vm.tabItems.slice(0, 3) },
                scopedSlots: _vm._u([
                  {
                    key: 'tab-item',
                    fn: function(ref) {
                      var tab = ref.tab;
                      return _c('span', {}, [_vm._v(_vm._s(tab.name))]);
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
          _vm._v(' '),
          _c(
            'div',
            { staticClass: 'demo-section' },
            [
              _c('header', { staticClass: 'header' }, [_vm._v('Multiple Tabs')]),
              _vm._v(' '),
              _c('lake-tabs', {
                attrs: { tabs: _vm.tabItems, 'show-more': true },
                scopedSlots: _vm._u([
                  {
                    key: 'tab-item',
                    fn: function(ref) {
                      var tab = ref.tab;
                      return _c('span', {}, [_vm._v(_vm._s(tab.name))]);
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
          _vm._v(' '),
          _c(
            'div',
            { staticClass: 'demo-section' },
            [
              _c('header', { staticClass: 'header' }, [_vm._v('Selected Tabs')]),
              _vm._v(' '),
              _c('lake-tabs', {
                attrs: { tabs: _vm.tabItems, selected: 1, 'show-more': true },
                scopedSlots: _vm._u([
                  {
                    key: 'tab-item',
                    fn: function(ref) {
                      var tab = ref.tab;
                      return _c('span', {}, [_vm._v(_vm._s(tab.name))]);
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
          _vm._v(' '),
          _c(
            'div',
            { staticClass: 'demo-section' },
            [
              _c('header', { staticClass: 'header' }, [_vm._v('Unscroll Tabs')]),
              _vm._v(' '),
              _c('lake-tabs', {
                attrs: { tabs: _vm.tabItems.slice(0, 4), scroll: false, 'show-more': false },
                scopedSlots: _vm._u([
                  {
                    key: 'tab-item',
                    fn: function(ref) {
                      var tab = ref.tab;
                      return _c('span', {}, [_vm._v(_vm._s(tab.name))]);
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
          _vm._v(' '),
          _c(
            'div',
            { staticClass: 'demo-section' },
            [
              _c('header', { staticClass: 'header' }, [_vm._v('large Tabs')]),
              _vm._v(' '),
              _c('lake-tabs', {
                attrs: { tabs: _vm.tabItems.slice(0, 4), scroll: false, 'show-more': false, size: 'large' },
                scopedSlots: _vm._u([
                  {
                    key: 'tab-item',
                    fn: function(ref) {
                      var tab = ref.tab;
                      return _c('span', {}, [_vm._v(_vm._s(tab.name))]);
                    },
                  },
                ]),
              }),
            ],
            1,
          ),
        ]);
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./demo/pages/tabs.vue?vue&type=template&id=1d3a11ae&

      // EXTERNAL MODULE: ./demo/components/page-view.vue + 4 modules
      var page_view = __webpack_require__(119);

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./demo/pages/tabs.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var tabsvue_type_script_lang_js_ = {
        name: 'page-tabs',
        components: {
          pageView: page_view['a' /* default */],
        },

        data() {
          return {
            tabItems: [
              {
                name: 'Tab 1',
              },
              {
                name: 'Tab 2',
              },
              {
                name: 'Tab 3',
              },
              {
                name: 'Tab 4',
              },
              {
                name: 'Tab 5',
              },
              {
                name: 'Tab 6',
              },
              {
                name: 'Tab 7',
              },
              {
                name: 'Tab 8',
              },
              {
                name: 'Tab 9',
              },
              {
                name: 'Tab 10',
              },
              {
                name: 'Tab 11',
              },
            ],
          };
        },
      };
      // CONCATENATED MODULE: ./demo/pages/tabs.vue?vue&type=script&lang=js&
      /* harmony default export */ var pages_tabsvue_type_script_lang_js_ = tabsvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      var componentNormalizer = __webpack_require__(0);

      // CONCATENATED MODULE: ./demo/pages/tabs.vue

      /* normalize component */

      var component = Object(componentNormalizer['a' /* default */])(
        pages_tabsvue_type_script_lang_js_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null,
      );

      /* harmony default export */ var tabs = (__webpack_exports__['default'] = component.exports);

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
//# sourceMappingURL=tabs.f65d856a.js.map
