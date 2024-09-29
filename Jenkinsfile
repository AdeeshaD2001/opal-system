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
                    echo 'Attempting to connect to SSH...'

                    sshagent(['aws-ec2-ssh']) {
                        sh '''
                            echo "Trying SSH connection..."
                        '''
                        // Debug SSH agent environment variables
                        sh 'env | grep SSH'

                        // Try a simple SSH connection command
                        sh '''
                            echo "Trying SSH connection..."
                            ssh -o StrictHostKeyChecking=no ubuntu@13.210.32.41 "echo Connected to EC2"
                        '''
                    }
                }
            }
        }
    }
}

