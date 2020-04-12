pipeline {
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }

    tools {nodejs "nodejs"}

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
