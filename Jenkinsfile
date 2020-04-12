pipeline {
    agent {
        docker {
            image '12.16.2-alpine3.10'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
    }
}
