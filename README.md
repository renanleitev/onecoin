# OneCoin

Aplicativo para testes, feito em React-Native, para visualizar a cotação do Dolar (USD).

## Para baixar as dependências

    npm install

## Para rodar o projeto

    npx expo start

## Para rodar o projeto (WSL)

    npx expo start --tunnel

## Para criar uma versão em aab (Play Store)

    eas build --platform android

## Para criar uma versão em apk (nativo)

Modificar o arquivo eas.json:

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

Modificar o arquivo eas.json:

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

## Para adicionar propaganda (Google Admob)

Modificar o arquivo app.json (fora de expo), com o ID do app criado no Google Admob:

    "react-native-google-mobile-ads": {
        "android_app_id": "ca-app-pub-XXXXXX~XXXXXXXXX"
    }

## Para reiniciar o projeto

    Bastar apertar a tecla 'r' no terminal

## API utilizada para consumir os dados

    https://docs.awesomeapi.com.br/api-de-moedas

## Links

Expo Docs:

    https://docs.expo.dev/build/setup/