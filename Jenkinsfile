#!/usr/bin/env groovy

// Load the shared library from GitHub
library identifier: "shared-lib@main", retriever: modernSCM(
    [
        $class       : 'GitSCMSource',
        remote       : 'https://github.com/UchihaIthachi/jenkins-shared-library',
        credentialsId: 'GithubCredentials',
    ]
)

def gv

pipeline {
    agent any

    stages {
        stage('Test SSH Connection') {
            steps {
                script {
                    // Use SSH credentials configured in Jenkins (replace 'ec2-user-credentials' with the ID of your Jenkins credentials)
                    sshagent(['aws-ec2-ssh']) {
                        sh '''
                            ssh -o StrictHostKeyChecking=no ec2-user@13.210.32.41 "echo Connected to EC2"
                        '''
                    }
                }
            }
        }
    }
}
