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
    environment {
        IMAGE_NAME = "opal-system"
    }
    stages {
        stage("Build Docker Image and Push to Docker Hub") {
            steps {
                script {
                    dockerHubLogin()
                }
            }
        }

    }
}
