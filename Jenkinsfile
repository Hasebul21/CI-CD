pipeline {
    agent any

    tools {
        nodejs "NODE24"   // the NodeJS installation name from Global Tool Configuration
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
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Hasebul Deploying...'
            }
        }
    }
}
