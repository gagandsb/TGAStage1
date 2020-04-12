pipeline {
    agent {
        docker {
            image 'alpine:3.10'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Prepare') {
           steps {
            sh "npm install -g yarn"
           }
        }
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
    }
}
