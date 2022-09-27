module.exports = {
    description: 'new page',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
    },
    {
        type: 'input',
        name: 'route',
        message: 'What is your page\'s route?'
    },
    {
        type: 'confirm',
        name: 'crud',
        message: 'Do you want to create CRUD actions?'
    }],
    actions: function(data) {
        var actions = [];

        actions.push({
            type: 'add',
            path: '../src/pages/{{pascalCase name}}/index.js',
            templateFile: 'page/templates/Page.js.hbs'
        });

        actions.push({
            type: 'add',
            path: '../src/pages/{{pascalCase name}}/style.js',
            templateFile: 'page/templates/styled.js.hbs'
        });

        // update route
        actions.push({
            type: 'modify',
            path: '../src/Routes.js',
            pattern: /(\/\/ IMPORT_PAGE_HERE)/g,
            template: 'import {{pascalCase name}}Page from \'./pages/{{pascalCase name}}\';\n$1',
        });
        actions.push({
            type: 'modify',
            path: '../src/Routes.js',
            pattern: /(\<\/Routes\>)/g,
            template: '<Route exact path=\'/{{route}}\' element={< {{pascalCase name}}Page />}></Route>\n$1',
        });

        // update navigation
        actions.push({
            type: 'modify',
            path: '../src/Navigation.js',
            pattern: /(\<\/ul\>)/g,
            template: '<li><Link to="/{{route}}">{{titleCase name}}</Link></li>\n$1',
        });

        if(data.crud) {
            actions.push({
                type: 'add',
                path: '../src/redux/reducers/{{camelCase name}}Reducer.js',
                template: 'reducer template',
            });
            actions.push({
                type: 'add',
                path: '../src/redux/actions/{{camelCase name}}Actions.js',
                template: 'action template',
            });
        }

        return actions;
    }
};