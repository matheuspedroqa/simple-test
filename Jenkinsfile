pipeline {
    agent any

    tools {
        nodejs "node"   // Node.js configurado no Jenkins
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
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    } // Fim do stages

    post { // <-- deve ficar aqui, fora de stages
        always {
            // Publica relatório HTML mesmo que o build falhe
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }

        success {
            emailext (
                subject: "✅ Jenkins Build Successful: ${currentBuild.fullDisplayName}",
                body: "O build foi concluído com sucesso.\nConfira o relatório: ${BUILD_URL}",
                to: "matheusps70@hotmail.com"
            )
        }

        failure {
            emailext (
                subject: "❌ Jenkins Build Failed: ${currentBuild.fullDisplayName}",
                body: "O build falhou.\nConfira os detalhes: ${BUILD_URL}",
                to: "matheusps70@hotmail.com"
            )
        }
    }
}