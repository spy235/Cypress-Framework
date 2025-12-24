pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat 'npm run cypress:edge'
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
