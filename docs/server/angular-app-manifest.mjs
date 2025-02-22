
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WebPageForAutomation',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/WebPageForAutomation/login",
    "route": "/WebPageForAutomation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7I5WLVOP.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/WebPageForAutomation/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XWFSGHFZ.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/WebPageForAutomation/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "redirectTo": "/WebPageForAutomation/dashboard/double-click",
    "route": "/WebPageForAutomation/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/single-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/double-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/right-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/WebPageForAutomation/dashboard/drag-drop"
  },
  {
    "renderMode": 2,
    "redirectTo": "/WebPageForAutomation/login",
    "route": "/WebPageForAutomation/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 574, hash: '82d8f4e632c325cbe5537c96f473d7befb206c4232b645c940d9867d7f88477f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: 'c0b18f7ac5e64927afa4d7bff4cd1b966ef9e5edf7e5c3247c311a54359cd5a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/single-click/index.html': {size: 6211, hash: '2ac36096a3399f4c47df9b380cd63568325716b0f664c2aca88d372c355b7103', text: () => import('./assets-chunks/dashboard_single-click_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 8651, hash: '50002799924a362fa132a2b022472e67b14daf443b6e2f9fd5e79a25d1e6c782', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'dashboard/right-click/index.html': {size: 6211, hash: '2ac36096a3399f4c47df9b380cd63568325716b0f664c2aca88d372c355b7103', text: () => import('./assets-chunks/dashboard_right-click_index_html.mjs').then(m => m.default)},
    'dashboard/drag-drop/index.html': {size: 6213, hash: '8bd41833bc7024c2af10a640284a752ccab320d6222e284316b0640f16e25595', text: () => import('./assets-chunks/dashboard_drag-drop_index_html.mjs').then(m => m.default)},
    'dashboard/double-click/index.html': {size: 6211, hash: '2ac36096a3399f4c47df9b380cd63568325716b0f664c2aca88d372c355b7103', text: () => import('./assets-chunks/dashboard_double-click_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6263, hash: 'd9c1939abd550960eb02ba2c3a799e198be0876b3954a409cadb4db83c4815df', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
