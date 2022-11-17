### How to generate generator?

https://nx.dev/recipe/local-generators

```
yarn add  @nrwl/nx-plugin@13

nx g @nrwl/nx-plugin:plugin my-plugin

nx generate @nrwl/nx-plugin:generator my-generator --project=cli


```

### How to story book?

```
    nx g @nrwl/storybook:configuration project-name --tsConfiguration=true
    nx run project-name:storybook

    nx g @nrwl/angular:stories feature-ui

```

### How to I18n extract ?

```

nx run appname:extract-i18n

```

### How to do x-prompt

```

 "x-prompt": {
        "messsage": "Select the application to publish : ",
        "type": "list",
        "multiselect": true,
        "items": [
          {
            "value": "ae-databridge",
            "label": "Databridge Application"
          },
          {
            "value": "ae-auth",
            "label": "Authentication Service"
          }
        ]
      }


```
