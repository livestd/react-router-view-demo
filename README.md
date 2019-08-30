npx create-react-app app-name --typescript

npm install --save typescript @types/node @types/react @types/react-dom

# eslint

npm install --save-dev @typescript-eslint/eslint-plugin eslint-config-react-app eslint-config-typescript eslint-plugin-react

npm install --save-dev prettier

npm install --save-dev eslint-config-prettier

`"eslintConfig": {
    "extends": [
      "react-app",
      "prettier",
      "prettier/@typescript-eslint",
      "typescript/react",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "rules": {
      "@typescript-eslint/no-angle-bracket-type-assertion": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      "no-debugger": "off"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"]
},`

# mobx & routing

npm install --save mobx mobx-react react-router @types/react-router

npm install --save mobx-react-router