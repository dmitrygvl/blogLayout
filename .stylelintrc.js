module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier", "stylelint-scss"],
  rules: {
    "prettier/prettier": true,
    "no-invalid-position-at-import-rule": null,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
