import { sxzz } from '@sxzz/eslint-config'

export default sxzz().append({
  // @keep-sorted
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'unicorn/no-array-sort': 'off',
    'unicorn/prefer-string-replace-all': 'off',
  },
})
