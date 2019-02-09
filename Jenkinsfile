pipeline {
  agent any

  stages {
      stage('Install dependencies') {
          steps {
              sh 'cd product-page-react ; sh npm i'
          }
      }
      stage('Build') {
          steps {
              sh 'echo "Deploy..."; npm run build'
          }
      }
  }
}