pipeline {
    agent any

    tools {
        nodejs "NODE24"   
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run test'
            }
        }
        stage('Stage') {
            steps {
                echo 'Linting...'
                sh 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                echo ' Hasebul Deploying...'
            }
        }
    }
}
