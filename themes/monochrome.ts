import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const monochrome: CustomThemeConfig = {
  name: 'monochrome',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '9999px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #525252
    '--color-primary-50': '229 229 229', // #e5e5e5
    '--color-primary-100': '220 220 220', // #dcdcdc
    '--color-primary-200': '212 212 212', // #d4d4d4
    '--color-primary-300': '186 186 186', // #bababa
    '--color-primary-400': '134 134 134', // #868686
    '--color-primary-500': '82 82 82', // #525252
    '--color-primary-600': '74 74 74', // #4a4a4a
    '--color-primary-700': '62 62 62', // #3e3e3e
    '--color-primary-800': '49 49 49', // #313131
    '--color-primary-900': '40 40 40', // #282828
    // secondary | #627a74
    '--color-secondary-50': '231 235 234', // #e7ebea
    '--color-secondary-100': '224 228 227', // #e0e4e3
    '--color-secondary-200': '216 222 220', // #d8dedc
    '--color-secondary-300': '192 202 199', // #c0cac7
    '--color-secondary-400': '145 162 158', // #91a29e
    '--color-secondary-500': '98 122 116', // #627a74
    '--color-secondary-600': '88 110 104', // #586e68
    '--color-secondary-700': '74 92 87', // #4a5c57
    '--color-secondary-800': '59 73 70', // #3b4946
    '--color-secondary-900': '48 60 57', // #303c39
    // tertiary | #369b9b
    '--color-tertiary-50': '225 240 240', // #e1f0f0
    '--color-tertiary-100': '215 235 235', // #d7ebeb
    '--color-tertiary-200': '205 230 230', // #cde6e6
    '--color-tertiary-300': '175 215 215', // #afd7d7
    '--color-tertiary-400': '114 185 185', // #72b9b9
    '--color-tertiary-500': '54 155 155', // #369b9b
    '--color-tertiary-600': '49 140 140', // #318c8c
    '--color-tertiary-700': '41 116 116', // #297474
    '--color-tertiary-800': '32 93 93', // #205d5d
    '--color-tertiary-900': '26 76 76', // #1a4c4c
    // success | #84cc16
    '--color-success-50': '237 247 220', // #edf7dc
    '--color-success-100': '230 245 208', // #e6f5d0
    '--color-success-200': '224 242 197', // #e0f2c5
    '--color-success-300': '206 235 162', // #ceeba2
    '--color-success-400': '169 219 92', // #a9db5c
    '--color-success-500': '132 204 22', // #84cc16
    '--color-success-600': '119 184 20', // #77b814
    '--color-success-700': '99 153 17', // #639911
    '--color-success-800': '79 122 13', // #4f7a0d
    '--color-success-900': '65 100 11', // #41640b
    // warning | #EAB308
    '--color-warning-50': '252 244 218', // #fcf4da
    '--color-warning-100': '251 240 206', // #fbf0ce
    '--color-warning-200': '250 236 193', // #faecc1
    '--color-warning-300': '247 225 156', // #f7e19c
    '--color-warning-400': '240 202 82', // #f0ca52
    '--color-warning-500': '234 179 8', // #EAB308
    '--color-warning-600': '211 161 7', // #d3a107
    '--color-warning-700': '176 134 6', // #b08606
    '--color-warning-800': '140 107 5', // #8c6b05
    '--color-warning-900': '115 88 4', // #735804
    // error | #ff0000
    '--color-error-50': '255 217 217', // #ffd9d9
    '--color-error-100': '255 204 204', // #ffcccc
    '--color-error-200': '255 191 191', // #ffbfbf
    '--color-error-300': '255 153 153', // #ff9999
    '--color-error-400': '255 77 77', // #ff4d4d
    '--color-error-500': '255 0 0', // #ff0000
    '--color-error-600': '230 0 0', // #e60000
    '--color-error-700': '191 0 0', // #bf0000
    '--color-error-800': '153 0 0', // #990000
    '--color-error-900': '125 0 0', // #7d0000
    // surface | #26211d
    '--color-surface-50': '222 222 221', // #dededd
    '--color-surface-100': '212 211 210', // #d4d3d2
    '--color-surface-200': '201 200 199', // #c9c8c7
    '--color-surface-300': '168 166 165', // #a8a6a5
    '--color-surface-400': '103 100 97', // #676461
    '--color-surface-500': '38 33 29', // #26211d
    '--color-surface-600': '34 30 26', // #221e1a
    '--color-surface-700': '29 25 22', // #1d1916
    '--color-surface-800': '23 20 17', // #171411
    '--color-surface-900': '19 16 14', // #13100e
  },
};
