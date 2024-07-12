# OneCoin

Aplicativo feito em React-Native para visualizar a cotação de diversas moedas ao redor do mundo.

## Para baixar as dependências

    npm install

## Para rodar o projeto

    npx expo start

## Para rodar o projeto (WSL)

    npx expo start --tunnel

## Para corrigir dependências desatualizadas

    npx expo install --fix

## Para criar uma versão em aab (Play Store)

Instalar o `eas-cli`:

    npm install -g eas-cli

Criar a versão em `aab`:

    eas build --platform android

## Para criar uma versão em apk (nativo)

Modificar o arquivo `eas.json`:

    {
    "build": {
        "preview": {
        "android": {
            "buildType": "apk"
        }
        },
        "preview2": {
        "android": {
            "gradleCommand": ":app:assembleRelease"
        }
        },
        "preview3": {
        "developmentClient": true
        },
        "production": {}
    }
    }

Rodar o comando:

    eas build -p android --profile preview

## Para criar uma versão da Play Store

Modificar o arquivo `eas.json`:

    {
    "cli": {
    "appVersionSource": "remote"
    },
    "build": {
    "development": {
        "developmentClient": true,
        "distribution": "internal"
    },
    "preview": {
        "distribution": "internal"
    },
    "production": {
        "autoIncrement": true
    }
    },
    "submit": {
    "production": {}
    }
    }

Rodar o comando: 

    eas build --platform android

## Para reiniciar o projeto

    Bastar apertar a tecla 'r' no terminal

## API utilizada para consumir os dados

    https://docs.awesomeapi.com.br/api-de-moedas

## Links

Expo Docs:

    https://docs.expo.dev/build/setup/