pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cypress-tests .'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'docker run --rm -v %cd%\\results:C:\\app\\results cypress-tests'
            }
        }

        stage('Publish Results') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'results/cypress-mochawesome-reporter',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Mochawesome Report'
                ])
            }
        }
    }

    post {
        always {
            bat 'docker system prune -f'
        }
    }
}