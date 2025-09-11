pipeline {
    agent any

     tools {
        nodejs "NODE24"   // the name you configured in Jenkins
    }

    // stages {
    //     stage('Checkout') {
    //         steps {
    //             git branch: 'main', url: 'https://github.com/Hasebul21/CI-CD'
    //         }
    //     }

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
                // sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
