pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'dev',
                    url: 'https://github.com/joannedada/Node.js-Real-Time-Chat-App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy App') {
            steps {
                // Copy files to the deployment directory
                sh '''
                    mkdir -p /var/www/Node.js-Real-Time-Chat-App
                    cp -R . /var/www/Node.js-Real-Time-Chat-App
                    cd /var/www/Node.js-Real-Time-Chat-App
                '''

                // Restart the app 
                sh '''
                    pm2 stop Real-Time-chat-App || true
                    pm2 start /var/www/Node.js-Real-Time-Chat-App/app.js --name "Real-Time-Chat-App"
                    pm2 save
                '''
            }
        }
    }
}
