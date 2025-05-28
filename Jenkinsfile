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
                // Copy files to the deployment directory (replace `/var/www/chat-app` with your target path)
                sh '''
                    sudo rm -rf /var/www/Node.js-Real-Time-Chat-App
                    sudo mkdir -p /var/www/Node.js-Real-Time-Chat-App
                    sudo cp -R . /var/www/Node.js-Real-Time-Chat-App
                    cd /var/www/Node.js-Real-Time-Chat-App
                '''

                // Restart the app via PM2 (no SSH needed!)
                sh '''
                    pm2 stop Real-Time-chat-App || true
                    pm2 start /var/www/Node.js-Real-Time-Chat-App/app.js --name "Real-Time-chat-App"
                    pm2 save
                '''
            }
        }
    }
}