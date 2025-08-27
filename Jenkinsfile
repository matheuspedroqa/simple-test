pipeline {
    agent any

    tools {
        nodejs "node"   // precisa do Node.js configurado no Jenkins (Manage Jenkins → Global Tool Configuration)
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/matheuspedroqa/simple-test.git', branch: 'main'
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                npm install
                npx playwright install --with-deps
                '''
            }
        }

        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'])
            }
        }
    }
}