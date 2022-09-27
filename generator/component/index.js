module.exports = {
    description: 'new component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
    },
    {
      type: "input",
      name: "element",
      message: "HTML element (div is default)",
      default: "div",
    }],
    actions: [{
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.js',
        templateFile: 'component/templates/Component.js.hbs'
    },
    {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/style.js',
        templateFile: 'component/templates/styled.js.hbs'
    },
    {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'component/templates/stories.js.hbs'
    },
    {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: 'component/templates/test.js.hbs'
    }]
};