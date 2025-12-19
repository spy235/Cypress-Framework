pipeline {
  agent any

  tools {
    nodejs 'Node_18'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run --browser chrome'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
      publishHTML([
        reportDir: 'cypress/reports',
        reportFiles: 'index.html',
        reportName: 'Cypress Report'
      ])
    }
  }
}
