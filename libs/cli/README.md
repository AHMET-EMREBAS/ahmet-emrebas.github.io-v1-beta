# Nx plugin

# Resource generator

Published by Ahmet Emrebas.

## Installing

Run `yarn add -D aemrebas-cli`

Or

Run `npm install -D aemrebas-cli`

## Running

Before running any command, you MUST create two libraries, one is models, other is rest.

`nx g @nrwl/nest:lib rest`

`nx g @nrwl/nest:lib models`

Then, you can start generating resource modules.

`nx g cli:resource my-resource-name`
