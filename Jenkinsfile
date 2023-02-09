pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/FabioSanMartin/TESTE-MOBILE-EBAC-SHOP.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Rodar Testes') {
            steps {
                bat 'npm test'
            }
        }
        
    }
}