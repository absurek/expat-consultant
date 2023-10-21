import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const colorfulModernTheme: CustomThemeConfig = {
  name: 'colorful-modern',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    '--theme-font-family-heading': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '8px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #EF6024
    '--color-primary-50': '253 231 222', // #fde7de
    '--color-primary-100': '252 223 211', // #fcdfd3
    '--color-primary-200': '251 215 200', // #fbd7c8
    '--color-primary-300': '249 191 167', // #f9bfa7
    '--color-primary-400': '244 144 102', // #f49066
    '--color-primary-500': '239 96 36', // #EF6024
    '--color-primary-600': '215 86 32', // #d75620
    '--color-primary-700': '179 72 27', // #b3481b
    '--color-primary-800': '143 58 22', // #8f3a16
    '--color-primary-900': '117 47 18', // #752f12
    // secondary | #FA7F08
    '--color-secondary-50': '254 236 218', // #feecda
    '--color-secondary-100': '254 229 206', // #fee5ce
    '--color-secondary-200': '254 223 193', // #fedfc1
    '--color-secondary-300': '253 204 156', // #fdcc9c
    '--color-secondary-400': '252 165 82', // #fca552
    '--color-secondary-500': '250 127 8', // #FA7F08
    '--color-secondary-600': '225 114 7', // #e17207
    '--color-secondary-700': '188 95 6', // #bc5f06
    '--color-secondary-800': '150 76 5', // #964c05
    '--color-secondary-900': '123 62 4', // #7b3e04
    // tertiary | #90A19D
    '--color-tertiary-50': '238 241 240', // #eef1f0
    '--color-tertiary-100': '233 236 235', // #e9eceb
    '--color-tertiary-200': '227 232 231', // #e3e8e7
    '--color-tertiary-300': '211 217 216', // #d3d9d8
    '--color-tertiary-400': '177 189 186', // #b1bdba
    '--color-tertiary-500': '144 161 157', // #90A19D
    '--color-tertiary-600': '130 145 141', // #82918d
    '--color-tertiary-700': '108 121 118', // #6c7976
    '--color-tertiary-800': '86 97 94', // #56615e
    '--color-tertiary-900': '71 79 77', // #474f4d
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
    // error | #df0f33
    '--color-error-50': '250 219 224', // #fadbe0
    '--color-error-100': '249 207 214', // #f9cfd6
    '--color-error-200': '247 195 204', // #f7c3cc
    '--color-error-300': '242 159 173', // #f29fad
    '--color-error-400': '233 87 112', // #e95770
    '--color-error-500': '223 15 51', // #df0f33
    '--color-error-600': '201 14 46', // #c90e2e
    '--color-error-700': '167 11 38', // #a70b26
    '--color-error-800': '134 9 31', // #86091f
    '--color-error-900': '109 7 25', // #6d0719
    // surface | #3a3a3a
    '--color-surface-50': '225 225 225', // #e1e1e1
    '--color-surface-100': '216 216 216', // #d8d8d8
    '--color-surface-200': '206 206 206', // #cecece
    '--color-surface-300': '176 176 176', // #b0b0b0
    '--color-surface-400': '117 117 117', // #757575
    '--color-surface-500': '58 58 58', // #3a3a3a
    '--color-surface-600': '52 52 52', // #343434
    '--color-surface-700': '44 44 44', // #2c2c2c
    '--color-surface-800': '35 35 35', // #232323
    '--color-surface-900': '28 28 28', // #1c1c1c
  },
};
