pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'  // Assuming NodeJS tool is configured in Jenkins
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run cypress:edge'
            }
        }

        stage('Publish Results') {
    steps {
        publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'cypress/results/cypress-mochawesome-reporter',
            reportFiles: 'index.html',
            reportName: 'Cypress Mochawesome Report'
        ])
    }
        }
    }
}